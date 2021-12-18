import { useState, useEffect } from "react"
import axios from "axios";
import { Primiumcss } from "./Primiumcss";


const Primium = () => {

    const [alldata, setAlldata] = useState([]);



    useEffect(() => {
        getdata()
    }, [])

    const getdata = () => {
        axios.get("http://localhost:3535/showlove")
            .then((response) => {
                const data = response.data
                // console.log(data.showlove)
                setAlldata(data.showlove)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    console.log(alldata)

    return (
        <Primiumcss>
            <div>
                <h1>Primiumship Aloted Videos</h1>

                <div className="container" style={{ backgroundColor: "black", height: "500px", marginBottom: "10px" }}>
                    <div>

                    </div>
                </div>
                <div className="Infinite">
                    <div className="styles_sliderRow_2xH8dIbs"></div>
                </div>
                <div className="lower_content">
                    {
                        alldata.map(e => (
                            <div>
                                <img src={`${e.image_url}`} ></img>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Primiumcss>
    )
}


export { Primium }