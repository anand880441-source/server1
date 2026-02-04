const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Spino", role: "student" },
  { id: 2, name: "Moltec", role: "mentor" }
];

app.get("/users", (req, res) => {
    console.log("users",users)
  res.status(200).json(users);
});

app.get("/users/:test/:user_id", (req, res)=>{
    // res.status(200).json(users)
    console.log(req.params);
    res.status(200).json(users);
})


app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});