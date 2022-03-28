import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { PRODUCTS } from '../../constants/products'
import CategoryProducts from '../../components/categories/category-products'
import LoaderSpinner from '../../components/Loader'

const Category = ({ navigation, route }) => {
    const { id } = route.params;
    const selectedCategory = PRODUCTS.filter(product => product.category === id);
    const handleSelectCategory = (product) => {
        navigation.navigate('Product', { product, name: product.name })
    }
    const renderItem = ({ item }) => <CategoryProducts item={item} onSelected={handleSelectCategory} />

    let content;

    const [Loader, setLoader] = useState(false)

    content = <LoaderSpinner visible={!Loader} />

    useEffect(() => {
        setTimeout(() => {
            content = setLoader(true)
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            {content}
            <FlatList
                data={selectedCategory}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>

    )
}

export default Category