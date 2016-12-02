/**
 * City.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    Nom_Ville: {
      type: 'string'
    },
    MAJ: {
      type: 'string'
    },
    Code_Postal: {
      type: 'integer'
    },
    Code_INSEE: {
      type: 'integer'
    },
    Code_Region: {
      type: 'string'
    },
    Latitude: {
      type: 'float'
    },
    Longitude: {
      type: 'float'
    },
    Eloignement: {
      type: 'float'
    },
  }
};

