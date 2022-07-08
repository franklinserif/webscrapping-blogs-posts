const { google } = require("googleapis");

async function createFile({ folderId, title, data }) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "../credentials/credentials.json",
    scopes: "'https://www.googleapis.com/auth/drive'",
  });

  const service = google.drive({ version: "v3", auth });

  // TODO(developer): set folder Id
  // folderId = '1lWo8HghUBd-3mN4s98ArNFMdqmhqCXH7';
  const fileMetadata = {
    title,
    parents: [{ id: folderId }],
  };
  const media = {
    mimeType: "application/vnd.google-apps.document",
    body: data,
  };

  try {
    const file = await service.files.create({
      resource: fileMetadata,
      media: media,
      fields: "id",
    });
    console.log("File Id:", file.data.id);
  } catch (err) {
    // TODO(developer) - Handle error
    throw err;
  }
}

module.exports = { createFile };
