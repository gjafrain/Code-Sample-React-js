import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addAddrress, updateAddress } from '../../../../../redux/modules/address/action';
//
import { distance, errorMessage, successMessage } from '../../../../../utils/common';
import { Button, View } from '../../../../atoms';
import AutoComplete from './Components/AutoComplete';
import Form from './Components/Form';
import MapView from './Components/MapView';


export default function AddEditAddress({ onClose, data }) {
    const dispatch = useDispatch(),
        [state, setState] = useState({ type: 'Home' }),
        [isSubmit, setSubmit] = useState(false),
        [autoCompleteText, setAutoCompleteText] = useState(''),
        [inOurDeliveryArea, inOurDeliveryAreaSet] = useState(false),
        [showMapView, showMapViewSet] = useState(false),
        autocompleteInput = useRef(null),
        mapRef = useRef(null),
        markerRef = useRef(null),
        autoComplete = useRef(null),
        deliveryRadious = 2.8;

    useEffect(() => {
        if (data?.id) setState(data)
    }, [data])

    useEffect(() => {
        autoComplete.current = new window.google.maps.places.Autocomplete(autocompleteInput.current, {
            componentRestrictions: { country: ["in"] },
            fields: ["address_components", "geometry", "formatted_address"],
            types: ["geocode"],
        });
        autoComplete.current.addListener("place_changed", fillInAddress);
        autocompleteInput.current.focus()
    }, [])

    const onChange = ({ target }) => {
        if (target.name === "pincode" || target.name === "phone") target.value = target.value.replace(/\D/g, '')
        setState((prevState => ({ ...prevState, [target.name]: target.value })));
    }

    const fillInAddress = () => {
        const place = autoComplete.current.getPlace(),
            addressState = {};

        place?.address_components?.map(x => {
            if (x.types.indexOf('sublocality') !== -1) addressState.landmark = x.long_name
            if (x.types.indexOf('postal_code') !== -1) addressState.pincode = x.long_name
        })

        if (place?.geometry?.location) {
            addressState.latitude = place?.geometry?.location.lat();
            addressState.longitude = place?.geometry?.location.lng();
        }

        if (addressState?.latitude && addressState?.longitude) {
            const radious = distance(addressState.latitude, addressState.longitude);
            if (radious <= deliveryRadious) inOurDeliveryAreaSet(true)
            else inOurDeliveryAreaSet(false)
        }
        setAutoCompleteText(place?.formatted_address || place)
        setState((prevState) => ({ ...prevState, ...addressState }))
    }

    const postionChangeCallBack = () => {

        const location = {
            latitude: mapRef.current.getCenter().lat(),
            longitude: mapRef.current.getCenter().lng(),
        }

        markerRef.current.setPosition({ lat: location.latitude, lng: location.longitude });

        const radious = distance(location.latitude, location.longitude);

        if (radious > deliveryRadious) document.getElementById('map-err').classList.add('show')
        else document.getElementById('map-err').classList.remove('show')
    }

    const handleSaveAddress = () => {

        setSubmit(true);

        if (!state.houseNumber || !state.landmark || !state.pincode && !inOurDeliveryArea) return true;

        // SHOW MAP TO GET ACCURATE LOCATION
        if (!showMapView) {
            showMapViewSet(true);
            return true
        }

        const location = {
            latitude: mapRef.current.getCenter().lat(),
            longitude: mapRef.current.getCenter().lng(),
        }

        const radious = distance(location.latitude, location.longitude);

        if (radious > deliveryRadious) {
            errorMessage('Please change delivery area!');
            return true;
        };

        const onSuccess = ({ message }) => {
            onClose();
            showMapViewSet(false);
            successMessage(message);
        }
        const onFail = ({ message }) => { errorMessage(message) }

        const method = state.id ? updateAddress : addAddrress;
        dispatch(method({ data: { ...state, ...location }, onSuccess, onFail }))
    }


    return (
        <View className="add-edit-address-wrapper">
            <View className="modal-header">
                <View className='title'>
                    {
                        showMapView
                            ? "Locate your delivery address on map"
                            : state.id
                                ? "Change Address"
                                : "Add Address"
                    }
                </View>
                <View className='sub-heading'>
                    {showMapView
                        ? "This allows us to find you easily and give you timely delivery experience."
                        : "Please enter the accurate address, it will help us to serve you better."}
                </View>
            </View>
            <View className={`modal-container  ${showMapView ? "map-view" : ""}`}>
                <AutoComplete autocompleteInput={autocompleteInput} inOurDeliveryArea={inOurDeliveryArea} autoCompleteText={autoCompleteText} isSubmit={isSubmit} />
                {
                    showMapView
                        ? <MapView state={state} mapRef={mapRef} markerRef={markerRef} inOurDeliveryArea={inOurDeliveryArea} postionChangeCallBack={postionChangeCallBack} />
                        : <Form isSubmit={isSubmit} onChange={onChange} state={state} />
                }
            </View>
            <View className='map-hint'>
                {showMapView
                    ? " Move the map to place the pin on your delivery location"
                    : ""}
            </View>
            <View className="modal-footer">
                <Button label={showMapView ? 'Back' : 'Cancel'} onPress={showMapView ? () => showMapViewSet(false) : onClose} className='cancel-btn slide-button-gray-medium-down' />
                <Button label={showMapView ? 'Save' : state.id ? "Update" : 'Continue'} onPress={handleSaveAddress} className='submit-btn slide-button-primary-down' />
            </View>
        </View>
    )
}
