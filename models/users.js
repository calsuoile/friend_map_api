const db = require("../db");

const find = async () => {
  return db.promise().query("select * from users");
};

const create = async ({ firstname, lastname, city, email, password }) => {
  return db
    .promise()
    .query(
      "INSERT INTO Users (firstname, lastname, city, email, password) VALUES (?, ?, ?, ?, ?)",
      [firstname, lastname, city, email, password]
    );
};

const findByCity = async (city) => {
  return db.promise().query("SELECT * FROM Users WHERE city = ?", [city]);
};

module.exports = { find, create, findByCity };