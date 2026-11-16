! function() {
    const t = document.getElementById("gtm-datalayer");
    if (!t) return;
    const e = t.dataset.audience,
        a = t.dataset.datecreated,
        s = t.dataset.format,
        d = t.dataset.lastupdated,
        i = t.dataset.lifeevents,
        r = t.dataset.reportingtags,
        n = t.dataset.serviceproviders,
        o = t.dataset.siteid,
        l = t.dataset.topics,
        u = t.dataset.usertype,
        c = t.dataset.uuid;
    window.dataLayer = window.dataLayer || [];
    const p = {};

    function g(t) {
        return t && !!t.length
    }
    g(u) && (p.userType = u), g(e) && (p.audience = e), g(r) && (p.reportingTags = r.split("|")), g(i) && (p.lifeEvents = i.split("|")), g(n) && (p.serviceProviders = n.split("|")), g(s) && (p.format = s), g(o) && (p.siteid = o), g(l) && (p.topics = l.split("|")), g(d) && (p.lastUpdated = d), g(a) && (p.dateCreated = a), g(c) && (p.uuid = c), window.dataLayer.push(p)
}();
