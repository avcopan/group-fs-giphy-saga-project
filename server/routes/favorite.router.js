const express = require('express');
const query = require('../queries/favorites.query');

const router = express.Router();

/**
 * @api {get} /favorite Get all GIFs in favorites
 */
router.get('/', async (_, res) => {
  try {
    const data = await query.getFavorites();
    res.send(data);
  } catch (error) {
    handleError(error, res);
  }
});

/**
 * @api {post} /favorite Add a GIF to favorites
 * @apiBody {Object} An object with keys `id` (from GIPHY), `title`, and `url`
 */
router.post('/', async (req, res) => {
  try {
    await query.addFavorite(req.body);
    res.sendStatus(201);
  } catch (error) {
    handleError(error, res);
  }
});

/**
 * @api {delete} /favorite/:id Remove a GIF from favorites
 * @apiParam {Number} id GIFs unique ID (from GIPHY)
 */
router.delete('/:id', async (req, res) => {
  try {
    await query.removeFavorite(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    handleError(error, res);
  }
});

// get favorites categories
router.get('/category/:favId', async (req, res) => {
  try {
    const categories = await query.getFavoriteCategories(req.params.favId);
    res.send({ categories });
  } catch (error) {
    handleError(error, res);
  }
});

// add to favorites_categories table
router.post('/category/:favId', async (req, res) => {
  const categoryId = req.body.categoryId;
  try {
    await query.addFavoriteCategory(req.params.favId, categoryId);
    res.sendStatus(201);
  } catch (error) {
    handleError(error, res);
  }
});

router.post('/category/delete/:favId', async (req, res) => {
  const categoryId = req.body.categoryId;
  try {
    await query.removeFavoriteCategory(req.params.favId, categoryId);
    res.sendStatus(204);
  } catch (error) {
    handleError(error, res);
  }
});

// helper functions
const handleError = async (error, res) => {
  console.error(error);
  return res.sendStatus(500);
};

module.exports = router;
