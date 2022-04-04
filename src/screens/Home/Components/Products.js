import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
// COMPONENTS
import { View } from '../../../components/atoms';
import { VCart } from '../../../components/atoms/VCart';
// 
import { fetchProductsByCategoryId } from '../../../redux/modules/product/action';
import { errorMessage } from '../../../utils/common';

export default function Products({ dispatch, activeCategoryId }) {
    const [products, setProducts] = useState([]),
        loading = useSelector(state => state.product.fetchCategoryProductsPending);

    useEffect(() => {
        getProductByCategoryId(activeCategoryId);
    }, [activeCategoryId]);

    const getProductByCategoryId = useCallback((id) => {
        
        const onSuccess = ({ data }) => setProducts([...data.products || []])
        const onFail = ({ message }) => errorMessage(message)
        dispatch(fetchProductsByCategoryId({ data: { id }, onSuccess, onFail }))
    }, []);

    const data = !loading ? products : [null, null, null, null, null];

    return (
        <View className="products-section">
            {data.map((x, i) => <VCart product={x} index={i} loading={loading} />)}
        </View>
    )
}
