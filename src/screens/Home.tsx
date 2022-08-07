import React from 'react';
import {Block, Input, Picture, Text, useTheme} from 'bad-ui';
import {useAtom} from 'jotai';
import {_redditPicsDetails} from '../atoms/redditPics';
import {api} from '../utils/api';
import {FlatList, Pressable} from 'react-native';

function Home() {
  const [redditPicsDetails, setRedditPicsDetails] = useAtom(_redditPicsDetails);

  const [searchResults, setSearchResults] = React.useState<any>([]);

  React.useEffect(() => {
    setSearchResults(redditPicsDetails);
  }, [redditPicsDetails]);

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
        data={searchResults}
        keyExtractor={item => item.data.created}
        renderItem={({item}) => <RedditItem item={item} />}
      />
    </Block>
  );
}

export default Home;

const RedditItem = ({item: {data}}: any) => {
  const {thumbnail, thumbnail_height, thumbnail_width} = data;
  const {colors} = useTheme();
  return (
    <Pressable>
      <Block row color={colors.background2} m="s" pv="m" ph="m" radius={4}>
        <Picture
          source={{uri: thumbnail}}
          style={{
            height: thumbnail_height,
            width: thumbnail_width,
          }}
        />
        <Text h4 flex={1} ml="m">
          {data.title}
        </Text>
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
