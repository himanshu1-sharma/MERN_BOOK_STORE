import { forwardRef } from 'react';
import React, { useState, useEffect } from "react"
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from "material-table";
import Axios from 'axios'
import { BASEURL } from '../Constant'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};



const Table = () => {
    const [addBookModalShow, setAddBookModalShow] = React.useState(false);
    const [data, setData] = useState()
    const [render, setRender] = useState(false)

    const fetchData = async () => {
        try {
            await Axios.get(`${BASEURL}api/book/get-all-book`)
                .then(data => {
                    if (data.data.errorcode === 0) {
                        toast.success(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        setRender(true)
                    }
                    else {
                        toast.error(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if (render) setRender(false)
        fetchData()
    }, [render])
    const columns = [
        { title: "ID", field: "" },
        { title: "Profile Pic", field: "" },
        { title: "Name", field: "" },
        { title: "Email", field: "" }
    ]



    return (
        <>
            <ToastContainer />
            <AddBookModal
                show={addBookModalShow}
                onHide={() => setAddBookModalShow(false)}
                setRender={setRender}
            />
            <MaterialTable
                title={<Button variant="primary" onClick={() => setAddBookModalShow(true)}>Add Book</Button>}
                icons={tableIcons}
                columns={columns}
                options={
                    {
                        actionsColumnIndex: -1,
                        addRowPosition: "first",
                        pageSize: 10,
                    }

                }
                actions={
                    [

                        {
                            icon: Edit,
                            tooltip: 'Edit User',
                            // onClick: (e, rowData) => {
                            //     handleDelete(e)
                            //     setSelected(rowData._id)
                            // }
                        },
                        {
                            icon: DeleteOutline,
                            tooltip: 'Delete User',
                            // onClick: (e, rowData) => {
                            //     handleDelete(e)
                            //     setSelected(rowData._id)
                            // }
                        },
                    ]}
            />
        </>
    )
}


export default Table


function AddBookModal(props) {

    const [input, setInput] = useState({})
    const [isAvailable, setIsAvailable] = useState("")

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setInput({ ...input, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("image :", input.image)
        console.log("name :", input.name)
        console.log("author :", input.author)
        console.log("description :", input.description)
        console.log("price :", input.price)
        console.log("available :", isAvailable === "yes" ? true : false)
        try {
            await Axios.post(`${BASEURL}api/book/add-book`, { image: input.image, name: input.name, author: input.author, description: input.description, price: input.price, available: isAvailable === "yes" ? true : false })
                .then(data => {
                    if (data.data.errorcode === 0) {
                        toast.success(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        props.onHide()
                        props.setRender(true)
                        setInput({})
                        setIsAvailable("")
                    }
                    else {
                        toast.error(`${data.data.message}`, {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                })
        } catch (error) {
            console.log(error.message)
        }
    }




    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Book
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Upload Image</Form.Label>
                        <Form.Control type="text" placeholder="Image URL" name="image" id="image" value={input.image || ""} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="name" name="name" id="name" value={input.name || ""} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="author" name="author" id="author" value={input.author || ""} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="description" name="description" id="description" value={input.description || ""} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="price" name="price" id="price" value={input.price || ""} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Available</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Yes"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    value="yes"
                                    onChange={(e) => setIsAvailable(e.target.value)}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                    value="no"
                                    onChange={(e) => setIsAvailable(e.target.value)}
                                />
                            </div>
                        ))}
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}