import { Sticky } from 'semantic-ui-react';
import { useHistory, useLocation } from 'react-router-dom';
import { TouchableOpacity } from '../../../components/atoms';

export default function SideMenu({ contextRef }) {
    const { push } = useHistory(),
        { pathname } = useLocation();

    return (
        <Sticky context={contextRef} offset={80} className='side-menu-section'>
            <TouchableOpacity className={"label slide-button-gray-light " + (pathname.indexOf('/orders') >= 0 ? "active" : '')} onPress={() => { push('orders') }}>My Orders</TouchableOpacity>
            <TouchableOpacity className={"label slide-button-gray-light " + (pathname.indexOf('/address') >= 0 ? "active" : '')} onPress={() => { push('address') }}>My Address</TouchableOpacity>
            <TouchableOpacity className={"label slide-button-gray-light " + (pathname.indexOf('/profile') >= 0 ? "active" : '')} onPress={() => { push('profile') }}>My Profile</TouchableOpacity>
        </Sticky>
    )
}
