const db = require("../../data/db-config.js");

const getAll = () => {
  return db("cars");
};

const getById = (id) => {
  return db("cars").where("id", id).first();
};

const getByVin = (vin) => {
  return db("cars").where("vin", vin).first();
};

const create = async (cars) => {
  const [id] = await db("cars").insert(cars);
  return getById(id);
};

module.exports = {
  getAll,
  getById,
  getByVin,
  create,
  // getByVin
};

