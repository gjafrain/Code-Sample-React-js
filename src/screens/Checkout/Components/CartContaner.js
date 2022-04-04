import { HCart, Price, View } from '../../../components/atoms';

export default function CartContaner({ items = [], cart = {}, className }) {
    return (
        <View className={'cart-wrapper ' + className}>
            <View className='title'>Order Summary</View>
            <View className='cart-list'>
                {items?.map((product, key) => <HCart product={product} index={key} />)}
            </View>
            <View className='cart-subtotal'>
                <View className='label'>Cart Total</View>
                <View className='value'><Price price={cart.total} isSplit={false} /></View>
            </View>
            <View className='delivery-charges-wrapper'>
                <View className='label'>Delivery Charges</View>
                <View className='value'> <Price price={"00.00"} isSplit={false} /></View>
            </View>
            <View className='cart-total-wrapper'>
                <View className='label'>Order Total</View>
                <View className='value'><Price price={cart.total} isSplit={false} /></View>
            </View>
        </View>
    )
}

