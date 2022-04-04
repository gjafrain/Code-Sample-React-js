import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
//
import { TouchableOpacity, View } from '../../../components/atoms';
import { fetchDeliverySlots } from '../../../redux/modules/order/action';
import { errorMessage } from '../../../utils/common';
import { Placeholder } from 'semantic-ui-react';

export default function DeliverySots({ setActive }) {
    const [activeSlotIndex, setActiveSlotIndex] = useState(0),
        [deliverySlots, setDeliverySlots] = useState([]),
        dispatch = useDispatch(),
        { fetchDeliveryLoading } = useSelector(state => state.order);

    useEffect(() => {
        getDeliverySlots();
    }, []);

    const getDeliverySlots = () => {
        const onSuccess = ({ data }) => {
            setActive(data[0])
            setDeliverySlots(data)
        }
        const onError = ({ message }) => errorMessage(message)
        dispatch(fetchDeliverySlots({ onSuccess, onError }))
    }

    const handleActiveDeliverySlots = (index, slot) => {
        setActiveSlotIndex(index);
        setActive(slot);
        console.log('slot', slot)
    }

    const data = fetchDeliveryLoading ? [null, null, null, null] : deliverySlots

    return (
        <View className='delivery-slot-swapper'>
            <View className='title'>Delivery Slots</View>
            <View className='delivery-slots-list custom-scroll'>
                {
                    data.map((slot, key) => {

                        if (fetchDeliveryLoading) {
                            return <Placeholder className={'slot'} key={key}>
                                <Placeholder.Image rectangular />
                            </Placeholder>
                        }

                        const active = activeSlotIndex === key ? "active" : "";

                        return <TouchableOpacity className={'slot ' + active + ' slide-button-primary-down-time-slot'} onPress={() => { handleActiveDeliverySlots(key, slot) }} key={key}>
                            <>  <View className='dFlex'>
                                <View className={`slotDay`}>{moment(slot.start).format('ddd')}, </View>
                                <View className={`slotDay`}> {moment(slot.start).format('MMM')}</View>
                            </View>
                                <View className={`date`}>{moment(slot.start).format('DD')}</View>
                                <View className="dFlex alignCenter">
                                    <View className={`slotTime`}>{moment(slot.start).format('hh A')}</View>
                                    <View className={`textDivide`}>-</View>
                                    <View className={`slotTime`}>{moment(slot.end).format('hh A')}</View>
                                </View>
                            </>

                        </TouchableOpacity >
                    })}
            </View>
            <View className='custom-overlay' />
        </View>
    )
}
