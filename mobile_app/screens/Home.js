import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground 
      source={require('../assets/gettyimages-1449013384-640x640.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Welcome to Car Speed Detection</Text>
          
          <Text style={styles.paragraph}>
            Our innovative platform leverages advanced deep learning and computer vision techniques to detect vehicle speeds with precision. Designed for both casual users and administrators, this system offers robust features to ensure efficient monitoring and management.
          </Text>
          
          <Text style={styles.paragraph}>
            Explore how our intelligent algorithms analyze video footage to detect cars, measure their speeds, and provide real-time data insights. This application is a step forward in road safety and traffic management.
          </Text>
          
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('UserLogin')}
          >
            <Text style={styles.buttonText}>EXPLORE NOW</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)', // Semi-transparent overlay to make text readable
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    marginTop: 50,
  },
  title: {
    fontSize: 26,
    color: '#2c3e50',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'justify',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
