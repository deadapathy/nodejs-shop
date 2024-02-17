const Router = require("express");
const router = new Router();

const shopRouter = require("./shopRouter");

router.use("/product", shopRouter);

module.exports = router;
