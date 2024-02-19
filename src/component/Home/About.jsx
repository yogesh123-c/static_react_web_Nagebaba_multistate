import React, { useEffect,useState } from "react";
import axios from "axios";
export default function About(){

    var [abt,setAbt]=useState();
    useEffect(()=>{
        loadapi();
    })
    var loadapi=async()=>{
        var res=await axios.get('https://www.nagebabamultistate.in/api/about_api');
        //console.log(res.data);
        setAbt(res.data)


    }
    console.log(abt);
    return(
        <>
        <section className="bg-info">
        <div className="container">
        <div className="row">
            <div className="col-6 p-2 bg-info text-white">
              <img src={`https://www.nagebabamultistate.in/uploads/${abt?.[0]['about_image']}`} alt="" />
            </div>
            <div className="col-6 p-2 bg-info text-white">
              <h3 className="text-white font-weight mt-4">संस्थेविषयी</h3>
              <h4 className="text-white font-weight mt-4">{abt?.[0]['title']}</h4>
            <p className="text-white font-weight mt-2">{abt?.[0]['description']}</p>
            <button className="btn btn-dark">Read More</button>
            </div>
        </div>
        </div>        
        </section>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 p-0 rounded">
                            <div className="card card-body bg-info text-center">
                                <h4 className="font-weight-bold text-white mt-3">विश्वसनीय सेवा
                                        आम्ही आमच्या ग्राहकांवर विश्वास ठेवतो</h4>
                            </div>
                        </div>
                        <div className="col-md-4 p-0 rounded">
                            <div className="card card-body bg-dark text-center">
                                <h4 className="font-weight-bold text-white mt-3">365 दिवस 12 तास उघडे
                                                                +91 95525 54010,4057</h4>
                            </div>
                        </div>
                        <div className="col-md-4 p-0 rounded">
                            <div className="card card-body bg-info text-center">
                                <h4 className="font-weight-bold text-white mt-3">
                                        तज्ञ आणि व्यावसायिक
                                        उत्कृष्ट संघ आणि समर्थन</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
        </>
    )
}