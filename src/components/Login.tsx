import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,

} from "react-native";
import { Formik } from "formik";
import * as yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



type User = null | { username: string, password: string }
interface LoginProps {

}

export const Login: React.FC<LoginProps> = ({ }) => {
    const [login, setLogin] = useState<User>(null);
    return (


        <View style={styles.container}>
            <LinearGradient
                colors={['#EC0A0A', 'transparent']}
                style={styles.background}>
                <View style={styles.content}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="account-circle" size={100} color="white" />
                    </View>

                    <Formik
                        initialValues={{ username: "", password: "" }}
                        onSubmit={(values, actions) => {
                            actions.resetForm();

                            console.log(values);
                        }}
                        validationSchema={yup.object().shape({
                            username: yup
                                .string()
                                .min(7)
                                .max(15, 'Must be 15 characters or less')
                                .required(),
                            password: yup
                                .string()
                                .min(4)
                                .max(10, 'Password should not excced 10 chars.')
                                .required(),
                        })}

                    >{({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
                        <View>
                            <TextInput
                                value={values.username}
                                style={styles.inputBox}
                                onChangeText={handleChange('username')}
                                onBlur={() => setFieldTouched('username')}
                                placeholder="Username"
                                placeholderTextColor="#ffffff"
                                underlineColorAndroid="#ffffff"
                                keyboardType="ascii-capable"
                            />
                            <View style={styles.errorText}>
                                {touched.username && errors.username &&
                                    <Text style={{ fontSize: 12, color: '#C61414' }}>{errors.username}</Text>
                                }
                            </View>

                            <TextInput
                                value={values.password}
                                style={styles.inputBox}
                                onChangeText={handleChange('password')}
                                placeholder="Password"
                                placeholderTextColor="#ffffff"
                                underlineColorAndroid="#ffffff"
                                onBlur={() => setFieldTouched('password')}
                                secureTextEntry={true}
                            />
                            <View style={styles.errorText}>
                                {touched.password && errors.password &&
                                    <Text style={{ fontSize: 12, color: '#C61414' }}>{errors.password}</Text>
                                }
                            </View>
                            <TouchableOpacity style={styles.button} >

                                <Text style={styles.buttonText} onPress={() => handleSubmit()}>
                                    Login
                                </Text>

                            </TouchableOpacity>
                        </View>

                    )}

                    </Formik>
                </View>
            </LinearGradient>
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
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1100,
    },
    content: {
        marginTop: 120,
        marginLeft: 50
    },
    icon: {
        marginLeft: 100,
        marginVertical: 30

    },
    inputBox: {
        width: 300,
        // backgroundColor: "#ffffff",
        paddingVertical: 10,
        // borderRadius: 20,
        fontSize: 16,
        marginVertical: 10,
        color: '#ffffff',

        paddingHorizontal: 5,
    },
    button: {
        width: 100,
        backgroundColor: "#EDC2C2",
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        marginVertical: 20,
        paddingVertical: 14,
        marginLeft: 100
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#ffffff",
        textTransform: 'uppercase'
    },
    errorText: {
        marginLeft: 20


    }
})