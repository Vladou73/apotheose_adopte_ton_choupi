const bcrypt = require('bcrypt');
const saltRounds = 10;

pwdEncryption = {
    hashPassword : async(pwd)=>{
        try{
            const hashedPassword = await bcrypt.hash(pwd, saltRounds);
            return hashedPassword
        } catch(error){
            console.log(error)
        }
    },
    comparePassword : async(login_pwd, db_pwd)=>{
        try{
            const isValidPassword = await bcrypt.compare(login_pwd, db_pwd);
            return isValidPassword
        } catch(error){
            console.log(error)
        }
    } 
}

module.exports = pwdEncryption

// how to test password and hashed passwords
// test = async(pwd)=>{
//     const hashedPassword = await pwdEncryption.hashPassword(pwd)
//     const compare = await pwdEncryption.comparePassword(pwd, hashedPassword)
//     console.log('is same password: ', compare)
// };
// test('Vladichou');

