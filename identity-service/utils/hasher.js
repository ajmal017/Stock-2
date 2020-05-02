const bcrypt = require("bcrypt");

const hasher = async password => {
  try {
    if (!password) throw new Error('Missing password in hasher');
    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    const obj = await bcrypt.hash(password, salt);
    return obj;
  } catch (error) {
    console.log(error)
    throw error
  }

};

module.exports = hasher;
