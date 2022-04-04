import { useEffect } from 'react';
import { View, AddressList } from '../../../components/atoms';

export default function Address() {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    return (
        <View className="section-container">
            <View className="address-list-container">
                <AddressList />
            </View>
        </View>
    )
}
