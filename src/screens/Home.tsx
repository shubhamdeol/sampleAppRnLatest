import React from 'react';
import {Block, Text} from 'bad-ui';
import {useAtom} from 'jotai';
import {_redditPicsDetails} from '../atoms/redditPics';
import {api} from '../utils/api';
import {Animated, FlatList, View, Dimensions, Image} from 'react-native';

const ITEM_WIDTH = Dimensions.get('window').width * 0.84;

const ITEM_HEIGHT = Dimensions.get('window').height * 0.72;

function Home() {
  const [redditPicsDetails, setRedditPicsDetails] = useAtom(_redditPicsDetails);

  const getPetProfiles = React.useCallback(async () => {
    try {
      const {
        data: {
          data: {children: rPics},
        },
      } = await api.get('r/pics/.json?jsonp=');
      setRedditPicsDetails(rPics);
    } catch (error) {}
  }, [setRedditPicsDetails]);

  React.useEffect(() => {
    getPetProfiles();
  }, [getPetProfiles]);

  return (
    <Block flex={1}>
      <FlatList
        data={redditPicsDetails}
        keyExtractor={item => item.data.created}
        renderItem={({item}) => <RedditItem item={item} />}
      />
    </Block>
  );
}

export default Home;

const RedditItem = ({item: {data}}) => {
  return (
    <Block>
      <Text h2 mv="s">
        {data.title}
      </Text>
    </Block>
  );
};
