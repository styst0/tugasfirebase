// app/screens/Home.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const dummyTasks = [
  { id: '1', title: 'Siapkan Presentasi Proyek A', priority: 'High', dueDate: '2025-11-08', status: 'In Progress' },
  { id: '2', title: 'Balas Email Klien Z', priority: 'Medium', dueDate: '2025-11-06', status: 'Completed' },
  { id: '3', title: 'Belanja Kebutuhan Mingguan', priority: 'Low', dueDate: '2025-11-09', status: 'Pending' },
];

const TaskItem = ({ item, navigation }: any) => {
    const priorityColor = item.priority === 'High' ? '#ef4444' : item.priority === 'Medium' ? '#f59e0b' : '#3b82f6';
    const statusColor = item.status === 'Completed' ? '#10b981' : '#6b7280';

    return (
        <TouchableOpacity 
            style={styles.taskCard} 
            onPress={() => navigation.navigate("Details", { task: item })}
        >
            <View style={styles.taskHeader}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={[styles.taskPriority, { backgroundColor: priorityColor }]}>
                    {item.priority}
                </Text>
            </View>
            <Text style={styles.taskDue}>Tenggat: {item.dueDate}</Text>
            <Text style={[styles.taskStatus, { color: statusColor }]}>Status: {item.status}</Text>
        </TouchableOpacity>
    );
};


const Home = ({ navigation }: any) => {
  const user = FIREBASE_AUTH.currentUser;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Dashboard Tugas</Text>
      <Text style={styles.subtitle}>Selamat datang, {user?.email}!</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Anda memiliki {dummyTasks.length} tugas aktif.</Text>
        <Text style={styles.infoText}>Status terakhir login: {user?.metadata.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}</Text>
      </View>

      <FlatList
        data={dummyTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem item={item} navigation={navigation} />}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ListHeaderComponent={() => (
            <Text style={styles.listHeader}>Daftar Tugas Anda (kli untuk Detail):</Text>
        )}
      />

      <TouchableOpacity
        style={styles.buttonLogout}
        onPress={() => FIREBASE_AUTH.signOut()}
      >
        <Text style={styles.buttonText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f9",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1f2937",
    marginTop: 60,
    marginBottom: 4,
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  infoBox: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#4f46e5',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    color: "#4b5563",
    lineHeight: 22,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginTop: 10,
    marginBottom: 10,
  },
  taskCard: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
    flexShrink: 1,
    paddingRight: 10,
  },
  taskPriority: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    overflow: 'hidden', // Untuk memastikan borderRadius bekerja di Android
  },
  taskDue: {
    fontSize: 13,
    color: '#4b5563',
    marginBottom: 4,
  },
  taskStatus: {
    fontSize: 13,
    fontWeight: '600',
  },
  buttonLogout: {
    backgroundColor: "#dc2626",
    paddingVertical: 14,
    marginHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});