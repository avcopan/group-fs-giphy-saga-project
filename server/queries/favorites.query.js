const pool = require('../modules/pool');

const getFavorites = async () => {
  const queryString = 'SELECT * FROM favorites;';

  try {
    const result = await pool.query(queryString);
    const resultWithCategories = Promise.all(
      result.rows.map(async (favorite) => {
        const categoriesResult = await getFavoriteCategories(favorite.id);
        favorite.categories = categoriesResult;
        return favorite;
      })
    );
    return resultWithCategories;
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

const getFavoriteCategories = async (favoriteId) => {
  const queryString = `
    SELECT category.name FROM favorites
    JOIN favorites_categories ON favorites.id = favorites_categories.favorites_id
    JOIN category ON category.id = favorites_categories.categories_id
    WHERE favorites.id = $1; 
  `;

  const queryParams = [favoriteId];
  try {
    const categories = await pool.query(queryString, queryParams);
    return categories.rows.map((category) => category.name);
  } catch (error) {
    throw new Error(error);
  }
};

const addFavoriteCategory = async (favoriteId, categoryId) => {
  const queryString = `
    INSERT INTO favorites_categories 
    (favorites_id, categories_id)
    VALUES 
    ($1, $2);
  `;
  const queryParams = [favoriteId, categoryId];

  try {
    await pool.query(queryString, queryParams);
  } catch (error) {
    throw new Error(error);
  }
};

const removeFavoriteCategory = async (favoriteId, categoryId) => {
  const queryString = `
    DELETE FROM favorites_categories 
    WHERE favorites_id=$1 AND categories_id=$2;
  `;
  const queryParams = [favoriteId, categoryId];

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
  getFavoriteCategories,
  addFavoriteCategory,
  removeFavoriteCategory,
};
