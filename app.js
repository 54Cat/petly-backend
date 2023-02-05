const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const authRouter = require('./routes/api/auth');
const usersRouter = require('./routes/api/users');
const newsRouter = require("./routes/api/news");
const noticesRouter = require("./routes/api/notices");
const friendsRouter = require("./routes/api/friends");

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


// const multer  = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
// })

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true)
//     } else {
//         cb(new Error('Unsupported file format'))
//     }
// }

// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
// })

// const cloudinary = require("cloudinary").v2;
// // const bodyParser = require('body-parser');
// const fs = require('fs')
          
// // body parser configuration
app.use(express.urlencoded({ extended: true }));


// app.use(express.static('public'));
// app.use('/uploads', express.static('uploads'));

// // cloudinary configuration
// cloudinary.config({
//   cloud_name: "dukz65bwt",
//   api_key: "545558473877544",
//   api_secret: "X8mRDhNOte20Qzl8ARzDHNX1ArM"
// });

// cloudinary.config({
//   cloud_name: "dukz65bwt",
//   api_key: "545558473877544",
//   api_secret: "X8mRDhNOte20Qzl8ARzDHNX1ArM"
// });

// async function uploadToCloudinary(locaFilePath) {
// //   // locaFilePath :
// //   // path of image which was just uploaded to "uploads" folder
//     // console.log(locaFilePath)
//   const mainFolderName = "main"
// //   // filePathOnCloudinary :
// //   // path of image we want when it is uploded to cloudinary
//   const filePathOnCloudinary = mainFolderName + "/" + 'picture'

// //  return cloudinary.uploader.upload(locaFilePath, {public_id: 'photo'})
// // .then((data) => {
// //   console.log(data);
// //   console.log(data.secure_url);
// // }).catch((err) => {
// //   console.log(err);
// // });
//   return cloudinary.uploader.upload(locaFilePath, {public_id: filePathOnCloudinary})
//       .then((result) => {
//         //   console.log(result)
// //     // Image has been successfully uploaded on cloudinary
// //     // So we dont need local image file anymore
// //     // Remove file from local uploads folder 
//     fs.unlinkSync(locaFilePath)
    
//     return {
//       message: "Success",
//       url: result.url,
//     };
//   }).catch((error) => {
// //     // Remove file from local uploads folder
//     // fs.unlinkSync(locaFilePath)
//       console.log(error)
//     return {message: "Fail",};
//   });
// }


// app.post('/profile-upload-single', upload.single('profile-file'), async (req, res, next) => {
//     const locaFilePath = req.file.path
//   const result = await uploadToCloudinary(locaFilePath)
//   return res.send([result.url])
// })



app.use('/api/auth', authRouter);
app.use('/api/user', usersRouter);
app.use('/api/news', newsRouter)
app.use('/api/notices', noticesRouter)
app.use('/api/friends', friendsRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
    const { status = 500, message = 'Server error' } = err;
    res.status(status).json({ message });
});

module.exports = app;
