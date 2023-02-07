const Admin = require('../model/Admin.model')
const bcrypt = require("bcryptjs")

exports.addAdmin = async (req, res) => {
    try {
        let { profilepic, name, email, password } = req.body
        let adminExist = await Admin.findOne({ email: email })
        if (adminExist) return res.status(400).json({
            errorcode: 2,
            status: false,
            message: "Email already use",
            data: null
        })
        const hashedPassword = bcrypt.hashSync(password)
        let admin = new Admin({
            profilepic,
            name,
            email,
            password: hashedPassword
        })
        admin = await admin.save()
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Admin added successfully",
            data: admin
        })
    } catch (error) {
        return res.status(200).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: null
        })
    }
}