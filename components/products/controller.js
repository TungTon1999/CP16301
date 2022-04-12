const productService = require('./service');
const categoryService = require('../categories/service');
const date = require('../../utils/date');
const async = require('hbs/lib/async');
exports.getProducts = async () => {
    try {
        let products = await productService.getProducts();
        products = products.map((item, index) => {
            item = {
                _id: item._id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                description: item.description,
                category_id: item.category_id,
                image: item.image,
                release: date.format(item.release),
                index: index + 1
            }
            return item;

        })
        return products;
    } catch (error) {
        []
    }


}
exports.getProductById = async (id) => {
    try {
        let product = await productService.getProductById(id);
        product = {
            _id: product._id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            description: product.description,
            category_id: product.category_id,
            image: product.image,
            release: date.format(product.release),

        }
        return product;
    } catch (error) {
        return {};
    }
}

exports.insert = async (product) => {
    try {
        await productService.insert(product);
    } catch (error) {

    }

}

exports.delete = async (id) => {
    try {
        await productService.delete(id);
    } catch (error) {

    }

}

exports.update = async (id, product) => {
    try {
        await productService.update(id, product);
    } catch (error) {

    }

}
