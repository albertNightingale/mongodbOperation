const data = require("../data/data.json");

const Accounts = require("../model/accounts");

const hash = require("../util/hash");

const addUser = require("./addUser");
const exist = require("./dbExists");

const accountsToBeSeeded = data;

module.exports.seedingDB = async () => {

    if (await exist()) // if there are docs in the database
    {
        console.log("DB already seeded");
        return;
    }

    for (let idx = 0; idx < accountsToBeSeeded.length; idx++)
    {
        let account = accountsToBeSeeded[idx];
        account["password"] = hash(account["password"]);
        await addUser(new Accounts(account)); 
    }
}