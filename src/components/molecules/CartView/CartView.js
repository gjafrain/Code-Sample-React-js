import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { View, Price, Button, HCart } from '../../atoms';
import { Label } from 'semantic-ui-react';
import languageContext from '../../../utils/context';

export default function Cart({ push }) {
    const consts = useContext(languageContext)
    const { items, cart } = useSelector(state => state.cart)
    return (
        <View className='cart-wrapper'>
            <View className='cart-header'>
                <Label as='a' color='red' ribbon>
                    <View className='title'>{consts.VIEW_BASKET}</View>
                </Label>
                <View className='item-count'>({items.length} Item{items.length > 1 ? 's' : ''})</View>
            </View>
            <View className='cart-list'>
                {items?.map((product, key) => <HCart product={product} index={key} />)}
            </View>
            {items.length
                ? <View className='cart-footer'>
                    <Button
                        className='checkout-btn slide-button-primary-down'
                        label={consts.CHECKOUT}
                        showIcon={true}
                        iconBefore={false}
                        icon={'RightArrow'}
                        iconText={<Price isSplit={false} price={cart.total} />}
                        size={'md'}
                        onPress={() => push('/checkout')}
                    />
                </View>
                : <></>
            }
        </View>
    )
}
