
const Book = require('../model/Book.model')

exports.addBook = async (req, res) => {
    try {
        let { image, name, author, description, price, available } = req.body
        let books = new Book({
            image, name, author, description, price, available
        })

        books = await books.save()
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Book Add Successfully",
            data: books
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

exports.getAllBook = async (req, res) => {
    try {
        let bookData = await Book.find({}).sort({ createAt: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all books successfully",
            data: bookData
        })
    } catch (error) {
        res.status(200).json({
            errorcode: 5,
            staus: false,
            message: error.message,
            data: error
        })
    }
}

exports.updateBook = async (req, res) => {
    try {
        let { id, image, name, author, description, price, available } = req.body
        if (!id) return res.status(200).json({
            errorcode: 1,
            status: false,
            message: "Book id is not define",
            data: null
        })
        let updatebook = await Book.findById(id)
        if (!updatebook) return res.status(200).json({
            errorcode: 2,
            status: false,
            message: "Book detail is not update",
            data: null
        })
        updatebook.image = image ? image : updatebook.image
        updatebook.name = name ? name : updatebook.name
        updatebook.author = author ? author : updatebook.author
        updatebook.description = description ? description : updatebook.description
        updatebook.price = price ? price : updatebook.price
        updatebook.available = available ? available : updatebook.available
        await updatebook.save()
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Book Detail Updated Successfully",
            data: updatebook
        })
    } catch (error) {
        res.status(200).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}

exports.deleteBook = async (req, res) => {
    try {
        let { id } = req.params
        let books = await Book.findById(id)
        if (!books) return res.status(200).json({
            errorcode: 1,
            status: false,
            message: "Book not found",
            data: null
        })
        await Book.deleteOne({ _id: id })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Book deleted Successfully",
            data: null
        })
    } catch (error) {
        res.status(200).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}