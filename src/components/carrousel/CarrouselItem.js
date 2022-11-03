import React from 'react';
const CarrouselItem = (props) => {
    const { imagen } = props;
    return (
        
                    
                    <img
                        className="d-block w-100"
                        src={imagen}
                        alt="First slide"
                    />
                   
               
            );
};
            export default CarrouselItem;