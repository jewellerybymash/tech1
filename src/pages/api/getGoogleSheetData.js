import { google } from 'googleapis';

const getGoogleSheetData = async (sheetName, range) => {
  try {
    const auth = new google.auth.GoogleAuth(
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets.readonly']
    );

    const sheets = google.sheets({ version: 'v4', auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const finalRange = `${sheetName}!${range}`; // Combine sheet name and range

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: finalRange,
    });

    return response.data.values;
  } catch (error) {
    console.error('Error fetching data from Google Sheet:', error);
    return null;
  }
};

export default async function handler(req, res) {
  const { sheetName, range } = req.query;
  const data = await getGoogleSheetData(sheetName, range);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(500).json({ error: 'Failed to fetch data from Google Sheet' });
  }
}
