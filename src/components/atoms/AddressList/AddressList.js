import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon as SIcon, Placeholder } from "semantic-ui-react";
import { View, Button } from "..";
import { openModal } from "../../../redux/modules/modal/actions";
//
import { Segment, TransitionablePortal } from 'semantic-ui-react';
import { deleteAddress, fetchAddressList, setDefaultAddress, updateAddress } from '../../../redux/modules/address/action';
import { errorMessage, infoMessage, successMessage, toggleDimmer } from '../../../utils/common';

export default function AddressList() {

    const dispatch = useDispatch(),
        [showDeleteAlert, setShowDeleteAlert] = useState(false),
        [activeAddress, setActiveAddress] = useState(null),
        { addressList, fetchAddressListLoading } = useSelector(state => state.address),
        { user } = useSelector(state => state.auth);

    useEffect(() => {
        getDeliveryAddresList();
    }, []);

    const getDeliveryAddresList = () => {
        const onError = ({ message }) => errorMessage(message)
        dispatch(fetchAddressList({ onError }))
    }

    const handleAddAdrress = () => {
        dispatch(openModal({ type: user.token ? 'Address' : 'SignIn' }))
        !user.token && setTimeout(() => {
            infoMessage('Please Login to add delivery address!')
        }, 100)
    }

    const handleDeleteAdrress = () => {
        handlCloseAlertModal()
        dispatch(deleteAddress({ data: { id: activeAddress.id } }))
    }

    const handleEditAddress = (address) => {
        dispatch(openModal({ type: 'Address', data: address }))
    }

    const handlCloseAlertModal = () => {
        toggleDimmer();
        setShowDeleteAlert(false)
    }

    const handleActiveAddress = (id) => {
        const onSuccess = ({ message }) => successMessage(message)
        const onFail = ({ message }) => errorMessage(message)
        dispatch(setDefaultAddress({ data: { id }, onSuccess, onFail }))
    }

    const data = fetchAddressListLoading ? [1, 2, 3] : addressList

    const context = data.map((address, key) => {

        if (fetchAddressListLoading) {
            return <Placeholder className={'address-wrapper'} key={key}>
                <Placeholder.Image rectangular />
            </Placeholder>
        }

        return (
            <View className="address-wrapper" key={key}>
                <View>
                    <View className="address-type-wrapper">
                        <View className="title">{address.type}</View>
                        <SIcon name={"bookmark " + (address.isDefault ? "" : "outline")} onClick={() => handleActiveAddress(address.id)} />
                    </View>
                    <View className="phone-wrapper">{address.phone}</View>
                    <View className="address">{address.houseNumber}, {address.landmark}, {address.address}, {address.pincode}</View>
                </View>
                <View className="action-wrapper">
                    <SIcon name="trash alternate outline" onClick={() => { toggleDimmer(true); setActiveAddress(address); setShowDeleteAlert(true) }} />
                    <SIcon name="edit outline" onClick={() => handleEditAddress(address)} />
                </View>
            </View>
        )
    })

    return (
        <>
            {context}
            {
                (addressList.length < 6 && !fetchAddressListLoading) && <>
                    <View className="address-wrapper add">
                        <Button onPress={handleAddAdrress} className="add-address slide-button-primary-down" icon="Plus" label="Add New" showIcon={true} size="s" />
                    </View>
                </>
            }

            <TransitionablePortal onClose={() => { }} open={showDeleteAlert}
                transition={{ animation: 'fly up', duration: 600 }}>
                <Segment
                    className='custom-segment'
                    style={{ left: '40%', position: 'fixed', top: '32%', zIndex: 1000 }}
                >
                    <View className='alert-wrapper'>
                        <p>Are you sure you want to delete this address?</p>
                        <View className='footer-wrapper'>
                            <Button onPress={handlCloseAlertModal} className="cancel-btn slide-button-gray-medium-down" label="Cancel" showIcon={false} />
                            <Button onPress={handleDeleteAdrress} className="submit-btn slide-button-alert-down" label="Yes, delete it" showIcon={false} />
                        </View>
                    </View>
                </Segment>
            </TransitionablePortal>
        </>
    )
}
