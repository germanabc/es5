var polyvVodPlayer = {
    version: 20170307,
    jsonHost: "https://router.polyv.net/secure/",
    isPreviewMode: false,
    videoId: "",
    getVideo: function(e, t, r, o) {
        this.loadJson(e, t, r, o)
    },
    getPreviewVideo: function(e, t, r, o) {
        this.isPreviewMode = true;
        this.loadJson(e, t, r, o)
    },
    loadJson: function(e, t, r, o) {
        var i = {
            timeoutflow: false,
            outflow: false
        };
        if (e == "") {
            i = {
                error: "vid不能为空"
            };
            t(i);
            return
        }
        var s = this;
        s.videoId = e;
        s.ts = r;
        s.sign = o;
        wx.request({
            url: s.jsonHost + e + ".js",
            method: "GET",
            success: function(e) {
                if (e.data.timeoutflow == "true") {
                    i.timeoutflow = true
                } else if (e.data.outflow == "true") {
                    i.outflow = true
                } else {
                    i.poster = e.data.first_image;
                    i.title = e.data.title;
                    i.teaser_url = e.data.teaser_url;
                    i.catatree = e.data.catatree;
                    i.adMatter = e.data.adMatter;
                    i.ratio = e.data.ratio;
                    i.poster = s.proxy(i.poster);
                    i.teaser_url = s.proxy(i.teaser_url);
                    i.adMatter = s.proxy(i.adMatter, "matterurl");
                    if (e.data.seed == 1) {
                        i.src = e.data.hls
                    } else {
                        i.src = s.proxy(e.data.mp4)
                    }
                }
                t(i)
            },
            fail: function(e) {
                i = {
                    error: "视频数据获取失败"
                };
                t(i)
            }
        })
    },
    proxy: function(e, t) {
        var r = this;
        if (e.length == 0) {
            return ""
        }
        if (typeof e == "string") {
            return this.proxyUrl(e)
        } else {
            if (arguments[1]) {
                for (var o = 0, i = e.length; o < i; o++) {
                    for (var s in e[o]) {
                        if (s == t) {
                            e[o][s] = this.proxyUrl(e[o][s])
                        }
                    }
                }
            } else {
                for (var o = 0, i = e.length; o < i; o++) {
                    if (this.isPreviewMode) {
                        var a = this.videoId.substring(0, 32);
                        e[o] = e[o].replace(a, "p_" + a)
                    }
                    if (r.ts && r.sign) {
                        if (e[o].indexOf("?") > -1) {
                            e[o] = e[o] + "&ts=" + r.ts + "&sign=" + r.sign
                        } else {
                            e[o] = e[o] + "?ts=" + r.ts + "&sign=" + r.sign
                        }
                    }
                    e[o] = this.proxyUrl(e[o])
                }
            }
            return e
        }
        return ""
    },
    proxyUrl: function(e) {
        if (e == "") {
            return e
        }
        e = e.replace(/.*?:\/\//g, "");
        return "https://router.polyv.net/proxy/" + e
    }
};

function getVideo(e, t, r, o) {
    polyvVodPlayer.getVideo(e, t, r, o)
}

function getPreviewVideo(e, t, r, o) {
    polyvVodPlayer.getPreviewVideo(e, t, r, o)
}
module.exports = {
    getVideo: getVideo,
    getPreviewVideo: getPreviewVideo
};
