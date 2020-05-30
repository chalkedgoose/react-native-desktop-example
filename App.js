/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
  Button,
  AlertMacOS,
} from 'react-native-macos';

import {musicData} from './lib/data';

import CoverBlock from './components/music/Cover/CoverBlock.react';
import HorizontalLine from './components/ui/HorizontalLine.react';
import ThemeButton from './components/ui/ThemeButton.react';

const createTwoButtonAlert = () =>
  AlertMacOS.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

const App: () => React$Node = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.appBarTitle}>React Native Desktop</Text>
            <View style={styles.musicSection}>
              <Text style={styles.headline}>Bushwick pop-up</Text>
              <HorizontalLine backgroundColor="grey" />
              <CoverBlock data={musicData} />
            </View>
            <Text style={styles.exampleText}>
              I'm baby health goth normcore occupy drinking vinegar
              lumbersexual, franzen affogato chambray gluten-free. Pitchfork
              hell of godard, tote bag keytar direct trade kombucha aesthetic
              typewriter kickstarter kinfolk. Put a bird on it photo booth
              shabby chic marfa. Poke health goth prism authentic lumbersexual
              occupy iceland four loko, cray twee air plant YOLO. Yr lo-fi
              neutra green juice kitsch, coloring book banjo art party
              fingerstache portland 90's crucifix kogi VHS try-hard. Photo booth
              iPhone selfies, shoreditch listicle polaroid bushwick drinking
              vinegar next level gastropub. Twee bicycle rights typewriter,
              unicorn raclette listicle sriracha street art.
            </Text>
            <View style={styles.buttonRow}>
              <Button
                color="rgb(138,43,226)"
                onPress={createTwoButtonAlert}
                title="Utility Button"
              />
              <ThemeButton
                color="rgb(138,43,226)"
                onPress={createTwoButtonAlert}
                title="Action"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#202020',
    height: '100%',
    width: '100%',
  },
  body: {
    padding: 30,
    backgroundColor: '#202020',
    height: '100%',
    width: '100%',
  },
  musicSection: {
    marginBottom: 100,
  },
  headline: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  appBarTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '600',
  },
  exampleText: {
    marginTop: 50,
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default App;
