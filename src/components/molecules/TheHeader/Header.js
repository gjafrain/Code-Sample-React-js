import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Popup, Icon as SIcon, Label } from 'semantic-ui-react'
// 
import { View, Text, TouchableOpacity, Image, RadioButton } from '../../atoms';
import AppName from '../../../assets/images/logo-name.png'
//
import { openModal } from '../../../redux/modules/modal/actions';
import { logout } from '../../../redux/modules/auth/action';
import { Icon } from '../../atoms/Icon';
import { TheContainer, Cart } from '..';
import { successMessage } from '../../../utils/common';
import languageContext from '../../../utils/context';
import './Style.scss';


export default function Header({ }) {

    const consts = useContext(languageContext);

    const dispatch = useDispatch(),
        { push } = useHistory();

    const { items, cart } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.auth)

    const open = () => {
        dispatch(openModal({ type: 'SignIn' }))
    }

    const handleLogout = () => {
        dispatch(logout({}));
        successMessage('Your session has been signout!')
    }

    const _renderLeftWidget = () => {
        return (
            <View className='dFlex alignCenter'>
                {/* <View className='header-left-icon'>
                    <Icon name="Home" size='xl' container={{ padding: '7px' }} />
                </View> */}
                <TouchableOpacity className={'brand-name-logo'} onPress={() => push("/home")}>
                    <Image source={AppName} />
                </TouchableOpacity>
            </View>
        )
    }

    const _renderRightWidget = () => {
        return (
            <View className='dFlex'>
                <Popup
                    flowing hoverable
                    // open
                    position='bottom left'
                    hideOnScroll
                    on='click'
                    trigger={
                        <a>
                            <View className="account-menu">
                                <View className="account-menu-header">
                                    {/* <Text className="main-text">Hi {user.name || 'Guest'}</Text>
                                    {user.token ? <></> : <Text className="sub-text">Login / Sign Up</Text>} */}
                                    {/* <Text className="main-text"> {user.token ? `Hi ${user.name}` : 'Login / Sign Up'}</Text> */}
                                    {user.token
                                        ? <Text className="main-text"> {user.name ? `Hi ${user.name}` : user.phone}</Text>
                                        : <>
                                            <Text className="main-text">{consts.MY_ACCOUNT}</Text>
                                            <Text className="sub-text">{consts.LOGIN_SIGNUP}</Text>
                                        </>
                                    }
                                    {/* <Text className="sub-text"> {user.token ? `Hi ${user.name}` : 'Login / Sign Up'}</Text> */}
                                </View>
                                <View>
                                    <SIcon name='angle down' />
                                </View>
                            </View>
                        </a>
                    }
                >
                    <View className='my-account-menu-container'>
                        <Label as='a' color='red' ribbon>
                            {/* <View className='title'>Hi {user.token ? <>{user.phone}</> : 'Guest'}</View> */}
                            <View className='title'>{user.token ? <>{user.phone}</> : 'Hi Guest'}</View>
                        </Label>
                        <View className='menu-options'>
                            <View className='language-options'>
                                <RadioButton onPress={() => consts.changeLanguage('hn')} title="Hindi" active={consts.type === 'hn'} />
                                <RadioButton onPress={() => consts.changeLanguage('en')} title="English" active={consts.type === 'en'} />
                            </View>
                            {
                                !user.token
                                    ? <TouchableOpacity className='login-signup slide-button-primary-down' onPress={open}>Login or Sign Up</TouchableOpacity>
                                    : <>
                                        <TouchableOpacity className='menu-option custom-buttom slide-button-primary-down' onPress={() => push('/myAccount/orders')}><Icon name="List" container={{ paddingLeft: 0 }} />My Orders</TouchableOpacity>
                                        <TouchableOpacity className='menu-option custom-buttom slide-button-primary-down' onPress={() => push('/myAccount/address')}><Icon name="Address" container={{ paddingLeft: 0 }} />My Address</TouchableOpacity>
                                        <TouchableOpacity className='menu-option custom-buttom slide-button-primary-down' onPress={() => push('/myAccount/profile')}><SIcon name="user outline" className='customIcon' /><View>My Profile</View></TouchableOpacity>
                                    </>
                            }
                            {/* <TouchableOpacity className='faq-menu custom-buttom slide-button-gray-medium-down' onPress={() => push("/faq's")}><SIcon name='question circle outline' className='customIcon' /> <View>FAQs</View></TouchableOpacity> */}
                            {
                                user.token && <TouchableOpacity className='logout-menu menu-option custom-buttom slide-button-alert-down' onPress={handleLogout}><SIcon name='log out' className='customIcon' /> Logout</TouchableOpacity>
                            }
                        </View>
                    </View>
                </Popup>
                <Popup
                    flowing hoverable
                    // open
                    position='bottom left'
                    // hideOnScroll
                    on='click'
                    trigger={
                        <a>
                            <View className="cart-menu">
                                <span className='view-cart-label'>{consts.VIEW_BASKET}</span>  <Icon name='Basket' />
                                {!items.length ? <></>
                                    : <Label color='red' circular floating>
                                        {items.length}
                                    </Label>
                                }
                            </View>
                        </a>
                    }
                >
                    <View className='cart-container'>
                        <Cart push={push} />
                    </View>
                </Popup>
            </View>
        )
    }

    return (
        <View className='header-container'>
            <TheContainer className='container'>
                {_renderLeftWidget()}
                {_renderRightWidget()}
            </TheContainer>
        </View>
    )
}