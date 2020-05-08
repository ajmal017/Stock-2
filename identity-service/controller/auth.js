const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('../utils/jwtToken')
const setCookie = require('../utils/setCookie')


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.status(401).json({ message: 'Invalid Credentials' })

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(401).json({ message: 'Invalid Credentials' })

        const payload = { user: user._id }
        console.log(payload)
        const token = await jwt(payload)
        setCookie('Authorization', token, res)

        return res.sendStatus(200)
    } catch (error) {
        return res.status(500).json([{ msg: "Internal Error" }]);
    }

}

exports.register = async (req, res) => {
    try {
        const { email, password, password2 } = req.body
        let user = await User.findOne({ email })
        if (user) return res.status(401).json({ message: 'Invalid Credentials' })

        if (password !== password2) return res.status(400).json({ message: 'Not Matching Passwords' })
        const hashedPassword = await bcrypt.hash(password, 10)

        user = new User({ email, password: hashedPassword })
        await user.save()

        const payload = { user: user._id }
        const token = await jwt(payload)
        setCookie('Authorization', token, res)

        return res.sendStatus(201)

    } catch (error) {
        console.log(error)
        return res.status(500).json([{ msg: "Internal Error" }]);

    }
}

exports.logout = async (req, res) => {
    res.clearCookie("Authorization");
    return res.sendStatus(200);
};

exports.getUser = async (req, res) => {
    console.log('getuse')
    const { user } = req.body;
    console.log('user in getUser', user)
    const existingUser = await User.findById(user);

    if (!existingUser) {
        res.clearCookie("Authorization");
        return res.status(401).json([{ msg: "Invalid Credentials" }]);
    }

    return res.sendStatus(200);
};
