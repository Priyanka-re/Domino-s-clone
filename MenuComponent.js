import { StyleSheet, Text, View,Pressable,Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const MenuComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Explore Menu
            </Text>
            <Pressable
            style={{
                backgroundColor:"#006491",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding:10,
                marginTop:14,
                borderRadius:10,
            }}>

                <Pressable onPress={() => navigation.navigate("Pizza")}>
                    <Image
                        style={{ width: 80, height: 80, borderRadius: 40 }}
                        source={{
                            uri: "https://www.jubilantfoodworks.com/images/brand_pic3.jpg",
                        }}
                    />
                    <Text style={{ textAlign: "center", fontSize: 17, color: "white", marginTop: 10, }}>Pizza</Text>
                </Pressable>

                <Pressable>
                    <Image
                        style={{ width: 80, height: 80, borderRadius: 40 }}
                        source={{
                            uri: "https://glutenfreeandmore.com/wp-content/uploads/2022/08/Chocolate-Strawberry-Parfait.jpg",
                        }}
                    />
                    <Text style={{ textAlign: "center", fontSize: 17, color: "white", marginTop: 10, }}>Desserts</Text>

                </Pressable>

                <Pressable onPress={() => navigation.navigate("PizzaMania")}>
                    <Image
                        style={{ width: 80, height: 80, borderRadius: 40 }}
                        source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFyrJlcZllJ28WI-ijmMt7DLL_9JuyJfEug&usqp=CAU",
                        }}
                    />
                    <Text style={{ textAlign: "center", fontSize: 17, color: "white", marginTop: 10, }}>Pizza Mania</Text>

                </Pressable>

            </Pressable>
        </View>
    )
}
export default MenuComponent

const styles = StyleSheet.create({})