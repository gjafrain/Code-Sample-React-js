import React from 'react';
import { useSelector } from 'react-redux';
// CHILD 
import { AddCartButton } from '../AddCartButton';
import { OutofStock } from '../OutofStock';
import { UpdateCartButton } from '../UpdateCartButton';

export default function CartButtonHandler({ product, cartImageBox, varient = {} }) {

    const cartItems = useSelector(state => state.cart.items),
        cartItem = cartItems.find(x => x.productId === product.id);

    return (varient?.isActiveStock && varient?.stock < 1)
        ? <OutofStock />
        : !cartItem
            ? <AddCartButton cartImageBox={cartImageBox} product={product} />
            : <UpdateCartButton cartImageBox={cartImageBox} product={product} cartItem={cartItem} />
}
