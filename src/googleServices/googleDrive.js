const { google } = require("googleapis");
require("dotenv").config();

async function createFile({ folderId, title, data }) {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.CREDENTIAL_FOLDER,
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/drive.appdata",
    ],
  });

  const service = google.drive({ version: "v3", auth });

  // TODO(developer): set folder Id
  // folderId = '1lWo8HghUBd-3mN4s98ArNFMdqmhqCXH7';
  try {
    const file = await service.files.create({
      resource: {
        name: title,
        mimeType: "application/vnd.google-apps.document",
        parents: [folderId],
      },
      media: {
        mimeType: "text/html",
        body: data,
      },
    });

    console.log(file.data.id);
  } catch (error) {
    console.log("error " + error);
  }
}

module.exports = { createFile };
