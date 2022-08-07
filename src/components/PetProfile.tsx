import {Block, Text, useTheme} from 'bad-ui';
import React from 'react';
import {Dimensions, Image, ImageBackground} from 'react-native';
import {PetProfileInfo} from '../types';

interface Props {
  item: PetProfileInfo;
}

const ITEM_WIDTH = Dimensions.get('window').width * 0.84;

const ITEM_HEIGHT = Dimensions.get('window').height * 0.72;

const PetProfile: React.FC<Props> = ({item}) => {
  const {colors} = useTheme();
  return (
    <Block
      flex={1}
      color={'pink'}
      position="absolute"
      style={{
        left: -ITEM_WIDTH / 2,
      }}>
      <ImageBackground
        source={{uri: item.avatar}}
        style={{
          height: ITEM_HEIGHT,
          width: ITEM_WIDTH,
        }}>
        <Text>{item.name}</Text>
      </ImageBackground>
    </Block>
  );
};

export default PetProfile;
