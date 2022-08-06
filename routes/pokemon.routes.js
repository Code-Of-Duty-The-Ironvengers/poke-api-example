const { Router } = require("express");
const axios = require("axios");

const pokeRouter = Router();

const POKE_API_URL_BASE = "https://pokeapi.co/api/v2/pokemon";

pokeRouter.get("/", (req, res) => {
  const { pokeName } = req.query;

  axios
    .get(`${POKE_API_URL_BASE}/${pokeName}`)
    .then((pokemon) => {
      //   console.log(pokemon.data);
      res.render("poke-page", { pokeData: pokemon.data });
    })
    .catch((err) => {
      res.redirect("/");
    });

  //   axios.post(POKE_API_URL_BASE, { pokemon: pokeName }).then().catch();
});

module.exports = pokeRouter;

// axios.get(`${POKE_API_URL_BASE}?limit=3&offset=6`).then((responseFromApi) => {
//   console.log("responseFromApi:", responseFromApi.data);
// });
