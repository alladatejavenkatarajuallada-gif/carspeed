import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';

export default function UploadScreen({ navigation }) {
  const openColab = () => {
    Linking.openURL('https://colab.research.google.com/').catch(() => {
      Alert.alert("Error", "Could not open Google Colab link.");
    });
  };

  const openLiveCamera = () => {
    // In a real mobile app, this would use react-native-camera or expo-camera
    // For this mockup, we just navigate to a placeholder result or throw an alert
    Alert.alert("Live Camera", "Opening device camera integration...");
    navigation.navigate('Result'); // Simulate going to result page after processing
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Car Speed Detection</Text>
        
        <Text style={styles.sectionTitle}>Video Processing</Text>
        <Text style={styles.subText}>Use Google Colab for video processing.</Text>
        <TouchableOpacity style={styles.colabBtn} onPress={openColab}>
          <Text style={styles.btnText}>Go to Colab for Video Processing</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Live Camera</Text>
        <Text style={styles.subText}>Use your webcam for real-time speed detection using OpenCV.</Text>
        <TouchableOpacity style={styles.cameraBtn} onPress={openLiveCamera}>
          <Text style={styles.btnText}>Open Live Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 20, justifyContent: 'center' },
  card: { backgroundColor: '#fff', padding: 30, borderRadius: 10, shadowColor: '#000', elevation: 5, alignItems: 'center' },
  header: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 30 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#444', marginTop: 15 },
  subText: { fontSize: 14, color: '#777', textAlign: 'center', marginBottom: 15, marginTop: 5 },
  colabBtn: { backgroundColor: '#ff6f00', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  cameraBtn: { backgroundColor: '#3498db', padding: 15, borderRadius: 5, width: '100%', alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  divider: { height: 1, backgroundColor: '#ddd', width: '100%', marginVertical: 30 }
});
