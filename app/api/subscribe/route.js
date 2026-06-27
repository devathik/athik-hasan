import { GOOGLE_SHEETS_CONFIG } from "@/app/resourse/free-n8n-templates/config/sheetsConfig";
import { google } from "googleapis";
import { incrementSuccess, incrementFailure } from "@/app/utils/metrics";

export async function POST(req) {
  let email = "";
  let tag = "";
  let date = "";
  let formId = "free-n8n-templates";
  let formTitle = "n8n Templates";
  
  try {
    const body = await req.json();
    email = body.email || "";
    tag = body.tag || "";
    date = body.date || new Date().toLocaleString();
    formId = body.formId || "free-n8n-templates";
    formTitle = body.formTitle || "n8n Templates";
  } catch (parseError) {
    incrementFailure("unknown", "unknown", "JSON parsing failed", "free-n8n-templates", "n8n Templates");
    return Response.json(
      { error: "Invalid JSON payload" },
      { status: 400 }
    );
  }

  try {
    if (!email) {
      incrementFailure("", tag, "Email is required", formId, formTitle);
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const { clientEmail, privateKey, spreadsheetId } = GOOGLE_SHEETS_CONFIG;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      const errMsg = "Missing Google Sheets credentials in environment variables.";
      console.error(errMsg);
      incrementFailure(email, tag, errMsg, formId, formTitle);
      return Response.json(
        { error: "Sheets integration is not configured on the server." },
        { status: 500 }
      );
    }

    // 1. Initialize Google Auth client
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // 2. Initialize Sheets API client
    const sheets = google.sheets({ version: "v4", auth });

    // 3. Append row (Column order: 1. Emails, 2. Tag, 3. Date)
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, tag, date]],
      },
    });

    // Save metrics
    incrementSuccess(email, tag, formId, formTitle);

    return Response.json({ success: true, updatedRange: response.data.updates.updatedRange });
  } catch (error) {
    console.error("Google Sheets REST API error:", error);
    incrementFailure(email, tag, error.message, formId, formTitle);
    return Response.json(
      { error: "Failed to save email to Google Sheets.", details: error.message },
      { status: 500 }
    );
  }
}
