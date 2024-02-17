const Router = require("express");
const router = new Router();

const ShopController = require("../controllers/ShopController");

router.get("/products", ShopController.getProducts);

module.exports = router;
