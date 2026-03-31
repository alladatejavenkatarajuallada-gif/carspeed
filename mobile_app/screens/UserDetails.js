import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

export default function UserDetailsScreen() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', loginid: 'john123', mobile: '999999999', email: 'john@test.com', locality: 'NY', status: 'waiting' },
    { id: 2, name: 'Jane Smith', loginid: 'jane89', mobile: '888888888', email: 'jane@test.com', locality: 'CA', status: 'Activated' }
  ]);

  const activateUser = (id) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: 'Activated' } : u));
    Alert.alert("Success", "User activated!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>View RegisterUser Details</Text>
      
      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={[styles.row, styles.headerRow]}>
            <Text style={[styles.cell, styles.headerCell]}>S.No</Text>
            <Text style={[styles.cell, styles.headerCell]}>Name</Text>
            <Text style={[styles.cell, styles.headerCell]}>Login ID</Text>
            <Text style={[styles.cell, styles.headerCell]}>Mobile</Text>
            <Text style={[styles.cell, styles.headerCell]}>Email</Text>
            <Text style={[styles.cell, styles.headerCell]}>Locality</Text>
            <Text style={[styles.cell, styles.headerCell]}>Status</Text>
            <Text style={[styles.cell, styles.headerCell]}>Activate</Text>
          </View>
          
          {users.map((user, index) => (
            <View key={user.id} style={styles.row}>
              <Text style={styles.cell}>{index + 1}</Text>
              <Text style={styles.cell}>{user.name}</Text>
              <Text style={styles.cell}>{user.loginid}</Text>
              <Text style={styles.cell}>{user.mobile}</Text>
              <Text style={styles.cell}>{user.email}</Text>
              <Text style={styles.cell}>{user.locality}</Text>
              <Text style={styles.cell}>{user.status}</Text>
              <View style={styles.cell}>
                {user.status === 'waiting' ? (
                  <TouchableOpacity onPress={() => activateUser(user.id)}>
                    <Text style={{color: 'darkblue', fontWeight: 'bold'}}>Activate</Text>
                  </TouchableOpacity>
                ) : (
                  <Text>Activated</Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 10 },
  header: { fontSize: 22, fontWeight: 'bold', color: 'brown', textAlign: 'center', marginVertical: 20 },
  table: { borderWidth: 1, borderColor: '#ddd', backgroundColor: '#fff' },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#ddd' },
  headerRow: { backgroundColor: '#f1f1f1' },
  cell: { width: 100, padding: 10, textAlign: 'center', color: '#333' },
  headerCell: { fontWeight: 'bold', color: 'brown' }
});
