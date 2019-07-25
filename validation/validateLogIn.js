const validator = require("validator");
const isEmpty = require("./is-empty.js");



module.exports = function validateLogin(data){
    var errors = {};

    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (validator.isEmpty(data.email)) {
        errors.email = "Email is requried";
    }

    if (validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (validator.isEmpty(data.password)) {
        errors.password = "password is requried";
    }

    return { errors, isValid: isEmpty(errors)};
};