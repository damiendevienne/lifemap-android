# lifemap_mobile_Phonegap

This is the folder used to create the Lifemap app for android with cordova.


CURRENT VERSION : cordova 9 and android 8

cordova-icon and cordova-splash must be installed first. --> check


To create the App for android, type:

`>cordova platform add android@8.X.X`
`>cordova plugin add cordova-plugin-splash`
`>cordova plugin add cordova-plugin-whitelist`

`>cordova-icon` -> to generate icons
`>cordova-splash` -> to generate splashscreens

`>cordova build` -> for building, or

Then edit /platforms/android/app/src/main/AndroidManifest.xml 
and add android:usesCleartextTraffic="true" in the <application ... /> part.

`cordova run android --release -- --keystore=KEYSTOREFILELOCATION --storePassword=XXXXXX --alias=ALIAS --password=XXXXXX`
(replace by correct values)

# to emulate android phone on linux

sdkmanager --list # to see all systems
sdkmanager "system-images;android-25;google_apis;x86" # for example
#and then create the avd using: 
avdmanager -v create avd -n x86 -k "system-images;android-25;google_apis;x86" -g "google_apis"

note: these two tools are in /home/ddevienne/Android/Sdk/tools/bin/ on my machine
