import React from 'react';
const LanzamientoItem = (props) => {
    const { artist, title, description, imagen} = props;
    return (
        <div className="col-lg-4">
        <div className="lanzamientoRec">
        <img src={imagen} alt="KillingJoke"/>
        <span className="infoLanzRec">
            <em>{artist}</em>
            <div className="division"></div>
            <p>{title}</p>
            <div className="division"></div>
            <div dangerouslySetInnerHTML={{ __html: description }} />


        </span>
        </div>

    </div>
            );
};
            export default LanzamientoItem;