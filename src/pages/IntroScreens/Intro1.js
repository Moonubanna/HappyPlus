import React, { Component } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Fonts, Colors, Strings, scaleRatio, Images } from '../../helpers/index'



const slides = [
    {
        key: 1,
        title: Strings.intro1,
        text: Strings.intro1desc,
        image: Images.intro1,
    },
    {
        key: 2,
        title: Strings.intro2,
        text: Strings.intro2desc,
        image: Images.intro2,
    },
    {
        key: 3,
        title: Strings.intro3,
        text: Strings.intro3desc,
        image: Images.intro3,
    },
    {
        key: 4,
        title: Strings.intro4,
        text: Strings.intro4desc,
        image: Images.intro4,
    }
];
export default class Intro1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
            showRealApp: false
        }
    }


    componentDidMount() {

    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <AppIntroSlider
                    activeDotStyle={styles.activeDotStyle}
                    dotStyle={styles.dot}
                    showNextButton={true}
                    showSkipButton={true}
                    renderDoneButton={this._renderDoneButton}
                    renderNextButton={this._renderNextButton}
                    renderItem={this._renderItem} data={slides} onDone={this._onDone} />
                <View style={styles.skip}>
                    <Text style={styles.skipText}>{Strings.skip}</Text>
                </View>
            </View>
        )
    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <View style={{ padding: scaleRatio(0) }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.text}</Text>
                </View>
            </View>
        );
    }

    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <AntDesign
                    name="arrowright"
                    color="rgba(255, 255, 255, .9)"
                    size={30}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={styles.letsBegin}>
                <Text style={styles.doneButton}>{Strings.letsBegin}</Text>
            </View>
        );
    };


    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        marginTop: scaleRatio(6),
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    title: {
        color: Colors.darkBlue,
        textAlign: 'center',
        fontFamily: Fonts.FONT_FAMILY_BOLD,
        fontSize: scaleRatio(3.2),
        marginTop: scaleRatio(10),
    },
    description: {
        paddingHorizontal: scaleRatio(2),
        color: Colors.darkBlue,
        textAlign: 'center',
        fontSize: scaleRatio(2),
        fontFamily: Fonts.FONT_FAMILY_MEDIUM,
        marginTop: scaleRatio(4),
    },
    dot: {
        width: scaleRatio(4),
        height: scaleRatio(0.6),
        backgroundColor: Colors.dotsColor,
    },
    activeDotStyle: {
        backgroundColor: Colors.darkBlue,
        width: scaleRatio(4),
        height: scaleRatio(0.6),
    },
    buttonCircle: {
        width: scaleRatio(7),
        height: scaleRatio(7),
        backgroundColor: Colors.blue,
        borderRadius: scaleRatio(3.5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    letsBegin: {
        width: scaleRatio(16),
        height: scaleRatio(7),
        backgroundColor: Colors.blue,
        borderRadius: scaleRatio(3.5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    doneButton: {
        color: 'white',
        fontSize: scaleRatio(2),
        fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    },
    skip: {
        position: 'absolute',
        right:scaleRatio(2),
        marginTop: scaleRatio(7)
    },
    skipText: {
        color: Colors.darkBlue,
        fontSize: scaleRatio(2),
        fontFamily: Fonts.FONT_FAMILY_MEDIUM,
    }
});