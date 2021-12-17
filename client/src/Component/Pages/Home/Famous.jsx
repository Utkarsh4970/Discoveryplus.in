import React from 'react'
import { useState, useEffect } from 'react';
import Dbdata from '../../../Utils/request'
import styled from "styled-components"
import { Link } from 'react-router-dom'
function Famous() {
    const [newly, setNewly] = useState([]);
    const getshowdata = async () => {
        await Dbdata.get("superstar")
            .then(({ data }) => {
                setNewly(data.superstar)
                return;
            })

    }

    useEffect(() => {
        getshowdata()
    }, [])

    const handlecolor = (id) => {
        const updated = newly.filter((e) => {
            if (e._id === id) {
                e.likestatus = !e.likestatus
            }
            return e;
        })
        setNewly(updated)
    }
    return (
        <Toolbar>
            <div style={{ padding: "4%", paddingTop: "1%" ,paddingBottom:"1%"}}>
            <h1 className='pt-3' style={{ fontSize: "20px", color: "white" }}>Discovery Superstars<Link to="/showall" className='float-end pt-0 hov' style={{ color: "#838991", fontSize: "16px", textDecoration: "none" }}>View All</Link></h1>
                <div className="row">
                    {
                        newly.map((e) => (
                            <div className="col col-6  g-3 col-lg-4 col-xl-3" key={e._id} >
                                    <div className="card  p-0 m-0" key={e._id} style={{ borderRadius: "10px", border: "none" }}>
                                        <img style={{ borderRadius: "10px" }} src={e.image_url} classname="img-fluid" alt="" />
                                        <div className="overlay1" style={{ padding: "1%" }}>
                                            <div className="row mb-0 pb-0">
                                                <h5 className='centered' >{e.title}</h5>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Toolbar>
    )
}

export default Famous

const Toolbar = styled.header`
* {box-sizing: border-box}
.card {
  position: relative;
}
.img-fluid {
  display: block;
  width: 100%;
  height: auto;
}

.overlay1 {
 
  position: absolute; 
  bottom: 0; 
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1; 
  width: 100%;
  transition: .5s ease;
  opacity:0;
  height:100%;
  color: white;
  padding:10px;
}
.card:hover .overlay1 {
  opacity: 1;
  
}
.centered{
 position: absolute;
  top: 95%;
  left: 80%;
  transform: translate(-50%, -50%); 
  @media all and (max-width:620px){   
     display:none
   } 

}


`