import { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Ref, Sticky } from 'semantic-ui-react';
//
import { Button, HCart, Price, View } from "../../components/atoms";
import { TheContainer } from "../../components/molecules";
import DeliverySots from './Components/DeliverySots';
import Address from './Components/Address';
import AdditionalNote from './Components/AdditionalNote';
import PaymentMode from './Components/PaymentMode';
import { errorMessage, toggleDimmer, warningMessage } from '../../utils/common';
import { placeOrder } from '../../redux/modules/order/action';
import { fetchCartById } from '../../redux/modules/cart/action';
import CartContaner from './Components/CartContaner';
import './Style.scss';


export default function Checkout() {

    const contextRef = useRef(),
        dispatch = useDispatch(),
        { push } = useHistory(),
        [activeDeliverySlot, setActiveDeliverySlot] = useState(null),
        [activePaymentMode, setActivePaymentMode] = useState(1),
        { items, cart } = useSelector(state => state.cart),
        addressList = useSelector(state => state.address.addressList);

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!items.length) {
            warningMessage('Please add item into cart to checkout');
            push('/home')
        }

    }, [items])

    const handlePlaceOrder = () => {

        const onSuccess = ({ data }) => {
            dispatch(fetchCartById({}))
            push('/thanksOrder', { id: data.id })
        }
        const onError = ({ message }) => {
            errorMessage(message);
        }

        if (!addressList.length) return warningMessage('Please add delivery address')

        const defaultAddress = addressList.find(x => x.isDefault);

        if (!defaultAddress) return warningMessage('Please tell us where to place you order!')

        const payload = {
            cartId: cart.id,
            addressId: defaultAddress?.id,
            deliveryStartTime: activeDeliverySlot?.start,
            deliveryEndTime: activeDeliverySlot?.end,
            paymentMethod: activePaymentMode
        }
        dispatch(placeOrder({ data: payload, onSuccess, onError }))
    }


    return (
        <TheContainer>
            <Ref innerRef={contextRef}>
                <View>
                    <View className='checkout'>
                        <CartContaner items={items} cart={cart} className="app" />
                        <View className="left-widget">
                            <DeliverySots setActive={setActiveDeliverySlot} activeSlot={activeDeliverySlot} />
                            <Address />
                            <PaymentMode active={activePaymentMode} setActive={setActivePaymentMode} />
                            <AdditionalNote />
                        </View>
                        <Sticky className="right-widget" context={contextRef} offset={80}>
                            <CartContaner items={items} cart={cart} className="web" />
                        </Sticky>
                    </View>
                    <View className='checkout-footer'>
                        <Button
                            className='checkout-btn slide-button-primary-down'
                            label={'Place Order'}
                            showIcon={true}
                            iconBefore={false}
                            icon={'RightArrow'}
                            iconText={<Price isSplit={false} price={cart.total} />}
                            size={'md'}
                            onPress={handlePlaceOrder}
                        />
                    </View>
                </View>
            </Ref>
        </TheContainer>
    )
}
