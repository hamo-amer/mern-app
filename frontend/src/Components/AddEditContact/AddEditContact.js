import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import './AddEditContact.css'
import addBtn from '../../Assets/add.png'
import editBtn from '../../Assets/edit.png'
import { addContact, editContact } from '../../JS/Actions/actionsContact'


const AddEditContact = ({ history }) => {

    // From Store 
    const isEdit = useSelector(state => state.contactReducer.isEdit)
    const userReducer = useSelector(state => state.contactReducer.user)

    // State
    const [user, setUser] = useState({ name: "", email: "", phone: 0 });

    const dispatch = useDispatch()


    useEffect(() => {
        isEdit ? setUser(userReducer) : setUser({ name: "", email: "", phone: 0 })
    }, [isEdit, userReducer]);



    // handleEdit function
    const handleEdit = () => {
        dispatch(editContact(user._id, user))
    }

    // handleAdd function
    const handleAdd = () => {
        dispatch(addContact(user))
    }

    // handlechange
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Form className="my-form">
            {/* input name */}
            <Form.Group className="my-little-form">
                <Form.Control type="text"
                    placeholder="Enter contact name ..."
                    name="name"
                    value={user.name||""}
                    onChange={handleChange}
                // onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
                <Form.Text className="text-muted">Name is required !!</Form.Text>
            </Form.Group>

            {/* input email */}
            <Form.Group >
                <Form.Control type="text"
                    placeholder="Enter contact email ..."
                    name="email"
                    value={user.email||""}
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">Email is required !!</Form.Text>
            </Form.Group>

            {/* input phone */}
            <Form.Group >
                <Form.Control type="number"
                    placeholder="Enter contact phone ..."
                    name="phone"
                    value={user.phone||0}
                    onChange={handleChange}
                />
            </Form.Group>

            {/* add or edit button*/}
            {isEdit ?
                <img src={editBtn} alt="edit" className="edit-btn"
                    onClick={() => { handleEdit(); history.push('/') }}
                />

                :

                <img src={addBtn} alt="add" className="add-btn"
                    onClick={() => { handleAdd(); history.push("/") }}
                />
            }
        </Form>
    )
}

export default AddEditContact