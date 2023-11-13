const express = require("express"),
  path = require("path"),
  cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

const dotenv = require("dotenv"),
  { Client } = require("pg");

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.use(
  cors({
    origin: "http://108.143.27.225:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get("/api", async (_request, response) => {
  const { rows } = await client.query("SELECT name, club, age FROM players");
  response.send(rows);
});

app.use(express.static(path.join(path.resolve(), "public")));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
