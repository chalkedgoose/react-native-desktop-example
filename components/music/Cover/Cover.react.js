/**
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native-macos';

import CoverOverlay from './CoverOverlay.react';

type Props = $ReadOnly<{
  source: string,
  artist: string,
  title: string,
}>;

function Cover(props: Props): React$Element<typeof View> {
  const {source, artist, title} = props;
  const [hoveredOn, setHoveredOn] = useState(false);
  //   look into on mouse enter and exit for hover effect
  return (
    <View
      onMouseLeave={() => setHoveredOn(false)}
      onMouseEnter={() => setHoveredOn(true)}
      style={styles.container}>
      <TouchableOpacity onPress={() => alert('Clack Hosti!')}>
        <View style={styles.cover}>
          <ImageBackground style={styles.image} source={{uri: source}}>
            {hoveredOn ? <CoverOverlay /> : null}
          </ImageBackground>
        </View>
      </TouchableOpacity>
      <View style={styles.descriptionArea}>
        <Text style={styles.songTitle}>{title}</Text>
        <Text style={styles.text}>{artist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    flex: 1,
    flexDirection: 'column',
    height: 100,
    width: 300,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  songTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
  text: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '400',
  },
  descriptionArea: {
    marginTop: 4,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default Cover;
