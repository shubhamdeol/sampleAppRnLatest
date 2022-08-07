import React from 'react';
import {Block, Input, Picture, Text, useTheme} from 'bad-ui';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {_redditPicsDetails, _redditPicsLoading} from '../atoms/redditPics';
import {api} from '../utils/api';
import {FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const dayjs = require('dayjs');

function Home() {
  const [redditPicsDetails, setRedditPicsDetails] = useAtom(_redditPicsDetails);
  const setLoading = useSetAtom(_redditPicsLoading);

  const [searchResults, setSearchResults] = React.useState<any>([]);

  React.useEffect(() => {
    setSearchResults(redditPicsDetails);
  }, [redditPicsDetails]);

  const getPetProfiles = React.useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: {
          data: {children: rPics},
        },
      } = await api.get('r/pics/.json?jsonp=');
      setLoading(false);
      setRedditPicsDetails(rPics);
    } catch (error) {
      setLoading(false);
    }
  }, [setRedditPicsDetails, setLoading]);

  React.useEffect(() => {
    getPetProfiles();
  }, [getPetProfiles]);

  const onChangeText = (value: string) => {
    const updatedResults = redditPicsDetails?.filter(item => {
      if (
        item.data.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ) {
        return item;
      }
    });
    setSearchResults(updatedResults);
  };

  return (
    <Block flex={1}>
      <FlatList
        ListHeaderComponent={<Header onChangeText={onChangeText} />}
        ListEmptyComponent={EmptyComponent}
        data={searchResults}
        keyExtractor={item => item.data.created}
        renderItem={({item}) => <RedditItem data={item.data} />}
      />
    </Block>
  );
}

export default Home;

export const RedditItem = ({data}: any) => {
  const {thumbnail, thumbnail_height, thumbnail_width} = data;
  const {colors} = useTheme();
  const {navigate} = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigate('Details', {
          data,
        })
      }>
      <Block row color={colors.background2} m="s" pv="m" ph="m" radius={4}>
        <Picture
          source={{uri: thumbnail}}
          style={{
            height: thumbnail_height,
            width: thumbnail_width,
          }}
        />
        <Block mh="m" flex={1}>
          <Text h4 flex={1}>
            {data.title}
          </Text>
          <Text c1 flex={1} mt="s">
            {dayjs(data.created).format('MMM D, YYYY h:mm A')}
          </Text>
        </Block>
      </Block>
    </Pressable>
  );
};

const Header = ({onChangeText}: any) => {
  const {colors} = useTheme();
  return (
    <Input
      onChangeText={onChangeText}
      mh="m"
      ph="m"
      backgroundColor={colors.background2}
      placeholder="Search By Title"
    />
  );
};

const EmptyComponent = ({}) => {
  const isLoading = useAtomValue(_redditPicsLoading);
  return (
    <Block ph="l">
      {isLoading ? (
        <Text>Loading Info from Reddit Api</Text>
      ) : (
        <Text>No Results Found</Text>
      )}
    </Block>
  );
};
