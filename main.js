console.clear();

http.__okhttp__.setTimeout(10000);

let url = [
    'https://hub.fgit.cf/sawdjh010/jianya/blob/main/UI.js',
    'https://gh.ddlc.top/https://github.com/sawdjh010/jianya/blob/main/UI.js',
    'https://cdn.jsdelivr.net/gh/sawdjh010/jianya@main/UI.js',
    'https://ghps.cc/https://raw.githubusercontent.com/sawdjh010/jianya/main/UI.js',
    'https://mirror.ghproxy.com/https://raw.githubusercontent.com/sawdjh010/jianya/main/UI.js',
    'https://521github.com/sawdjh010/jianya/blob/main/UI.js',
    'https://hub.fgit.cf/sawdjh010/jianya/blob/main/UI.js',
    'https://githubfast.com/sawdjh010/jianya/blob/main/UI.js',
    'https://ghps.cc/https://github.com/sawdjh010/jianya/blob/main/UI.js',
    'https://gh.api.99988866.xyz/https://github.com/sawdjh010/jianya/blob/main/UI.js',
    'https://mirror.ghproxy.com/https://github.com/sawdjh010/jianya/blob/main/UI.js',
    'https://gh-proxy.com/https://raw.githubusercontent.com/sawdjh010/jianya/blob/main/UI.js',
    'https://githubfast.com/sawdjh010/jianya/blob/main/UI.js',
    'https://github.com/sawdjh010/jianya/blob/main/UI.js',
    'https://raw.githubusercontent.com/sawdjh010/jianya/blob/main/UI.js',
    //'https://gitee.com/zuguo01/xiangdao/blob/master/UI.js',
    // 'https://gh-proxy.com/https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/UI.js',
    // "https://raw.gh.fakev.cn/sec-an/Better-Auto-XXQG/main/UI.js",
    // 'https://cdn.jsdelivr.net/gh/sec-an/Better-Auto-XXQG@main/UI.js',
    // 'https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/UI.js',
];
//if(files.exists("/sdcard/xxqg/UI.js")) engines.execScriptFile("/sdcard/xxqg/UI.js");
 for (var i = 0; i < url.length; i++) {
    try {
        let res = http.get(url[i]);
        console.log(i + ":" + res.statusCode);
        if (res.statusCode == 200) {
            var UI = res.body.string();
            if (UI.indexOf('"ui";') == 0) break;
        } else {
            toastLog('UI（主控面）脚本:地址' + i + '下载失败');
        }
    } catch (error) {}
   // if(url.length==i) engines.execScriptFile("/sdcard/xxqg/UI.js");
}
try {
    var eng_ines_s = engines.execScript("UI", UI);
log(eng_ines_s);
} catch (error) {
    if(url.length==i) var eng_ines_s = engines.execScriptFile("/sdcard/xxqg/UI.js");
}

