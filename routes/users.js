const usersRouter = require("express").Router();
const {
  getUsers,
  createUser,
} = require("../controllers/users");

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);

module.exports = usersRouter;