/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
	                  remoteFile: "https://raw.githubusercontent.com/reed7/MMM-configs/main/MMM-compliments/compliment.json"
			}
		},
		{
  			module: "MMM-GoogleAssistant",
  			position: "fullscreen_above",
  			config: {
    			  assistantConfig: {
      			    latitude: 42.376492,
      			    longitude: -71.235611,
    		          },
    		          micConfig: { // put there configuration generated by auto-installer
      		            recorder: "arecord",
      			    device: "plughw:2",
    			  },
		          responseConfig: {
			    useNative: true,
  			    playProgram: "mpg321",
			    screenOutputTimer: 3000,
			    activateDelay: 50,
			  },
			  snowboy: {
			    Model: "smart_mirror",
			  },
			  recipes: [ 
	                    "with-MMM-Spotify.js",
		            "with-BackgroundStatus.js"
			  ]
  		        }
		},
		{
                  module: "MMM-Weather",
                  position: "top_right",
                  configDeepMerge: true,
                  config: {
                    updateInterval: "15m", // 15 minutes
                    api: {
                      key: "1f95ae7b17a605ab9abd737939229aed",
                      latitude: 42.3783448,
                      longitude: -71.2478391,
                    },
	            personalize: {
	              forecastLayout: "table",
		    }
                  }
                },
		{
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "pk.eyJ1IjoicmVlZDciLCJhIjoiY2tobGMyd2d2MWxqejMxbnF3N2F1NW5sMSJ9.bVqiv-giYoezROl5gDsL-A",
		originCoords: "-71.2478391,42.3783448",
		destinationCoords: "-71.1822161,42.3526755",
		firstLine: "{duration} mins",
		secondLine: "Anne",
	}
},
	{
        module: "MMM-Traffic",
        position: "top_left",
        config: {
                accessToken: "pk.eyJ1IjoicmVlZDciLCJhIjoiY2tobGMyd2d2MWxqejMxbnF3N2F1NW5sMSJ9.bVqiv-giYoezROl5gDsL-A",
                originCoords: "-71.2478391,42.3783448",
                destinationCoords: "-71.070193,42.346037",
                firstLine: "{duration} mins",
                secondLine: "BFIT",
        }
},
{
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "pk.eyJ1IjoicmVlZDciLCJhIjoiY2tobGMyd2d2MWxqejMxbnF3N2F1NW5sMSJ9.bVqiv-giYoezROl5gDsL-A",
		originCoords: "-71.2478391,42.3783448",
		destinationCoords: "-71.1571521,42.397438",
		firstLine: "{duration} mins",
		secondLine: "Wei",
	}
},
		{
	          module: "newsfeed",
		  position: "top_bar",
		  config: {
			    feeds: [
				     {
				       title: "New York Times",
				       url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
				      },
				      {
				        title: "BBC World",
					url: "http://feeds.bbci.co.uk/news/video_and_audio/world/rss.xml",
				       },
				],
			     showSourceTitle: true,
			     showPublishDate: true,
			     broadcastNewsFeeds: true,
			     broadcastNewsUpdates: true,
			     showDescription: true,
		             updateInterval: 15000,
			     ignoreOlderThan: 43200000,
			     truncDescription: false
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}