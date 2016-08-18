/**
 * @see module:config/config
 * @module config
 */

'use strict';

import config from './config.js';

import localStorage from './localStorage.js';
config.localStorage = localStorage;

export default config;
