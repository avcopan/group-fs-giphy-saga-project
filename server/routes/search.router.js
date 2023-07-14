const axios = require("axios");
const express = require("express");
const dotenv = require("dotenv");

const router = express.Router();

dotenv.config();
const api_key = process.env.GIPHY_API_KEY;

router.get("/", async (req, res) => {
  const query = req.query.q;
  const queryString = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  try {
    const response = await axios.get(queryString);
    const searchResult = await response.data;

    const urls = searchResult.data.map((result) => {
      return {
        id: result.id,
        title: result.title,
        url: result.images.fixed_height.url,
      };
    });

    res.send(urls);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;
