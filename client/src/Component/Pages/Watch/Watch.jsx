import React from 'react'
import styled from 'styled-components'
import pri from '../Img/pri.png'
import tri from '../Img/tri.png'
import share from '../Img/share.png'
import like from '../Img/like.png'
import Showlove from '../Home/Showlove'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Toolbar = styled.header`
.hov:hover{
    color:white !important
}
.hov1:hover{
    border:1px solid white !important;
    color:white!important;
}

`
function Watch() {
  
    const { handlemail, otpSend,showdata,setshowData } = useContext(AuthContext);
  
       if(showdata==""){
        return <Redirect to="/"></Redirect>
       }
    return (
        <Toolbar>
            <div style={{ paddingTop: "10px" }}>
                <div className="card" style={{ maxWidth: "1100px", margin: "auto", backgroundColor: "rgb(26,28,33)", borderRadius: "1%", border: "none" }}>
                <Link style={{ textDecoration: "none" }} to="/swatch">
                        <img style={{ borderRadius: "2%" }} src={showdata?.image_url} className="card-img-top" alt="..." /></Link>
                    <div className="card-body" style={{ color: "white" }}>
                        <div className="row">
                            <div className="col-12 col-md-7 mb-3">
                                <h2 className="card-title h2"><img className='pe-2' src={pri} alt="" style={!showdata?.prime ? { display: "none" } : null} /> {showdata?.title}</h2>
                                <ul className="list-group list-group-horizontal ps-4 pb-2" style={{ color: "#838991" }}>
                                    <li className="me-4">Fashion</li>
                                    <li className="me-4">Lifestyle</li>
                                    <li className="me-4">Weddings</li>
                                </ul >
                                <button className='btn-primary p-2 px-3 h6' style={{ borderRadius: "5px", fontWeight: "700" }}><span> <img className='pe-2' src={tri} alt="" /></span>Watch Now</button>

                                <p className="card-text mb-0 py-1" style={{ color: "#838991" }}>{showdata?.description}</p>
                                <p className="card-text pt-0" style={{ color: "#838991" }}>Age Reting : U</p>
                            </div>
                            <div className="col-12 col-md-5 px-4">
                                <div className="row " style={{ width: "100%" }}>
                                    <div className="col mx-1 hov1" style={{ border: "1px solid #838991", borderRadius: "4px" }}>
                                        <p className='mb-0 text-center py-2 hov' style={{ color: "#838991" }}><span><img src={like} alt="" /></span> Favourite</p>

                                    </div>
                                    <div className="col mx-1 hov1" style={{ border: "1px solid #838991", borderRadius: "4px" }}>
                                        <p className='mb-0 text-center py-2 hov' style={{ color: "#838991" }}><span><img src={share} alt="" /></span> Share</p>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-group-horizontal " style={{ color: "#838991", fontSize: "14px" }}>
                                        <li className="nav-item px-1 hov" style={{ color: "#c4c5c7", fontSize: "16px" }}>
                                            Languages
                                        </li>
                                        <li className="nav-item px-1 hov">
                                            Telugu
                                        </li>
                                        <li className="nav-item px-1 hov">
                                            Hindi
                                        </li>
                                        <li className="nav-item px-1 hov">
                                            English
                                        </li>
                                        <li className="nav-item px-1 hov">
                                            Tamil
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr style={{ opacity: "0.1" }} />
                        </div>
                    </div>

                </div>
                <div style={{ maxWidth: "1190px", margin: "auto" }}>
                    <Showlove />

                </div>

            </div>
        </Toolbar>
    )
}

export default Watch
