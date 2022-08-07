import {Block, Icon, Picture, Text, useTheme} from 'bad-ui';
import {useAtom} from 'jotai';
import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {_redditFavorites} from '../atoms/redditPics';

const IMAGE_HEIGHT = 400;
const IMAGE_WIDTH = Dimensions.get('window').width;

const Details = ({
  route: {
    params: {data},
  },
}: any) => {
  const {colors} = useTheme();
  const [favorite, setFavorite] = useAtom(_redditFavorites);

  const markFavorite = () => {
    let updatedFavoriteInfo: any = {
      ...favorite,
    };
    if (isFavorite) {
      delete updatedFavoriteInfo[data.created];
    } else {
      updatedFavoriteInfo = {
        ...favorite,
        [data.created]: data,
      };
    }
    setFavorite(updatedFavoriteInfo);
  };

  const isFavorite = Boolean(favorite[data?.created]);

  return (
    <ScrollView style={{backgroundColor: colors.background1}}>
      <Block>
        <Picture
          source={{uri: data.url}}
          style={{
            height: IMAGE_HEIGHT,
            width: IMAGE_WIDTH,
          }}
        />
        <Icon
          onPress={markFavorite}
          align="right"
          p="s"
          name={isFavorite ? 'cards-heart' : 'cards-heart-outline'}
          size={32}
          color={isFavorite ? colors.iconDanger : colors.iconLow}
        />
      </Block>
      <Block ph="m">
        <Text mt="m">{data.title}</Text>
        {Boolean(data.content_categories?.length) && (
          <Text mt="s" c1>
            {data.content_categories.join(', ')}
          </Text>
        )}
        {Boolean(data.archived) && (
          <Text mt="s" c1>
            {'Archived'}
          </Text>
        )}

        <Text mt="m" align="right">
          {data.author}
        </Text>
        {Boolean(data.author_premium) && (
          <Text mt="s" c1 align="right">
            {`(Premium Author) ${
              typeof data?.total_awards_received === 'number'
                ? `, ${data.total_awards_received} awards`
                : ''
            }`}
          </Text>
        )}
      </Block>
    </ScrollView>
  );
};

export default Details;
