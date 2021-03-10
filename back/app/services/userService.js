const config = require('../authentification/config.json');
const jwt = require('jsonwebtoken');
const userMapper = require('../dataMappers/userMapper');

// users hardcoded for simplicity, store in a db for production applications
// const users = [
//     { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }
// ];

userService = {
    signIn : async function ({ username, password }) {
        const users = await userMapper.findAll()
        console.log(users)

        const user = users.find(u => u.username === username && u.password === password);
    
        if (!user) throw 'Username or password is incorrect';
    
        // create a jwt token that is valid for 1 day
        const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '1d' });
        console.log(token);
        
        return {
            ...omitPassword(user),
            token
        };
    },
    authenticate : async function (headers) {
        const authHeader = headers.authorization;

        if (!authHeader) throw 'Username or password is incorrect';

        // get token from authHeader
        const token = authHeader.split(' ')[1];
        console.log('token', token);

        //check token is valid
        try {
            const decoded = jwt.verify(token, config.secret)
            console.log(decoded);
            return decoded;
        } catch(err) {
            throw err
        }
    }
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

module.exports = userService;