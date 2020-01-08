# lifemap_mobile_Phonegap

This is the folder used to create the Lifemap app for android and ios with CORDOVA. 

cordova-icon and cordova-splash must be installed first.

To create the App for android, type:

`>cordova platform add android`

`>cordova-icon`

`>cordova-splash`

`>cordova build`



# to emulate android phone on linux

sdkmanager --list # to see all systems
sdkmanager "system-images;android-25;google_apis;x86" # for example
#and then create the avd using: 
avdmanager -v create avd -n x86 -k "system-images;android-25;google_apis;x86" -g "google_apis"

note: these two tools are in /home/ddevienne/Android/Sdk/tools/bin/ on my machine
