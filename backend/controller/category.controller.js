const Category = require("../model/Category.model")

exports.addCategory = async (req, res) => {
    try {
        let { image, name } = req.body
        let category = new Category({
            image, name
        })
        category = await category.save()
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "added successfully",
            data: category
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

exports.getAllCategory = async (req, res) => {
    try {
        let categoryData = await Category.find({}).sort({ createAt: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "category data found",
            data: categoryData
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

exports.deleteCategory = async (req, res) => {
    try {
        let { id } = req.params
        let category = await Category.findById(id)
        if (!category) return res.status(200).json({
            errorcode: 1,
            status: null,
            message: "Category not found",
            data: null
        })
        await Category.deleteOne({ _id: id })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Category delete successfully",
            data: null
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