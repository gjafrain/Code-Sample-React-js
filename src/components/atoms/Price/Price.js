import { View, Text } from '../index';

export default function Price({ price = "", oldPrice = "", isSplit = true }) {

    if (!isSplit && !oldPrice) return `₹ ${price?.replace("-", "") || "00.00"}`;

    // Check if in any case price is not defind
    if (!price) {
        price = oldPrice || "00.00";
        oldPrice = 0
    }

    return (
        <View className='priceBox'>
            <View className='dFlex'>
                <Text className='newPrice'>₹ {price.split('.')[0]}</Text>
                <Text className='newPriceSup'>.{price.split('.')[1]}</Text>
            </View>
            {
                oldPrice ? <View className='dFlex'>
                    <Text className='oldPrice'>₹ {oldPrice.split('.')[0]}</Text>
                    <Text className='oldPriceSup'>.{oldPrice.split('.')[1]}</Text>
                </View> : <></>
            }
        </View>
    )
}
