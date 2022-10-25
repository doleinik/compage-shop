import React from 'react';
import Button from "../Button/Button";
import './ProductItem.css';


const ProductItem = ({product, className, loading}) => {

    if (loading) {
        return <h2 style={{color:"black"}}>Loading...</h2>
    }

    return (
        <div className={'product ' + className}>
            <div className={'img'}>
                <img src={product.img} alt="img"/>
            </div>
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.body}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;
