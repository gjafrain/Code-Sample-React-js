import { useSelector } from "react-redux";
import { Divider } from "semantic-ui-react";
import { Button, Text, TouchableOpacity, View } from "../../../components/atoms";
import { infoMessage } from "../../../utils/common";

export default function Profile() {
    const { user } = useSelector(state => state.auth);
    console.log('user....', user)

    const handleMessage = () => {
        infoMessage("This action not working yet, it's in under development")
    }

    return (
        <View className="section-container">
            <View className="profile-container">
                <View className="name-wrapper">
                    <Text className="label">{user?.name} {user?.lastName}</Text>
                    <TouchableOpacity className={"edit-btn"} onPress={handleMessage}>Edit</TouchableOpacity>
                </View>
                <View className="email-wrapper">
                    <Text className="label">Email:</Text>
                    <Text className="value">{user?.email}</Text>
                </View>
                <View className="phone-wrapper">
                    <Text className="label">Phone Number:</Text>
                    <Text className="value">+91 {user?.phone}</Text>
                </View>
                <Divider horizontal>Or</Divider>
                <View className="edit-phone-wrapper">
                    <View className="label">Want to change your Phone Number?</View>
                    <Button className="change-phone-btn slide-button-primary-down" label={'Change Phone'}  onPress={handleMessage} />
                </View>
            </View>
        </View>
    )
}
