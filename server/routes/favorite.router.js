const express = require("express");
const query = require("../queries/favorites.query");

const router = express.Router();

/**
 * @api {get} /favorite Get all GIFs in favorites
 */
router.get("/", async (_, res) => {
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
router.post("/", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
  try {
    await query.removeFavorite(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    handleError(error, res);
  }
});

// update given favorite with a category id
router.put("/:favId", async (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// helper functions
const handleError = async (error, res) => {
  console.error(error);
  return res.sendStatus(500);
};

module.exports = router;
