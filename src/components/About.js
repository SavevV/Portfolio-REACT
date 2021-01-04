import React from 'react';

const About = () =>{

    const [header] = React.useState({
        title:'About Me',
        subtitle:''
    });

    const [state] = React.useState({
        title:'QUALIFICATION',
    });

    return(
        <div className="about">
            <div className="container">
            <div className="common">
                <h2 className="heading">{header.title}</h2>
                <h2 className="mainHeader">{header.subtitle}</h2>
            </div>
                <div className="partOne">
                    <div className="titlePart">
                        <h2>{state.title}</h2>
                    </div>
                    <div className="textPart">
                        <p>---Strong background in computer science (algorithms, data structure, reliability, etc.).</p>
                        <p>---Excellent knowledge of front-end technology HTML, CSS, ЈavaScript, JSON, Ajax and frameworks bootstrap 4 and jQuery. Development of fully responsive design and operation and manipulation of DOM elements.</p>
                        <p>---Excellent knowledge of technology Java and frameworks hibernate, spring boot(MVC pattern, spring security, JSON web tokens, spring data JPA, etc.).</p>
                    </div>
                </div>
                <div className="partTwo">
                    <div className="titlePart">
                        <h2>EDUCATION</h2>
                    </div>
                    <div className="textPart">
                        <h4>Naum Naumovski Borce - High School</h4>
                        <p>2012-2016<br/>I have attended High School at the Gymnasium Naum Naumovski Borce in Probistip , focused
                            on Natural Science and Mathematics. High School was the place i got introduced in to the
                            computer programing, by learned C and C++.</p>
                        <h4>Faculty of computer science and engineering</h4>
                        <p>2016 - </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;