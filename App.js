import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });  
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.nav}>
            <View style={{display: 'flex'}}>
              <Text style={{fontSize: 32, fontWeight: 700}}>Hello, Dev's</Text>
              <Text>14 tasks today</Text>
            </View>
            <Image style={{width: 50, height: 52}} source={require('./assets/Profile-Image.png')} />
            <StatusBar style="auto" />
          </View>
          <View style={styles.searchContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}} >
               <Image 
                source={require('./assets/searchIcon.png')} 
                style={{height: 16, width: 16, marginRight: 20 }}
              />
               <TextInput 
                  keyboardType='text'
                  style={styles.input}
                  placeholder='search'
                />
            </View>
            <TouchableOpacity>
              <Image source={require('./assets/filter.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 20,
    backgroundColor: '#F7F0E8', 
    padding: 20
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 32,
    fontWeight: 700,
    fontFamily: 'Lato-Regular',
    alignItems: 'center',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  input: {
    flex: 1, 
    flexGrow: 'left',
    width: '80%',
    height: 48,
    backgroundColor: '#FBF9F7',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FBF9F7',
    padding: 10,
  }
});
