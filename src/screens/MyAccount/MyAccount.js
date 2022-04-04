import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Ref } from 'semantic-ui-react';
//
import { View } from '../../components/atoms';
import { TheContainer } from '../../components/molecules';
import Address from './Components/Address';
import Orders from './Components/Orders';
import Profile from './Components/Profile';
import SideMenu from './Components/SideMenu';
import './Style.scss';


export default function MyAccount() {

    const contextRef = useRef(),
        { push } = useHistory(),
        user = useSelector(state => state.auth);

    useEffect(() => {
        if (!user.token) push('./home')
    }, [user])

    return (
        <TheContainer className='my-account'>
            <Ref innerRef={contextRef}>
                <View className="pageWrapper">
                    <SideMenu contextRef={contextRef} />
                    <View className='main-section'>
                        <Switch>
                            <Route path="/myAccount/orders" component={Orders} />
                            <Route path="/myAccount/profile" component={Profile} />
                            <Route path="/myAccount/address" component={Address} />
                            <Redirect to="/myAccount/orders" />
                        </Switch>
                    </View>
                </View>
            </Ref>
        </TheContainer>
    )
}
