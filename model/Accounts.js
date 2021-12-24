const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const Accounts = new Schema(
    {
        username: 
        {
            type: String,
            required: true,
        },
        email: {
            type: String,
            primaryKey: true,
            required: true,
            unique: true,
        },
        password: 
        {
            type: String,
            required: true,
        },
        joined_since: 
        {
            type: Date,
            default: Date.now(),
            required: true,
        },
    }
);

const AccountsClass = mongoose.model('Accounts', Accounts);
module.exports = AccountsClass;