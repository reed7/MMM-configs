# MMM-configs

## Summary
Magic Mirror is installed on `/home/pi/MagicMirror`. Running as user `pi` should be sufficient to manage the application.

## Start/Restart the mirror
I use [pm2](https://pm2.keymetrics.io/docs/usage/quick-start/) to manage the mirror process so that it can be automatically bring up on server restart or application crushing. 
```
pm2 start/restart MM-start
```
See all the applications pm2 is managing
```
pm2 ls
```

## Update the mirror
```
cd ~/MagicMirror
git pull
npm install
```

If having trouble starting the mirror after the update, try to remove `~/MagicMirror/node_modules` and retry. 

## MMM-GoogleAssistant 
The module works with `MMM-Detector` to provide GA functions. `MMM-Detector` takes the wake word and send notification to GA (or alexa which is not installed on my MM) to wake the module and take voice commands.<br>
I only enable GA activation on my MM. 
