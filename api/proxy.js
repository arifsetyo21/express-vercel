const express = require("express");
const axios = require("axios");
const router = express.Router();
const https = require("https");

router.get("/", async (req, res) => {
  try {
    const url = req.query.url;
    const response = await axios
      .get(`${url}`, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      .then(({ data }) => {
        return data;
      });

    res.send({
      ...response,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error aja");
  }
});

module.exports = router;
