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
	electronOptions: {
	  webPreferences: {
	    webviewTag: true
	  }
	},
	modules: [
		{
                  module: "MMM-UpdateNotification",
                  position: "bottom_bar",
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
	module: "MMM-Traffic",
	position: "top_left",
	config: {
		accessToken: "pk.eyJ1IjoicmVlZDciLCJhIjoiY2tobGMyd2d2MWxqejMxbnF3N2F1NW5sMSJ9.bVqiv-giYoezROl5gDsL-A",
		originCoords: "-71.2500331,42.3783448",
		destinationCoords: "-71.1822161,42.3526755",
		firstLine: "{duration} mins",
		secondLine: "Anne",
		hoursStart: "07:00",
		hoursEnd: "18:00"
	}
},
	{
        module: "MMM-Traffic",
        position: "top_left",
        config: {
                accessToken: "pk.eyJ1IjoicmVlZDciLCJhIjoiY2tobGMyd2d2MWxqejMxbnF3N2F1NW5sMSJ9.bVqiv-giYoezROl5gDsL-A",
                originCoords: "-71.2500331,42.3783448",
                destinationCoords: "-71.070193,42.346037",
                firstLine: "{duration} mins",
                secondLine: "BFIT",
		hoursStart: "07:00",
		hoursEnd: "18:00"
        }
},
		{
        module: "MMM-Traffic",
        position: "top_left",
        config: {
                accessToken: "pk.eyJ1IjoicmVlZDciLCJhIjoiY2tobGMyd2d2MWxqejMxbnF3N2F1NW5sMSJ9.bVqiv-giYoezROl5gDsL-A",
                originCoords: "-71.2500331,42.3783448",
                destinationCoords: "-149.721161,61.1085733",
                firstLine: "{duration} mins",
                secondLine: "Anchorage, AK",
		hoursStart: "09:00",
		hoursEnd: "23:00"
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
		{
		  module: "MMM-Detector",
		  position: "bottom_right",
		  configDeepMerge: true,
		  config: {
		    debug: false,
		    detectors: [
		      {
			detector: "Porcupine",
			Model: "alexa",
			Sensitivity: 0.4,
			Logo: "google",
			autoRestart: false,
			onDetected: {
			  notification: "GA_ACTIVATE"
			}
		      }
		    ]
		  }
		},
		{
                  module: "MMM-GoogleAssistant",
                  position: "bottom_center",
		  configDeepMerge: true,
		  config: {
		    assistantConfig: {
		      latitude: 42.376171,
		      longitude: -71.238991,
		    },
		    Extented: {
                      useEXT: true,
                      photos: {
                        usePhotos: true,
                        useGooglePhotosAPI: true,
                        displayType: "Module",
                        displayDelay: 10 * 1000,
                        albums: ["Our Pictures"],
                        sort: "random",
                        hiResolution: true,
                        timeFormat: "MM/DD/YYYY HH:mm",
                        moduleHeight: 525,
                        moduleWidth: 700,
                      }
                    }
		  }
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
