import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './ContactList.css'
import { getContacts } from '../../JS/Actions/actionsContact'
import ContactCard from '../ContactCard/ContactCard'



const ContactList = () => {

    const contacts = useSelector(state => state.contactReducer.contacts)
    const loadContacts = useSelector(state => state.contactReducer.loadContacts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContacts())
    }, [dispatch]);

    return (

        loadContacts ? <h1>estenaaaaaaa</h1>
            :
            <div className="contacts-content">
                <div className="contacts-list">
                    {contacts.map(contact =>
                        <ContactCard contact={contact} key={contact._id} />
                    )}
                </div>
            </div>
    )
}

export default ContactList
