import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon as SIcon, Rating, TextArea } from "semantic-ui-react";
import { Button, Image, RadioButton, TouchableOpacity, View } from "../../../../atoms";
import Logo from '../../../../../assets/images/second-logo-no-space.png';
import { submitRequest } from "../../../../../redux/modules/modal/actions";
import { errorMessage, successMessage } from "../../../../../utils/common";

export default function ContactUs({ onClose }) {

    const dispatch = useDispatch(),
        [contectOption, setContectOption] = useState(''),
        [state, setState] = useState({}),
        [contactOption, setContactOption] = useState('Phone'),
        [error, errorsSet] = useState({}),
        { submitRequestPending } = useSelector(state => state.modal);


    const onChange = ({ target }) => {
        if (target.value && target.name === 'phone') target.value = target.value.replace(/\D/g, '');
        setState((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    const handleSubmit = () => {
        const error = {};

        // REQUIRED CHECK 
        if ((contactOption === 'Email' || contactOption === 'Both') && !state.email) error['email'] = 'Required'
        if ((contactOption === 'Phone' || contactOption === 'Both') && !state.phone) error['phone'] = 'Required'
        if (contectOption !== 'Feedback' && !state.title) error['title'] = 'Required'
        if (!state.description) error['description'] = 'Required';

        if (contactOption === 'Email' || contactOption === 'Both') {
            const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if (!regex.test(state.email)) error['email'] = error['email'] || "Given email address is not valid";
        }

        if (Object.keys(error).length) {
            errorsSet(error);
            return true;
        } else errorsSet({});

        const onSuccess = ({ message }) => {
            successMessage(message);
            setTimeout(() => onClose(), 3000)
            setState({})
        }
        const onError = ({ message }) => errorMessage(message)
        const payload = {
            ...state,
            type: contectOption,
            platform: 'Web'
        }
        dispatch(submitRequest({ data: payload, onSuccess, onError }))
    }

    return (
        <View className="contactUs-container">
            <TouchableOpacity className="close-icon" onPress={onClose}>
                <SIcon name="close" />
            </TouchableOpacity>
            {
                !contectOption ?
                    <View className="options">
                        <TouchableOpacity className="option" onPress={() => setContectOption('Bug')}>
                            <SIcon className="icon" name="bug" size='big' />
                            <View className="wrapper">
                                <View className="title">Report a bug</View>
                                <View className="text">Let us know what's broken</View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="option" onPress={() => setContectOption('Feature')}>
                            <SIcon className="icon" name="handshake outline" size='big' />
                            <View className="wrapper">
                                <View className="title">Feature request</View>
                                <View className="text">Tell us how can we imprive</View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity className="option" onPress={() => setContectOption('Feedback')}>
                            <SIcon className="icon" name="file alternate outline" size='big' />
                            <View className="wrapper">
                                <View className="title">General Feedback</View>
                                <View className="text">Give general feedback</View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    : <>
                        <View className="header-wrapper">
                            <View className="logo-container">
                                <Image source={Logo} />
                            </View>
                            <View className="sub-heading">
                                {contectOption === 'Bug' ? "Tell use what's broken" : contectOption === "Feature" ? 'Tell us how we can improve' : ''}
                            </View>
                        </View>
                        <View className="form-wrapper">
                            <View className="contact-option">
                                <RadioButton active={contactOption === 'Phone'} onPress={() => { setContactOption('Phone') }} title="Phone" />
                                <RadioButton active={contactOption === 'Email'} onPress={() => { setContactOption('Email') }} title="Email" />
                                <RadioButton active={contactOption === 'Both'} onPress={() => { setContactOption('Both') }} title="Both" />
                            </View>
                            {contectOption === 'Feedback'
                                ? <View className="rating-wrapper"> <Rating maxRating={5} onRate={({ target }) => { onChange({ target: { name: 'rating', value: target.ariaPosInSet } }) }} icon='star' size='massive' /></View>
                                : <></>
                            }
                            {(contactOption === 'Phone' || contactOption === 'Both')
                                ? <View className={`input-wrapper ${error.phone ? 'error' : ''}`}>
                                    <input placeholder="Enter your mobile number" name="phone" onChange={onChange} />
                                    {error.phone ? <View className="error-msg">{error.phone}</View> : <></>}
                                </View>
                                : <></>
                            }
                            {(contactOption === 'Email' || contactOption === 'Both')
                                ? <View className={`input-wrapper ${error.email ? 'error' : ''}`}>
                                    <input placeholder="Enter email address" name="email" onChange={onChange} />
                                    {error.email ? <View className="error-msg">{error.email}</View> : <></>}
                                </View>
                                : <></>
                            }
                            {contectOption === 'Feedback'
                                ? <></>
                                : <View className={`input-wrapper ${error.title ? 'error' : ''}`}>
                                    <input placeholder="Enter title" name="title" onChange={onChange} />
                                    {error.title ? <View className="error-msg">{error.title}</View> : <></>}
                                </View>
                            }
                            <View className={`input-wrapper ${error.description ? 'error' : ''}`}>
                                <TextArea placeholder="Enter detail here ..." rows={4} name="description" onChange={onChange} />
                                {error.description ? <View className="error-msg">{error.description}</View> : <></>}
                            </View>
                            <Button className="send-btn slide-button-primary-down" loader={submitRequestPending} label="Submit" onPress={handleSubmit} />
                        </View>
                    </>
            }
        </View>
    )
}
