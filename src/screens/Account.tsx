import React from 'react';
import {Block, Button, Text, useTheme} from 'bad-ui';
import {useSetAtom} from 'jotai';

function Account() {
  const {colors} = useTheme();
  return (
    <Block flex={1} justify="center">
      <Text s2 mb="m" color={colors.textMedium} align="center" h3>
        No Info!!
      </Text>
      <Button mh="m" mode="contained" onPress={() => setLoggedIn(false)}>
        Login
      </Button>
    </Block>
  );
}

export default Account;
