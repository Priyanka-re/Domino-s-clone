import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, {useContext} from 'react';
import MenuComponent from '../components/MenuComponent';
import { useNavigation } from '@react-navigation/native';
import { CartItems } from "../Context";




const HomeScreen = () => {
    
    
    const data = [
        {
            id: "0",
            image:
                "https://www.lavanguardia.com/andro4all/hero/2023/07/dominos-pizza-y-su-nuevaa-app.png?width=768&aspect_ratio=16:9&format=nowebp",
        },
        {
            id: "1",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyUHaJAMXYPvV6a_-_XqE0YhhDGpCPofVOQ&usqp=CAU",
        },
        {
            id: "2",
            image:
                "https://i0.wp.com/www.promotionsinuae.com/wp-content/uploads/2018/07/Buy-Any-Medium-or-Large-Pizza-Get-The-2nd-Pizza-Free-Order-Online-Only..jpg?fit=552%2C287&ssl=1",
        },
        {
            id: "3",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEcz7DVk3uBX_33FZVdPjiCvgpKsmx_9eSh7x4GrTyeMsQixOTd7SHXByKmdibQSQF94&usqp=CAU",
        },
        {
            id: "4",
            image:
                "https://cache.dominos.com/wam/prod/market/SA/_en/images/promo/684506ac-d8ef-46b6-a88d-9cd06f83ad30.png",
        },
        {
            id: "5",
            image:
                "https://images.freekaamaal.com/post_images/1578051207.png",
        },
    ];
    return (
        <SafeAreaView>
            <Text>HomeScreen</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item, key) => (
                    <View style={{ margin: 10 }} key={key}>
                        <Image style={{ width: 220, height: 130 }} source={{ uri: item.image }} />
                    </View>
                ))}
            </ScrollView>
            <MenuComponent />
            <View style={{ padding: 10 }}>
                <Image
                    style={{ width: "100%", height: 120, borderRadius: 7 }}
                    source={{
                        uri: "https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/5440-Dominos_Offers_Coupons.jpg",
                    }}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Image
                    style={{ width: "100%", height: 120, borderRadius: 7 }}
                    source={{
                        uri: "https://www.dominos.co.in/blog/wp-content/uploads/2022/08/Dominos-FreeDOM-Sale-2022.jpg",
                    }}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Image
                    style={{ width: "100%", height: 120, borderRadius: 7 }}
                    source={{
                        uri: "https://cdn.zoutons.com/images/originals/blog/1714815891038.jpg_1714815890.png",
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})