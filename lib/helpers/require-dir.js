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
    cb(require("../prototypes/Player/getUriType"));
    cb(require("../prototypes/Player/nightMode"));
    cb(require("../prototypes/Player/recalculateGroupVolume"));
    cb(require("../prototypes/Player/replaceWithFavorite"));
    cb(require("../prototypes/Player/replaceWithPlaylist"));
    cb(require("../prototypes/Player/setGroupVolume"));
    cb(require("../prototypes/Player/speechEnhancement"));
    cb(require("../prototypes/Player/subCrossover"));
    cb(require("../prototypes/Player/subDisable"));
    cb(require("../prototypes/Player/subEnable"));
    cb(require("../prototypes/Player/subGain"));
    cb(require("../prototypes/Player/subPolarity"));
  } 
};
