import { View, Image } from '../';
import { Price } from '../Price';
import { config } from '../../../utils/apiConfig';
import { UpdateCartButton } from '../UpdateCartButton';
import { Localize } from '../../../utils/common';

export default function HCart({ product, index }) {
    return (
        <View className="cart-item-wrapper">
            <View className='cart-item' key={index}>
                <View className='cart-image-wrapper'>
                    <Image source={config.BASE_URL + "/" + product.image} />
                </View>
                <View className='item-detail-wrapper'>
                    <View className='title-wrapper'>
                        <View className='title'>{Localize(product.name)}</View>
                        <Price price={product.price} />
                    </View>
                    <View className='item-controller'>
                        <View>
                            <Price price={product.productPrice} />
                            <View className='qty'>
                                {product.weight} {Localize(product.weightType)}
                            </View>
                        </View>
                        <UpdateCartButton cartItem={product} />
                    </View>
                </View>
            </View>
            <View className='cart-price-status'>
                <View className={product.priceStatus}>
                    {`${Localize(product.name)}'s price has been ${product.priceStatus === "incr" ? "increased" : "decreased"} by`} <Price price={product.priceDiff} isSplit={false} />
                </View>
            </View>
        </View>
    )
}
