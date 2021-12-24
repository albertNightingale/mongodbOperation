
/**
 * add user to database
 * @param {Accounts} user 
 */
 module.exports.addUser = async (user) => {    
    try
    {
        await user.save(); 
    }
    catch (err)
    {
        console.log(err);
    }
}