const { google } = require("googleapis");

class GoogleDrive {
  constructor() {
    this.service = undefined;
  }
  async auth() {
    const auth = new google.auth.GoogleAuth({
      keyFile: "../credentials/credentials.json",
      scopes: "'https://www.googleapis.com/auth/drive'",
    });

    this.service = google.drive({ version: "v1", auth });
  }

  create(folderid, data) {}

  edit(fileId) {}

  delete(fileId) {}
}
