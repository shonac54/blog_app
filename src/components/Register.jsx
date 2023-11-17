import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
    const [inputField, changeINputField] = useState(
        { "name": "",
         "profile": "",
          "email": "",
           "password": "" 
        }


    )
    const inputHandler = (event) => {
        changeINputField({ ...inputField, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/blog/adduser/", inputField).then(
            (response) => {
                alert(response.data.status)
            }
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">name</label>
                                <input type="text" className="form-control" name="name" value={inputField.name} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">profile</label>
                                <input type="text" className="form-control" name="profile" value={inputField.profile} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">email</label>
                                <input type="text" className="form-control" name="email" value={inputField.email} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">password</label>
                                <input type="text" className="form-control" name="password" value={inputField.password} onChange={inputHandler} />

                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button onClick={readValue} className="btn btn-success">SUBMIT</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register