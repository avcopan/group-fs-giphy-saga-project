const pool = require("../modules/pool");

const getFavorites = async () => {
  const queryString = "SELECT * FROM favorites;";

  try {
    const result = await pool.query(queryString);
    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const addFavorite = async (gifObject) => {
  const queryString = `
    INSERT INTO favorites (id, title, url)
    VALUES ($1, $2, $3);
  `;
  const queryParams = [gifObject.id, gifObject.title, gifObject.url];

  try {
    await pool.query(queryString, queryParams);
  } catch (error) {
    throw new Error(error);
  }
};

const removeFavorite = async (id) => {
  const queryString = `
    DELETE FROM favorites WHERE id = $1;
  `;
  const queryParams = [id];

  try {
    await pool.query(queryString, queryParams);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getFavorites,
  addFavorite,
  removeFavorite,
};
