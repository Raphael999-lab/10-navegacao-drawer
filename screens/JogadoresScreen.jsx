import React from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native'; // Adicionei Image aqui
import { Card, Title, Paragraph, Divider, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const jogadores = [
  {
    nome: "Gerson Santos da Silva",
    apelido: "Gerson",
    numero: 20,
    posicao: "Volante",
    idade: 26,
    nacionalidade: "Brasileiro",
    altura: "1,76m",
    peso: "70kg",
    peDominante: "Ambidestro",
    dataContratacao: "10 de janeiro de 2023",
    valorMercado: "€18 milhões",
    imagem: "https://statics.otvfoco.com.br/2025/03/gerson-966x507.jpg",
    estatisticas: {
      jogos: 124,
      gols: 15,
      assistencias: 22,
      titulos: ["Libertadores 2022", "Copa do Brasil 2022", "Supercopa 2020/2021"]
    },
    biografia: "Revelado pelo Fluminense, teve passagem pelo Roma antes de se consagrar no Flamengo."
  },
  
  {
    nome: "Pedro Guilherme",
    apelido: "Pedro",
    numero: 9,
    posicao: "Atacante",
    idade: 27,
    nacionalidade: "Brasileiro",
    altura: "1,85m",
    peso: "78kg",
    peDominante: "Direito",
    dataContratacao: "13 de agosto de 2020",
    valorMercado: "€25 milhões",
    imagem: "https://s2-oglobo.glbimg.com/LCGsBzduY4mmpK9JSuqQaZGGaew=/570x620/top/smart/https://i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/0/4/WS2vLKTWyr3pX86UBGmQ/100323689-flamengos-brazilian-forward-pedro-celebrates-after-scoring-against-velez-sarsfield-du.jpg",
    estatisticas: {
      jogos: 210,
      gols: 112,
      assistencias: 35,
      titulos: ["Libertadores 2022", "Copa do Brasil 2022", "Campeonato Brasileiro 2020"]
    },
    biografia: "Formado no Fluminense, se tornou o artilheiro do Flamengo na era pós-Gabigol."
  },
  {
    nome: "Matheus França",
    apelido: "França",
    numero: 11,
    posicao: "Meia-Atacante",
    idade: 20,
    nacionalidade: "Brasileiro",
    altura: "1,78m",
    peso: "72kg",
    peDominante: "Esquerdo",
    dataContratacao: "15 de julho de 2022",
    valorMercado: "€35 milhões",
    imagem: "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/07/30/16015439-matheus-franca-flamengo-foto-alexandre-vidal.jpg",
    estatisticas: {
      jogos: 95,
      gols: 28,
      assistencias: 42,
      titulos: ["Campeonato Carioca 2023", "Supercopa do Brasil 2025"]
    },
    biografia: "Revelação das categorias de base do Flamengo, considerado uma das maiores promessas do futebol brasileiro."
  },

  ];

const JogadoresScreen = () => {
  const { colors } = useTheme();

  const renderItem = ({ item }) => (
    <Card style={[styles.card, { backgroundColor: colors.surface }]}>
      <View style={styles.playerHeader}>
        <Image 
          source={{ uri: item.imagem }} 
          style={styles.playerImage}
          resizeMode="cover"
        />
        <View style={styles.playerBasicInfo}>
          <Title style={[styles.playerName, { color: colors.primary }]}>
            {item.nome}
          </Title>
          <Text style={[styles.playerNickname, { color: colors.secondary }]}>
            "{item.apelido}"
          </Text>
          <View style={styles.playerNumberContainer}>
            <Text style={styles.playerNumber}>{item.numero}</Text>
          </View>
        </View>
      </View>

      <Divider style={[styles.divider, { backgroundColor: colors.primary }]} />

      <Card.Content style={styles.playerDetails}>
        <View style={styles.detailRow}>
          <Icon name="human-male-height" size={20} color={colors.primary} />
          <Text style={[styles.detailText, { color: colors.text }]}>
            {item.altura} • {item.peso} • {item.idade} anos
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Icon name="soccer-field" size={20} color={colors.primary} />
          <Text style={[styles.detailText, { color: colors.text }]}>
            {item.posicao} • {item.peDominante}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Icon name="flag" size={20} color={colors.primary} />
          <Text style={[styles.detailText, { color: colors.text }]}>
            {item.nacionalidade}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Icon name="calendar" size={20} color={colors.primary} />
          <Text style={[styles.detailText, { color: colors.text }]}>
            Contratado em: {item.dataContratacao}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Icon name="cash" size={20} color={colors.primary} />
          <Text style={[styles.detailText, { color: colors.text }]}>
            Valor de mercado: {item.valorMercado}
          </Text>
        </View>

        {item.estatisticas && (
          <>
            <Divider style={[styles.divider, { backgroundColor: colors.primary }]} />
            <Text style={[styles.sectionTitle, { color: colors.primary }]}>
              Estatísticas
            </Text>
            <View style={styles.statsContainer}>
              <StatItem value={item.estatisticas.jogos} label="Jogos" icon="soccer" />
              <StatItem value={item.estatisticas.gols} label="Gols" icon="goal-net" />
              <StatItem value={item.estatisticas.assistencias} label="Assistências" icon="handball" />
            </View>

            {item.estatisticas.titulos && item.estatisticas.titulos.length > 0 && (
              <>
                <Text style={[styles.sectionTitle, { color: colors.primary }]}>
                  Títulos pelo Clube
                </Text>
                {item.estatisticas.titulos.map((titulo, index) => (
                  <View key={index} style={styles.titleItem}>
                    <Icon name="trophy" size={18} color="#FFD700" />
                    <Text style={[styles.titleText, { color: colors.text }]}>{titulo}</Text>
                  </View>
                ))}
              </>
            )}
          </>
        )}

        {item.biografia && (
          <>
            <Divider style={[styles.divider, { backgroundColor: colors.primary }]} />
            <Text style={[styles.sectionTitle, { color: colors.primary }]}>
              Biografia
            </Text>
            <Text style={[styles.bioText, { color: colors.text }]}>{item.biografia}</Text>
          </>
        )}
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.nome}
      contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

// Componentes auxiliares
const StatItem = ({ value, label, icon }) => {
  const { colors } = useTheme();
  
  return (
    <View style={styles.statItem}>
      <Icon name={icon} size={24} color={colors.primary} />
      <Text style={[styles.statValue, { color: colors.primary }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: colors.text }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  card: {
    margin: 6,
    borderRadius: 12,
    elevation: 4,
    overflow: 'hidden',
  },
  playerHeader: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  playerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#d62828',
  },
  playerBasicInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  playerName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  playerNickname: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  playerNumberContainer: {
    position: 'absolute',
    right: 0,
    backgroundColor: '#d62828',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerNumber: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    marginVertical: 8,
    height: 1,
  },
  playerDetails: {
    padding: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  detailText: {
    marginLeft: 12,
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  statItem: {
    alignItems: 'center',
    minWidth: 80,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 14,
  },
  titleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  titleText: {
    marginLeft: 8,
    fontSize: 15,
  },
  bioText: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
  },
  separator: {
    height: 12,
  },
});

export default JogadoresScreen;