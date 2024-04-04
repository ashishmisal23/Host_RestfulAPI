const Product = require("../models/product");


const getAllProducts = async (req, res) => {

    const { company, name, featured, price, sort, select } = req.query;

    const queryObject = {};
    if (company) {
        queryObject.company = company;
    }
    if (featured) {
        queryObject.featured = featured;
    }
    if (price) {
        queryObject.price = price;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        // let selectFix = select.replace(",", " ");
        let selectFix = select.split(",").join(" ");
        apiData = await apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    const data = await apiData;

    res.status(200).json({ data, nbHits: data.length });
};

const getAllProductsTesting = async (req, res) => {
    const data = await Product.find(req.query)
    res.status(200).json({ data })

};

module.exports = { getAllProducts, getAllProductsTesting };
