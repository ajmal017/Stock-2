const axios = require("axios");
const urlUtil = require("../utils/urls");
const validation = require("../utils/validateInput");

exports.stockPrice = async (req, res) => {
  try {
    const errors = validation(req);
    if (errors) return res.status(400).json(errors.array());

    const { symbol } = req.params;

    const url = urlUtil.getHistoricPriceUrl(symbol);
    const result = await axios.get(url);
    return res.status(200).json(result.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};
