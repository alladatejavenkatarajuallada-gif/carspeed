import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

export default function UserLoginScreen({ navigation }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Note: In reality, you want to make an API call to the Django backend here
    // Example: fetch('http://10.0.2.2:8000/api/login/', { ... })
    
    if (userId === '' || password === '') {
      Alert.alert('Error', 'Please enter both User ID and Password');
    } else {
      Alert.alert('Success', `Logging in as ${userId}`);
      // Navigate to User Dashboard after successful login
    }
  };

  const handleReset = () => {
    setUserId('');
    setPassword('');
  };

  return (
    <ImageBackground 
      source={require('../assets/gettyimages-1449013384-640x640.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.headerText}>User Login Form</Text>
          </View>
          
          <View style={styles.cardBody}>
            <Text style={styles.label}>User ID:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter User ID"
              placeholderTextColor="#999"
              value={userId}
              onChangeText={setUserId}
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
              
              <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                <Text style={styles.resetButtonText}>RESET</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.registerLink}>
              <Text style={{color: '#333'}}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('UserRegister')}>
                <Text style={{color: 'crimson', fontWeight: 'bold'}}>Register Here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffefd5', // Same custom card color
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'crimson',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  cardHeader: {
    backgroundColor: 'rgba(220, 20, 60, 0.9)', // Header with different background
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardBody: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  loginButton: {
    flex: 1,
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#6c757d',
    padding: 12,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  }
});
