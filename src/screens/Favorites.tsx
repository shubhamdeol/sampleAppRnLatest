import React from 'react';
import {Block, Colors, Text, useTheme} from 'bad-ui';
import {FlatList} from 'react-native-gesture-handler';
import {useAtomValue} from 'jotai';
import {_redditFavorites} from '../atoms/redditPics';
import {RedditItem} from './Home';

function Favorites() {
  const favorites = useAtomValue(_redditFavorites);
  const {colors} = useTheme();

  const favoriteItems = React.useMemo(() => {
    return Object.keys(favorites).map(item => {
      return favorites[item];
    });
  }, [favorites]);

  return (
    <FlatList
      style={{
        backgroundColor: colors.background2,
      }}
      ListEmptyComponent={
        <Block align="center" mt="xl">
          <Text h3>Not Marked Any Favorite</Text>
        </Block>
      }
      data={favoriteItems}
      keyExtractor={item => item.created}
      renderItem={({item}) => <RedditItem data={item} />}
    />
  );
}

export default Favorites;
