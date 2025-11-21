import React, {useState} from 'react'
import submitForm from './submitForm';
import "./styles.css"

const initialState={
    name: '',
    email: '',
    message: ''
}

function ContactForm() {
    const [formDetails, setFormDetails]=useState(initialState)
    return (
        <form
            action="https://questions.greatfrontend.com/api/questions/contact-form"
            method="post"
            // Ignore the onSubmit prop, it's used by GFE to
            // intercept the form submit event to check your solution.
            onSubmit={submitForm}>
            <div className='flexColumn gap-16'>
                <div className='flexColumn gap-8'>
                    <label htmlFor='name'>Name</label>
                    <input className='width-50' type="text" id='name' placeholder='name' required value={formDetails.name} name='name' onChange={(e) => setFormDetails((prev) => {
                        return {
                            ...prev,
                            name: e.target.value
                        }
                    })} />
                </div>
                <div className='flexColumn gap-8'>
                    <label htmlFor='email'>Email</label>
                    <input className='width-50' type="email" id='email' required placeholder='email' value={formDetails.email} name='email' onChange={(e) => setFormDetails((prev) => {
                        return {
                            ...prev,
                            email: e.target.value
                        }
                    })} />
                </div>
                <div className='flexColumn gap-8'>
                    <label htmlFor='message'>Message</label>
                    <textarea className='width-50' required id='message' value={formDetails.message} placeholder='message' name='message' onChange={(e) => setFormDetails((prev) => {
                        return {
                            ...prev,
                            message: e.target.value
                        }
                    })}></textarea>
                </div>
                <div>
                    <button>Submit</button>
                </div>

            </div>
        </form>
    )
}

export default ContactForm