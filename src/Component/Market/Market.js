import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Market.css'

const Market = () => {
    const [pigeons, setPigeons] = useState([]);
    const [cart, setCart] = useState([]);

    //State for Choose one 
    const [chooseOne, setChooseOne] = useState([])

    //Function for Add 4 pigeon  favorite list  
    const addBtnClick = (pigeon) => {
        const newCart = [...cart, pigeon];
        if (newCart.length > 4) {
            return 0;
        }
        setCart(newCart);

    }
    //Function to remove all selected birds
    let removeAll = [];
    const chooseAgain = () => {

        setCart(removeAll);
    }
    //Function choose for me button
    const chooseOneForME = () => {
        const newChooseOne = [...cart];
        setChooseOne(newChooseOne[Math.floor(Math.random() * newChooseOne.length)]);
        window.alert(`${newChooseOne[Math.floor(Math.random() * newChooseOne.length)].name}`);
    }

    useEffect(() => {
        fetch('pigeon.json')
            .then(res => res.json())
            .then(data => setPigeons(data))
    }, []);

    return (
        <div className='market' >

            <div className="pigeon-container">
                {
                    pigeons.map(pigeon => <Product
                        key={pigeon.id}
                        pigeon={pigeon}
                        //addBtnClick work is add product name in favorite list.
                        addBtnClick={addBtnClick}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2> Pigeon list</h2>
                <div>
                    {cart.map(bird => <p key={bird.id}>{bird.name}</p>)}
                </div>

                {/* button part */}
                <button onClick={() => chooseOneForME(chooseOne)} className='btn-choose btn1'>
                    <p>Choose one for me</p>
                </button>
                <br />
                <button onClick={() => chooseAgain(chooseOne)} className='btn-choose btn2'>
                    <p>Choose Again</p>
                </button>
            </div>

        </div>
    );
};

export default Market;