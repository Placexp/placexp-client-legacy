const Cryptr = require('cryptr');
const cryptr = new Cryptr('placexp@123');
exports.encode=(value)=>{
    return cryptr.encrypt(value)
}
exports.decode=(value)=>{
    if(value==null)
    return '';
    return cryptr.decrypt(value);
}