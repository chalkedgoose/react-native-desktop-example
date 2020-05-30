/**
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native-macos';
import PlayIconSource from './assets/play-button.png';
import PauseIconSource from './assets/pause.png';

type ButtonProps = $ReadOnly<{
  onPress: () => void,
}>;

function PlayButton(
  props: ButtonProps,
): React$Element<typeof TouchableOpacity> {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image style={styles.icon} source={PlayIconSource} />
    </TouchableOpacity>
  );
}

function PauseButton(
  props: ButtonProps,
): React$Element<typeof TouchableOpacity> {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image style={styles.icon} source={PauseIconSource} />
    </TouchableOpacity>
  );
}

function CoverOverlay(): React$Element<typeof View> {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  function togglePlayingState(): void {
    if (isPlaying) {
      setIsPlaying(false);
    } else if (!isPlaying) {
      setIsPlaying(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewContents}>
        {isPlaying ? (
          <PauseButton onPress={togglePlayingState} />
        ) : (
          <PlayButton onPress={togglePlayingState} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(46, 49, 49,0.5)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContents: {},
  icon: {
    width: 60,
    height: 60,
  },
});

export default CoverOverlay;
