import { Switch, Route, useLocation } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Dimmer } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
// COMPONENTS
import LanguageContext, { initialState, language } from './utils/context';
import { createSessionCode } from './redux/modules/auth/action';
import { errorMessage, getValue, setValue } from './utils/common';
import asyncStoreConst from './utils/asyncStoreConst';
import { fetchCartById } from './redux/modules/cart/action';
import { AppLoading, View } from './components/atoms';
// 
const TheHeader = lazy(() => import('./components/molecules/TheHeader/Header')),
    TheFooter = lazy(() => import('./components/molecules/TheFooter/Footer'));
//
const Home = lazy(() => import('./screens/Home/Home')),
    ThanksOrder = lazy(() => import('./screens/ThanksOrder/ThanksOrder')),
    MyAccount = lazy(() => import('./screens/MyAccount/MyAccount')),
    Checkout = lazy(() => import('./screens/Checkout/Checkout')),
    Faq = lazy(() => import('./screens/Faq/Faq')),
    PrivacyPolicy = lazy(() => import('./screens/PrivacyPolicy/PrivacyPolicy')),
    AboutUs = lazy(() => import('./screens/AboutUs/AboutUs'));

export default function Main() {

    const dispatch = useDispatch(),
        { pathname } = useLocation(),
        [dimmer, setActiveDimmber] = useState(false),
        [consts, setConsts] = useState({ ...initialState, type: 'en' }),
        open = useSelector(state => state.modal.openModal);

    useEffect(() => {
        const sessionCode = getValue(asyncStoreConst.SESSION_CODE);
        !sessionCode ? createSession() : getCart();

        window.addEventListener('ToggleDimmer', toggleDimmer, false)
        return (() => {
            window.removeEventListener('ToggleDimmer', toggleDimmer, false)
        })
    }, [])

    const toggleDimmer = ({ show }) => setActiveDimmber(show);

    const createSession = () => {

        const onSuccess = ({ data }) => {
            setValue(asyncStoreConst.SESSION_CODE, data.sessionCode);
            getCart();
        }
        const onFail = ({ message }) => errorMessage(message)

        const payload = {
            appVersion: 1.1,
            deviceId: '',
            deviceBrand: '',
            deviceType: 'Web',
        };
        dispatch(createSessionCode({ data: payload, onSuccess, onFail }));
    }

    const getCart = () => dispatch(fetchCartById({}));

    const changeLanguage = (lng) => {
        if (lng === 'hn') {
            global.consts = { ...language.Hindi, type: 'hn' }
            setConsts(global.consts);
        }
        else {
            global.consts = { ...language.English, type: 'en' }
            setConsts(global.consts);
        }
    }

    return (
        <LanguageContext.Provider value={{ ...consts, changeLanguage }}>
            <ToastContainer position="top-center" hideProgressBar={true} />
            <Dimmer.Dimmable as={View} blurring dimmed={dimmer}>
                <Dimmer active={dimmer} onClickOutside={() => { }} />
                {
                    pathname.includes('privacyPolicy')
                        ? <></>
                        : <TheHeader title={'Warehouse'} showSideBarIcon={true} />
                }
                <Suspense fallback={<AppLoading />}>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/myAccount" component={MyAccount} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/thanksOrder" component={ThanksOrder} />
                        <Route path="/faq's" component={Faq} />
                        <Route path="/privacyPolicy" component={PrivacyPolicy} />
                        <Route path="/about" component={AboutUs} />
                        <Route path="/" component={Home} />
                    </Switch>
                </Suspense>
                {
                    pathname.includes('privacyPolicy')
                        ? <></>
                        : <TheFooter />
                }
            </Dimmer.Dimmable>
        </LanguageContext.Provider>
    )
}
