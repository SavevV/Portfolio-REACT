import React from "react";
import {IoLogoFacebook,IoLogoLinkedin,IoLogoGithub,IoLogoInstagram} from "react-icons/io5";

const Banner = () =>{

    const [state] = React.useState({
            title:"I am Vladimir Savev",
            text:"Hi, my name is Vladimir Savev, i’m from Probishtip. I’m a students on faculty of computer science and engineering on study programs informatics and computer engineering in last year of studies",
            image:"",
        });

    return <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                <div className="header_content">
                    <div className="header_section">
                        <ul className="header_ul">
                            <li><IoLogoFacebook/></li>
                            <li><IoLogoInstagram/></li>
                            <li><IoLogoLinkedin/></li>
                            <li><IoLogoGithub/></li>
                        </ul>
                        <h1>{state.title}</h1>
                        <p>{state.text}</p>
                        <div className="header_buttons">
                            <a href="" className="btn btn-outline">My Portfolio</a>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-6">

                </div>
            </div>
        </div>
    </header>

};

export default Banner;
