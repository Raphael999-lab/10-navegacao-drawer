import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1987, 1992, 2009, 2019, 2020],
    icone: "trophy",
    total: "8 títulos"
  },
  {
    nome: "Copa Libertadores",
    anos: [1981, 2019, 2022],
    icone: "earth",
    total: "3 títulos"
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024],
    icone: "cup",
    total: "5 títulos"
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025],
    icone: "shield",
    total: "3 títulos (incluindo 2025)"
  },
];

const TitulosScreen = () => {
  return (
    <View style={styles.safeArea}>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.header}>
                <Icon name={item.icone} size={24} color="#d62828" style={styles.icon} />
                <Title style={styles.title}>{item.nome}</Title>
              </View>
              
              <Paragraph style={styles.total}>{item.total}</Paragraph>
              
              <Divider style={styles.divider} />
              
              <View style={styles.yearsContainer}>
                {item.anos.map((ano, index) => (
                  <View key={index} style={styles.yearPill}>
                    <Text style={styles.yearText}>{ano}</Text>
                  </View>
                ))}
              </View>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  container: {
    padding: 12,
  },
  card: {
    margin: 8,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8
  },
  icon: {
    marginRight: 12
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  total: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 8
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 8
  },
  yearsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  yearPill: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 6,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  yearText: {
    fontSize: 12,
    color: '#333'
  }
});

export default TitulosScreen;