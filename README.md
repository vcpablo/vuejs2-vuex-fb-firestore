# Instructions

> A Sample Vue.JS project using Vuex and Firebase Cloud Functions
This project consists on a sample app that displays alows the user to create Debit and Credt transactions and check the total balance of a simulated account.

## Create a Firebase project
https://firebase.google.com/docs/web/setup

## Configure Firebase Firestore
https://firebase.google.com/docs/firestore/quickstart

## Firebase settings (REQUIRED TO WORK)
Locate the file `config.js` and fill it with your Firebase project settings
```
export const config = {
  FIREBASE: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  }
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Meta
Pablo Veiga - vcpablo@gmail.com
Distributed under MIT license.

## Contributing
1. Fork it (https://github.com/vcpablo/vuejs2-vuex-fb-firestore-sample/fork)
2. Create your feature branch
  `git checkout -b feature/fooBar`
3. Commit your changes using AngularJS commit message pattern (https://gist.github.com/stephenparish/9941e89d80e2bc58a153#examples)
4. Push to the branch
5. Create a new pull request
