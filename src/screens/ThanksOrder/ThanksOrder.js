import { useHistory } from "react-router-dom";
import { Button, Image, View } from "../../components/atoms";
import { TheContainer } from "../../components/molecules";
//
import Logo from '../../assets/images/logo.png';
import './Style.scss';


export default function ThanksOrder() {
    const { push, location } = useHistory();
    if (!location?.state?.id) push('/home');
    return (
        <TheContainer className="thanks-order-wrapper">
            <View className="logo-container">
                <Image source={Logo} />
            </View>
            <View className="title">Thank you </View>
            <View className="sub-title">for your order</View>
            <View className="discreption">
                <View className="text">Your Order has been recived with </View>
                <View className="ordre-id-wrapper">Order# 0000{location?.state?.id}</View>
            </View>
            <View className="footer">
                <Button className="track-order-btn slide-button-primary-down" label={'Track Order'} onPress={() => push('/myAccount/orders')} />
                <Button className="cont-browsing-btn slide-button-secondary-down" label={'Continue Browsing'} onPress={() => push('/home')} />
            </View>
        </TheContainer>
    )
}
