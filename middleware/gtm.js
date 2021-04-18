const preferences = require('../config/preferences');
const credentials = require('../config/credentials');
const pageHelpers = require('../scripts/helpers/pageHelpers');

function getCommonEvents(gtmObject) {
    let events = [];
    if (gtmObject && gtmObject.events) {
        events = [...gtmObject.events];
    }

    events.push({
        event: 'pageLoaded',
        pageName: gtmObject.pageName
    });
    return events;
}

function commonData(req, res, next) {
    const gtm = {
        ...res.locals.gtm,
        GTMEnabled: preferences.GTMEnabled,
        GTMContainerID: credentials.gtm.key,
    };
    const pageInfo = pageHelpers.getPageInfoByPath(req.path);

    if (pageInfo) {
        gtm.pageName = pageInfo.pageName;
    }

    gtm.events = getCommonEvents(gtm);

    res.locals.gtm = gtm;
    next();
}

module.exports = {
    commonData
};
