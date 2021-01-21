import React, { Component, } from 'react';
import {
    Platform, StyleSheet, View, Text,BackHandler,
    Image, TouchableOpacity, Alert, SafeAreaView, TextInput, TouchableOpacityBase
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FONT_FAMILY_SEMIBOLD } from '../helpers/Fonts';

import { Fonts, Colors, Strings, scaleRatio, Images } from '../helpers/index'



export default class OtpScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            state: { otp: [] },
            otpTextInput: [],
            otp: ''
        }
    }


    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onPressBackButton);

        const { otpTextInput, } = this.state;
        otpTextInput[0].focus();
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onPressBackButton);
    }

    renderInputs() {
        const inputs = Array(6).fill(0);
        const txt = <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:scaleRatio(2) }}>
            {
                inputs.map(
                    (i, j) => <View key={j} style={[styles.txtMargin,]}>
                        <TextInput
                            maxLength={1}
                            style={[styles.inputRadius, { borderRadius: 10, borderWidth: 1, height: scaleRatio(6), width: scaleRatio(6) }]}
                            keyboardType="numeric"
                            onChangeText={v => this.focusNext(j, v)}
                            onKeyPress={e => this.focusPrevious(e.nativeEvent.key, j)}
                            ref={ref => this.state.otpTextInput[j] = ref}
                        />
                    </View>
                )
            }
        </View>
        return txt;
    }

    focusPrevious(key, index) {
        if (key === 'Backspace' && index !== 0)
            this.state.otpTextInput[index - 1].focus();
    }

    focusNext(index, value) {
        if (index < this.state.otpTextInput.length - 1 && value) {
            this.state.otpTextInput[index + 1].focus();
        }
        if (index === this.state.otpTextInput.length - 1) {
            this.state.otpTextInput[index].blur();
        }
        const otp = this.state.state.otp;
        otp[index] = value;
        this.setState({ otp });
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
                            {Strings.verification}
                        </Text>
                        <Text style={{ marginTop: scaleRatio(2), color: Colors.otp }}>
                            {Strings.otpSent}<Text style={styles.emailBold}>john@happyplus.in</Text>
                        </Text>
                        {this.renderInputs()}
                        <Text style={[styles.otp, {textAlign:'center', marginTop: scaleRatio(3), color: Colors.lineColor }]}>
                            {Strings.expire}
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.getOtp}>
                                {Strings.verify}
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
        margin: scaleRatio(2),
        padding: scaleRatio(3)
    },
    loginText: {
        fontSize: scaleRatio(3),
        fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    },
    otp: {
        color: Colors.blue,
        fontSize: scaleRatio(2),
        fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: scaleRatio(4),
        padding: scaleRatio(2),
        paddingHorizontal: scaleRatio(4),
        marginTop: scaleRatio(3),
        backgroundColor: Colors.blue
    },
    getOtp: {
        textAlign: 'center',
        color: 'white',
        fontSize: scaleRatio(2),
        fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    },
    emailBold: {
       color:'black',
        fontSize: scaleRatio(1.6),
        fontFamily: Fonts.FONT_FAMILY_SEMIBOLD,
    },
    txtInput: {
        flex: 1,
        height: scaleRatio(6),
        width: scaleRatio(6),
        maxWidth: scaleRatio(6),
        borderRadius: 5,
        borderColor: Colors.light_black_500,
        borderWidth: 1,
        backgroundColor: Colors.white,
        textAlign: 'center',
        fontSize: scaleRatio(2.3)
    },
    txtMargin: { margin: 3 },
    inputRadius: { textAlign: 'center' }
});