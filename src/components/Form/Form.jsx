import { useState } from "react";
import "./Form.css"
function Form() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })

    const handelFormSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            New form
            <form onSubmit={handelFormSubmit}>
                <div className='wrapper email-input-wrapper'>
                    <input 
                    type='email' 
                    value={formValues.email} 
                    onChange={(event)=>{setFormValues({...formValues, email:event.target.value})}}
                    />
                </div>

                <div className='wrapper password-input-wrapper'>
                    <input 
                    type='password' 
                    value={formValues.password}
                    onChange={(event)=>{setFormValues({...formValues, password:event.target.value})}}
                     />
                </div>
                <input type='submit' />
            </form>
        </div>
    )
}

export default Form