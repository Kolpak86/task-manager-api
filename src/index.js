const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

// multer = require('multer');
// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000, // 1mb
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a Word document'));
//     }

//     cb(undefined, true);
//     // cb(new Error('File must be a PDF'));
//     // cb(undefined, true);
//     // cb(undefined, false);
//   },
// });

// const errorMiddleware = (req, res, next) => {
//   throw new Error('From middleware');
// };

// app.post(
//   '/upload',
//   upload.single('upload'),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );
// app.use((req, res, next) => {
//   res.status(503).send('Site under maintenance');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');

// const main = async () => {
// const task = await Task.findById('601c48674a832b2e6424ca20');
// await task.populate('owner').execPopulate();
// console.log(task.owner);

//   const user = await User.findById('601c48274a832b2e6424ca1d');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// };

// main();

// const pet = {
//   name: 'Kisa',
// };

// pet.toJSON = function () {
//   return {};
// };

// console.log(JSON.stringify(pet));
