const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            minlength: 8,
            lowercase: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
        },
        password: { type: String, required: true, minlength: 8 },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
