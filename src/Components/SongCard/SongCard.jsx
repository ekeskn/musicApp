import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.style';

const SongCard = ({songs}) => {
  return (
    <View style={styles.main_container}>
      <Image style={styles.image} source={{uri: songs.imageUrl}} />
      <View style={styles.upper_container}>
        <Text style={styles.title}>{songs.title}</Text>
        <View style={styles.lower_container}>
          <View style={styles.contents}>
            <Text style={styles.artist}>{songs.artist}</Text>
            <Text style={styles.year}>{songs.year}</Text>
          </View>
          {songs.isSoldOut && <Text style={styles.sold_out}>SOLD OUT</Text>}
        </View>
      </View>
    </View>
  );
};

export default SongCard;
