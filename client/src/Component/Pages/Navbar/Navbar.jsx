import React from 'react'
import styled from "styled-components"
import img from '../Img/Rectangle 4.png'
import search from '../Img/search.png'
import { Link } from 'react-router-dom'
import Db from '../../../Utils/request'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useState, useCallback } from 'react'
function Navbar() {
  const {setshowData,showdata } = useContext(AuthContext);
  //signin
  const {token, handleLogout, otpSend,Login} = useContext(AuthContext);
  const handleClick = ()=>{
      handleLogout()
      localStorage.setItem("email","")
      localStorage.setItem("mob","")
      localStorage.setItem("otp","")
      
  }
  //
  const [showlove, setShowlove] = useState([]);
  const handlechange = async (event) => {
    const value = event.target.value;
    await Db.get(`showlove/${value}`)
      .then(({ data }) => {
        setShowlove(data.showlove)
        return;
      })


  }
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args)
      }, 2000);
    }
  }
  const optimize = useCallback(
    debounce(handlechange),
    []
  )
  return (
    <Toolbar className='sticky-top' style={{ backgroundColor: "rgb(18,19,23)", padding: "4%", paddingTop: "0px", paddingBottom: "0px" }}>
      <nav className="navbar navbar-expand-sm navbar-dark " style={{ backgroundColor: "rgb(18,19,23)" }}>
        <div className="container-fluid py-2 ps-0">
          <div className="dropdown px-3">
            <span className="navbar-toggler-icon dropbtn"></span>
            <div className="dropdown-content bg-black p-3 mt-0" style={{ minWidth: "240px", borderRadius: "10px" }}>
              <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ width: "100%" }}>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                <label className="btn-outline-dark px-3  py-1" for="btnradio1">Kids Safe</label>
                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label className="btn-outline-dark px-3 py-1" for="btnradio2">All Access</label>
              </div>
              <ul className="list-group" >
                <p className='mb-0' >
                  <a style={{ border: "none", background: "none", color: "#838991" }} className="hov list-group-item" aria-current="page">Redeem Voucher</a></p>
                <p className='mb-0' >
                  <a style={{ border: "none", background: "none", color: "#838991" }} className="hov list-group-item" aria-current="page">Favourites</a></p>
                <p className='mb-0' >
                  <a style={{ border: "none", background: "none", color: "#838991" }} className="hov list-group-item" aria-current="page">WatchList</a></p>
                <p className='mb-0' >
                  <a style={{ border: "none", background: "none", color: "#838991" }} className="hov list-group-item" aria-current="page">Link TV App</a></p>
              </ul>

            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item ">
                <img className='pt-1 mx-2 me-4' src={img} alt="" style={{ maxWidth: "180px", maxHeight: "35px" }} />
              </li>
              <li className="nav-item ms-5 px-1">
                <Link to="/" className="nav-link hov" aria-current="page">Home</Link>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link hov">Explore</a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link hov">Kids</a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link hov">Shorts</a>
              </li>
              <li className="nav-item px-1">
                <a className="nav-link hov">Mindblown</a>
              </li>
              <li className="nav-item px-1">
                <Link to="/payment" style={{textDecoration:'none'}} className="nav-link hov">Premium</Link>
              </li>
            </ul>
          </div>

          <li className="nav-item dropdown" >
            <form className="d-flex pe-2 dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
              <div className="input-group" >
                <input style={{ border: "none", backgroundColor: "rgb(18,19,23)", color: "white", width: "288px" }} type="text" name="search" onChange={optimize} className="dropdown-toggle" placeholder="Search for a show, episode, shorts etc." />
                <button style={{ border: "none", backgroundColor: "rgb(18,19,23)" }} className="pe-0" type="button" id="button-addon2">
                  <img src={search} alt="" />
                </button>
              </div>
            </form>
            <ul className="dropdown-menu p-2 debou" aria-labelledby="navbarDropdown" style={showlove?.length > 0 ? {
              color: 'white', maxHeight: "160px",
              overflow: "hidden",
              width: "300px",
              backgroundColor: "rgb(18,19,23)",
              overflowY: "scroll",
              borderRadius: "10px"
            } : { display: 'none' }}>
              {

                showlove?.length > 0 &&

                <li style={{}}>
                  {
                    showlove?.map((el, i) =>

                      <Link style={{ textDecoration: "none", color: "white" }} to="/watch"><p className='px-2 pt-1 col10' onClick={()=>{
                        setshowData({...el})
                    }}><span><img className='pe-2' src={el.image_url} alt="" style={{ maxWidht: "36px", maxHeight: "36px", borderRadius: "5px" }} /></span>{el.title}</p></Link>

                    )
                  }

                </li>

              }
            </ul>


          </li>

          <div>
            <ul className="navbar-nav">
              <li className="nav-item px-3">
              {
                !Login?<Link to="/signin" > <button className='btn-primary px-2' style={{ borderRadius: "5px" }}>Sign In</button></Link>: <button className='btn-primary px-2' style={{ borderRadius: "5px" }} onClick={
                  handleClick}>My Account</button>

            }
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Toolbar >

  )
}

export default Navbar

const Toolbar = styled.header`

::-webkit-scrollbar {
      display: none !important
} 
.dropclassName{
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
.nav-link{
  font-Size: 16px
}
a:hover{
 color:white
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}
.input-group{
  @media all and (max-width:1280px){   
     display:none   
   } 
}
.btn-primary{
  @media all and (max-width:950px){   
     display:none   
   } 
}
input{
  outline:none;
  
}
.btn{
  outline:none
}
.input-group{
  border-bottom:1px solid gray;

}
.input-group:hover{
  border-bottom:1.5px solid rgb(13,110,253) !important

}
.collapse{
 
    white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
.hov:hover{
    color:white !important
}
.col10 {
    white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
}
`