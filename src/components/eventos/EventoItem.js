import React from 'react';
const EventoItem = (props) => {
    const { title, description, imagen, info } = props;
    return (
        <div className="contenedorEventoDelMes">
                    <div className="contenidoEventoDelMes">
                        <img src={imagen} alt=""/>
                        <span className="infoEventoDelMes">
                            <em>{title}</em>
                            <div className="division"></div>
                            <p>{description}</p>
                            <div className="division"></div>
                            <div dangerouslySetInnerHTML={{ __html: info }} />
                        </span>
                    </div>
                </div>
            );
};
            export default EventoItem;