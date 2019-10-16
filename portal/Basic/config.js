/* eslint-disable no-unused-vars */

const Config = {
    wfsImgPath: "./ressources/img/",
    namedProjections: [
        ["EPSG:25833", "+title=ETRS89/UTM 33N +proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"]
    ],
    footer: {
        urls: [
            {
                "bezeichnung": "TSB: ",
                "url": "https://www.xxx.de/",
                "alias": "TSB",
                "alias_mobil": "TSB"
            }
        ]
    },
    quickHelp: {
        imgPath: "./ressources/img/"
    },
    layerConf: "./ressources/services-internet.json",
    restConf: "./ressources/rest-services-internet.json",
    styleConf: "./ressources/style_v2.json",
    scaleLine: true,
    mouseHover: {
        numFeaturesToShow: 2,
        infoText: "(weitere Objekte. Bitte zoomen.)"
    }
};

/* eslint-enable no-unused-vars */
