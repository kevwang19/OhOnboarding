import React, {Fragment, Component} from 'react';
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import searchIcon from './group81.png'
import promptNav from './group78.png'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  componentDidMount() {

  }


  render () {
    const styles = StyleSheet.create({
      wrapper: {

      },
      background: {
        backgroundColor: '#6AA1F8',
        height: '100%',
      },
      mainContainer: {
        margin: 30,
        marginLeft: 25,
        marginRight: 25,
        display: 'flex',
        alignItems: 'center',
      },
      prompt: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
        fontSize: 20,
        lineHeight: 25,
        textAlign: 'center',
        width: '85%',
      },
      searchIcon: {
        marginTop: 40,
        marginBottom: 0,
      },
      profilesContainer: {
        width: '100%',
        height: '36%',
        minHeight: 310,
        marginTop: 140,
        marginBottom: 30
      },
      profilebox: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 15,
        marginTop: 8,
        marginBottom: 8,
        height: 85,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      placeholder: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: '#CCCCCC',
        marginRight: 10,
      },
      chatButton: {
        backgroundColor: '#7DDC72',
        height: 28,
        width: 80,
        padding: 4,
        borderRadius: 15,
        justifyContent: 'center',
        shadowOffset: { width: 2, height: 2, },
        shadowRadius: 4,
        shadowColor: '#999999',
        shadowOpacity: 0.6,
      },
      chatButtonText: {
        color: '#FFFFFF',
        textAlign: 'center'
      },
      signupButton: {
        backgroundColor: '#7DDC72',
        width: '100%',
        borderRadius: 25,
        padding: 11,
        alignItems: 'center'
      },
      signupText: {
        color: '#FFFFFF',
        fontSize: 22,
        fontFamily: 'Avenir',
      }
    })

    return (
      <Fragment>
          <View style={styles.background}>
            <Swiper
              dot={<View style={{backgroundColor: '#FFFFFF00'}}/>} // optional pagination dots for swiping feature
              activeDot={<View style={{backgroundColor: '#FFFFFF00'}}/>} // optional pagination dots for swiping feature
              style={styles.wrapper}>
              <View style={styles.mainContainer}>
                <Image source={searchIcon} width={100} height={100} style={styles.searchIcon}/>
                <Text style={styles.prompt}>Find tutors or students who have taken your exact class</Text>
                <Image source={promptNav} width={100} height={50} style={styles.searchIcon}/>
                <ScrollView style={styles.profilesContainer}>

                  <TouchableOpacity style={styles.profilebox}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                      <View style={styles.placeholder}></View>
                      <View>
                        <Text style={{fontSize: 16, margin: 5}}>James B.</Text>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{margin: 5, marginTop: 0}}>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#E47C41'}}>Rate/Hr</Text>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#AAAAAA'}}>$25.00</Text>
                          </View>
                          <View style={{margin: 5, marginTop: 0}}>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#E47C41'}}>Sessions</Text>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#AAAAAA'}}>0</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.chatButton}><Text style={styles.chatButtonText}>Chat</Text></TouchableOpacity>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.profilebox}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                      <View style={styles.placeholder}></View>
                      <View>
                        <Text style={{fontSize: 16, margin: 5}}>Sarah L.</Text>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{margin: 5, marginTop: 0}}>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#E47C41'}}>Rate/Hr</Text>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#AAAAAA'}}>$50.00</Text>
                          </View>
                          <View style={{margin: 5, marginTop: 0}}>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#E47C41'}}>Sessions</Text>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#AAAAAA'}}>0</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.chatButton}><Text style={styles.chatButtonText}>Chat</Text></TouchableOpacity>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.profilebox}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                      <View style={styles.placeholder}></View>
                      <View>
                        <Text style={{fontSize: 16, margin: 5}}>David S.</Text>
                        <View style={{flexDirection: 'row'}}>
                          <View style={{margin: 5, marginTop: 0}}>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#E47C41'}}>Rate/Hr</Text>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#AAAAAA'}}>$60.00</Text>
                          </View>
                          <View style={{margin: 5, marginTop: 0}}>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#E47C41'}}>Sessions</Text>
                            <Text style={{fontSize: 12, marginBottom: 3, color: '#AAAAAA'}}>0</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.chatButton}><Text style={styles.chatButtonText}>Chat</Text></TouchableOpacity>
                  </TouchableOpacity>

                </ScrollView>
                <TouchableOpacity style={styles.signupButton}><Text style={styles.signupText}>Sign Up</Text></TouchableOpacity>
              </View>
              <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}><Text style={{color: '#FFFFFF', fontSize: 20}}>Screen 2</Text></View>
              <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}><Text style={{color: '#FFFFFF', fontSize: 20}}>Screen 3</Text></View>
              <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}><Text style={{color: '#FFFFFF', fontSize: 20}}>Screen 4</Text></View>
            </Swiper>
          </View>

      </Fragment>
    )
  }
}

const styles = StyleSheet.create({

});

export default App;
