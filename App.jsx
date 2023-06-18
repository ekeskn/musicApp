import React, {useState} from 'react';
import {View, Text, FlatList, Switch} from 'react-native';
import music_data from './src/music-data.json';
import SongCard from './src/Components/SongCard';
import SearchBar from './src/Components/SearchBar';

const App = () => {
  const [musicList, setMusicList] = useState(music_data);
  const [showSoldOut, setShowSoldOut] = useState(false);

  const onSoldOutChanged = isSoldOutChanged => {
    setShowSoldOut(isSoldOutChanged),
      isSoldOutChanged
        ? setMusicList(musicList.filter(music => !music.isSoldOut))
        : setMusicList(music_data);
  };

  const handleSearch = text =>{
    const filteredList = music_data.filter(song=>{
      const searchedText = text.toLowerCase();
      const currentText = song.title.toLowerCase();
      return currentText.indexOf(searchedText) > -1;

    })
    
  setMusicList(filteredList)
  };

  const renderSong = ({item}) => <SongCard songs={item} />;
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <SearchBar onSearch={handleSearch} />
        </View>
        <Switch value={showSoldOut} onValueChange={onSoldOutChanged} />
      </View>
      <FlatList data={musicList} renderItem={renderSong} />
    </View>
  );
};

export default App;
