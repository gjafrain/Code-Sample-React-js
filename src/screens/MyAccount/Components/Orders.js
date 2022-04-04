import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Icon as SIcon, Placeholder } from "semantic-ui-react";
import moment from "moment";
// 
import { Price, View } from "../../../components/atoms";
import { fetchOrdersList } from "../../../redux/modules/order/action";
import { orderStatusEnum, paymentMethodEnum } from "../../../utils/enum";
import { errorMessage } from "../../../utils/common";

export default function Orders() {

    const [orders, setOrder] = useState([{}, {}, {}, {}, {}, {}, {}]),
        dispatch = useDispatch(),
        { fetchOrderListLoading } = useSelector(state => state.order);

    useEffect(() => {
        window.scrollTo(0, 0)
        getOrders();
    }, [])

    const getOrders = () => {
        const onSuccess = ({ data }) => setOrder(data)
        const onFail = ({ message }) => { errorMessage(message) }
        dispatch(fetchOrdersList({ onSuccess, onFail }))
    }

    return (
        <View className="section-container">
            <View className="order-list-container">
                {orders.map((x, i) => {
                    return (
                        fetchOrderListLoading
                            ? <Placeholder className={'order'} key={i}>
                                <Placeholder.Image rectangular />
                            </Placeholder>
                            : <View className="order" key={i}>
                                <View className="title-wrapper">
                                    <View>
                                        <View className="title">
                                            Order# 000{x.id}
                                        </View>
                                        <View className="date">{moment(x.createdAt).format('DD MMM YYYY hh:mm A')}</View>
                                    </View>
                                    <View className="action-wrapper">
                                        <View><SIcon name="eye" /></View>
                                    </View>
                                </View>
                                <View className="order-info-wrapper">
                                    <View className="status-wrapper">{orderStatusEnum[x.currentStatus]}</View>
                                    <View className="amount-wrapper">
                                        <View className="label">Amount</View>
                                        <View className="amount"><Price price={x.orderTotal} isSplit={false} /></View>
                                    </View>
                                    <View className="payment-type-wrapper">
                                        <View className="type">{x.paymentMethod}</View>
                                        <View className="payment-status">{x.isPaid ? 'Paid' : 'Paid'}</View>

                                    </View>
                                </View>
                                <View className="action-wrapper">
                                    <View><SIcon name="eye" /></View>
                                </View>
                            </View>
                    )
                })}
            </View>
        </View >
    )
}
