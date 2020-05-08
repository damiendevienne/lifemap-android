# lifemap_mobile_Phonegap

This is the folder used to create the Lifemap app for android with cordova.
CURRENT VERSION : cordova 9 and android 8

## prerequisite: 
The following tools must be installed first: 

- cordova

## building the app
To create the App for android, type:

```bash
cordova platform add android
cordova plugin add cordova-plugin-splashscreen
cordova plugin add cordova-plugin-whitelist
cordova plugin add cordova-plugin-network-information

cordova build #for building, or cordova run android to test on plugged phone. 
```

Then edit the file `platforms/android/app/src/main/AndroidManifest.xml` and add the text `android:usesCleartextTraffic="true"` in the `<application ... />` section.


To create the final app (release) apk: 
```
cordova run android --release -- --keystore=KEYSTOREFILELOCATION --storePassword=XXXXXX --alias=ALIAS --password=XXXXXX`
```


## Emulate on android phone on linux for testing (complicated, easier to plug a phone)
```
sdkmanager --list # to see all systems
sdkmanager "system-images;android-25;google_apis;x86" # for example
```
and then create the avd using: 
```
avdmanager -v create avd -n x86 -k "system-images;android-25;google_apis;x86" -g "google_apis"
```
note: these two tools are in /home/ddevienne/Android/Sdk/tools/bin/ on my machine

