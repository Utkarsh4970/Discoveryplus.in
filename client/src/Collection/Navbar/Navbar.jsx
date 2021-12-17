import React from 'react'
import styled from "styled-components"
const Toolbar = styled.header`
  
.dropbtn {
  color: white;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}
.dropbtn:hover {color: #00ee08;}
`
function Navbar() {
    return (
        <div>
            <Toolbar className='sticky-top'>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "rgb(18,19,23)" }}>
                    <div className="container-fluid">
                        <div className="dropdown px-3">
                            <span className="navbar-toggler-icon dropbtn"></span>
                            <div className="dropdown-content bg-black p-3" style={{minWidth: "200px"}}>
                                <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                    <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off" />
                                    <label className="btn btn-outline-dark" for="btncheck1">KIds Safe</label>

                                    <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off" />
                                    <label className="btn btn-outline-dark" for="btncheck2">All Access</label>
                                </div>
                                <a className="btn btn-outline-dark"  href="#">Redeem Voucher</a>
                                <a className="btn btn-outline-dark" href="#">Favourites</a>
                                <a className="btn btn-outline-dark" href="#">WatchList</a>
                                <a className="btn btn-outline-dark"href="#">Link TV App</a>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled">Disabled</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

            </Toolbar >

            {/* 
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1639485731579-2818c52ebe7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="..." style={{maxWidth: "500px"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1639422839168-ba0bd0d21d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" className="d-block w-100" alt="..." style={{maxWidth: "500px"}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1639402479773-c1691911bf6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="d-block w-100" alt="..." style={{maxWidth: "500px"}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
        </div>


    )
}

export default Navbar