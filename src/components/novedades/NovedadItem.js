import React from 'react';
const NovedadItem = (props) => {
    const { title, body, imagen } = props;
    return (
        <div className="novedades">
            
                    <div className="cajaNovedad">
                        <img src={imagen} alt="" />
                        <span className="infoNovedad">
                            <em>{title}</em>
                            <div className="division"></div>
                            <div dangerouslySetInnerHTML={{ __html: body }} />

                        </span>
                    </div>

                
        </div>
            );
};
            export default NovedadItem;