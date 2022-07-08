const { google } = require("googleapis");

module.exports = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "../credentials/credentials.json",
    scopes: "https://www.googleapis.com/auth/documents",
  });

  return google.docs({ version: "v1", auth });
};
