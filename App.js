import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Image, 
  Text, 
  View, 
  TextInput, 
  TouchableHighlight, 
  Button, 
  ScrollView,
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });  
  
  if (!fontsLoaded) {
    return null;
  }

  const TASKS = [
    {
      id: 1,
      task: "Moble App Development",
    },
    {
      id: 2,
      task: "Web Development",
    },
    {
      id: 3,
      task: "Push Ups",
    },
  ]

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
        {/* Navigation Section */}
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
              <View style={styles.search} >
                <Image 
                  source={require('./assets/searchIcon.png')} 
                  style={{height: 16, width: 16, marginLeft: 10}}
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

            {/* Categories Section */}
            <Text style={{fontSize: 20, fontWeight: 700}}>Categories</Text>

            <View style={styles.categories}>
              <View style={styles.category}>
                <View>
                  <Text>Exercise</Text>
                  <Text>12 tasks</Text>
                </View>
                <Image 
                  style={{width: 110, height: 132}} 
                  source={require('./assets/young-woman-working-online.png')} 
                />
              </View>
              <View style={styles.category}>
                <Text>Exercise</Text>
                <Text>12 tasks</Text>
                <Image 
                  style={{width: 110, height: 132}} 
                  source={require('./assets/young-woman-working-at-desk.png')} 
                />
              </View>
            </View>
            {/* Ongoing tasks section */}
            <Text style={{fontSize: 20}}>Ongoing Task</Text>
              <FlatList 
                data={TASKS}
                renderItem={({item}) => (
                  <TouchableHighlight key={item.id}>
                    <View 
                      style={styles.taskContainer}>
                      <Button style={styles.task}>{item.task}</Button>
                      </View>
                  </TouchableHighlight>
                )}
              />
          </View>
        </ScrollView>
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
    alignItems: 'center',
    borderRadius: 20,
  },
  search: {
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 0,
    backgroundColor: '#fff'
  },
  input: {
    width: 240,
    height: 48,
    backgroundColor: '#FBF9F7',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FBF9F7',
    padding: 10,
    fontFamily: 'Lato-Regular',
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  }, 
  category: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 20,
    backgroundColor: 'white'
  },
  taskContainer: {
    backgroundColor: 'white', 
    marginBottom: 20, 
    borderRadius: 20, 
    borderColor: '#E8D1BA',
    borderWidth: 1,
  },
  task: {
    fontSize: 16,
    padding: 20,
    fontWeight: 700,
    marginTop: 30,
    marginBottom: 30,
  }
});