const Header = require("../model/Header.model")

exports.addHeader = async (req, res) => {
    try {
        let { image, name } = req.body
        let headers = new Header({
            image, name
        })
        headers = await headers.save()
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Header slider image add successfully",
            data: headers
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