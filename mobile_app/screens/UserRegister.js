import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ImageBackground, ScrollView } from 'react-native';

export default function UserRegisterScreen({ navigation }) {
  const [formData, setFormData] = useState({
    name: '',
    loginid: '',
    password: '',
    mobile: '',
    email: '',
    locality: '',
    address: '',
    city: '',
    state: ''
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    // Basic validation
    if (!formData.name || !formData.loginid || !formData.password || !formData.mobile) {
      Alert.alert('Error', 'Please fill in all the required fields');
      return;
    }
    
    Alert.alert('Success', 'Registration successful! (Demo)');
    navigation.navigate('UserLogin');
  };

  const handleReset = () => {
    setFormData({
      name: '', loginid: '', password: '', mobile: '', email: '', locality: '', address: '', city: '', state: ''
    });
  };

  return (
    <ImageBackground 
      source={require('../assets/gettyimages-1449013384-640x640.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.headerText}>User Register Form</Text>
            </View>
            
            <View style={styles.cardBody}>
              <Text style={styles.label}>User Name:</Text>
              <TextInput style={styles.input} placeholder="Enter Name" value={formData.name} onChangeText={(text) => handleChange('name', text)} />
              
              <Text style={styles.label}>Login ID:</Text>
              <TextInput style={styles.input} placeholder="Enter Login ID" value={formData.loginid} onChangeText={(text) => handleChange('loginid', text)} />
              
              <Text style={styles.label}>Password:</Text>
              <TextInput style={styles.input} placeholder="Enter Password" secureTextEntry value={formData.password} onChangeText={(text) => handleChange('password', text)} />
              
              <Text style={styles.label}>Mobile:</Text>
              <TextInput style={styles.input} placeholder="Enter Mobile Number" keyboardType="phone-pad" value={formData.mobile} onChangeText={(text) => handleChange('mobile', text)} />
              
              <Text style={styles.label}>Email:</Text>
              <TextInput style={styles.input} placeholder="Enter Email" keyboardType="email-address" value={formData.email} onChangeText={(text) => handleChange('email', text)} />
              
              <Text style={styles.label}>Locality:</Text>
              <TextInput style={styles.input} placeholder="Enter Locality" value={formData.locality} onChangeText={(text) => handleChange('locality', text)} />
              
              <Text style={styles.label}>Address:</Text>
              <TextInput style={styles.input} placeholder="Enter Address" value={formData.address} onChangeText={(text) => handleChange('address', text)} />
              
              <Text style={styles.label}>City:</Text>
              <TextInput style={styles.input} placeholder="Enter City" value={formData.city} onChangeText={(text) => handleChange('city', text)} />
              
              <Text style={styles.label}>State:</Text>
              <TextInput style={styles.input} placeholder="Enter State" value={formData.state} onChangeText={(text) => handleChange('state', text)} />
              
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                  <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
                  <Text style={styles.buttonText}>RESET</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.loginLink}>
                <Text style={{color: '#333'}}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('UserLogin')}>
                  <Text style={{color: 'brown', fontWeight: 'bold'}}>Login Here</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', padding: 10 },
  scrollContainer: { paddingBottom: 30, paddingTop: 20 },
  card: {
    backgroundColor: 'rgba(255, 248, 220, 0.95)',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 8,
  },
  cardHeader: { backgroundColor: '#fff', padding: 15, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#ddd' },
  headerText: { color: 'brown', fontSize: 22, fontWeight: 'bold' },
  cardBody: { padding: 20 },
  label: { fontWeight: 'bold', color: '#333333', marginBottom: 5, fontSize: 16, marginTop: 5 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, fontSize: 16, marginBottom: 10, color: '#000' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  registerButton: { flex: 1, backgroundColor: '#007bff', padding: 12, borderRadius: 5, marginRight: 10, alignItems: 'center' },
  resetButton: { flex: 1, backgroundColor: '#6c757d', padding: 12, borderRadius: 5, marginLeft: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  loginLink: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 }
});
