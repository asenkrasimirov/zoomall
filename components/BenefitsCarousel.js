import * as React from 'react';
import { View, SafeAreaView } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

import Benefits from './Benefits';
import Benefits2 from './Benefits2';
import Benefits3 from './Benefits3';

import { Dimensions } from 'react-native';

export class MyCarousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            carouselItems: [{}, {}, {} ]
        };
    }

    get pagination () {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: -4,
                  backgroundColor: '#8D4D74'
              }}
              inactiveDotStyle={{
                  backgroundColor: '#979797'
              }}
              inactiveDotOpacity={0.3}
              inactiveDotScale={1}
              tappableDots={true}
              enableMomentum={false}
              carouselRef={this.carousel}
            />
        );
    }
 
    _renderItem = ({item, index}) => {

        if(index === 0) {
            return (
                <Benefits />
            );
        }
        else if(index === 1) {
            return (
                <Benefits2 />
            );
        }
        else if(index === 2) {
            return (
                <Benefits3 navigation={this.props.navigation} />
            );
        }
    }
 
    render () {
        const windowWidth = Dimensions.get('window').width;
        const windowHeight = Dimensions.get('window').height;

        return (
            <SafeAreaView  style={{ flex: 25 }}>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <Carousel
                    layout={"tinder"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={windowWidth}
                    sliderHeight={windowHeight}
                    slideStyle={{ width: windowWidth }}
                    itemWidth={windowWidth}
                    itemHeight={windowHeight}
                    renderItem={this._renderItem}
                    enableMomentum={false}
                    inactiveSlideScale={0.8}
                    inactiveSlideOpacity={0.1}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </View>
                { this.pagination }
          </SafeAreaView>
        );
    }
}