import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//
import { TheContainer } from "..";
import { Image, TouchableOpacity, View } from "../../atoms";
import Logo from '../../../assets/images/second-logo.png';
import { openModal } from '../../../redux/modules/modal/actions';
import './Style.scss';


export default function Footer() {
    const dispatch = useDispatch(),
        { push } = useHistory(),
        { user } = useSelector(state => state.auth);

    const open = (type) => {
        dispatch(openModal({ type }))
    }

    return (
        <View className="footer-container">
            <TheContainer>
                <View className="right-widget">
                    <View className="logo-container">
                        <Image source={Logo} />
                    </View>
                    <View className="detail">
                        Farmer Buggy is the premier vegetables and fruit delivery service.
                    </View>
                </View>
                <View className="middle-widget">
                    <View className="title">Information</View>
                    <View className="middle-wrapper">
                        <TouchableOpacity className="footer-nav slide-button-gray-light" onPress={() => { push('/home') }} >Home</TouchableOpacity>
                        {
                            user.token
                                ? <TouchableOpacity className="footer-nav slide-button-gray-light" onPress={() => { push('/myAccount') }} >My Account</TouchableOpacity>
                                : <TouchableOpacity className="footer-nav slide-button-gray-light" onPress={() => open('SignIn')}>Login/Sign up</TouchableOpacity>
                        }
                        {/* <TouchableOpacity className="footer-nav slide-button-gray-light" onPress={() => { push("/faq's") }} >FAQ's</TouchableOpacity> */}
                        <TouchableOpacity className="footer-nav slide-button-gray-light" onPress={() => { push('/about') }} >About</TouchableOpacity>
                        <TouchableOpacity className="footer-nav slide-button-gray-light" onPress={() => open('ContactUs')} >Contact Us</TouchableOpacity>
                        <a className="footer-nav slide-button-gray-light" href={window.location.origin + '/privacyPolicy'} target="_blank">Privacy Policy</a>
                    </View>
                </View>
                <View className="middle-widget">
                    <View className="title">CONTACT US</View>
                    <View className="middle-wrapper">
                        <View className='text'>info@farmerbuggy.com</View>
                        <View className='text'>7 Days a week from</View>
                        <View className='text'>7AM - 9PM</View>
                    </View>
                </View>
                {/* <View className="middle-widget">
                    <View className="title">BE SOCIAL</View>

                    <Icon name='instagram' inverted color='red'></Icon>
                </View> */}
            </TheContainer>
        </View>
    )
}
