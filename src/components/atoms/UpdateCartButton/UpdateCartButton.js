import React, { useCallback, useState } from 'react';
import { View, Text, ActivityIndicator } from '../';
import { useDispatch } from 'react-redux';
import { Icon } from '../Icon';
// STYLES
import Styles from './Style';
//
import { updateCartItem } from '../../../redux/modules/cart/action';
import { errorMessage } from '../../../utils/common';
import { SECONDARY, THIRD } from '../../../styles/colors';
import { TouchableOpacity } from '../TouchableOpacity';

export default function UpdateCartButton({ cartItem }) {

    const dispatch = useDispatch(),
        [loader, setLoader] = useState(false);

    const update = useCallback((quantity) => {
        setLoader(true)
        const onSuccess = () => setLoader(false)
        const onFail = ({ message }) => {
            errorMessage(message);
            setLoader(false);
        }
        const payload = {
            cartItemId: cartItem.id,
            quantity
        }
        dispatch(updateCartItem({ data: payload, onSuccess, onFail }))
    }, [cartItem.id])

    return (
        <View style={Styles.container}>
            <TouchableOpacity onPress={loader ? false : () => update(cartItem.quantity - 1)} className="imageBox">
                <Icon
                    name={'Minus'} size={'xs'}
                    container={Styles.imageBox}
                    imageStyle={Styles.image}
                />
            </TouchableOpacity>
            {
                !loader ? <Text style={Styles.cartCount}>{cartItem.quantity}</Text>
                    : <ActivityIndicator color={SECONDARY} style={Styles.loader} />
            }
            <TouchableOpacity onPress={loader ? false : cartItem.quantity === 9 ? null : () => update(cartItem.quantity + 1)} className="imageBox">
                <Icon
                    name={'Plus'} size={'xs'}
                    imageStyle={Styles.image}
                    container={{ ...Styles.imageBox, ...{ opacity: cartItem.quantity === 9 ? .5 : 1 } }}
                />
            </TouchableOpacity>
        </View>
    )
}
