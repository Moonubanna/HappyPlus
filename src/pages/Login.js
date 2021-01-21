import React, { Component, } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, SafeAreaView, TextInput, TouchableOpacityBase
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FONT_FAMILY_SEMIBOLD } from '../helpers/Fonts';

import { Fonts, Colors, Strings, scaleRatio, Images } from '../helpers/index'



export default class Intro1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }


    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView>
                <View style={{ flex: 1 }}>
                    <Image
                        style={styles.image}
                        source={Images.imageLogin}
                    />
                    <View style={styles.inputView}>
                        <Text style={styles.loginText}>
                            {Strings.login}
                        </Text>
                        <Text style={{ marginTop: scaleRatio(2), color: Colors.otp }}>
                            {Strings.enterEmail}
                        </Text>
                        <TextInput
                            style={{ height: scaleRatio(3), marginTop: scaleRatio(1), fontFamily: FONT_FAMILY_SEMIBOLD }}
                            placeholder="Type here to translate!"
                            multiline={false}
                            placeholderTextColor={Colors.placeholder}
                            maxLength={60}
                            onChangeText={text => this.setState({ email: text })}
                            defaultValue={this.state.email}
                        />
                        <View style={{ height: scaleRatio(0.2), marginTop: scaleRatio(1), backgroundColor: Colors.lineColor }} />
                        <Text style={[styles.otp, { marginTop: scaleRatio(2), color: Colors.otp }]}>
                            {Strings.otpDesc}
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.getOtp}>
                                {Strings.getOtp}
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        )
    }

}
const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        display: 'flex',
        width: '100%',
        height: scaleRatio(37),
        borderBottomLeftRadius: scaleRatio(5),
        borderBottomRightRadius: scaleRatio(5),

    },
    inputView: {
        height: scaleRatio(37),
        backgroundColor: 'white',
        elevation: 0.8,
        borderRadius: scaleRatio(2),
        display: 'flex',
        top: -scaleRatio(10),
        margin: scaleRatio(3),
        padding: scaleRatio(3)
    },
    loginText: {
        fontSize: scaleRatio(3),
        fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    },
    otp: {
        color: Colors.otp,
        fontSize: scaleRatio(1.5),
        fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: scaleRatio(4),
        padding: scaleRatio(2),
        paddingHorizontal: scaleRatio(10),
        marginTop: scaleRatio(5),
        backgroundColor: Colors.blue
    },
    getOtp: {
        textAlign: 'center',
        color: 'white',
        fontSize: scaleRatio(2),
        fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    }
});