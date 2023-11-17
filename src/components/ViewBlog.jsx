import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogHeader from './BlogHeader'

const ViewBlog = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/blog/viewblog/").then(
            (response)=>{
                changeData(response.data)
                changeLoading(false)
            }
        )
    }
    const [isLoading, changeLoading] = useState(true)

    useEffect(()=>{fetchData()},[])

  return (
    <div>
        <BlogHeader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {isLoading ? (<div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>) : (
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                            <div class="card">
                                          
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.userid}</h5>
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <h5 class="card-title">{value.message}</h5>
                                                   

                                                    


                                                </div>
                                            </div>


                                        </div>
                                    }
                                )
                            )
                            }













                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ViewBlog