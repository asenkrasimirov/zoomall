import React, { Component } from 'react';

import { 
    View, 
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Text
} from 'react-native';

import { GrayButton } from '../components/Buttons/GrayButton';

const win    = Dimensions.get('window');
const ratio  = (win.width - 30) / 750;
const height = 402 * ratio;

const styles = StyleSheet.create({
    homeLogo: {
        width: '35%',
        height: 70,
        marginTop: 20
    },
    logoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    homeContainer: {
        margin: 15,
        display: 'flex',
        flexDirection: 'column'
    },
    scrollView: {
        
    },
    wrapper: {
        flex: 1,
    },
    petBanner: {
        width: win.width - 30,
        height: height
    },
    petBannerTouch: {
        marginTop: 20
    },
    personalDetails: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        padding: 15
    },
    settingsWrapper: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        paddingTop: 0,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 0
    },
    name: {
        fontSize: 21,
        fontWeight: '600',
        marginBottom: 15
    },
    regular: {
       fontSize: 16 
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 15
    },
    settingItem: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 1
    },
    settingItemBordered: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(209, 209, 214, 0.5)'
    },
    settingsIcon: {
        width: 31,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    arrowRightIcon: {
        width: 26,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    settingsText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        lineHeight: 52,
        paddingLeft: 15
    },
    profileEditWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
    profileEditIcon: {
        width: 26,
        height: 26,
    },
    profileEditText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        lineHeight: 26,
        marginTop: 0
    },
    profileEditTouchable: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    pointsIcon: {
        width: 40,
        height: 40
    },
    pointsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#F2F3F8',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 20
    },
    pointsLeft: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1
    },
    pointsRight: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    pointsText: {
        color: '#979797',
        fontSize: 12,
    },
    pointsTotal: {
        color: '#A45084',
        fontSize: 25,
        fontWeight: '600',
    },
    roundedLeft: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        position: 'absolute',
        left: -15,
        top: '50%'
    },
    roundedRight: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        position: 'absolute',
        right: -15,
        top: '50%'
    }
});

export default function ProfileScreen({ navigation }) {

    return (
        <View style={styles.wrapper}>
           <View style={styles.logoWrapper}> 
                <Image style={styles.homeLogo} resizeMode={'contain'} source={require('../assets/logo.png')} />
           </View>
           <ScrollView style={styles.scrollView}>
                <View style={styles.homeContainer}>
                    <View style={styles.profileEditWrapper}>
                        <Text style={[styles.heading, styles.profileEditText]}>Лични данни</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileDetailsScreen')} style={styles.profileEditTouchable}>
                            <Image style={styles.profileEditIcon} resizeMode={'contain'} source={require('../assets/profile-edit.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.personalDetails}>
                        <Text style={[styles.regular, styles.name]}>Иван Иванов</Text>
                        <Text style={[styles.regular, styles.email]}>ivan.ivanov@example.com</Text>
                        <Text style={[styles.regular, styles.phone]}>0888 456 201</Text>
                        <Text style={[styles.regular, styles.date]}>19.02.1991</Text>
                        <View style={styles.pointsWrapper}>
                            <View style={styles.pointsLeft}>
                                <Text style={styles.pointsText}>натрупани точки</Text>
                                <Text style={styles.pointsTotal}>123</Text>
                            </View>
                            <View style={styles.pointsRight}>
                                <Image style={styles.pointsIcon} resizeMode={'contain'} source={require('../assets/points-icon.png')} />
                            </View>

                            <View style={styles.roundedLeft}></View>
                            <View style={styles.roundedRight}></View>
                        </View>
                    </View>
                    <Text style={styles.heading}>Домашни любимци</Text>
                    <TouchableOpacity style={styles.petBannerTouch}>
                        <Image style={styles.petBanner} resizeMode={'contain'} source={require('../assets/add-pet-banner.png')} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Настройки</Text>
                    <View style={styles.settingsWrapper}>
                        <TouchableOpacity style={[styles.settingItem, styles.settingItemBordered]}>
                            <Image style={styles.settingsIcon} resizeMode={'contain'} source={require('../assets/icon-notification-off.png')} />
                            <Text style={styles.settingsText}>Нотификации</Text>
                            <Image style={styles.arrowRightIcon} resizeMode={'contain'} source={require('../assets/arrow-right.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.settingItem, styles.settingItemBordered]}>
                            <Image style={styles.settingsIcon} resizeMode={'contain'} source={require('../assets/icon-chat.png')} />
                            <Text style={styles.settingsText}>Обратна връзка</Text>
                            <Image style={styles.arrowRightIcon} resizeMode={'contain'} source={require('../assets/arrow-right.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.settingItem]}>
                            <Image style={styles.settingsIcon} resizeMode={'contain'} source={require('../assets/icon-contact.png')} />
                            <Text style={styles.settingsText}>Контакти</Text>
                            <Image style={styles.arrowRightIcon} resizeMode={'contain'} source={require('../assets/arrow-right.png')} />
                        </TouchableOpacity>
                    </View>
                    <GrayButton title="Изход" />
                </View>
           </ScrollView>
        </View>
    );
};