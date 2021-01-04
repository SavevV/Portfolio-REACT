import React from 'react';

const Contact = () =>{

    const [header] = React.useState({
        title: 'Contact'
    });

    const [contact] = React.useState([
        {id:1,title:'name',text:'Vladimir Savev'},
        {id:2,title:'linkedin',text:'https://www.linkedin.com/in/vladimir-savev-1940981a4/'},
        {id:1,title:'phone',text:'074 223 913'},
        {id:2,title:'email',text:'vladimir.savev@hotmail.com'},
    ])

    return(
        <div className="contact">
            <div className="common">
                <h2 className="heading">{header.title}</h2>
            </div>
            <div className="commonBorder"></div>
            {contact.map(info => (
                <div className="col-61">
                    <strong>{info.title}</strong>
                    <p>{info.text}</p>
                </div>
            ))};
        </div>
    );
};

export default Contact;