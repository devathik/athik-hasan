export const GOOGLE_SHEETS_CONFIG = {
  // Client email of the service account (e.g. name@project.iam.gserviceaccount.com)
  clientEmail: process.env.GOOGLE_SHEETS_CLIENT_EMAIL || "",
  
  // Private key of the service account (handles escaped newlines and wrapping quotes safely)
  privateKey: process.env.GOOGLE_SHEETS_PRIVATE_KEY 
    ? process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/^["']|["']$/g, '').replace(/\\n/g, '\n') 
    : "",
    
  // Google Spreadsheet ID (from the spreadsheet URL: d/SPREADSHEET_ID/edit)
  spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "",
  
  // Default fallback tag if the field is empty
  defaultTag: "n8n-templates",
};
