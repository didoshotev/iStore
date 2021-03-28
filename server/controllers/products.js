const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        // console.log(req.query);
        // const length = req.query.length ? parseInt(req.query.length) : 20
        models.Product.find()
            .then((products) => res.send(products))
            .catch(next);
    },
    getById: (req, res, next) => {
        const id = req.params.id
        models.Product.findById(id)
        .then((product) => {
            return res.send(product)
        })
        .catch(next);
    },

    getIphones: (req, res, next) => {
        const iphone = req.params.iphone
        models.Product.find({ deviceType: iphone})
        .then((products) => res.send(products))
        .catch(next);
    },
    getMacs: (req, res, next) => {
        const mac = req.params.mac
        models.Product.find({ deviceType: mac})
        .then((products) => res.send(products))
        .catch(next);
    },
    getIpads: (req, res, next) => {
        const ipad = req.params.ipad
        models.Product.find({ deviceType: ipad})
        .then((products) => res.send(products))
        .catch(next);
    },
    getAccessories: (req, res, next) => {
        const accessory = req.params.accessory
        models.Product.find({ deviceType: accessory})
        .then((products) => res.send(products))
        .catch(next);
    },

    post: (req, res, next) => {
        const { title, description, imageUrl, price, deviceType, isActive } = req.body;
        models.Product.create({ title, description, imageUrl, price, deviceType, isActive })
            .then((createdProduct) => {
                res.send(createdProduct);
            }).catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { title, description, imageUrl, price, deviceType, isActive } = req.body;
        models.Product.updateOne({ _id: id }, { title, description, imageUrl, price, deviceType, isActive })
            .then((updatedProduct) => res.send(updatedProduct))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Product.deleteOne({ _id: id })
            .then((removedProduct) => res.send(removedProduct))
            .catch(next)
    }
};