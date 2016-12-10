/**
 * This object storing and retrieving configuration from HTML5 local storage.
 * @module config/localStorage
 */

'use strict';

import config from './config'

/**
 * @constructor
 */
export default function LocalStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
    this.storage = window.localStorage;
  } else {
    this.storage = new (require('node-localstorage').LocalStorage)(this.node_store);
  }
}

/**
 * Reads the config out of the HTML5 local storage
 * and initializes the object config.
 * if config is null the default config will be used
 */
LocalStorage.prototype.read = function () {
  const raw = window.localStorage.getItem('config');
  let cf = raw;
  if (cf !== null) {
    try {
      cf = JSON.parse(raw);
    }
    catch (e) {

    }
  }
  if (cf === null) {
    this.config = config;
    this.write();
  } else {
    this.config = cf;
  }
};

/**
 * Writes the config to HTML5 local storage
 */
LocalStorage.prototype.write = function () {
  window.localStorage.setItem("config", JSON.stringify(this.config));
};
