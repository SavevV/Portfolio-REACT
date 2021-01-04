import React from "react";
import {VscDatabase,VscCode,VscSymbolArray} from "react-icons/vsc"

const Services = () =>{

    const [header] = React.useState({
        title:"SERVICES",
        subtitle:"My services"
    });

    const [state] = React.useState([
        {
            id:1,
            icon:'VscSymbolArray',
            title:'BACKEND',
            text:'Java, C++, Python'
        },
        {
            id:2,
            icon:'VscCode',
            title:'FRONTEND',
            text:'HTML, CSS, Java Script, React, JSON'
        },
        {
            id:3,
            icon:'VscDatabase',
            title:'DATABASE MANAGEMENT SYSTEM',
            text:'SQL'
        }
    ]);

    return (
        <div className="services">
            <div className="container">
                <div className="service-header">
                    <div className="common">
                        <h3 className="heading">{header.title}</h3>
                        <h2 className="mainHeader">{header.subtitle}</h2>
                    </div>
                    <div className="commonBorder"></div>
                    <div className="row">
                        {state.map(info =>(
                            <div className="col-4">
                                <div className="servicesBox">
                                    <div className="titleBox">
                                        <VscSymbolArray className="icons"/>
                                        <h2>{info.title}</h2>
                                        <p>{info.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;