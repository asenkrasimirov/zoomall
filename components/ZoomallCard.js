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

const win    = Dimensions.get('window');
const ratio  = (win.width - 90) / 622;
const height =  40 * ratio;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10
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
    barCode: {
        width: win.width - 30,
        height: height,
        marginTop: 20
    },
    progress: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 23,
        paddingRight: 23,
        marginTop: 15
    },
    progressItem: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        height: 6,
        borderRadius: 2,
        margin: 3
    },
    smallProgress: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20
    },
    smallProgressItem: {
        flex: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    discount: {
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center',
        color: '#D1D1D6'
    },
    morePoints: {
        fontSize: 12,
        color: '#D1D1D6',
        textAlign: 'center'
    },
    active: {
        color: '#27B224'
    },
    smallProgressItemBordered: {
        borderRightWidth: 1,
        borderRightColor: '#D1D1D6'
    },
    discountActive: {
        color: 'black'
    }
});

export class ZoomallCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPoints: 5,
            totalPoints: 9
        };
    }

    showMoreInfo() {
        
    }

    getActiveIndex(index) {
        if(index <= this.state.currentPoints) {
            return {
                backgroundColor: '#A45084'
            };
        }
        return {};
    }

    render () {

        return (
            <View style={styles.wrapper}>
                <View style={styles.smallProgress}>
                    <View style={[styles.smallProgressItem, styles.smallProgressItemBordered]}>
                        <Text style={[styles.discount, styles.discountActive]}>-5%</Text>
                        <Text style={[styles.morePoints, styles.active]}>активна</Text>
                    </View>
                    <View style={[styles.smallProgressItem, styles.smallProgressItemBordered]}>
                        <Text style={styles.discount}>-10%</Text>
                        <Text style={styles.morePoints}>още 1 т.</Text>
                    </View>
                    <View style={styles.smallProgressItem}>
                        <Text style={styles.discount}>-15%</Text>
                        <Text style={styles.morePoints}>още 4 т.</Text>
                    </View>
                </View>
                <View style={styles.progress}>
                    <View style={[styles.progressItem, this.getActiveIndex(1)]}></View>
                    <View style={[styles.progressItem, this.getActiveIndex(2)]}></View>
                    <View style={[styles.progressItem, this.getActiveIndex(3)]}></View>
                    <View style={[styles.progressItem, this.getActiveIndex(4)]}></View>
                    <View style={[styles.progressItem, this.getActiveIndex(5)]}></View>
                    <View style={[styles.progressItem, this.getActiveIndex(6)]}></View>
                    <View style={[styles.progressItem, this.getActiveIndex(7)]}></View>
                    <View style={[styles.progressItem, this.getActiveIndex(8)]}></View>
                    <View style={[styles.progressItem, this.getActiveIndex(9)]}></View>
                </View>
                <Image style={styles.barCode} resizeMode={'contain'} source={require('../assets/barcode.png')} />
                <TouchableOpacity onPress={() => { this.showMoreInfo() }} style={styles.info}>
                    <Text style={styles.infoText}>Разберете повече</Text>
                    <Image style={styles.infoIcon} resizeMode={'contain'} source={require('../assets/info.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}