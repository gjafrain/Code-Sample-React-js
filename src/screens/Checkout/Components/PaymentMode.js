
import { View, RadioButton } from "../../../components/atoms";
import { infoMessage } from "../../../utils/common";

export default function PaymentMode({ active, setActive }) {

    const handlePaymentMode = (mode) => {
        if (mode == 2) infoMessage('For now we are accepting Cash On Delivery!')
        else setActive(mode)
    }

    return (
        <View className="payment-mode-wrapper">
            <View className="title">Payment Mode</View>
            <View className="option-wrapper">
                <RadioButton active={active === 2} title="Pay Online" onPress={() => handlePaymentMode(2)} />
                <RadioButton active={active === 1} title="Cash On Delivery Online" onPress={() => handlePaymentMode(1)} />
            </View>
        </View>
    )
}
