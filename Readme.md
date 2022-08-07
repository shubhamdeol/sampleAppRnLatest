# Reddit Assignment

## Features

- Dark Theme
- Offline data persistance
- Ability to mark item as favorite
- type safe theme structure with dark theme support

This project uses `jotai` https://jotai.org/ micro global state management library.  
Uses latest React Naive Version

Instructions on how to run application are below.

- installing dependencies

```sh
yarn
```

- running on android

```sh
yarn android
```

- running on ios

```sh
cd ios/
pod install & cd ..
yarn ios
```

## further improvements that can be done are

- replace Flatlist with flashlist by shopify https://shopify.github.io/flash-list/
- use react-native-fast-image https://github.com/DylanVann/react-native-fast-image to cache images fetched and load ui faster.
- To mark each item favorite I have used item create time as id, which is not might not be unique. Each item can have a unique id.
