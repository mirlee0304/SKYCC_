import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SearchDetailPage from '../components/SearchDetailPage';
import SearchPage from '../components/SearchPage';


const Stack = createNativeStackNavigator();

const SearchTab = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="search" component={SearchPage} />
        <Stack.Screen name="searchdetailpage" component={SearchDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SearchTab;