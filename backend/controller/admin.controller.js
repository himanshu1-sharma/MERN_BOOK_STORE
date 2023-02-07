const Admin = require('../model/Admin.model')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
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
            data: error
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        let existingAdmin = await Admin.findOne({ email: email })
        if (!existingAdmin) return res.status(200).json({
            errorcode: 2,
            status: false,
            message: "Email doesn't exists",
            data: null
        })
        let cmpPassword = bcrypt.compareSync(password, existingAdmin.password)
        if (!cmpPassword) {
            return res.status(200).json({
                errorcode: 3,
                status: false,
                message: "Incorrect Password",
                data: null
            })
        }
        else {
            const token = jwt.sign({ adminid: existingAdmin }, process.env.JWT_SECRET, { expiresIn: '10d' })
            existingAdmin = { ...existingAdmin._doc, password: null, token }
            return res.status(200).json({
                errorcode: 0,
                status: true,
                message: "Admin Login Successfully",
                data: existingAdmin
            })
        }
    } catch (error) {
        return res.status(400).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}

exports.verifyToken = async (req, res, next) => {
    let headers = req.headers[`authorization`]
    const token = headers.split(" ")[1]
    if (!token) {
        return res.status(404).json({
            errorcode: 3,
            status: false,
            message: "No token found",
            data: null
        })
    }



    jwt.verify(String(token), process.env.JWT_SECRET, (err, admin) => {
        if (err) {
            return res.status(400).json({
                errorcode: 3,
                status: false,
                message: "invalid token",
                data: null
            })

        }
        console.log(admin.adminid._id)

    })
}