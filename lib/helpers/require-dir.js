'use strict';

module.exports = function (cwd, cb) {
  
  if(cwd.endsWith("services")){
    cb(require("../services/deezer"));
    cb(require("../services/soundcloud"));
    cb(require("../services/spotify"));
  } else if(cwd.endsWith("SonosSystem")){
    cb(require("../prototypes/SonosSystem/applyPreset"));
    cb(require("../prototypes/SonosSystem/getFavorites"));
    cb(require("../prototypes/SonosSystem/getPlaylists"));
    cb(require("../prototypes/SonosSystem/refreshShareIndex"));
  } else if(cwd.endsWith("Player")){
    cb(require("../prototypes/Players/getUriType"));
    cb(require("../prototypes/Players/nightMode"));
    cb(require("../prototypes/Players/recalculateGroupVolume"));
    cb(require("../prototypes/Players/replaceWithFavorite"));
    cb(require("../prototypes/Players/replaceWithPlaylist"));
    cb(require("../prototypes/Players/setGroupVolume"));
    cb(require("../prototypes/Players/speechEnhancement"));
    cb(require("../prototypes/Players/subCrossover"));
    cb(require("../prototypes/Players/subDisable"));
    cb(require("../prototypes/Players/subEnable"));
    cb(require("../prototypes/Players/subGain"));
    cb(require("../prototypes/Players/subPolarity"));
  } 
};
