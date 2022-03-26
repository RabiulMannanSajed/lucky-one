import React from 'react';
import './Product.css';
import { BsFillCartFill } from "react-icons/bs";

const Product = (props) => {
    const { pigeon, addBtnClick } = props;
    const { name, id, img, price } = pigeon;
    // const { addBtnClick } = props.addBtnClick;

    return (
        <div className='pigeon'>
            <img src={img} alt="" />
            <div className='pigeon-info'>
                <h2 className='pigeon-name'>Name: {name}</h2>
                <p>Price: {price}</p>
            </div>

            <button onClick={() => addBtnClick(pigeon)} className='btn-cart'>
                <p className='btn-text' >Add to favorite list</p> <BsFillCartFill></BsFillCartFill>
            </button>

        </div>
    );
};

export default Product;