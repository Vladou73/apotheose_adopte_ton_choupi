const db = require('../database');

userMapper = {
    findAll : async () => {
        result = await db.query('SELECT * FROM "user";')
        return result.rows
    }
}

module.exports = userMapper