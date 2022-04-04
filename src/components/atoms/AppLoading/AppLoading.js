import { Image, View } from '..';
//
import LOGO from '../../../assets/images/logo.png';

export default function AppLoading() {
    return (
        <View className='appLoadingContainer'>
            <View className='imageWrapper'>
                <Image source={LOGO} />
            </View>
        </View>
    )
}
