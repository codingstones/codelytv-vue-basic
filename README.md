# JotasJS Basic

> Demo project for the CodelyTV Pro video course `Building an app with VueJS and Jest using TDD` you may find in: [Crea una app con VueJS y Jest aplicando TDD](https://pro.codely.tv/library/crea-una-app-con-vuejs-y-jest-aplicando-tdd/65211/path/)

_Note that although all the videos and course contents are in Spanish, this repo is only available in English._

## Getting Started!

``` bash
# install dependencies
$ yarn install
or
$ npm install

# run tests
$ jest --watch

# serve with hot reload at localhost:8080
$ yarn dev mat
or 
$ npm run dev mat


# 'mat' was the material theme, try iOS with
$ yarn dev ios
or
$ npm run dev ios

# build for production with minification
$ quasar build
```

## Going Mobile!

You may want to wrap the App into a native mobile App. Given you already have Cordova and an Android or iOS SDK installed in your system, run:


```
quasar wrap cordova
cordova platform add android
cordova run android
```

For full details, take a look to the Quasar [guide](http://quasar-framework.org/guide/cordova-wrapper.html).
