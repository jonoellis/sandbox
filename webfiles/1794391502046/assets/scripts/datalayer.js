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
    p["gtm.allowlist"] = [
        // Core Google tag & new 2025/2026 Destination classes
        "google",
        "gct",      // Google Tag (new container/config tag)
        "dest_ga",  // GA4 Destination tag
        "gtes",     // Google tag: Event settings
        "gtcs",     // Google tag: Configuration settings
        "ftld",     // First-party / Linker data
        "icvr",     // Conversion / Linker helper

        // Built-in Variables (No custom HTML or 3rd-party scripts)
        "v", "c", "k", "u", "r", "d", "e", "aev", "f",
        "j", "jsm", "smm", "remm", "gas",
        "cid", "ctv", "dbg", "hid", "ed", "uv", "rc",

        // Built-in Triggers & Listeners
        "cl", "lcl", "fsl", "sdl", "evl", "hl", "jel", "tl", "ytl", "ce", "tg",
        "ehl", "ecl", "fal", "fil"
    ],
    p["gtm.whitelist"] = p["gtm.allowlist"],
    g(u) && (p.userType = u), g(e) && (p.audience = e), g(r) && (p.reportingTags = r.split("|")), g(i) && (p.lifeEvents = i.split("|")), g(n) && (p.serviceProviders = n.split("|")), g(s) && (p.format = s), g(o) && (p.siteid = o), g(l) && (p.topics = l.split("|")), g(d) && (p.lastUpdated = d), g(a) && (p.dateCreated = a), g(c) && (p.uuid = c), window.dataLayer.push(p)
}();
