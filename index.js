require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hktsutd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    const roommateCollection = client
      .db("roomDB")
      .collection("roommateCollection");

    app.get("/flatify", async (req, res) => {
      const result = await roommateCollection.find().toArray();
      res.send(result);
    });

    app.post("/flatify", async (req, res) => {
      const result = await roommateCollection.insertOne(req.body);
      res.send(result);
    });

    app.get("/flatify/:id", async (req, res) => {
      const id = req.params.id;

      const isValidObjectId = (id) => /^[a-fA-F0-9]{24}$/.test(id);
      if (isValidObjectId(id)) {
        const query = {
          _id: new ObjectId(id),
        };
        const result = await roommateCollection.findOne(query);

        res.send(result);
      } else {
        return res.json({
          message: "Invalid ID format",
        });
      }
    });

    app.get("/featured", async (req, res) => {
      const query = {
        availability: true,
      };

      const result = await roommateCollection.find(query).limit(6).toArray();
      res.send(result);
    });
    app.get("/flatify/mylisting/:email", async (req, res) => {
      const email = req.params.email;
      const query = {
        email: email,
      };
      const result = await roommateCollection.find(query).toArray();
      res.send(result);
    });

    app.put("/flatify/:id", async (req, res) => {
      const query = {
        _id: new ObjectId(req.params.id),
      };

      const updatedValue = {
        $set: req.body,
      };

      const result = await roommateCollection.updateOne(query, updatedValue);
      res.send(result);
    });

    app.put("/flatify/like/:id", async (req, res) => {
      const query = {
        _id: new ObjectId(req.params.id),
      };

      const updatedValue = {
        $inc: {
          liked: +1,
        },
      };

      const result = await roommateCollection.updateOne(query, updatedValue);
      res.send(result);
    });

    app.delete("/flatify/:id", async (req, res) => {
      const query = {
        _id: new ObjectId(req.params.id),
      };

      const result = await roommateCollection.deleteOne(query);
      res.send(result);
    });
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hi, I'm from Flatify");
});

app.listen(port, () => {
  console.log("Runnign on port ", port);
});
