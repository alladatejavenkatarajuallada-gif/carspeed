import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function ResultScreen({ navigation }) {
  // Sample Data equivalent to Django context 'car_data'
  const carData = [
    { car_id: "VD-4512", avg_speed: "85", status: "Red - Overspeeding" },
    { car_id: "VD-4513", avg_speed: "60", status: "Green - Safe" },
    { car_id: "VD-4514", avg_speed: "72", status: "Yellow - Warning" }
  ];

  const handleDownload = () => {
    Alert.alert("Download", "Downloading processed_video.mp4...");
  };

  const getStatusColor = (status) => {
    if (status.includes('Red')) return '#dc3545';
    if (status.includes('Green')) return '#28a745';
    if (status.includes('Yellow')) return '#ffc107';
    return '#6c757d';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Video Processing Complete</Text>
        <Text style={styles.text}>Your video has been processed successfully. You can download the processed video below:</Text>
        
        <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
          <Text style={styles.btnText}>Download Processed Video</Text>
        </TouchableOpacity>

        <Text style={styles.subHeader}>Detected Vehicles</Text>
        
        <View style={styles.table}>
          <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>Vehicle ID</Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1 }]}>Speed (km/h)</Text>
            <Text style={[styles.cell, styles.headerCell, { flex: 1.5 }]}>Status</Text>
          </View>
          
          {carData.map((car, index) => (
            <View key={index} style={styles.row}>
              <Text style={[styles.cell, { fontWeight: 'bold', flex: 1 }]}>{car.car_id}</Text>
              <Text style={[styles.cell, { flex: 1 }]}>{car.avg_speed}</Text>
              <View style={[styles.cell, { flex: 1.5, justifyContent: 'center', alignItems: 'center' }]}>
                <View style={[styles.badge, { backgroundColor: getStatusColor(car.status) }]}>
                  <Text style={styles.badgeText}>{car.status}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
        
        <TouchableOpacity 
          style={[styles.downloadBtn, { backgroundColor: '#6c757d', marginTop: 30 }]} 
          onPress={() => navigation.navigate('UserHome')}
        >
          <Text style={styles.btnText}>Back to Dashboard</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 15 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, shadowColor: '#000', elevation: 4, marginBottom: 30 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#333', textAlign: 'center', marginBottom: 15 },
  text: { fontSize: 15, color: '#555', textAlign: 'center', marginBottom: 20 },
  downloadBtn: { backgroundColor: '#3498db', padding: 15, borderRadius: 5, alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  subHeader: { fontSize: 20, fontWeight: 'bold', color: '#333', textAlign: 'center', marginTop: 30, marginBottom: 15 },
  table: { borderWidth: 1, borderColor: '#dee2e6', borderRadius: 5, overflow: 'hidden' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#dee2e6' },
  headerRow: { backgroundColor: '#343a40' },
  cell: { padding: 10, textAlign: 'center', color: '#333' },
  headerCell: { color: 'white', fontWeight: 'bold' },
  badge: { paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15 },
  badgeText: { color: 'white', fontWeight: 'bold', fontSize: 12 }
});
