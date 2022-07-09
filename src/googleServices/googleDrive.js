const { google } = require("googleapis");
require("dotenv").config();

/**
 * Google Drive authentication
 * @returns {Object}
 */
async function googleDriveAuth() {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.CREDENTIAL_FOLDER,
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/drive.appdata",
    ],
  });

  return google.drive({ version: "v3", auth });
}

/**
 * Create a document with content in a specifict folder
 * in google drive
 * @param {string} parentsFolderId parents folder id
 * @param {string} name name of the document
 * @param {string} body content of the file
 */
async function createFile(parentsFolderId, name, body) {
  // create an authenticated drive service
  const service = await googleDriveAuth();

  try {
    const file = await service.files.create({
      resource: {
        name,
        mimeType: "application/vnd.google-apps.document",
        parents: [parentsFolderId],
      },
      media: {
        mimeType: "text/html",
        body,
      },
    });

    console.log(`file ${file.data.id} created`);
  } catch (error) {
    console.log("error " + error);
  }
}

module.exports = { createFile };
