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
        // Core Google tag & built-in classes
        "google",   // All built-in Google tags (GA4, Google Tag, Ads, Floodlight, Linker, etc.)
        "gtes",     // Google tag: Event settings variable
        "gtcs",     // Google tag: Configuration settings variable
        
        // Safe built-in Variables (No external network requests or arbitrary HTML)
        "v",        // Data Layer Variable
        "c",        // Constant
        "k",        // 1st-Party Cookie
        "u",        // URL
        "r",        // HTTP Referrer
        "d",        // DOM Element
        "e",        // Custom Event
        "aev",      // Auto-Event Variable
        "f",        // Element Visibility / Form / Auto-Event helper
        "j",        // JavaScript Variable (reads existing global JS variables)
        "jsm",      // Custom JavaScript Variable
        "smm",      // Lookup Table
        "remm",     // RegEx Table
        "gas",      // Google Analytics Settings
        "cid",      // Container ID
        "ctv",      // Container Version Number
        "dbg",      // Debug Mode
        "hid",      // Random Number
        "ed",       // Environment Name
        "uv",       // Undefined Value
        "rc",       // Request Context

        // Built-in Triggers & Event Listeners
        "cl",       // Click - All Elements
        "lcl",      // Click - Just Links
        "fsl",      // Form Submission
        "sdl",      // Scroll Depth
        "evl",      // Element Visibility
        "hl",       // History Change
        "jel",      // JavaScript Error
        "tl",       // Timer
        "ytl",      // YouTube Video
        "ce",       // Custom Event trigger
        "tg"        // Trigger Group
    ],
    p["gtm.whitelist"] = p["gtm.allowlist"],
    g(u) && (p.userType = u), g(e) && (p.audience = e), g(r) && (p.reportingTags = r.split("|")), g(i) && (p.lifeEvents = i.split("|")), g(n) && (p.serviceProviders = n.split("|")), g(s) && (p.format = s), g(o) && (p.siteid = o), g(l) && (p.topics = l.split("|")), g(d) && (p.lastUpdated = d), g(a) && (p.dateCreated = a), g(c) && (p.uuid = c), window.dataLayer.push(p)
}();
