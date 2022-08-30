const Product = require('../models/product.schema');
const logger = require('../util/logger');

const getProducts = async () => {
    try {
        const products = await Product.find()
        return products;
    } catch (error) {
        logger.error(error);
        throw Error('urunler getirilirken bir hata olustu.')
    }
}
const getProductById = async (productId) => {
    try {
        const product = await Product.findById(productId)
            .exec()
        return product;
    } catch (error) {
        logger.error(error);
        throw Error('urun getilirken bir hata oluştu.')
    }
}
const addNewproduct = async (productData) => {
    const product = new Product({
        _id: productData.id,
        name: productData.name,
        salePrice: productData.salePrice,
        desc: productData.desc
    })
    try {
        await product.save(product)
        return product;
    } catch (error) {
        logger.error(error);
        return Error('urun yuklenirken bir hata olustu')
    }
}
const updateProduct = async (productId) => {
    try {
        const product = await Product.findOneAndUpdate(productId);
        return product;
    } catch (error) {
        logger.error(error);
        return Error('urun guncellenirken bir hata olustu')
    }
}
const deleteProduct = async (productId) => {
    try {
        const product = await Product.findOneAndDelete(productId);
        return product;
    } catch (error) {
        logger.error(error);
        return Error('urun silinirken bir hata olustu')
    }
}

module.exports = {
    getProducts,
    getProductById, 
    addNewproduct,
    updateProduct,
    deleteProduct,
};