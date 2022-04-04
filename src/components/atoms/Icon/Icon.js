import React from 'react';
import { View, ActivityIndicator, Image, TouchableOpacity } from '../index';
//
import Styles from './Style';
/// IMAGES
import BasketBg from '../../../assets/icons/basket-bg.png';
import Basket from '../../../assets/icons/basket.png';
import Cross from '../../../assets/icons/cross.png';
import Minus from '../../../assets/icons/minus.png';
import Plus from '../../../assets/icons/add.png';
import RightArrow from '../../../assets/icons/right-arrow.png';
import Tick from '../../../assets/icons/tick.png';
import Back from '../../../assets/icons/right-arrow-angle.png';
import Home from '../../../assets/icons/home.png';
import HomeFilled from '../../../assets/icons/home-bg.png';
import UserFilled from '../../../assets/icons/user-bg.png';
import User from '../../../assets/icons/user.png';
import Search from '../../../assets/icons/search.png';
import SearchFilled from '../../../assets/icons/search-bg.png';
import Sidebar from '../../../assets/icons/sidebar.png';
import Category from '../../../assets/icons/vegetable.png';
import Coupon from '../../../assets/icons/coupon.png';
import Nutrition from '../../../assets/icons/nutrition.png';
import Faq from '../../../assets/icons/faq.png';
import Condition from '../../../assets/icons/condition.png';
import Policy from '../../../assets/icons/policy.png';
import Logout from '../../../assets/icons/logout.png';
import Login from '../../../assets/icons/login.png';
import Filter from '../../../assets/icons/filter.png';
import List from '../../../assets/icons/list.png';
import Box from '../../../assets/icons/box.png';
import ShortAtoZ from '../../../assets/icons/sort-asc.png';
import ShortZtoA from '../../../assets/icons/sort-desc.png';
import Address from '../../../assets/icons/address.png';
import Support from '../../../assets/icons/support.png';
import Bookmark from '../../../assets/icons/bookmark.png';
import BookmarkFilled from '../../../assets/icons/bookmark-bg.png';
import Office from '../../../assets/icons/office.png';
import Other from '../../../assets/icons/other.png';
import Trash from '../../../assets/icons/trash.png';
import LocationMarker from '../../../assets/icons/location-pin.png';
//
import { WHITE } from '../../../styles/colors';


export default function Icon({
    name = 'Basket', size = 'l',
    imageStyle = {},
    onPress,
    container = {},
    loader = false,
    loaderColor = WHITE,
    loaderSize
}) {

    const iconImage = () => {
        switch (name) {
            case 'BasketBg':
                return <Image source={BasketBg} className={size} style={{ ...imageStyle }} />;
            case 'Cross':
                return <Image source={Cross} className={size} style={{ ...imageStyle }} />;
            case 'Minus':
                return <Image source={Minus} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'Plus':
                return <Image source={Plus} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'RightArrow':
                return <Image source={RightArrow} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'Tick':
                return <Image source={Tick} className={size} style={{ ...imageStyle }} />;
            case 'Back':
                return <Image source={Back} className={size} style={{ ...Styles.trandform180, ...imageStyle }} />;
            case 'Forward':
                return <Image source={Back} className={size} style={{ ...imageStyle }} />;
            case 'Home':
                return <Image source={Home} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'HomeFilled':
                return <Image source={HomeFilled} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'User':
                return <Image source={User} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'UserFilled':
                return <Image source={UserFilled} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'Search':
                return <Image source={Search} className={size} style={{ ...imageStyle }} />;
            case 'SearchFilled':
                return <Image source={SearchFilled} className={size} style={{ ...imageStyle }} />;
            case 'Sidebar':
                return <Image source={Sidebar} className={size} style={{ ...Styles.trandform180, ...imageStyle }} />;
            case 'Category':
                return <Image source={Category} className={size} style={{ ...imageStyle }} />;
            case 'Coupon':
                return <Image source={Coupon} className={size} style={{ ...imageStyle }} />;
            case 'Nutrition':
                return <Image source={Nutrition} className={size} style={{ ...imageStyle }} />;
            case 'Faq':
                return <Image source={Faq} className={size} style={{ ...imageStyle }} />;
            case 'Condition':
                return <Image source={Condition} className={size} style={{ ...imageStyle }} />;
            case 'Policy':
                return <Image source={Policy} className={size} style={{ ...imageStyle }} />;
            case 'Logout':
                return <Image source={Logout} className={size} style={{ ...imageStyle }} />;
            case 'Login':
                return <Image source={Login} className={size} style={{ ...imageStyle }} />;
            case 'Filter':
                return <Image source={Filter} className={size} style={{ ...imageStyle }} />;
            case 'List':
                return <Image source={List} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'Box':
                return <Image source={Box} className={size} style={{ ...imageStyle }} />;
            case 'ShortASC':
                return <Image source={ShortAtoZ} className={size} style={{ ...imageStyle }} />;
            case 'ShortDESC':
                return <Image source={ShortZtoA} className={size} style={{ ...imageStyle }} />;
            case 'Address':
                return <Image source={Address} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'Support':
                return <Image source={Support} className={size} style={{ ...imageStyle }} />;
            case 'Bookmark':
                return <Image source={Bookmark} className={size} style={{ ...imageStyle }} />;
            case 'BookmarkFilled':
                return <Image source={BookmarkFilled} className={size} style={{ ...imageStyle }} />;
            case 'Work':
                return <Image source={Office} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'Other':
                return <Image source={Other} className={size + " tintColor"} style={{ ...imageStyle }} />;
            case 'Trash':
                return <Image source={Trash} className={size} style={{ ...imageStyle }} />;
            case 'LocationMarker':
                return <Image source={LocationMarker} className={size} style={{ ...imageStyle }} />;
            default:
                return <Image source={Basket} className={size} style={{ ...imageStyle }} />;
        }
    }
    return (
        <TouchableOpacity disabled={!onPress} onPress={onPress}>
            <View className='icon-container' style={container}>
                {loader ? <ActivityIndicator color={loaderColor} className={size} style={{ ...imageStyle }} /> : iconImage()}
            </View>
        </TouchableOpacity>
    )
}
