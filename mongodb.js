// CRUD create read update delete

// const mondgodb = require('mongodb');
// const MongoClient = mondgodb.MongoClient;
// const ObjectID = mondgodb.ObjectID;

// const { MongoClient, ObjectID } = require('mongodb');

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString().length);

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (error, client) => {
//     if (error) {
//       return console.log('Unable to connect to database!');
//     }

//     const db = client.db(databaseName);

//     db.collection('tasks')
//       .deleteOne({ description: 'Go to the cinema' })
//       .then((result) => {
//         console.log(result.deletedCount);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

    // db.collection('users')
    //   .deleteMany({ age: 35 })
    //   .then((result) => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('tasks')
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('users')
    //   .updateOne(
    //     { _id: new ObjectID('6009d64b4793cd1008c5e4c8') },
    //     {
    //       // $set: {
    //       //   name: 'Andrew the best',
    //       // },
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // db.collection('users').findOne(
    //   { _id: new ObjectID('6009d64b4793cd1008c5e4c8') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 33 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection('users')
    //   .find({ age: 33 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection('tasks').findOne(
    //   { _id: new ObjectID('600f1d72e45609224896be2e') },
    //   (error, task) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }
    //     console.log(task);
    //   }
    // );

    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // db.collection('users').insertOne(
    //   {
    //     _id: id,
    //     name: 'Stas',
    //     age: 30,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Anton',
    //       age: 33,
    //     },
    //     { name: 'Sergey', age: 33 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert documents!');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Go to the cinema',
    //       completed: false,
    //     },
    //     {
    //       description: 'Make many',
    //       completed: false,
    //     },
    //     { description: 'buy a car', completed: true },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks!');
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);
