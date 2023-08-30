import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1541260894924-7ff059b93d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80' }}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.label}>Nom: John Doe</Text>
      <Text style={styles.label}>Email: john.doe@example.com</Text>
      <Text style={styles.label}>Prénom: John</Text>
      {/* D'autres détails de profil peuvent être ajoutés de manière similaire */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f9fc',  // Un bleu très clair pour un fond épuré
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,  // Un peu plus grand pour la lisibilité
    marginBottom: 15,
    color: '#344356',  // Un bleu foncé/gris pour le texte, moderne et lisible
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,  // Pour rendre l'image complètement ronde
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#d8e1e8',  // Une couleur de bordure douce
  },
  profileImage: {
    width: '100%',
    height: '100%',
  }
});

export default ProfileScreen;
