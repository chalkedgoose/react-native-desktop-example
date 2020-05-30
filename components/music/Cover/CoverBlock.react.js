/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native-macos';
import Cover from './Cover.react';

type Props = $ReadOnly<{
  data: $ReadOnlyArray<
    $ReadOnly<{
      source: string,
      artist: string,
      title: string,
    }>,
  >,
}>;

function CoverBlock(props: Props): React$Element<typeof View> {
  const {data} = props;
  return (
    <View style={styles.musicFeed}>
      {data.map(x => (
        <Cover
          key={x.title}
          artist={x.artist}
          title={x.title}
          source={x.source}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  musicFeed: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default CoverBlock;
