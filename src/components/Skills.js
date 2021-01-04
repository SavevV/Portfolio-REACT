import React from 'react';

const Skills = () =>{

    const [header] = React.useState({
        title:"SKILLS",
        subtitle:"Personal skills"
    });

    return(
        <div className="skills">
            <div className="common">
                <h3 className="heading">{header.title}</h3>
                <h2 className="mainHeader">{header.subtitle}</h2>
            </div>
            <div className="commonBorder"></div>
            <div className="paragraphSkills">
                <p>Ability to work with teams.</p>
                <p>Always ready and willing to learn new technologies.</p>
                <p>Ability to adapt on any work conditions.</p>
                <p>Ability to come up with idea for anything.</p>
                <p>Patient person with open-mindedness to solve problems and overcome obstacles.</p>
                <p>Great responsibility and willingness to take on challenges.</p>
                <p>Mostly self learning person with high ability to listen and correspond accordingly to demands and problem solving skills to meet tight project deadlines.</p>
                <p>Continuous improvement in order to achieve excellence and surpassing goals.</p>
                <p>Always ready to help in anything.</p>
            </div>
        </div>
    );
};

export default Skills;