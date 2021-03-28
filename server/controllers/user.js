const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    },

    post: {
        register: (req, res, next) => {
            const { username, email, password } = req.body;
            const adminCheck = password.substr(password.length - 5);
            let role = (adminCheck === 'admin') ? 'admin' : 'user';
            models.User.create({ username, email, password, role })
                .then((createdUser) =>  {
                    const token = utils.jwt.createToken({ id: createdUser._id })
                    res.header('Authorization', token).send(createdUser)
                    return res.send(createdUser)
                })
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }
                    const token = utils.jwt.createToken({ id: user._id });
                    res.header('Authorization', token).send(user);
                })
                .catch(next);
        },

        verifyLogin: (req, res, next) => {
            // const token = req.cookies[config.authCookieName] || '';
            const token = req.body.token || ''

            Promise.all([
                utils.jwt.verifyToken(token),
                models.TokenBlacklist.findOne({ token })
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }

                    models.User.findById(data.id)
                        .then((user) => {
                            return res.send({
                                status: true,
                                user
                            })
                        });
                })
                .catch(err => {
                    // if (!redirectAuthenticated) { next(); return; }

                    if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }

                    res.send({
                        status: false,
                        user: null
                    })
                })

        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: (req, res, next) => {
        // logic if you want to change user status from admin panel
        const id = req.params.id;
        const { username, password, email } = req.body;
        let role = 'user'
        models.User.update({ _id: id }, { username, password, email, role })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};