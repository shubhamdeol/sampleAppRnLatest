import {Text, AppUIProvider, Block, Button, Input} from 'bad-ui';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const BadUIDemoShowCase = () => {
  const [elementType, setElementType] = React.useState<
    'button' | 'text' | 'input'
  >();

  const renderTextComponents = () => {
    return (
      <>
        <Text mt="l" bt1>
          Text Bt1
        </Text>
        <Text mt="l" h1>
          Text H1
        </Text>
        <Text mt="l" h2>
          Text H2
        </Text>
        <Text mt="l" h3>
          Text H3
        </Text>
        <Text mt="l" h4>
          Text H4
        </Text>
        <Text mt="l" s1>
          Text S1
        </Text>
        <Text mt="l" s2>
          Text S2
        </Text>
        <Text mt="l" s3>
          Text S3
        </Text>
        <Text mt="l" s4>
          Text S4
        </Text>
        <Text mt="l" c1>
          Text C1
        </Text>
        <Text mt="l" c2>
          Text C2
        </Text>
      </>
    );
  };

  const renderButtonComponents = () => {
    return (
      <>
        <Button mt="l" mode="contained">
          Button Contained
        </Button>
        <Button mt="l" mode="outlined">
          Button Outlined
        </Button>
        <Button mt="l" mode="text">
          Button Text
        </Button>
      </>
    );
  };

  const renderInputComponents = () => {
    return (
      <>
        <Input label="User Name" placeholder="Tonny" />
        <Input
          label="Email"
          placeholder="xxxx@gmail.com"
          errorMessage="Email not valid"
        />
        <Input label="Password" secureTextEntry placeholder="*******" />
      </>
    );
  };

  const renderContent = () => {
    switch (elementType) {
      case 'text':
        return renderTextComponents();
      case 'button':
        return renderButtonComponents();
      case 'input':
        return renderInputComponents();
      default:
        break;
    }
  };
  return (
    <Block flex={1}>
      {!!elementType && (
        <Button onPress={() => setElementType(undefined)}>Back</Button>
      )}
      <Block flex={1} justify="center" ph="m">
        {elementType ? (
          renderContent()
        ) : (
          <>
            <Button
              mv="s"
              mode="outlined"
              onPress={() => setElementType('text')}>
              Text
            </Button>
            <Button mv="s" onPress={() => setElementType('button')}>
              Button
            </Button>
            <Button mv="s" onPress={() => setElementType('input')}>
              Input
            </Button>
          </>
        )}
      </Block>
    </Block>
  );
};

const Demo = () => {
  return (
    <AppUIProvider
      theme={{
        dark: false,
      }}>
      <SafeAreaView style={styles.flexOne}>
        <BadUIDemoShowCase />
      </SafeAreaView>
    </AppUIProvider>
  );
};

export default Demo;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});
