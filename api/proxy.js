const express = require("express");
const axios = require("axios");
const router = express.Router();
const https = require("https");

router.get("/", async (req, res) => {
  try {
    const response = await axios
      .get(
        "https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote",
        {
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      )
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
