
import { SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import  { useState, useRef } from 'react'
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";


const Slide = () => {
  const slides = [
    {
      title: 'Lets have the best vacation with us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: require('../assets/beach.png')
    },
    {
      title: 'Travel made easy in your hands',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: require('../assets/oto.png')
    },
    {
      title: 'Lets discover the world with us',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: require('../assets/mountain.png')
    },
  ];
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();
  const handleSkip=()=>{
    navigation.navigate("Start")
 }
  const renderSlide = ({ item }) => (
    <View style={styles.slide}>
      <View style={styles.img}>
        <Image source={item.image} style={[styles.image, { width: 400 }]} />
      </View>
      <View style={styles.titlebig}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.titlesmall}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const handleNext = () => {
    let newIndex = activeSlide + 1;
    console.log('New Index:', newIndex);
    if (newIndex >= slides.length) {
      navigation.navigate("Start");
    } else {
      setActiveSlide(newIndex);
      carouselRef.current.snapToItem(newIndex);
    }
  }
 

  return (
    <SafeAreaView style={styles.container}>

      <Carousel
        ref={carouselRef}
        data={slides}
        renderItem={renderSlide}
        sliderWidth={400}
        itemWidth={400}
        layout={'default'}
        onSnapToItem={index => setActiveSlide(index)}
        currentIndex={activeSlide}
        loop={true}
      />
      <View style={{ }}>
        <Pagination
          dotsLength={slides.length}
          activeDotIndex={activeSlide}
          dotContainerStyle={{ marginHorizontal: 5 }}
          dotStyle={{ width: 25, height: 6, backgroundColor: '#1AB65C' }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <View >
        <TouchableOpacity
          onPress={handleNext}
          style={{
            width: 320,
            height: 55,
            backgroundColor: '#1AB65C',
            borderRadius: 27.5,
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Text style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
            letterSpacing: 0.2,
          }}>Next</Text>
        </TouchableOpacity>
        <View>
          <View style={{
            marginTop:19,
          }}>
          <TouchableOpacity 
          onPress={handleSkip}
          style={{
            width: 320,
            height: 55,
            backgroundColor: '#E8F8EF',
            borderRadius: 27.5,
            alignItems: "center",
            justifyContent: "center"
          }}>
          <Text style={{
            color: '#1AB65C',
            fontSize: 16,
            fontWeight: '600',
            letterSpacing: 0.2,
          }}>Skip</Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: '#fff', height:50 }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },

  img: {
    height: 400,
  },
  titlebig: {
    display: 'flex',
    flexDirection: 'column',
    width: 180,
    marginLeft: 31,
    position: 'absolute'
  },
  titlesmall: {

    marginTop: 100,
    marginLeft: 34,

  },
  title: {
    fontSize: 43,
    fontWeight: '700',
    lineHeight: 60.2,
    marginTop: 190,
    color: '#000',
    letterSpacing: 0.2,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.6,
    letterSpacing: 0.2,
  },

});

export default Slide;
