import React, { useEffect,useState } from "react";
import axios from "axios";
export default function Scheme(){

    var [sch,setSch]=useState();
    useEffect(()=>{
        loadapi();
    })
    var loadapi=async()=>{
        var res=await axios.get('https://www.nagebabamultistate.in/api/service_api');
        //console.log(res.data);
        setSch(res.data)


    }
console.log(sch)
    return(
        <>
  
        <div className="container-fluid">
        <div className="row">
            <div className="col-12 mt-4 text-white">

                <h4 className="text-info text-center font-weight-bold">समाधानी व सुरक्षित सेवा</h4>
                </div>                
           <div className="col-12 mt-3">
            <div className="row">
            <div className="col-md-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <i className="fa fa-user text-info display-4"></i>
                            <h4 className="font-weight-bold mt-3">लॉकर सुविधा</h4>
                            <p className="mt-3 font-weight-bold">तुमच्या जवळच्या भागात सर्वोत्तम आणि अत्यंत कमी किमतीत लॉकर सेवा</p>
                           
                        </div>
                    </div>
                </div>
            </div>
               
                
           </div>
        </div>
       </div>
        </>
    )
}