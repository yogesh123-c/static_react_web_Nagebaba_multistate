import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function Slider(){
    var[slidata,setSliderdata]=useState();
    useEffect(()=>{
        loadapi();
    })
    var loadapi=async()=>{
        var res=await axios.get('https://www.nagebabamultistate.in/api/slider_api');
        //console.log(res.data);
        setSliderdata(res.data)


    }
   console.log(slidata);
    return(
        <>
       <div className="container-fluid">
        <div className="row">
            <div className="col-12 p-0">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">

      <div class="carousel-item active">
            <img src="https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg" class="d-block w-100"/>
            </div>
    
            {
                slidata?.map((item)=>{
                    return(
                        <>
                            <div class="carousel-item">
                            <img src={`https://www.nagebabamultistate.in/uploads/${item.slider_img}`} class="d-block w-100"/>
                            </div>
                        </>
                    )
                })
            }
          
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </button>
        </div>
            </div>
        </div>
       </div>
        </>
    )
}