const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "rsm";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Koneksi gagal!");
  }

  // pilih database
  const db = client.db(dbName);

  // menambahkan 1 data ke collection anggota
  // db.collection("anggota").insertOne(
  //   {
  //     nama: "rsm junior",
  //     email: "rsmjunior@gmail.com",
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("gagal menambahkan data");
  //     }
  //     console.log(result);
  //   }
  // );

  // menambahkan lebih dari 1 data
  // db.collection("anggota").insertMany(
  //   [
  //     {
  //       nama: "rsm senior",
  //       email: "rsmsenior@gmail.com",
  //     },
  //     {
  //       nama: "rsm bintang kecil",
  //       email: "rsmbintangkecil@gmail.com",
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("data gagal ditambahkan");
  //     }
  //     console.log(result);
  //   }
  // );

  // menambahkan semua data yang ada di collection "anggota"
  // console.log(
  //   db
  //     .collection("anggota")
  //     .find()
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  // menambahkan data berdasarkan kriteria yang ada di collection "anggota"
  // console.log(
  //   db
  //     .collection("anggota")
  //     .find({ nama: "dadan" })
  //     // .find({ _id: ObjectID('68554ef0f22373049958f911') })
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  // mengubah data berdasarkan id
  // const updatePromise = db.collection("anggota").updateOne(
  //   {
  //     _id: ObjectId("68554ef0f22373049958f911"),
  //   },
  //   {
  //     $set: {
  //       nama: "dadanku",
  //     },
  //   }
  // );

  // updatePromise
  // .then((result) => {
  //   console.log(result);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  // mengubah data lebih dari 1, berdasarkan kriteria
  // db.collection("anggota").updateMany(
  //   {
  //     nama: "dadan",
  //   },
  //   {
  //     $set: {
  //       nama: "dadanku",
  //     },
  //   }
  // );

  // menghapus 1 data
  // db.collection("anggota")
  //   .deleteOne({
  //     _id: ObjectId("6855686cc531c759c46ac861"),
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // menghapus lebih dari 1 data
  db.collection("anggota")
    .deleteMany({
      nama: "rsm senior",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
