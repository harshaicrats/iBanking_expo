import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,

} from "react-native";

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = ({ }) => {
    return(
<View style={styles.container}>

</View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center"
    }
})