import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#d62828',
          drawerLabelStyle: { fontSize: 16 },
        }}
      >
        <Drawer.Screen
          name="Escudo"
          component={EscudoScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="shield" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Jogadores"
          component={JogadoresScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Títulos"
          component={TitulosScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="trophy" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}