import { View, Text, Image } from '../';
// CHILD
import { Price } from '../Price';
import { CartButtonHandler } from '../CartButtonHandler';
import { config } from '../../../utils/apiConfig';
import { Placeholder } from 'semantic-ui-react';
import { Localize } from '../../../utils/common';

export default function VCart({ product = {}, index, container = {}, loading }) {

    if (loading) {
        return <Placeholder className="product-wrapper" key={index}>
            <Placeholder.Image rectangular />
        </Placeholder>
    }

    const varient = product?.varients[0] || {};

    const substringText = (text) => {
        if (text.length > 185) return text.substring(0, 185) + " ..."
        return text
    }

    return (
        <View className="product-wrapper" key={index}>
            <View className='contentCenter alignCenter dFlex'>
                <View className='productImageBox'>
                    <Image className="product-image-scale productImage" source={config.BASE_URL + "/" + product.image} />
                </View>
            </View>
            <View className='productInfo'>
                <View className='titleSection'>
                    <Text className={'title'}>{Localize(product.name)}</Text>
                </View>
                <View>
                    <Text className={'discreption'}>{substringText(Localize(product.discreption))}</Text>
                </View>
                <View>
                    <View className='dFlex spaceBetween alignCenter'>
                        <View>
                            <Price price={varient.updatedPrice} oldPrice={varient.price} />
                            <Text className={'qty'}>{varient.weight} {Localize(varient.type?.name)}</Text>
                        </View>
                        <CartButtonHandler product={product} varient={varient} />
                    </View>
                </View>
            </View>
        </View>
    )
}
