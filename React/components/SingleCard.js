import React from 'react';
import { useNavigate } from "react-router-dom";

const SingleCard = ({ item }) => {
    



    return (
        <div >
            <img src={item.photo} alt="" />
            <div>{item.name}</div>
      </div>
    );
};

export default SingleCard;