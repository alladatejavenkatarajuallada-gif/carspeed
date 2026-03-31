import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CARDS = [
  { title: "Advanced Technology", text: "Leverage cutting-edge computer vision and deep learning algorithms for accurate speed detection." },
  { title: "Real-Time Monitoring", text: "Analyze video footage in real-time to identify speeding vehicles and ensure compliance with traffic laws." },
  { title: "Road Safety", text: "Enhance traffic management and reduce accidents by monitoring vehicle speeds effectively." },
  { title: "User-Friendly Interface", text: "A simple and intuitive dashboard for easy operation and quick insights." },
  { title: "Data-Driven Insights", text: "Generate detailed reports and analytics for effective traffic policy implementation." },
  { title: "Scalable Solution", text: "Designed to scale for city-wide traffic monitoring or individual road sections." }
];

export default function AdminHomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome to Car Speed Detection (Admin)</Text>
      
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.navBtn} onPress={() => navigation.navigate('UserDetails')}>
          <Text style={styles.navBtnText}>View Users</Text>
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
  container: { flex: 1, backgroundColor: '#f4f4f4', padding: 15 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  navButtons: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  navBtn: { backgroundColor: '#3498db', padding: 10, borderRadius: 5, width: '40%', alignItems: 'center' },
  navBtnLogout: { backgroundColor: '#e74c3c', padding: 10, borderRadius: 5, width: '40%', alignItems: 'center' },
  navBtnText: { color: 'white', fontWeight: 'bold' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', backgroundColor: '#343a40', borderRadius: 8, padding: 15, marginBottom: 15, shadowColor: '#000', elevation: 4 },
  cardTitle: { color: 'white', fontSize: 16, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  cardText: { color: '#ccc', fontSize: 14, textAlign: 'center' }
});
