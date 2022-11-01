import * as React from 'react';

import { 
    View, 
    Image, 
    StyleSheet, 
    Text,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from 'react-native';


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20
    },
    leftColumn: {
        flex: 6,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingRight: 10
    },
    rightColumn: {
        flex: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    giftLogo: {
        width: '100%'
    },
    textOne: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10
    },
    textTwo: {
        color: 'black',
        fontSize: 12
    },
    textThree: {
        fontSize: 40,
        color: '#CA68A4',
        fontWeight: '800'
    },
    dashWrapper: {
        flex: 1
    },
    mainWrapper: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
    },
    dash: {
        width: '100%'
    },
    roundedLeft: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F4F6F9',
        position: 'absolute',
        bottom: -20,
        left: -20
    },
    roundedRight: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F4F6F9',
        position: 'absolute',
        bottom: -20,
        right: -20
    },
    info: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    infoText: {
        color: '#979797',
        fontSize: 12,
        paddingTop: 15,
        paddingBottom: 15,
        fontWeight: '600',
        lineHeight: 18
    },
    infoIcon: {
        width: 18,
        height: 18,
        marginLeft: 10,
        marginRight: 30,
        marginTop: 0
    },
    regularText: {
        fontSize: 12,
        color: 'black',
        marginBottom: 15
    },
    header: {
        fontSize: 16,
        color: '#333333',
        fontWeight: '600',
        marginBottom: 15
    },
    code: {
        fontSize: 25,
        color: '#333333',
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    moreInfo: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 15,
        paddingRight: 15
    }
});

export class HappyBirthday extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            infoVisible: false
        };
    }
    
    showMoreInfo() {
        this.setState({
            infoVisible: true
        });
    }

    hideMoreInfo() {
        this.setState({
            infoVisible: false
        });
    }

    render () {
        const ratio = 280 / ((Dimensions.get('window').width / 11) * 5);
        const height = 230 / ratio;

        const giftLogoHeight = {
            height: height
        };

        return (
            <View style={styles.wrapper}>
                <View style={styles.mainWrapper}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.textOne}>Честит рожден ден, {this.props.name}!</Text>
                        <Text style={styles.textTwo}>Подаряваме Ви отстъпка при следваща покупка!</Text>
                        <Text style={styles.textThree}>{this.props.discount}</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Image style={[styles.giftLogo, giftLogoHeight]} resizeMode={'contain'} source={require('../assets/gift.png')} />
                    </View>

                    <View style={styles.roundedLeft}></View>
                    <View style={styles.roundedRight}></View>
                </View>
                <View style={styles.dashWrapper}>
                    <Image style={styles.dash} resizeMode={'contain'} source={require('../assets/dash.png')} />
                </View>
                {this.state.infoVisible &&
                    <TouchableOpacity onPress={() => { this.hideMoreInfo() }} style={styles.info}>
                        <Text style={styles.infoText}>Затвори</Text>
                        <Image style={styles.infoIcon} resizeMode={'contain'} source={require('../assets/arrow-up.png')} />
                    </TouchableOpacity>
                }
                {!this.state.infoVisible &&
                    <TouchableOpacity onPress={() => { this.showMoreInfo() }} style={styles.info}>
                        <Text style={styles.infoText}>Разберете повече</Text>
                        <Image style={styles.infoIcon} resizeMode={'contain'} source={require('../assets/info.png')} />
                    </TouchableOpacity>
                }
                {this.state.infoVisible &&
                    <View style={styles.moreInfo}>
                        <Text style={styles.regularText}>Отстъпката важи в срок от 30 дни, считано от дата на рожденият ден.</Text>
                        <Text style={styles.header}>Как да използвате отстъпката?</Text>
                        <Text style={styles.regularText}>
                            При пазаруване във физически магазин, покажете тази карта на касата.
                            Адрес: г. София, бул. Черни връх 100, Парадайс център, ет. - 1
                        </Text>
                        <Text style={styles.regularText}>При пазаруване онлайн, въведете получения код при завършването на поръчката.</Text>
                        
                        <ImageBackground style={styles.homeLogo} resizeMode={'contain'} source={require('../assets/confetti.png')}>
                            <Text style={styles.code}>86FFDE8E1</Text>
                        </ImageBackground>
                        <Text style={styles.regularText}>Отстъпката не се комбинира с други отстъпки и намаления.</Text>
                    </View>
                }
            </View>
        )
    }
}