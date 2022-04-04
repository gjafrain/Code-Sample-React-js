import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
// STYLES
import Styles from './Style';
// REDUX
import { addCartItem } from '../../../redux/modules/cart/action';
import { Icon } from '../Icon';
import { SECONDARY, THIRD } from '../../../styles/colors';
import { Text, TouchableOpacity, View } from '..';

export default function AddCart({ cartImageBox = {}, product = {} }) {

    const dispatch = useDispatch(),
        [loader, setLoader] = useState(false);

    const add = useCallback(() => {
        setLoader(true)
        const onSuccess = ({ data }) => {
            setLoader(false)
        }
        const onFail = (err) => {
            setLoader(false)
        }
        const payload = {
            productId: product.id,
            productVarientId: product?.varients[0]?.id
        }
        dispatch(addCartItem({ data: payload, onSuccess, onFail }))
    }, [])
    return (
        <TouchableOpacity className="add-cart-button-container" onPress={add}>
            <Icon name="Plus" loader={loader} loaderSize={'small'} loaderColor={SECONDARY} size="xs" container={{ ...Styles.imageBox, ...cartImageBox }} imageStyle={{ tintColor: SECONDARY }} />
            <View className='addCartTextBox'>
                <Text className="addCartText add-cart-text">Add</Text>
            </View>
        </TouchableOpacity>
    )
}
