const bcrypt = require('bcrypt');

exports.hash = async (arg) => {
    const data = await bcrypt.hash(arg, 10)
    return data;
}
exports.compare = async (arg, hash) => {
    const data = await bcrypt.compare(arg, hash);
    // console.log(data);
    return data;
}