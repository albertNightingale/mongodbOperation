const Accounts = require('../model/accounts');

// return true if exist (there is any row inside of the specified table), false if not
module.exports.exist = async () => {

    let doesExist = await Accounts.findOne();
    // console.log(`doesExist: ${doesExist}`);
    return doesExist !== null;
}