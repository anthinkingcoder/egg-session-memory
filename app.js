'use strict';

const Store = require('./core/memory-store');

const ONE_DAY = 1000 * 60 * 60 * 24;

module.exports = app => {
  const store = new Store();
  app.sessionStore = {
     get(key) {
      const res =  store.get(key);
      if (!res) return null;
      return res;
    },

     set(key, value, maxAge) {
      maxAge = typeof maxAge === 'number' ? maxAge : ONE_DAY;
       store.set(key, value, maxAge);
    },

     destroy(key) {
       store.destroy(key);
    },
  };
};
