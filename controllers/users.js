const { find, create, findByCity } = require("../models/users");

const getUsers = async (req, res) => {
  const [users] = await find();
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  try {
    await create({
      ...req.body,
    });
    res.status(200).send("user create");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getUsers, createUser };