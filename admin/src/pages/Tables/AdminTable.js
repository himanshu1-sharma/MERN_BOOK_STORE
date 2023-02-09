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

    const [data, setData] = useState()
    const [selected, setSelected] = useState()
    const [render, setRender] = useState(false)
    const fetchData = async () => {
        try {
            await Axios(`${BASEURL}api/admin/get-all-admin`)
                .then(data => {
                    setData(data.data.data)
                })
        } catch (error) {
            console.log(error.message)
        }

    }

    const handleDelete = async (e) => {
        alert(selected)
        try {
            await Axios.delete(`${BASEURL}api/admin/delete-admin/${selected}`)
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
        { title: "ID", field: "_id" },
        { title: "Profile Pic", field: "image", render: (rowData) => <><img src={rowData.profilepic} width="50" height="50" /></> },
        { title: "Name", field: "name" },
        { title: "Email", field: "email" }
    ]



    return (
        <>
            <ToastContainer />
            <MaterialTable
                title="Admin"
                data={data}
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
                            icon: DeleteOutline,
                            tooltip: 'Delete User',
                            onClick: (e, rowData) => {
                                handleDelete(e)
                                setSelected(rowData._id)
                            }
                        },
                    ]}
            />
        </>
    )
}


export default Table

