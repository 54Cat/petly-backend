const cloudinary = require("cloudinary").v2;
const fs = require('fs')

cloudinary.config({
  cloud_name: "dukz65bwt",
  api_key: "545558473877544",
  api_secret: "X8mRDhNOte20Qzl8ARzDHNX1ArM"
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