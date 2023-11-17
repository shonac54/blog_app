import axios from 'axios'
import React, { useState } from 'react'

const ViewMyBlog = () => {
    const [inputField,changeINputField]=useState(
        {
            
            "userid": ""
           
        }
    )
    const inputHandler=(event)=>{
        changeINputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/blog/viewmyblog/",inputField).then(
            (response)=>{
                changeResult(response.data)
            }
        )
    }

    const [result,changeResult]=useState(
        []
    )
  return (
    <div>
        
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label">userid</label>
                                <input type="text" className="form-control" name="userid" value={inputField.userid} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button onClick={readValue} className="btn btn-info">SEARCH</button>


                            </div>
                        </div>

                    </div>
                </div>

                {result.map(
                    (value,index)=>{
                        return <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">userid</label>
                                    <input type="text" className="form-control" value={value.userid} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">title</label>
                                    <input type="text" className="form-control" value={value.title} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">message</label>
                                    <input type="text" className="form-control" value={value.message} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    }
                )}
            </div>
    </div>
  )
}

export default ViewMyBlog