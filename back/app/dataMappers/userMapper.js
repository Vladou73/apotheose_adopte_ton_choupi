const db = require('../database');

userMapper = {
    findAll : async () => {
        try {
            result = await db.query('SELECT * FROM "user";')
            return result.rows
        } catch(error) {
            console.log('dataMapper error raised');
            throw new Error(error);
        }
    }
}
module.exports = userMapper