/* eslint-disable react-native/no-inline-styles */
/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native-macos';

type Props = $ReadOnly<{
  backgroundColor: string,
}>;

function HorizontalLine(props: Props): React$Element<typeof View> {
  return (
    <View
      style={{
        borderBottomColor: props.backgroundColor,
        borderBottomWidth: 0.3,
        height: 0.3,
        marginBottom: 30,
        marginTop: 8,
      }}
    />
  );
}

export default HorizontalLine;
