import React from "react";
export default function Nav(){
    return(
        <>
        <div className="container-fulid bg-dark">
            <div className="row pt-2 pb-1">
                <div className="col-4">
                    <ul>
                        <li className="d-inline text-white ml-1"><i className="text-info mr-1 fa fa-envelope"></i>info@gmail.com </li>
                        <li className="d-inline text-white ml-1"><i className="text-info mr-1 fa fa-phone"></i>+91 901114920</li>
                    </ul>
                </div>
                <div className="col-4">                 
                     <ul>
                        <li className="d-inline text-white ml-1"><i className="text-info mr-3 fa fa-user"></i>कॅलेंडर </li>
                        <li className="d-inline text-white ml-1"><i className="text-info mr-3 fa fa-user"></i>संपर्क</li>
                        <li className="d-inline text-white ml-1"><i className="text-info mr-3 fa fa-user"></i>करियर</li>
                    </ul>
                </div>
                <div className="col-4 text-right">
                    <button className="btn btn-info rounded mr-2">Customer Care</button>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row pt-2 pb-1">
                <div className="col-4">
                    <img src="https://www.nagebabamultistate.in/uploads/163997629750642829.jpg" />
                </div>
                <div className="col-4">
                     <button className="btn btn-info rounded mr-2">Net Banking</button>
                     <button className="btn btn-info rounded m-2">Mobile Banking</button>
                </div>
                <div className="col-4 text-center">
                    <h5 className="font-weight-bold">आम्हाला भार नाही;<br/>आधार द्यायचा आहे</h5>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-info">
            <div className="row">
                <div className="col-12">
                    <nav class="navbar navbar-expand-lg navbar-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">मुख्यपृष्ठ</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                आमच्याबद्दल              
                            </a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                आमच्याबद्दल              
                            </a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                आमच्याबद्दल              
                            </a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}