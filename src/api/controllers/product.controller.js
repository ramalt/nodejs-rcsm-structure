const Product = require('../../models/product.schema');
const mongoose = require('mongoose');
const logger = require('../../util/logger');
const productService = require('../../services/product.service');
const product = require('../../models/product.schema');
const { request } = require('express');


exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json(products)
        logger.http('-> [GET] 200 /products');
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: "hata",
            detail: error
        })
        logger.error('-> [GET] 404 /products');
    }
}
exports.getProductById = async (req, res) => {
    productId = req.params.id;
    try {
        const product = await productService.getProductById(productId)
        res.status(200).json(product)
        logger.http('-> [GET] 200 /products/' + productId);
    } catch (error) {
        res.status(404).json({
            status: 404,
            message: "hata",
            detail: error
        })
        logger.error('-> [GET] 404 /products/' + productId);
    }
}
exports.newProduct = async (req, res, next) => {
    const productData = {
        id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        salePrice: req.body.salePrice,
        desc: req.body.desc
    }
    try {
        
            const product = await productService.addNewproduct(productData)
            logger.http('-> [POST] 201 /products/');       
            return res.status(201).json(product)
        
     
    } catch (error) {
        res.status(500).json({
            message: "istek hatasi",
            detail: error
        });
        logger.error('-> [POST] 500 /products/');
    }

}
exports.updateProduct = async (req, res) => {
    productId = req.params.id;
    try {
        const product = await productService.updateProduct(productId);
        res.status(201).json(product);
        logger.http('-> [POST] 201 /products/' + productId);
    } catch (error) {
        res.status(500).json({
            message: "istek hatasi",
            detail: error
        });
        logger.error('-> [POST] 500 /products/' + productId);
    }
}
exports.destroyProduct = async (req, res) => {
    productId = req.params.id;
    try {
        const product = await productService.deleteProduct(productId);
        res.status(204).json(product);
        logger.http('-> [DELETE] 204 /products/' + productId);
    } catch (error) {
        res.status(500).json({
            message: "istek hatasi",
            detail: error
        });
        logger.error('-> [DELETE] 500 /products/' + productId);
    }
}