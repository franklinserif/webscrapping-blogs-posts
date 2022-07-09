const googleDrive = require("./googleServices/googleDrive");

require("dotenv").config();

googleDrive.createFile({
  folderId: process.env.FOLDER_ID,
  title: "test3",
  data: "<h1>Esto es solo un ejemplo</h1>",
});
