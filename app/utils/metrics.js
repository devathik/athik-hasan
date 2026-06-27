import fs from "fs";
import path from "path";
import { CAMPAIGNS } from "../resourse/config/campaigns";

const METRICS_FILE = path.join(process.cwd(), "metrics.json");

export function getMetrics() {
  try {
    const defaultForms = {};
    CAMPAIGNS.forEach((c) => {
      defaultForms[c.slug] = {
        title: c.title,
        success: 0,
        failure: 0
      };
    });

    if (!fs.existsSync(METRICS_FILE)) {
      return { 
        global: { success: 0, failure: 0 },
        forms: defaultForms,
        submissions: [] 
      };
    }
    const data = fs.readFileSync(METRICS_FILE, "utf8");
    const parsed = JSON.parse(data);
    
    // Auto-migrate old structure if it exists
    if (!parsed.forms) {
      const oldSuccess = parsed.success || 0;
      const oldFailure = parsed.failure || 0;
      const oldSubs = parsed.submissions || [];
      
      const migrated = {
        global: { success: oldSuccess, failure: oldFailure },
        forms: {
          ...defaultForms,
          "free-n8n-templates": {
            title: "n8n Templates",
            success: oldSuccess,
            failure: oldFailure
          }
        },
        submissions: oldSubs.map(s => ({
          ...s,
          formId: s.formId || "free-n8n-templates",
          formTitle: s.formTitle || "n8n Templates"
        }))
      };
      
      fs.writeFileSync(METRICS_FILE, JSON.stringify(migrated, null, 2), "utf8");
      return migrated;
    }

    // Ensure default forms exist in parsed forms dictionary
    parsed.forms = { ...defaultForms, ...parsed.forms };
    
    return parsed;
  } catch (error) {
    console.error("Error reading metrics:", error);
    return { global: { success: 0, failure: 0 }, forms: {}, submissions: [] };
  }
}

export function incrementSuccess(email, tag, formId = "free-n8n-templates", formTitle = "n8n Templates") {
  try {
    const metrics = getMetrics();
    
    // Increment global stats
    metrics.global = metrics.global || { success: 0, failure: 0 };
    metrics.global.success = (metrics.global.success || 0) + 1;
    
    // Increment form-specific stats
    metrics.forms = metrics.forms || {};
    metrics.forms[formId] = metrics.forms[formId] || { title: formTitle, success: 0, failure: 0 };
    metrics.forms[formId].success = (metrics.forms[formId].success || 0) + 1;
    metrics.forms[formId].title = formTitle;
    
    // Insert into submission log
    metrics.submissions = metrics.submissions || [];
    metrics.submissions.unshift({
      formId,
      formTitle,
      email,
      tag,
      date: new Date().toLocaleString(),
      status: "success",
    });
    
    // Keep last 100 submissions
    if (metrics.submissions.length > 100) {
      metrics.submissions = metrics.submissions.slice(0, 100);
    }
    
    fs.writeFileSync(METRICS_FILE, JSON.stringify(metrics, null, 2), "utf8");
    return metrics;
  } catch (error) {
    console.error("Error incrementing success:", error);
  }
}

export function incrementFailure(email, tag, errorMessage, formId = "free-n8n-templates", formTitle = "n8n Templates") {
  try {
    const metrics = getMetrics();
    
    // Increment global stats
    metrics.global = metrics.global || { success: 0, failure: 0 };
    metrics.global.failure = (metrics.global.failure || 0) + 1;
    
    // Increment form-specific stats
    metrics.forms = metrics.forms || {};
    metrics.forms[formId] = metrics.forms[formId] || { title: formTitle, success: 0, failure: 0 };
    metrics.forms[formId].failure = (metrics.forms[formId].failure || 0) + 1;
    metrics.forms[formId].title = formTitle;
    
    // Insert into submission log
    metrics.submissions = metrics.submissions || [];
    metrics.submissions.unshift({
      formId,
      formTitle,
      email: email || "unknown",
      tag: tag || "unknown",
      date: new Date().toLocaleString(),
      status: "failure",
      error: errorMessage || "Unknown error",
    });
    
    if (metrics.submissions.length > 100) {
      metrics.submissions = metrics.submissions.slice(0, 100);
    }
    
    fs.writeFileSync(METRICS_FILE, JSON.stringify(metrics, null, 2), "utf8");
    return metrics;
  } catch (error) {
    console.error("Error incrementing failure:", error);
  }
}
