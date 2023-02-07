import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BASEURL } from '../Constant';
import Axios from 'axios'

const BookCard = () => {

    const [data, setData] = useState()

    const fetchData = async () => {
        try {
            await Axios.get(`${BASEURL}api/book/get-all-book`)
                .then(data => {
                    setData(data.data.data)
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    console.log("data", data)

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='container mt-5'>
            <div className='row'>
                {data && data.map(curElt => {
                    return (
                        <>
                            <div className='col-lg-3'>
                                <Card>
                                    <Card.Img variant="top" src={curElt.image} />
                                    <Card.Body>
                                        <Card.Title>{curElt.name}</Card.Title>
                                        <Card.Text>{curElt.author}</Card.Text>
                                        <div className='d-flex justify-content-between'>
                                            <Button variant="primary">Explore</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default BookCard