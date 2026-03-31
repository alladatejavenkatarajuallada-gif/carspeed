import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CARDS = [
  { title: "Project Overview", text: "A cutting-edge solution utilizing deep learning to detect car speeds in video footage accurately." },
  { title: "How It Works", text: "Upload a video of road traffic. The system processes it using YOLOv8 and estimates the speed of moving vehicles." },
  { title: "Key Features", text: "Real-time processing, intuitive interface, and reliable detection for traffic safety applications." },
  { title: "Technologies Used", text: "Built using Python, Django, and YOLOv8, combined with advanced computer vision techniques." },
  { title: "Applications", text: "Useful for traffic law enforcement, accident prevention, and city traffic monitoring." },
  { title: "Future Scope", text: "Enhance the system for multi-camera setups, predictive analysis, and integration with IoT devices." }
];

export default function UserHomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>About the Car Speed Detection Project</Text>
      
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('Upload')}>
          <Text style={styles.navBtnText}>Detect Speed (Upload/Live)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navBtnLogout} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navBtnText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        {CARDS.map((card, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardText}>{card.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 15 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  navButtons: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  navBtn: { backgroundColor: '#27ae60', padding: 12, borderRadius: 5, width: '60%', alignItems: 'center' },
  navBtnLogout: { backgroundColor: '#e74c3c', padding: 12, borderRadius: 5, width: '30%', alignItems: 'center' },
  navBtnText: { color: 'white', fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '100%', backgroundColor: '#343a40', borderRadius: 8, padding: 20, marginBottom: 15, shadowColor: '#000', elevation: 4 },
  cardTitle: { color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  cardText: { color: '#ccc', fontSize: 15, textAlign: 'center' }
});
