import React, {Component, useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Modal,
  ScrollView,
  ToastAndroid,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Pressable,
  Clipboard,
  Platform,
  Linking,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import CountDown from 'react-native-countdown-component';
import Pdf from 'react-native-pdf';

const SECTIONS = [
  {
    title: 'What is SafeHuman Token',
    content:
      'SafeHuman is a cryptocurrency token developed on binance smart chain. It is focusing to serve humanity and empowered them economically.',
  },
  {
    title: 'Which cryptocurrency is best to buy today',
    content:
      'The greatest crypto currency to buy is one that we are prepared to keep even if it falls in value. Customers in the SafeHuman ecosystem are encouraged to hold the SafeHuman token in order to reap the benefits.',
  },
  {
    title: 'Where can i buy SafeHuman',
    content:
      'You can buy SafeHuman from TRUST WALLET using Pancake Swap. Users can buy SafeHuman by setting up a crypto wallet on the Binance Chain Network and add Binance (BNB/BUSD) coins to your account. From here, users can essentially swap BNB for SafeHuman tokens using Trust Wallet.',
  },
  {
    title: 'Where can i get the reliable information about SafeHuman',
    content:
      'Only the SafeHuman website can provide reliable and verifiable information.',
  },
];
const White = require('./assert/WhitePaper.pdf');
const One = require('./assert/Onepaper.pdf');
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTheThing: true,
      inp: '',
      inp2: '',
      inp3: '',
      comment: '',
      val: '',
      activeSections: [],
      clipboardText: '',
      textInputText: '0x72a59e1Fe77f0E25Fadc502D0803464d27a3785A',
      show: false,
      showText: true,
      user: require('./assert/WhitePaper.pdf'),
    };
  }

  componentDidMount() {
    interval = setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 1000);
    return () => clearInterval(interval);
  }

  _renderSectionTitle = section => {
    return (
      <View style={styles.content}>{/* <Text>{section.content}</Text> */}</View>
    );
  };

  _renderHeader = section => {
    return (
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '6%',
            justifyContent: 'space-between',
          }}>
          <FontAwesome name="question-circle" size={28} color={'#1A4088'} />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              fontWeight: 'bold',
              color: '#1A4088',
            }}>
            {section.title}
          </Text>
          <AntDesign name="arrowright" size={18} color={'#1A4088'} />
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              marginTop: '1%',
              marginBottom: '2%',
              borderBottomColor: '#1A4088',
              borderBottomWidth: 1,
            }}
          />
        </View>
      </View>
    );
  };

  _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 13,
            paddingHorizontal: '6%',
            color: '#7B7B7B',
          }}>
          {section.content}
        </Text>
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };
  setTextIntoClipboard = async () => {
    await Clipboard.setString(this.state.textInputText);
  };

  getTextFromClipboard = async () => {
    var textHolder = await Clipboard.getString();
    this.setState({
      clipboardText: textHolder,
    });
  };

  render() {
    // const White = {
    //   uri: 'https://firebasestorage.googleapis.com/v0/b/demoprooject.appspot.com/o/WhitePaper.pdf?alt=media&token=b55b56af-d94a-4162-8691-b212621586f3',
    // };
    // const One = {
    //   uri: 'https://firebasestorage.googleapis.com/v0/b/demoprooject.appspot.com/o/Onepaper.pdf?alt=media&token=2c7c0242-478c-49c5-ae9b-ccd26a81d416',
    // };
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#0E0A30"
        />
        <LinearGradient
          start={{x: -1, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#183F88', '#13235A', '#0E0A30']}
          style={styles.gradient}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{}}
            contentContainerStyle={{
              paddingBottom: '1090%',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: Dimensions.get('window').width,
                justifyContent: 'space-between',
                padding: '5%',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  width: 220,
                  height: 90,
                }}
                source={require('./assert/logo.png')}
              />

              {/* <Image
                style={{
                  width: '70%',
                  height: 90,
                }}
                source={require('./assert/logo.png')}
              /> */}
              {/* <TouchableOpacity
                style={styles.buttonGPlusStyle}
                activeOpacity={0.5}>
                <Image
                  style={{
                    width: '80%',
                    height: 40,
                  }}
                  source={require('./assert/menu.png')}
                />
              </TouchableOpacity> */}
            </View>
            <View
              style={{
                marginTop: '10%',
                paddingHorizontal: '20%',
                width: Dimensions.get('window').width,
                alignItems: 'center',
              }}>
              <CountDown
                size={30}
                until={1000}
                onFinish={() => alert('Finished')}
                digitStyle={{}}
                digitTxtStyle={{color: 'white'}}
                timeLabelStyle={{color: 'white', fontWeight: 'bold'}}
                separatorStyle={{color: 'white'}}
                timeToShow={['D', 'H', 'M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
              />
            </View>
            <View
              style={{
                marginTop: '3%',
                marginBottom: '10%',
                paddingHorizontal: '15%',
                width: Dimensions.get('window').width,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 10,
                  color: 'white',
                }}>
                DAYS
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 10,
                  color: 'white',
                }}>
                HOURS
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                MINUTES
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                SECONDS
              </Text>
            </View>

            <Image
              style={{
                width: '100%',
                height: 110,
              }}
              source={require('./assert/progress.png')}
            />

            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  'https://dxsale.app/app/v3/defipresale?saleID=715&chain=BSC',
                );
              }}
              style={[
                styles.buttonGPlusStyle,
                {backgroundColor: 'transparent', width: '40%'},
              ]}
              activeOpacity={0.5}>
              <Image
                style={{
                  width: '90%',
                  height: 40,
                }}
                source={require('./assert/buyNow.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: '15%',
                fontSize: 20,
                color: 'white',
              }}>
              We are Building the next
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>
              decentralized borderless
            </Text>
            <Text
              style={{
                fontSize: 20,

                color: 'white',
              }}>
              currency.A new Age of
            </Text>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Wealth
              </Text>
              <Text
                style={{
                  marginLeft: '2%',
                  marginRight: '2%',
                  fontSize: 20,
                  color: 'white',
                }}>
                Begins
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Now
              </Text>
            </View>
            <Text style={{marginTop: '8%', fontSize: 14, color: 'white'}}>
              Invest now, you will regret it.
            </Text>
            <View
              style={{
                marginTop: '8%',
                justifyContent: 'center',

                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: '34%',

                  alignItems: 'center',
                  justifyContent: 'center',

                  height: 58,
                }}
                onPress={() => {
                  this.setState({show: true});
                }}>
                <Image
                  style={{
                    width: 140,
                    height: 40,
                  }}
                  source={require('./assert/whtPpr.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',

                  width: '38%',

                  height: 55,
                }}
                onPress={() => {
                  Linking.openURL(
                    'https://dxsale.app/app/v3/defipresale?saleID=715&chain=BSC',
                  );
                }}>
                <Image
                  style={{
                    width: 140,
                    height: 40,
                  }}
                  source={require('./assert/join.png')}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                paddingHorizontal: '5%',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '8%',
                width: '50%',
                backgroundColor: 'black',
                height: 30,
                flexDirection: 'row',
              }}>
              <Pressable
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/SafeHumanOfficial');
                }}>
                <FontAwesome name="facebook" size={15} color={'white'} />
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL('https://twitter.com/SafeHumanArmy');
                }}>
                <Entypo name="twitter" size={15} color={'white'} />
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL(
                    'https://www.pinterest.com.au/SafeHumanOfficial/',
                  );
                }}>
                <Entypo name="pinterest" size={15} color={'white'} />
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL('https://twitter.com/SafeHumanArmy');
                }}>
                <FontAwesome name="telegram" size={15} color={'white'} />
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL(
                    'https://www.instagram.com/SafeHumanOfficial/',
                  );
                }}>
                <AntDesign name="instagram" size={15} color={'white'} />
              </Pressable>
              <Pressable
                onPress={() => {
                  Linking.openURL(
                    'https://www.reddit.com/r/SafeHumanOfficial/',
                  );
                }}>
                <FontAwesome name="reddit-alien" size={15} color={'white'} />
              </Pressable>
            </View>
            <View
              style={{
                width: Dimensions.get('window').width,
                backgroundColor: 'white',
                height: '6%',
                paddingHorizontal: '5%',
                marginTop: '15%',
                alignItems: 'center',
              }}>
              <Image
                style={{width: '95%', marginTop: '7%', height: 270}}
                source={require('./assert/ab.jpg')}
              />
              <Text
                style={{
                  marginTop: '7%',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                About SafeHuman
              </Text>
              <Text
                style={{
                  marginTop: '7%',
                  fontSize: 13,
                  color: 'grey',
                }}>
                SafeHuman is a cryptocurrency token on the Binance Smart Chain.
                SFH tokens are based on proof of stack consensus and built on
                the Binance Smart Chain, SFH smart contract is based on the
                BEP-20 algorithm. SFH Works is based on an autonomous yield and
                liquidity generation protocol that aims to directly reward its
                holders whilst concurrently increasing liquidity. A 5%
                transaction fee rewards holders and SafeHuman donates
                significant sums to charity to protect Humanity. At SafeHuman,
                our top priority is doing what’s best for people. We offer
                everyone an opportunity to invest their hard-earned cash and
                make a profit. Our company is guided by ethical practices
                including honesty and taking steps to protect humanity’s future.
                We’ve created a powerful digital currency to build a new economy
                starting today. Get started now
              </Text>
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://dxsale.app/app/v3/defipresale?saleID=715&chain=BSC',
                  );
                }}
                style={[
                  styles.buttonGPlusStyle,
                  {
                    marginTop: '-2%',
                    height: '12%',
                    borderRadius: 30,
                    width: '40%',
                  },
                ]}
                activeOpacity={0.5}>
                <Image
                  style={{
                    width: '90%',
                    height: 40,
                  }}
                  source={require('./assert/buy.png')}
                />
              </TouchableOpacity>
            </View>
            <Image
              style={{marginTop: '10%', width: '90%', height: 270}}
              source={require('./assert/m1.jpg')}
            />
            <Image
              style={{marginTop: '5%', width: '90%', height: 270}}
              source={require('./assert/m2.jpg')}
            />
            <Text
              style={{
                paddingHorizontal: '12%',
                marginTop: '7%',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Safe Wallet App
            </Text>
            <Text
              style={{
                paddingHorizontal: '6%',
                marginTop: '7%',
                fontSize: 13,
                color: 'white',
              }}>
              Multiswap is the local trade and connection created into safe
              wallet, making it simple for everybody to purchase, sell and
              connect tokens inside their wallet, Almost 100% of tradings amount
              is collected from SafeWallet’s built in system will be transferred
              to SafeWallet token shareholders.
            </Text>
            <Text
              style={{
                paddingHorizontal: '9%',
                marginTop: '7%',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Solving Key Issues With Multi-Chain Launches
            </Text>
            <Text
              style={{
                paddingHorizontal: '6%',
                marginTop: '7%',
                fontSize: 13,
                color: 'white',
              }}>
              All blockchain are made of different proportions and the solution
              that are required to solve liquidity sniping, liquidity locking
              and front running are maybe does not exist or maybe they are
              handled incompletely in various ways on various chains by
              different persons. To make it work simply SafeWallet offers a
              group of solutions that are same on all the chains, this way the
              projects can be run on any chain with same variables under control
              on the same time. Now don’t need to snip on single chain and
              connect and dump it in other chain. Whenever a project lock the
              liquidity there will be no uncertainty. When the front running
              bot’s volume is decreased the normal trader will have more chances
              to take part in project’s launch with a low chance of slippage and
              less amount of loss. Multiswap is the next step in our
              environmental system which will make a change by bringing all
              networks together, and at the same time it will launch and project
              under one rooftop system to make sure that launches are protected
              and successful on all networks.
            </Text>
            <View
              style={{
                marginTop: '8%',
                width: Dimensions.get('window').width,
                backgroundColor: '#FBFAFF',
                height: '11%',
                alignItems: 'center',
                paddingHorizontal: '3%',
              }}>
              <Text
                style={{
                  marginTop: '7%',
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Why Choose Us?
              </Text>
              <Text
                style={{
                  marginTop: '7%',
                  fontSize: 13,
                  color: 'grey',
                }}>
                With SafeHuman, we are building the finance system of tomorrow
                that is more efficient, faster, more rewarding, and levels the
                playing field for everyone.
              </Text>

              <View
                style={{
                  paddingHorizontal: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '8%',
                  width: '90%',
                  backgroundColor: 'white',
                  height: '30%',
                }}>
                <Image source={require('./assert/wcicon4.png')} />
                <Text
                  style={{
                    marginTop: '7%',
                    fontSize: 18,
                  }}>
                  Giving Back
                </Text>
                <Text
                  style={{
                    marginTop: '7%',
                    fontSize: 13,
                  }}>
                  At SafeHuman, we are stronger together and there is nothing
                  that we cannot accomplish. We can protect humanity’s future
                  and the environment by directly investing in projects where
                  funds can make the biggest impact to truly make the world a
                  better place for everyone.
                </Text>
              </View>

              <View
                style={{
                  paddingHorizontal: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '6%',
                  width: '90%',
                  backgroundColor: 'white',
                  height: '22%',
                }}>
                <Image source={require('./assert/wcicon5.png')} />
                <Text
                  style={{
                    marginTop: '7%',
                    fontSize: 18,
                  }}>
                  Holder Rewards
                </Text>
                <Text
                  style={{
                    marginTop: '7%',
                    fontSize: 13,
                  }}>
                  SafeHuman investors earn rewards on every single transaction.
                  Community members are invited to participate in exclusive
                  competitions and contests for even more benefits.
                </Text>
              </View>

              <View
                style={{
                  paddingHorizontal: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '6%',
                  width: '90%',
                  backgroundColor: 'white',
                  height: '22%',
                }}>
                <Image source={require('./assert/wcicon6.png')} />
                <Text
                  style={{
                    marginTop: '7%',
                    fontSize: 18,
                  }}>
                  Deflationary Model
                </Text>
                <Text
                  style={{
                    marginTop: '7%',
                    fontSize: 13,
                  }}>
                  Our tokenomics are well designed to guarantee the community’s
                  sustainability. The value of holders’ tokens increases due to
                  our practice of burning tokens.
                </Text>
              </View>
            </View>
            <Text
              style={{
                marginTop: '7%',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Tokenomics
            </Text>
            <Text
              style={{
                paddingHorizontal: '5%',
                marginTop: '7%',
                fontSize: 13,
                color: 'white',
              }}>
              A 5% transaction fee reward of 3% will go in a liquidity-pool to
              increase token price, 1% for marketing and 1% for reaming will be
              distributed to holders. Holders don t need to do anything other
              than hold their tokens in order to earn rewards .
            </Text>
            <View
              style={{
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '8%',
                width: '90%',
                height: '1%',
                backgroundColor: '#29315C',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Private Pre-Sale
              </Text>
              <Text
                style={{
                  fontSize: 15,

                  color: 'white',
                }}>
                September 06, 2021
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '8%',
                width: '90%',
                height: '1%',
                backgroundColor: '#29315C',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Pre-Sale
              </Text>
              <Text
                style={{
                  fontSize: 15,

                  color: 'white',
                }}>
                October 8th 2021
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '8%',
                width: '90%',
                height: '1%',
                backgroundColor: '#29315C',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Crowdsale
              </Text>
              <Text
                style={{
                  fontSize: 15,

                  color: 'white',
                }}>
                October 15th 2021
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '8%',
                width: '90%',
                height: '2.9%',
                backgroundColor: '#29315C',
              }}>
              <View
                style={{
                  paddingHorizontal: '20%',
                  width: Dimensions.get('window').width,
                  alignItems: 'center',
                }}>
                <CountDown
                  size={30}
                  until={1000}
                  onFinish={() => alert('Finished')}
                  digitStyle={{}}
                  digitTxtStyle={{color: 'white'}}
                  timeLabelStyle={{color: 'white', fontWeight: 'bold'}}
                  separatorStyle={{color: 'white'}}
                  timeToShow={['D', 'H', 'M', 'S']}
                  timeLabels={{m: null, s: null}}
                  showSeparator
                />
              </View>

              <View
                style={{
                  marginTop: '3%',
                  marginBottom: '10%',
                  paddingHorizontal: '15%',
                  width: Dimensions.get('window').width,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 10,
                    color: 'white',
                  }}>
                  DAYS
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 10,
                    color: 'white',
                  }}>
                  HOURS
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  MINUTES
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  SECONDS
                </Text>
              </View>
              <Image
                style={{width: '100%', height: 110}}
                source={require('./assert/prog.png')}
              />
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(
                    'https://dxsale.app/app/v3/defipresale?saleID=715&chain=BSC',
                  );
                }}
                style={[
                  styles.buttonGPlusStyle,
                  {
                    height: '12%',
                    borderRadius: 30,
                    width: '40%',
                  },
                ]}
                activeOpacity={0.5}>
                <Image
                  style={{
                    width: '90%',
                    height: 40,
                  }}
                  source={require('./assert/buyNow.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '8%',
                width: '90%',
                height: '1%',
                backgroundColor: '#29315C',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Low - High 24h
              </Text>
              <Text
                style={{
                  fontSize: 15,

                  color: 'white',
                }}>
                $ 0.00 - $ 0.00
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '8%',
                width: '90%',
                height: '1%',
                backgroundColor: '#29315C',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Total Token Sale
              </Text>
              <Text
                style={{
                  fontSize: 15,

                  color: 'white',
                }}>
                (80%)
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '8%',
                width: '90%',
                height: '1%',
                backgroundColor: '#29305B',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Acceptable Currency
              </Text>
              <Text
                style={{
                  fontSize: 15,

                  color: 'white',
                }}>
                BNB
              </Text>
            </View>
            <View
              style={{
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '8%',
                backgroundColor: '#29315C',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Token Address
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',

                marginTop: '5%',
                height: 70,
                width: Dimensions.get('window').width,
              }}>
              {/* <View style={styles.loginBtn}> */}
              <TextInput
                value={this.state.textInputText}
                style={{
                  paddingHorizontal: '2%',
                  color: 'white',
                  marginTop: '4%',
                  width: '60%',
                  height: 50,
                  backgroundColor: '#29315C',
                  borderRadius: 30,
                }}
                onChangeText={value => this.setState({textInputText: value})}
              />
              {/* </View> */}
              <TouchableOpacity
                style={{
                  marginTop: '2%',
                  width: '15%',
                  height: 50,
                  alignItems: 'center',
                }}
                onPress={() => {
                  if (Platform == 'android') {
                    ToastAndroid.show('Copied', ToastAndroid.SHORT);
                    this.setTextIntoClipboard;
                  } else {
                    this.setTextIntoClipboard;
                    alert('Copied');
                  }
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('./assert/btnCopy.png')}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: '10%',
                alignItems: 'center',
                width: Dimensions.get('window').width,
                backgroundColor: '#FFFFFF',
                height: '7%',
              }}>
              <Text
                style={{
                  marginBottom: '6%',
                  marginTop: '10%',
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'black',
                }}>
                Token Sale Proceeds
              </Text>
              <Image
                style={{
                  width: 330,
                  height: 270,
                }}
                source={require('./assert/tddd.jpg')}
              />
              <Text
                style={{
                  marginBottom: '5%',
                  marginTop: '15%',
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'black',
                }}>
                Token Distribution
              </Text>
              <Image
                style={{
                  width: 330,
                  height: 270,
                }}
                source={require('./assert/td3.jpg')}
              />
            </View>
            <Text
              style={{
                marginTop: '12%',
                fontSize: 35,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Roadmap
            </Text>
            <Text
              style={{
                paddingHorizontal: '15%',
                marginTop: '7%',
                fontSize: 13,
                color: 'white',
              }}>
              The use of crypto-currencies has gained prominence, and they've
              been universally recognized as a legal form of payment.
            </Text>
            <View
              style={{
                marginTop: '7%',
                width: '90%',
                backgroundColor: '#29315C',
                height: '5%',
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: '45%',
                    height: 110,
                  }}
                  source={require('./assert/phase.png')}
                />
              </View>

              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Establishment of our Corporate Social Responsibility
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Establishment of our commitment to
                </Text>
              </View>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 14}}>
                support key organizations
              </Text>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Development of White Paper
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Creation of Website
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Launch of initial website and social channels
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Creation of overarching Marketing Strategies
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: '7%',
                width: '90%',
                backgroundColor: '#29315C',
                height: '6%',
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: '45%',
                    height: 110,
                  }}
                  source={require('./assert/phase3.png')}
                />
              </View>

              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Release of official white paper
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Launching of Social Media Platforms
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Private Sale
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Dx Presale (Public Presale)
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Liquidity Lock
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  paddingHorizontal: '4%',
                  flexDirection: 'row',
                  marginTop: '1%',
                }}>
                <AntDesign name="checkcircle" size={15} color={'orange'} />
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  5% accumulative will be provided to
                </Text>
              </View>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 14}}>
                holder & LP (marketing)
              </Text>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Listing on CoinMarketCap
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Mobile App Launch
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Listing on CoinGecko
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  SafeHuman Token Audit
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: '7%',
                width: '90%',
                backgroundColor: '#29315C',
                height: '5%',
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: '45%',
                    height: 110,
                  }}
                  source={require('./assert/phase2.png')}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Re-branding Webiste and Socials
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Upgradation of website features
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Team Expansion
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  AirDrops for holders
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Nft game development
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Donations begin, powered by our
                </Text>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  cryptocurrency
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Onboarding consultancies and strategic
                </Text>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  partners with wide networks
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: '7%',
                width: '90%',
                backgroundColor: '#29315C',
                height: '5%',
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: '45%',
                    height: 110,
                  }}
                  source={require('./assert/phase4.png')}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text
                  style={{
                    marginLeft: '2%',

                    color: 'white',
                    fontSize: 14,
                  }}>
                  Listing on other major exchanges
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Safe Wallet Launch
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Token Swap functionality on SafeHuman website
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Nft Token Launch
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Nft Mining & staking
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Market place for NFt
                </Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    marginTop: '5%',
                    width: '85%',
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                  }}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Launching of market place to buy products
                </Text>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  through safehuman Token
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: '7%',
                width: '90%',
                backgroundColor: '#29315C',
                height: '5%',
              }}>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: '45%',
                    height: 110,
                  }}
                  source={require('./assert/phase5.png')}
                />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: '1%',
                }}>
                <Text style={{marginLeft: '2%', color: 'white', fontSize: 14}}>
                  Launching of SafeHuman coin
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: '8%',
                width: Dimensions.get('window').width,
                backgroundColor: 'white',
                height: '6%',
                alignItems: 'center',
                paddingHorizontal: '3%',
              }}>
              <Text
                style={{
                  marginTop: '5%',
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'black',
                }}>
                Download Our Documents
              </Text>
              <Text
                style={{
                  marginTop: '5%',
                  marginBottom: '1%',
                  fontSize: 14,
                }}>
                Team created a white paper to educate audience about safehuman
                cryptocurrency token & its rewards to humanity.
              </Text>
              <Image
                style={{width: '95%', height: 270}}
                source={require('./assert/cover.jpg')}
              />
              <Text style={{marginTop: '5%', fontSize: 14}}>
                Double-spending can be minimized by using digital signatures.
                However, the main benefits of sending peer-to-peer electronic
                cash payments from one party to another are lost if a trusted
                third party is still required to complete transactions. Network
                timestamps for each transaction are the key to creating a
                permanent record that can’t be revised without repeating the
                proof-of-work.
              </Text>
              <View style={{alignSelf: 'flex-start'}}>
                <Text
                  style={{
                    marginTop: '5%',

                    fontSize: 14,
                    color: 'black',
                  }}>
                  Select Document
                </Text>
              </View>
              <View
                style={{
                  width: '80%',
                  height: 40,
                  marginTop: '8%',
                  borderWidth: 1,
                  borderRadius: 22,
                  justifyContent: 'center',
                }}>
                <Picker
                  selectedValue={this.state.user}
                  mode="dropdown"
                  onValueChange={va => {
                    this.setState({user: va});
                  }}
                  style={{height: 40}}>
                  <Picker.Item label="Whitepaper" value={White} />
                  <Picker.Item label="Onepaper" value={One} />
                </Picker>
              </View>

              <TouchableOpacity
                onPress={() => {
                  // alert(this.state.user);
                  this.setState({show: true});
                }}
                style={[
                  styles.buttonGPlusStyle,
                  {
                    width: '70%',
                  },
                ]}
                activeOpacity={0.5}>
                <Image
                  style={{
                    width: '90%',
                    height: 50,
                  }}
                  source={require('./assert/Downolad.png')}
                />
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                onRequestClose={() => {
                  this.setState({show: false});
                }}
                visible={this.state.show}>
                <SafeAreaView
                  style={{
                    flex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    backgroundColor: '#000000aa',
                  }}>
                  {/* <View style={styles.container}> */}

                  <Pdf
                    source={this.state.user}
                    onLoadComplete={(numberOfPages, filePath) => {
                      console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                      console.log(`current page: ${page}`);
                    }}
                    onError={error => {
                      console.log(error);
                    }}
                    onPressLink={uri => {
                      console.log(`Link presse: ${uri}`);
                    }}
                    style={styles.pdf}
                  />
                  {/* </View> */}
                </SafeAreaView>
              </Modal>
            </View>
            <View
              style={{
                alignItems: 'center',
                width: Dimensions.get('window').width,
                backgroundColor: '#FBFAFF',
                height: '17%',
              }}>
              <Text
                style={{
                  marginTop: '7%',
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'black',
                }}>
                Our Core Team
              </Text>

              <Text
                style={{
                  marginTop: '4%',
                  paddingHorizontal: '6%',
                  fontSize: 14,
                }}>
                We have built a team full of highly motivated professionals who
                are ready to help our customers.
              </Text>

              <View
                style={{
                  marginTop: '7%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  width: '90%',
                  height: '12%',
                }}>
                <Image
                  style={{width: 150, height: 150}}
                  source={require('./assert/mz5.png')}
                />
                <Text
                  style={{
                    marginTop: '3%',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'black',
                  }}>
                  M Z YAZDANI
                </Text>

                <Text
                  style={{
                    marginTop: '4%',
                    paddingHorizontal: '6%',
                    fontSize: 14,
                  }}>
                  Founder
                </Text>
              </View>

              <View
                style={{
                  marginTop: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  backgroundColor: 'white',
                  height: '12%',
                }}>
                <Image
                  style={{width: 150, height: 150}}
                  source={require('./assert/placeholder9.png')}
                />
                <Text
                  style={{
                    marginTop: '3%',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'black',
                  }}>
                  HIBA SHEIKH
                </Text>

                <Text
                  style={{
                    marginTop: '4%',
                    paddingHorizontal: '6%',
                    fontSize: 14,
                  }}>
                  Web and App Developer
                </Text>
              </View>
              <View
                style={{
                  marginTop: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  backgroundColor: 'white',
                  height: '12%',
                }}>
                <Image
                  style={{width: 150, height: 150}}
                  source={require('./assert/bilal.png')}
                />
                <Text
                  style={{
                    marginTop: '3%',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'black',
                  }}>
                  BILAL AHMAD
                </Text>

                <Text
                  style={{
                    marginTop: '4%',
                    paddingHorizontal: '6%',
                    fontSize: 14,
                  }}>
                  Head Of Project
                </Text>
              </View>
              <View
                style={{
                  marginTop: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  backgroundColor: 'white',
                  height: '12%',
                }}>
                <Image
                  style={{width: 150, height: 150}}
                  source={require('./assert/tm2.png')}
                />
                <Text
                  style={{
                    marginTop: '3%',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'black',
                  }}>
                  ABRAX ABANOUB
                </Text>

                <Text
                  style={{
                    marginTop: '4%',
                    paddingHorizontal: '6%',
                    fontSize: 14,
                  }}>
                  Marketing Manager
                </Text>
              </View>

              <View
                style={{
                  marginTop: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  backgroundColor: 'white',
                  height: '12%',
                }}>
                <Image
                  style={{width: 150, height: 150}}
                  source={require('./assert/placeholder10.png')}
                />
                <Text
                  style={{
                    marginTop: '3%',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'black',
                  }}>
                  M H YAZDANI
                </Text>

                <Text
                  style={{
                    marginTop: '4%',
                    paddingHorizontal: '6%',
                    fontSize: 14,
                  }}>
                  SEO Manager
                </Text>
              </View>
              <View
                style={{
                  marginTop: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  backgroundColor: 'white',
                  height: '12%',
                }}>
                <Image
                  style={{width: 150, height: 150}}
                  source={require('./assert/javed.png')}
                />
                <Text
                  style={{
                    marginTop: '3%',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'black',
                  }}>
                  Abraham Adam
                </Text>

                <Text
                  style={{
                    marginTop: '4%',
                    paddingHorizontal: '6%',
                    fontSize: 14,
                  }}>
                  Blockchain Developer
                </Text>
              </View>
              <View
                style={{
                  marginTop: '5%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '90%',
                  backgroundColor: 'white',
                  height: '12%',
                }}>
                <Image
                  style={{width: 150, height: 150}}
                  source={require('./assert/ok.png')}
                />
                <Text
                  style={{
                    marginTop: '3%',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'black',
                  }}>
                  OLIVIA KIM
                </Text>

                <Text
                  style={{
                    marginTop: '4%',
                    paddingHorizontal: '6%',
                    fontSize: 14,
                  }}>
                  Advisor
                </Text>
              </View>
            </View>

            <View
              style={{
                width: Dimensions.get('window').width,
                backgroundColor: 'blue',
                height: '8%',
              }}>
              <LinearGradient
                start={{x: -1, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#183F88', '#13235A', '#0E0A30']}
                style={styles.gradient}>
                <View
                  style={{
                    paddingRight: '40%',
                    marginTop: '4%',
                    marginLeft: '6%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      marginRight: '8%',
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    Download
                  </Text>

                  <Text
                    style={[
                      styles.textStyle,
                      {display: this.state.showText ? 'none' : 'flex'},
                    ]}>
                    Coming Soon
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    alignSelf: 'flex-start',
                    color: 'white',
                    marginTop: '1%',
                    fontWeight: 'bold',
                    paddingHorizontal: '6%',
                  }}>
                  Mobile App
                </Text>
                <Text
                  style={{
                    color: 'white',
                    marginTop: '7%',
                    alignSelf: 'flex-start',
                    paddingHorizontal: '6%',
                    fontSize: 14,
                  }}>
                  Crypto-currencies are now a widely accepted as a legitimate
                  form of payment for transactions. The popularity of using
                  crypto-currencies continues to grow
                </Text>

                <View
                  style={{
                    marginTop: '10%',
                    paddingHorizontal: '4%',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      marginTop: '-4%',
                      marginRight: '2%',
                      width: 50,
                      height: 50,
                    }}
                    source={require('./assert/phone1.png')}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: 14,
                    }}>
                    Compatible with Multiple Devices
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: '10%',
                    paddingHorizontal: '4%',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      marginTop: '-4%',
                      marginRight: '2%',
                      width: 50,
                      height: 50,
                    }}
                    source={require('./assert/circle.png')}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: 14,
                    }}>
                    SafeHuman Specializes in Technology that Is Transformational
                    for New Economies
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: '10%',
                    paddingHorizontal: '4%',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      marginTop: '-4%',
                      marginRight: '2%',
                      width: 50,
                      height: 50,
                    }}
                    source={require('./assert/cart.png')}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'white',
                      fontSize: 14,
                    }}>
                    Buy & Sell Your Coins Online
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: '8%',
                    justifyContent: 'center',

                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: '40%',
                      alignItems: 'center',
                      justifyContent: 'center',

                      height: 60,
                    }}
                    onPress={() => {}}>
                    <Image
                      style={{
                        width: 140,
                        height: 40,
                      }}
                      source={require('./assert/btn1.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',

                      width: '40%',
                      height: 60,
                    }}
                    onPress={() => {}}>
                    <Image
                      style={{
                        width: 120,
                        height: 40,
                      }}
                      source={require('./assert/btn2.png')}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      marginTop: '8%',
                      width: 300,
                      height: 340,
                    }}
                    source={require('./assert/mobile_app8.png')}
                  />
                </View>
              </LinearGradient>
            </View>

            <View
              style={{
                marginTop: '8%',
                width: Dimensions.get('window').width,
                backgroundColor: 'white',
                height: '13%',
                paddingHorizontal: '3%',
              }}>
              <View
                style={{
                  marginTop: '5%',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginTop: '5%',
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Frequently Asked Questions
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  marginTop: '5%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: Dimensions.get('window').width,
                  }}>
                  <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    renderSectionTitle={this._renderSectionTitle}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: '5%',
                  alignItems: 'center',
                }}>
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={{
                    marginTop: '9%',
                    width: Dimensions.get('window').width,
                    height: 500,
                  }}
                  region={{
                    latitude: -37.816697014152496,
                    longitude: 144.95750269574316,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: -37.816697014152496,
                      longitude: 144.95750269574316,
                    }}
                    title={'SafeHuman'}
                    description={'My Location'}
                  />
                </MapView>
                <View
                  style={{
                    backgroundColor: 'white',
                    position: 'absolute', //use absolute position to show button on top of the map
                    top: '10%', //for center align
                    // alignSelf: 'flex-end', //for align to right
                  }}>
                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        paddingHorizontal: '5%',
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      Exchange Tower
                    </Text>

                    <View
                      style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
                      <View
                        style={{
                          marginLeft: '5%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '37%',
                          borderRadius: 5,
                          height: '44%',
                          backgroundColor: 'grey',
                        }}></View>
                      <View
                        style={{marginTop: '-2%', marginLeft: '10%'}}></View>
                    </View>
                    <View
                      style={{flexDirection: 'row', paddingHorizontal: '4%'}}>
                      <Text
                        style={{
                          marginLeft: '1%',
                          fontSize: 14,
                          marginRight: '4%',
                          color: 'black',
                        }}>
                        530 Little Collins St, Melbourne VIC
                      </Text>
                      <Pressable
                        onPress={() => {
                          Linking.openURL(
                            'https://www.google.com/maps/place/Exchange+Tower,+530+Little+Collins+St,+Melbourne+VIC+3008,+Australia/@-37.818061,144.959004,16z/data=!4m5!3m4!1s0x6ad65d4c478bc5af:0xeddf7d50cb026d1d!8m2!3d-37.8168746!4d144.9570946?hl=en',
                          );
                        }}>
                        <MaterialCommunityIcons
                          name="directions-fork"
                          size={22}
                          color={'#6496FB'}
                        />
                      </Pressable>
                    </View>

                    <Text
                      style={{
                        paddingHorizontal: '5%',
                        fontSize: 14,
                        color: 'black',
                      }}>
                      3008, Australia
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(
                          'https://www.google.com/maps/place/Exchange+Tower,+530+Little+Collins+St,+Melbourne+VIC+3008,+Australia/@-37.818061,144.959004,16z/data=!4m5!3m4!1s0x6ad65d4c478bc5af:0xeddf7d50cb026d1d!8m2!3d-37.8168746!4d144.9570946?hl=en',
                        );
                      }}
                      style={{
                        marginTop: '2%',
                        flexDirection: 'row',
                        paddingHorizontal: '5%',
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#6496FB',
                        }}>
                        View larger map
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{justifyContent: 'space-between'}}>
                <Text
                  style={{
                    marginTop: '5%',
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  Leave a Message
                </Text>
                <Text
                  style={{
                    marginTop: '4%',
                    fontSize: 13,
                  }}>
                  If You have any questions? we're happy to help
                </Text>
                <TextInput
                  value={this.state.inp}
                  style={{
                    marginTop: '4%',
                    width: '90%',
                    height: '7%',
                    borderRadius: 2,
                    borderWidth: 2,
                  }}
                  onChangeText={inp => this.setState({inp})}
                  placeholder="Enter name *"
                  placeholderTextColor="grey"
                />
                <TextInput
                  value={this.state.inp2}
                  style={{
                    marginTop: '1%',
                    width: '90%',
                    height: '7%',
                    borderColor: 'grey',
                    borderRadius: 2,
                    borderWidth: 2,
                  }}
                  onChangeText={inp2 => this.setState({inp2})}
                  placeholder="Enter Emal *"
                  placeholderTextColor="grey"
                />
                <TextInput
                  value={this.state.inp3}
                  style={{
                    marginTop: '1%',
                    width: '90%',
                    height: '15%',
                    borderColor: 'grey',
                    borderRadius: 2,
                    borderWidth: 2,
                  }}
                  onChangeText={inp3 => this.setState({inp3})}
                  placeholder="Message *"
                  placeholderTextColor="grey"
                />
                <TouchableOpacity
                  style={[
                    styles.buttonGPlusStyle,
                    {backgroundColor: 'white', width: '40%'},
                  ]}
                  activeOpacity={0.5}>
                  <Image
                    style={{
                      width: '90%',
                      height: 50,
                    }}
                    source={require('./assert/submit.png')}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: '5%',
                  }}>
                  <Image
                    source={require('./assert/world.png')}
                    style={{width: 18, tintColor: '#1A4088', height: 18}}
                  />
                  <Text style={{marginLeft: '2%', fontSize: 14}}>
                    530 little Collins Street, Melbourne, VIC, 3000, Australia
                  </Text>
                </View>
                <Pressable
                  onPress={() => {
                    if (Platform.OS == 'android') {
                      Linking.openURL('tel:${+61400000000}');
                    } else {
                      Linking.openURL('telprompt:${+61400000000}');
                    }
                  }}
                  style={{
                    flexDirection: 'row',
                  }}>
                  <FontAwesome name="phone" size={18} color={'#1A4088'} />
                  <Text
                    style={{
                      marginLeft: '2%',
                      fontSize: 14,
                    }}>
                    +61 400 000 000
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    Linking.openURL('mailto:info@safehuman.io')
                      .then(supported => {
                        if (!supported) {
                          if (Platform.OS == 'android') {
                            ToastAndroid.show(
                              'URL not working',
                              ToastAndroid.SHORT,
                            );
                          } else {
                            alert('URL not working');
                          }
                          // console.log('Cant handle url');
                        } else {
                          return Linking.openURL('mailto:info@safehuman.io');
                        }
                      })
                      .catch(err => {
                        // console.error('An error occurred', err);
                        if (Platform.OS == 'android') {
                          ToastAndroid.show(
                            'App not found',
                            ToastAndroid.SHORT,
                          );
                        } else {
                          alert('App not found');
                        }
                      });
                  }}
                  style={{
                    flexDirection: 'row',
                  }}>
                  <MaterialCommunityIcons
                    name="email"
                    size={18}
                    color={'#1A4088'}
                  />
                  <Text
                    style={{marginLeft: '2%', color: '#1A4088', fontSize: 14}}>
                    info@safehuman.io
                  </Text>
                </Pressable>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <FontAwesome name="telegram" size={18} color={'#1A4088'} />
                  <Text style={{marginLeft: '2%', fontSize: 14}}>
                    Join us on Telegram
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                alignItems: 'center',
                paddingHorizontal: '4%',
              }}>
              <LinearGradient
                start={{x: -1, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#183F88', '#13235A', '#0E0A30']}
                style={styles.gradient}>
                <Image
                  style={{
                    marginTop: '15%',
                    marginLeft: '10%',
                    width: 220,
                    height: 90,
                  }}
                  source={require('./assert/logo.png')}
                />

                <Text style={{color: 'white', marginTop: '8%', fontSize: 15}}>
                  SafeHuman is a cryptocurrency that will stand above other
                  crypto currencies. It is one of finest digital currency whose
                  value will keep on increasing . USE IT WITH CONFIDENCE!
                </Text>
                <View
                  style={{
                    paddingRight: '40%',
                    marginTop: '4%',
                    marginBottom: '4%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Pressable
                    onPress={() => {
                      Linking.openURL(
                        'https://m.facebook.com/SafeHumanOfficial',
                      );
                    }}
                    style={{
                      marginRight: '2%',
                      alignItems: 'center',
                      borderRadius: 50,
                      justifyContent: 'center',
                      width: '12%',
                      backgroundColor: '#183D85',
                      height: 30,
                    }}>
                    <FontAwesome name="facebook" size={15} color={'white'} />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      Linking.openURL(
                        'https://mobile.twitter.com/SafeHumanArmy',
                      );
                    }}
                    style={{
                      alignItems: 'center',
                      borderRadius: 50,
                      marginRight: '2%',
                      justifyContent: 'center',
                      width: '12%',
                      backgroundColor: '#183D85',
                      height: 30,
                    }}>
                    <Entypo name="twitter" size={15} color={'white'} />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      Linking.openURL(
                        'https://www.pinterest.com.au/SafeHumanOfficial/_saved/',
                      );
                    }}
                    style={{
                      alignItems: 'center',
                      borderRadius: 50,
                      justifyContent: 'center',
                      marginRight: '2%',
                      width: '12%',
                      backgroundColor: '#183D85',
                      height: 30,
                    }}>
                    <Entypo name="pinterest" size={15} color={'white'} />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      Linking.openURL(
                        'https://www.instagram.com/SafeHumanOfficial/',
                      );
                    }}
                    style={{
                      alignItems: 'center',
                      borderRadius: 50,
                      justifyContent: 'center',
                      width: '12%',
                      backgroundColor: '#183D85',
                      marginRight: '2%',
                      height: 30,
                    }}>
                    <FontAwesome name="telegram" size={15} color={'white'} />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      Linking.openURL(
                        'https://www.instagram.com/SafeHumanOfficial/',
                      );
                    }}
                    style={{
                      alignItems: 'center',
                      borderRadius: 50,
                      justifyContent: 'center',
                      width: '12%',
                      backgroundColor: '#183D85',
                      marginRight: '2%',
                      height: 30,
                    }}>
                    <AntDesign name="instagram" size={15} color={'white'} />
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      Linking.openURL(
                        'https://www.reddit.com/r/SafeHumanOfficial/',
                      );
                    }}
                    style={{
                      alignItems: 'center',
                      borderRadius: 50,
                      justifyContent: 'center',
                      width: '12%',
                      marginRight: '2%',
                      backgroundColor: '#183D85',
                      height: 30,
                    }}>
                    <FontAwesome
                      name="reddit-alien"
                      size={15}
                      color={'white'}
                    />
                  </Pressable>
                </View>
                <View
                  style={{
                    paddingRight: '40%',
                    marginTop: '2%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      marginRight: '8%',
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    QUICK LINKS
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    SUPPORT
                  </Text>
                </View>
                <View
                  style={{
                    paddingRight: '40%',
                    marginTop: '2%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Pressable
                    onPress={() => {
                      alert('pred');
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Home
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      alert('pred');
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Documentation
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    paddingRight: '40%',
                    marginTop: '2%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Pressable
                    onPress={() => {
                      alert('pred');
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Token
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      alert('pred');
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      IOS and Android Apps
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    paddingRight: '40%',
                    marginTop: '2%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Pressable
                    onPress={() => {
                      alert('pred');
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Team
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      alert('pred');
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Privacy Policy
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    paddingRight: '40%',
                    marginTop: '2%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Pressable
                    onPress={() => {
                      alert('pred');
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Contact
                    </Text>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      alert('pred');
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Support Forum
                    </Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    paddingRight: '40%',
                    marginTop: '2%',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'blue',
                    }}>
                    .
                  </Text>
                  <Pressable
                    onPress={() => {
                      alert('pred');
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      Terms Conditions
                    </Text>
                  </Pressable>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: '4%',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  SUBSCRIBE NEWSLETTER
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    marginTop: '2%',
                    color: 'white',
                  }}>
                  By subscribing to our mailing list you will always be update
                  with the latest news from us..
                </Text>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <View style={styles.sectionStyle}>
                    <TextInput
                      style={{marginLeft: '2%', flex: 1}}
                      placeholderTextColor="white"
                      placeholder="Enter Email"
                    />
                    <TouchableOpacity
                      style={{
                        height: 40,
                        alignItems: 'center',

                        width: '19%',
                      }}
                      onPress={() => {
                        alert('pred');
                      }}>
                      <Image
                        source={require('./assert/btnTele.png')}
                        style={styles.imageStyle}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      marginTop: '5%',
                      width: '85%',
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,
                    }}
                  />
                </View>
                <View
                  style={{
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      marginTop: '8%',
                      color: 'white',
                    }}>
                    Copyright © 2021 All Rights Reserved
                  </Text>
                </View>
              </LinearGradient>
            </View>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  buttonGPlusStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8%',
    width: '13%',
    height: 10,
    borderRadius: 7,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  input: {
    backgroundColor: 'red',
    borderRadius: 1,
    width: '44%',
    height: 45,
    borderColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 70,
    backgroundColor: 'orange',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  gryColor: {
    flexDirection: 'row',
    width: '50%',
    height: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  orngColor: {
    flexDirection: 'row',
    width: '50%',
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
    right: 0, //Here is the trick
  },
  quot: {
    width: '33%',
    borderRadius: 3,
    marginTop: '3%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    height: '11%',
  },
  button: {
    backgroundColor: 'pink',
    width: '38%',
    height: '102%',
    borderTopEndRadius: 2,
    borderBottomRightRadius: 2,

    alignItems: 'center',
    marginLeft: '1%',
  },
  plusBtn: {
    backgroundColor: '#F8C8DC',
    width: '18%',
    height: '55%',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1%',
  },
  TextStyle: {
    color: 'white',
    textAlign: 'center',
    marginTop: 3,
    fontSize: 11,
    textDecorationLine: 'underline',
  },
  loginText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  loginBtn: {
    height: 53,
    width: '73%',
    borderRadius: 30,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#29315C',
  },
  textBtn: {
    width: '64%',
    borderRadius: 2,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  image: {borderRadius: 13, width: '90%', height: '99.8%'},
  input: {
    backgroundColor: 'white',
    width: '74%',
    height: '9%',
    borderColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  sectionStyle: {
    height: 45,

    flexDirection: 'row',
    borderRadius: 20,
    marginTop: '7%',
    width: '85%',
    borderWidth: 2,
    borderColor: 'white',
  },
  imageStyle: {
    height: 35,
    width: 50,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});
