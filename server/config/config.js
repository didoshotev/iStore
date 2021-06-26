const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbURL: 'mongodb+srv://test123:test123123@cluster0.a7hhx.mongodb.net/istore?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token'
    },
    production: {
        port: process.env.PORT || 5000,
        dbURL: 'mongodb+srv://test123:test123123@cluster0.a7hhx.mongodb.net/istore?retryWrites=true&w=majority',
        authCookieName: 'x-auth-token'
    }
};

module.exports = config[env];