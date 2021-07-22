const db = require("../db");

const find = async () => {
  return db.promise().query("select * from Users");
};

const create = async ({ firstname, lastname, email, password }) => {
  return db
    .promise()
    .query(
      "INSERT INTO Users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)",
      [firstname, lastname, email, password]
    );
};

const findByEmail = async (email) => {
  return db.promise().query("SELECT * FROM Users WHERE email = ?", [email]);
};

module.exports = { find, create, findByEmail };