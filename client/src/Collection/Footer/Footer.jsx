
import { Footercss } from "./Footercss"

const Footer = () => {


    return (
        <Footercss>
            <div id="footer" className="logos">
                <div id="top_content" className="flex_wrapper">
                    <div>
                        <div className="flex_wrapper">
                            <img className="logos" src="mail.png" />
                            <p>hello@discovery.com</p>
                        </div>
                        <div className="flex_wrapper">
                            <img className="logos" src="calllogo.png" />
                            <p>022-43491100 +91-8433774761 (Mon-Fri, excluding Holidays 11am-4pm)</p>
                        </div>
                        <div className="flex_wrapper">
                            <img className="logos" src="discoveryicon.png" />
                            <p>Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla Complex, Mumbai 400051</p>
                        </div>
                    </div>

                        <div>
                            <p>Follow Us</p>
                            <div className="flex_wrapper">
                                <img className="logos2" src="YOUTUBE.png" />
                                <img className="logos2" src="FB.png" />
                            </div>
                        </div>

                        <div>
                            <p>discovery+ App</p>
                            <div className="flex_wrapper">
                                <img className="logos2" src="Appstore.png" />
                                <img className="logos2" src="Googleplay.png" />
                            </div>
                        </div>

                </div>
                <div id="bottom_content">
                    <div>
                        <div className="flex_wrapper">
                            <p>Advertising Services Terms & conditions</p>
                            <p>Online Advertising Order</p>
                            <p>Support</p>
                        </div>
                    </div>
                    <div>
                        <hr />
                    </div>
                    <div>
                        <div className="flex_wrapper">
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>FAQ's</p>
                        </div>
                    </div>
                </div>
            </div>
        </Footercss>
    )
}

export { Footer }