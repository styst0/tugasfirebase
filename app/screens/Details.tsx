// app/screens/Details.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Details = ({ route, navigation }: any) => {
  // Ambil objek 'task' dari parameter navigasi
  const { task } = route.params; 

  const priorityColor = task.priority === 'High' ? '#ef4444' : task.priority === 'Medium' ? '#f59e0b' : '#3b82f6';
  const statusColor = task.status === 'Completed' ? '#10b981' : task.status === 'Pending' ? '#9ca3af' : '#4f46e5';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Tugas</Text>
      
      <View style={styles.detailCard}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        
        <View style={styles.infoRow}>
            <Text style={styles.label}>ID Tugas:</Text>
            <Text style={styles.value}>{task.id}</Text>
        </View>

        <View style={styles.infoRow}>
            <Text style={styles.label}>Prioritas:</Text>
            <Text style={[styles.value, styles.badge, { backgroundColor: priorityColor }]}>
                {task.priority}
            </Text>
        </View>

        <View style={styles.infoRow}>
            <Text style={styles.label}>Status:</Text>
            <Text style={[styles.value, { color: statusColor, fontWeight: '700' }]}>
                {task.status}
            </Text>
        </View>

        <View style={styles.infoRow}>
            <Text style={styles.label}>Tenggat Waktu:</Text>
            <Text style={styles.value}>{task.dueDate}</Text>
        </View>

        <Text style={styles.notesHeader}>Catatan Tambahan:</Text>
        <Text style={styles.notesText}>
            deskripsi tugasnya
        </Text>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Kembali ke Daftar Tugas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    alignItems: "center",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 30,
  },
  detailCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    paddingBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f9fafb',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#4b5563',
  },
  value: {
    fontSize: 15,
    color: '#1f2937',
  },
  badge: {
    color: '#fff',
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
  },
  notesHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
    marginTop: 20,
    marginBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 10,
  },
  notesText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#3b82f6",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});