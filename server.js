const express = require("express");
const app = express();
const port = 3000;

const db = require("./models/index");
app.use(express.json());

db.sequelize.sync({ force: true });

app.get("/guild", async (req, res) => {
  try {
    const data = await db.Guild.findAll({
      include: [
        {
          model: db.Post,
          include: [db.Comment]
        }
      ]
    });
    res.json({
      data
    });
  } catch (err) {
    throw err;
  }
});

app.post("/guild", async (req, res) => {
  try {
    const data = await db.Guild.create({
      ...req.body
    });
    res.json({
      data
    });
  } catch (err) {
    throw err;
  }
});

app.get("/user", async (req, res) => {
  try {
    const data = await db.User.findAll({
      include: [db.Post, db.Comment]
    });
    res.json({
      data
    });
  } catch (err) {
    throw err;
  }
});

app.post("/user", async (req, res) => {
  try {
    const data = await db.User.create({
      ...req.body
    });
    res.json({ data });
  } catch (err) {
    throw err;
  }
});

app.get("/post", async (req, res) => {
  try {
    const data = await db.Post.findAll({
      include: [db.Comment]
    });
    res.json({
      data
    });
  } catch (err) {
    throw err;
  }
});

app.post("/post", async (req, res) => {
  try {
    const data = await db.Post.create({
      ...req.body
    });
    res.json({
      data
    });
  } catch (err) {
    throw err;
  }
});

app.get("/comment", async (req, res) => {
  try {
    const data = await db.Comment.findAll({ include: [db.User] });
    res.json({
      data
    });
  } catch (err) {
    throw err;
  }
});

app.post("/comment", async (req, res) => {
  try {
    const data = await db.Comment.create({
      ...req.body
    });
    res.json({
      data
    });
  } catch (err) {
    throw err;
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
