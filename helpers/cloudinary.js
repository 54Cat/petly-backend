const cloudinary = require("cloudinary").v2;
const fs = require('fs')

const { CLOUD_NAME, API_KEY, API_SECRET } = process.env


cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
});


async function uploadToCloudinary(locaFilePath) {
  const mainFolderName = "main"
  const filePathOnCloudinary = mainFolderName + "/" + 'picture'
  return cloudinary.uploader.upload(locaFilePath, {public_id: filePathOnCloudinary})
      .then((result) => {
        fs.unlinkSync(locaFilePath)
    
        return {
         message: "Success",
        url: result.url,
         };
  }).catch((error) => {
    fs.unlinkSync(locaFilePath)
      console.log(error)
    return {message: "Fail",};
  });
}

module.exports = uploadToCloudinary;