import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

export default function AdminLoginScreen({ navigation }) {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!adminId || !password) {
      Alert.alert('Error', 'Please enter both Admin ID and Password');
    } else {
      Alert.alert('Success', `Admin logged in successfully!`);
      navigation.navigate('AdminHome');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/gettyimages-1449013384-640x640.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.headerText}>Admin Login Form</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.label}>Admin ID:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Admin ID"
              placeholderTextColor="#999"
              value={adminId}
              onChangeText={setAdminId}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.resetButton} onPress={() => { setAdminId(''); setPassword(''); }}>
                <Text style={styles.buttonText}>RESET</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  card: { backgroundColor: '#e6f7ff', borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: '#007acc', shadowColor: '#000', elevation: 8 },
  cardHeader: { backgroundColor: '#007acc', padding: 15, alignItems: 'center' },
  headerText: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  cardBody: { padding: 20 },
  label: { fontWeight: 'bold', color: '#003366', marginBottom: 5, fontSize: 16 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 5, padding: 10, fontSize: 16, marginBottom: 15 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  loginButton: { flex: 1, backgroundColor: '#007acc', padding: 12, borderRadius: 5, marginRight: 10, alignItems: 'center' },
  resetButton: { flex: 1, backgroundColor: '#6c757d', padding: 12, borderRadius: 5, marginLeft: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});
