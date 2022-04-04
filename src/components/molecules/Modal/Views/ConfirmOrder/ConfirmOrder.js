import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
//
import { Price } from '../../../../atoms/Price';
//
import Styles from './Style';
import commonStyle from '../../../../../styles/commonStyle';
import { Button } from '../../../../atoms/Button';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../../../redux/modules/modal/actions';


export default function ConfirmOrder({ callBack, data }) {

    const dispatch = useDispatch();

    const handleConfirm = () => {
        close()
        callBack()
    }

    const close = () => dispatch(closeModal({}));

    return (
        <div></div>
        // <View style={Styles.container}>
        //     <View style={Styles.header}>
        //         <Text style={Styles.headerText}>Order Total</Text>
        //         <Text style={Styles.orderPrice}>
        //             <Price price={data.orderTotal} showOldPrice={false} isSplit={false} />
        //         </Text>
        //     </View>
        //     <View style={Styles.body}>
        //         <Text style={Styles.confirmOrderText}>You have choosen to pay for this order on delivery.</Text>
        //         <View style={commonStyle.fRow}>
        //             <Text style={Styles.confirmOrderText}>Press</Text>
        //             <Text style={[Styles.confirmOrderText, commonStyle.textCaplital]} > Confirm </Text>
        //             <Text style={Styles.confirmOrderText}>to place the order.</Text>
        //         </View>
        //     </View>
        //     <View style={Styles.footer}>
        //         <TouchableOpacity onPress={closeModal}>
        //             <Text style={Styles.cancelButton}>Cancel</Text>
        //         </TouchableOpacity>
        //         <Button label="Confirm" icon="Tick" iconBefore={true} onPress={handleConfirm} />
        //     </View>
        // </View>
    )
}
