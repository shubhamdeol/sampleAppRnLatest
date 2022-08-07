import React from 'react';
import {Block, Text} from 'bad-ui';
import {FlatList} from 'react-native-gesture-handler';
import {useAtomValue} from 'jotai';
import {_redditFavorites} from '../atoms/redditPics';
import {RedditItem} from './Home';

function Favorites() {
  const favorites = useAtomValue(_redditFavorites);

  const favoriteItems = React.useMemo(() => {
    return Object.keys(favorites).map(item => {
      return favorites[item];
    });
  }, [favorites]);

  return (
    <Block>
      <FlatList
        ListEmptyComponent={
          <Block align="center" mt="xl">
            <Text h3>Not Marked Any Favorite</Text>
          </Block>
        }
        data={favoriteItems}
        keyExtractor={item => item.created}
        renderItem={({item}) => <RedditItem data={item} />}
      />
    </Block>
  );
}

export default Favorites;
