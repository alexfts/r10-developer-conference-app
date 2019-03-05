# R10 Developer Conference

R10 is an iOS and Android app built in React Native. It allows a conference attendee to view the conference schedule, see the details for each session, find out information about each speaker, add sessions to favourites, and view the conference's location on the map.

Note that while iOS is using a TabNavigator, Android is using a Drawer for navigation:
<img src="/js/assets/images/screenshot_ios.png" alt="iOS screenshot" height="300px">
<img src="/js/assets/images/screenshot_android.png" alt="Android screenshot" height="300px">

### Technologies Used

React Native, GraphQL, AsyncStorage, React Navigation, React Google Maps.

### Setup

Running the application requires XCode and Android Studio installed. The instructions rely on React Native CLI to run the application

```bash
yarn
```

or

```bash
yarn install
```

## iOS

From your terminal, run

```bash
react-native run-ios
```

## Android

Make sure Android Studio is open and is running one of the virtual devices, preferably with Pie as the version. Then run this from your terminal:

```bash
react-native run-android
```
