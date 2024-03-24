const {body} = require('express-validator');

const User = require('../models/user');

module.exports.signup = [
    body('email')
        .trim()
        .isEmail()
        .custom(async (value, { req }) => {
            try {
                const userDoc = await User.findOne({ email: value });
                if (userDoc) {
                    throw new Error('Email already exists');
                }
            } catch (err) {
                throw new Error(err.message); // Rethrow the error
            }
        })
        // .custom((value, {req}) => {
        //     return User
        //         .findOne({ email: value })
        //         .then(userDoc => {
        //             if(userDoc) return Promise.reject('Email already exists');
        //         })
        //         .catch(err => console.log(err));
        // })
        .normalizeEmail(),
    body('password')
        .isLength({ min: 8 }),
    body('name')
        .trim()
        .not()
        .isEmpty()
];

module.exports.login = [
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail(),
    body('password')
        .isLength({ min: 8 })
];

module.exports.userStatus = [
    body('status')
        .trim()
        .not()
        .isEmpty()
];
