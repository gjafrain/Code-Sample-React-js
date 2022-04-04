//
import { View, AddressList } from '../../../components/atoms';

export default function Address() {
    return (
        <View className='delivery-address-wrapper'>
            <View className='title'>Delivery Addresses</View>
            <View className='delivery-address-list custom-scroll'>
                <AddressList />
            </View>
            <View className='custom-overlay' />
        </View>
    )
}
