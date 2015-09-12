'use strict';

module.exports = function(app) {
    // inject:start
    require('./videoFetch.controller')(app);
    // inject:end
};