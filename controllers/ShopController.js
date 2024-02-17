const models = require("../models");

class ProductController {
  async getProducts(req, res) {
    const all = await models.product.findAll({
      attributes: [
        "id",
        "name",
        "price",
        "novelty",
        "archive",
        "link",
        "description",
      ],
    });

    return res.json(all);
  }
}

module.exports = new ProductController();
