import React, { useState } from 'react';
import { client } from '../../client';

import './ContactForm.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "",
        message: ""
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, type, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            type: type,
            message: message,
        };

        client.create(contact).then(() => {
            setLoading(false);
            setIsFormSubmitted(true);
        })
    }

    return (
        <>
            {!isFormSubmitted ? (
                <div className="contact__form-container">
                    <label>Form</label>
                    <div className="contact__form-element">
                        <input
                            className="p-text"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            value={name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="contact__form-element">
                        <input
                            className="p-text"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className='contact__form-element'>
                        <select id="select-type" name="type" onChange={handleChangeInput}>
                            <option value='default' disabled selected>How can we help:</option>
                            <option value='lessons'>Book a lesson</option>
                            <option value='rental'>Rent material</option>
                            <option value='info'>Make a question</option>
                        </select>
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type="button" onClick={handleSubmit}>
                        {loading ? 'Sending' : 'Send'}
                    </button>
                </div>
            ) : (
                <div>
                    <h3>Thanks for getting in touch!</h3>
                </div>
            )}
        </>
    )
}

export default ContactForm