import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { Card, Title, Divider, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EscudoScreen = () => {
  const { colors } = useTheme();
  
  const time = {
    nome: "Clube de Regatas do Flamengo",
    escudo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7zmKqTvK4nXQeMqBaReuNYTgXVnJm-r6WQ&s",
    fundacao: "18 de novembro de 1895",
    estadio: "Maracanã",
    capacidade: "78.838 espectadores",
    mascote: "Urubu",
    cores: ["Vermelho", "Preto"],
    presidente: "Rodolfo Landim",
    tecnico: "Filipe Luís",
    valorMercado: "R$ 830 milhões (2025)",
    titulosPrincipais: [
      "3x Campeão da Libertadores",
      "8x Campeão Brasileiro",
      "4x Campeão da Copa do Brasil"
    ]
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={[styles.card, { backgroundColor: colors.surface }]}>
        <Card.Content>
          {/* Cabeçalho com nome e escudo */}
          <View style={styles.header}>
            <Title style={[styles.title, { color: colors.primary }]}>
              {time.nome}
            </Title>
            <Image 
              source={{ uri: time.escudo }} 
              style={styles.escudo} 
              resizeMode="contain"
            />
          </View>

          <Divider style={styles.divider} />

          {/* Informações básicas */}
          <View style={styles.infoSection}>
            <InfoItem icon="stadium" label="Estádio" value={time.estadio} />
            <InfoItem icon="calendar" label="Fundaçao" value={time.fundacao} />
            <InfoItem icon="account" label="Presidente" value={time.presidente} />
            <InfoItem icon="whistle" label="Técnico" value={time.tecnico} />
            <InfoItem icon="palette" label="Cores" value={time.cores.join(' e ')} />
            <InfoItem icon="dog" label="Mascote" value={time.mascote} />
            <InfoItem icon="cash" label="Valor de Mercado" value={time.valorMercado} />
          </View>

          <Divider style={styles.divider} />

          {/* Títulos importantes */}
          <View style={styles.titlesSection}>
            <Text style={[styles.sectionTitle, { color: colors.primary }]}>
              Principais Conquistas
            </Text>
            {time.titulosPrincipais.map((titulo, index) => (
              <View key={index} style={styles.titleItem}>
                <Icon name="trophy" size={20} color="#FFD700" style={styles.trophyIcon} />
                <Text style={styles.titleText}>{titulo}</Text>
              </View>
            ))}
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

// Componente auxiliar para itens de informação
const InfoItem = ({ icon, label, value }) => {
  const { colors } = useTheme();
  
  return (
    <View style={styles.infoItem}>
      <Icon name={icon} size={20} color={colors.primary} style={styles.icon} />
      <View style={styles.infoTextContainer}>
        <Text style={[styles.infoLabel, { color: colors.text }]}>{label}:</Text>
        <Text style={[styles.infoValue, { color: colors.secondary }]}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  card: {
    margin: 8,
    borderRadius: 12,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  escudo: {
    width: 180,
    height: 180,
    marginVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  divider: {
    marginVertical: 12,
    height: 1,
  },
  infoSection: {
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  icon: {
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  infoTextContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
  },
  infoValue: {
    fontSize: 16,
  },
  titlesSection: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  titleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  trophyIcon: {
    marginRight: 8,
  },
  titleText: {
    fontSize: 16,
  },
});

export default EscudoScreen;