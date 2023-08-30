import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Remplacez 'API_URL' par l'URL de votre API
    fetch('http://estiamqcm.davilat.com/api/quizzes')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur de récupération des données:', error));
  }, []);

  

  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => {
              if (item.id === 1) {
                navigation.navigate('Questionnaire');
              }
            }}
          >
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',  // Un bleu très clair pour un fond épuré
  },
  card: {
    shadowColor: '#c5d0db',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    flex: 1,
    margin: 10,
    padding: 14,  // Augmentation légère du padding pour un toucher confortable
    backgroundColor: '#ffffff',  // Fond blanc pour une apparence propre et moderne
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 12,  // Coins légèrement plus arrondis
    borderWidth: 1,
    borderColor: '#d8e1e8',  // Une couleur de bordure douce
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,  // Un peu de courbure pour les images, pour les rendre plus douces
  },
  cardText: {
    fontSize: 18,  // Un peu plus grand pour mettre en évidence
    textAlign: 'center',
    color: '#344356',  // Un bleu foncé/gris pour le texte, moderne et lisible
  },
});


export default HomeScreen;
