/**
 *
 * @format
 * @flow strict
 */

export type MusicDataArrayType = $ReadOnlyArray<
  $ReadOnly<{
    source: string,
    artist: string,
    title: string,
  }>,
>;

export const musicData: MusicDataArrayType = [
  {
    source: 'https://i.redd.it/37ry0mutqhn21.jpg',
    artist: 'Nav',
    title: 'Bad Habits',
  },
  {
    source:
      'https://i.pinimg.com/originals/be/04/41/be044161d94a6368da28ad3f94a5a957.jpg',
    artist: 'Petit Biscuit',
    title: 'Sunset Lover',
  },
  {
    source: 'https://f4.bcbits.com/img/a3817413205_10.jpg',
    artist: 'Alaclair Ensemble',
    title: 'QDBV',
  },
  {
    source:
      'https://images.genius.com/5b9f1904f922f9757088d670f27530e5.1000x1000x1.png',
    artist: 'Houdini',
    title: 'Myself',
  },
  {
    source:
      'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/95266825_712207749606954_61108540069085131_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=e4ExB-nDYrsAX_qvHqp&oh=dcd92ef6ae5c755f7396963f43ea8bd1&oe=5EFD11D8',
    artist: 'Clubhouse',
    title: 'Weekend',
  },
];
