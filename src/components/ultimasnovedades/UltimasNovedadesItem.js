import React from 'react';
import { NavLink } from 'react-router-dom';
const UltimasNovedadesItem = (props) => {
    const { title, imagen } = props;
    return (

        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6" >
            <a><NavLink activeClassName="activo" exact to="/novedades">
            <div className="contenidonovedades">
                
                    <img src={imagen} alt="" />
                    <div className="division"></div>
                    <span className="novedad">

                        <em>{title}</em>


                    </span>
                
            </div>
            </NavLink></a>
        </div>
    );
};
export default UltimasNovedadesItem;