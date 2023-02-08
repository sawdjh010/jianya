"ui";

importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);
importClass(android.graphics.Color);

console.clear();
ui.主题颜色 = "#FFC0CB";
ui.标题 = "学习四合一测试版pro(从疫情中走出，专心于工作)";
ui.副标题 = "让各位从疫情走出来专心于工作";
ui.启动赞助公告 = "1.每次启动先至  'VIP卡密'栏点击'登录/试用'-----'脚本配置'(保存配置)-----再点击'开始学习'按钮;\n2.试用期5天,联系群主(支持)赞助后获得卡密(月/季/年);\n3.感谢您的支持！！！\n'技术人员'每次熬夜+发量减少的修改、调试……，给予点点欣慰！"
ui.公告 = "1.仅供个人测试使用（四合一）pro全新上线;\n2.新增网络验证系统;\n3.不同情况选择设置和对应脚本运行;\n4.此模板仅供'内部测试交流';\n5.试用期过后，请赞助获取卡密(新Q群?：758116397，加群获得最新apk和资料);\n6.root去除截图权限版适合最新版，适用于手机root或虚拟机或模拟器通过模块去除截图限制等;\n7.去除截图权限版适合最新版，支持四人/双人赛(OCR),支持订阅、支持运动步数、支持未作答的每周答题等.";
const PJYSDK = (function(){
    function PJYSDK(app_key, app_secret){
        http.__okhttp__.setMaxRetries(0);
        http.__okhttp__.setTimeout(5*1000);

        this.event = events.emitter();

        this.debug = true;
        this._lib_version = "v1.13";
        this._protocol = "http";
        this._hosts = ["api3.paojiaoyun.com", "api2.paojiaoyun.com", "api.paojiaoyun.com"];
        this._host = this._hosts[0];
        this._device_id = this.getDeviceID();
        this._retry_count = 9;
        this._switch_count = 0;
        
        this._app_key = app_key;
        this._app_secret = app_secret;
        
        this._card = null;
        this._username = null;
        this._password = null;
        this._token = null;
        
        this.is_trial = false;  // 是否是试用用户
        this.login_result = {
            "card_type": "",
            "expires": "",
            "expires_ts": 0,
            "config": "",
        };

        this._auto_heartbeat = true;  // 是否自动开启心跳任务
        this._heartbeat_gap = 120 * 1000; // 默认120秒
        this._heartbeat_task = null;
        this._heartbeat_ret = {"code": -9, "message": "还未开始验证"};

        this._prev_nonce = null;
        this._is_ping = false;
    }
    PJYSDK.prototype.SetBackupHosts = function(hosts) { // 设置备用 api host
        this._hosts.concat(hosts);
    }
    PJYSDK.prototype.switchHost = function() { // 切换备用 api host
        this._switch_count++;
        this._host = this._hosts[this._switch_count%this._hosts.length];
    }
    PJYSDK.prototype.SetCard = function(card) {
        this._card = card.trim();
    }
    PJYSDK.prototype.SetUser = function(username, password) {
        this._username = username.trim();
        this._password = password;
    }
    PJYSDK.prototype.getDeviceID = function() {
        let id = device.serial;
        if (id == null || id == "" || id == "unknown") {
            id = device.getAndroidId();
        }
        if (id == null || id == "" || id == "unknown") {
            id = device.getIMEI();
        }
        return id;
    }
    PJYSDK.prototype.MD5 = function(str) {
        try {
            let digest = java.security.MessageDigest.getInstance("md5");
            let result = digest.digest(new java.lang.String(str).getBytes("UTF-8"));
            let buffer = new java.lang.StringBuffer();
            for (let index = 0; index < result.length; index++) {
                let b = result[index];
                let number = b & 0xff;
                let str = java.lang.Integer.toHexString(number);
                if (str.length == 1) {
                    buffer.append("0");
                }
                buffer.append(str);
            }
            return buffer.toString();
        } catch (error) {
            alert(error);
            return "";
        }
    }
    PJYSDK.prototype.getTimestamp = function() {
        try {
            let res = http.get("http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp");
            let data = res.body.json();
            return Math.floor(data["data"]["t"]/1000)-3;
        } catch (error) {
            try {
                let res = http.get("https://tptm.hd.mi.com/gettimestamp");
                let data = res.body.string();
                return parseInt(data.replace('var servertime=', ''))-3;
            } catch (error) {
                return Math.floor(new Date().getTime()/1000) - 3;
            }
        }
    }
    PJYSDK.prototype._draw_cc_params = function(body) {
        if (!body) return "";
        start = body.indexOf('?');
        if (start < 0) return "";
        end = body.indexOf('";');
        if (end < 0 || end < start) return "";
        return body.substring(start, end);
    }
    PJYSDK.prototype.Ping = function() {
        if (this._is_ping) return;
        try {
            let path = "/v1/ping"
            let url = this._protocol + "://" + this._host + path;
            let resp = http.get(url);
            let body = resp.body.string();
            if (body == "Pong") {
                log("api连接成功")
                this._is_ping = true;
                return
            }
            let params = this._draw_cc_params(body);
            if (params) {
                let resp2 = http.get(url + params);
                if (resp2.body.string() == "Pong") {
                    log("api连接成功")
                    this._is_ping = true;
                }
            } else {    
                this.switchHost();
            }
        } catch (error) {
            this.switchHost();
        }
    }
    PJYSDK.prototype.genNonce = function() {
        const ascii_str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let tmp = '';
        for(let i = 0; i < 20; i++) {
            tmp += ascii_str.charAt(Math.round(Math.random()*ascii_str.length));
        }
        return this.MD5(this.getDeviceID() + this._prev_nonce + new Date().getTime() + tmp);
    }
    PJYSDK.prototype.joinParams = function(params) {
        let ps = [];
        for (let k in params) {
            ps.push(k + "=" + params[k])
        }
        ps.sort()
        return ps.join("&")
    }
    PJYSDK.prototype.CheckRespSign = function(resp) {
        if (resp.code != 0 && resp.nonce === "" && resp.sign === "") {
            return resp
        }

        let ps = "";
        if (resp["result"]) {
            ps = this.joinParams(resp["result"]);
        }

        let s = resp["code"] + resp["message"] + ps + resp["nonce"] + this._app_secret;
        let sign = this.MD5(s);
        if (sign === resp["sign"]) {
            if (this._prev_nonce === null) {
                this._prev_nonce = resp["nonce"];
                return {"code":0, "message":"OK"};
            } else {
                if (resp["nonce"] > this._prev_nonce) {
                    this._prev_nonce = resp["nonce"];
                    return {"code": 0, "message": "OK"};
                } else {
                    return {"code": -98, "message": "CRS:nonce校验失败"};
                }
            }
        }
        return {"code": -99, "message": "CRS:签名校验失败"};
    }
    PJYSDK.prototype.retry_fib = function(num) {
        if (num > 9) {
            return 34
        }
        let a = 0;
        let b = 1;
        for (let i = 0; i < num; i++) {
            let tmp = a + b;
            a = b
            b = tmp
        }
        return a
    }
    PJYSDK.prototype._debug = function(path, params, result) {
        if (this.debug) {
            log("\n" + path, "\nparams:", params, "\nresult:", result);
        }
    }
    PJYSDK.prototype.Request = function(method, path, params) {
        this.Ping();
        // 构建公共参数
        params["app_key"] = this._app_key;

        method = method.toUpperCase();
        let max_retries = this._retry_count;
        let retries_count = 0;

        let data = {"code": -1, "message": "连接服务器失败"};
        do {
            let url = this._protocol + "://" + this._host + path;
            retries_count++;
            let sec = this.retry_fib(retries_count);

            delete params["sign"]
            params["nonce"] = this.genNonce();
            params["timestamp"] = this.getTimestamp();
            let ps = this.joinParams(params);
            let s = method + this._host + path + ps + this._app_secret;
            let sign = this.MD5(s);
            params["sign"] = sign;

            let resp, body;
            try {    
                if (method === "GET") {
                    resp = http.get(url + "?" + ps + "&sign=" + sign);
                } else {  // POST
                    resp = http.post(url, params);
                }
                body = resp.body.string();
                data = JSON.parse(body);
                this._debug(method+'-'+path+':', params, data);
                
                let crs = this.CheckRespSign(data);
                if (crs.code !== 0) {
                    return crs;
                } else {
                    return data;
                }
            } catch (error) {
                if (this.debug) {
                    log("[*] request error: ", error, sec + "s后重试");
                }
                this._debug(method+'-'+path+':', params, body);
                this.switchHost();
                sleep(sec*1000);
            }
        } while (retries_count < max_retries);

        return data;
    }
    /* 通用 */
    PJYSDK.prototype.GetHeartbeatResult = function() {
        return this._heartbeat_ret;
    }
    PJYSDK.prototype.GetTimeRemaining = function() {
        let g = this.login_result.expires_ts - this.getTimestamp();
        if (g < 0) {
            return 0;
        } 
        return g;
    }
    /* 卡密相关 */
    PJYSDK.prototype.CardLogin = function() {  // 卡密登录
        if (!this._card) {
            return {"code": -4, "message": "请先设置卡密"};
        }
        let method = "POST";
        let path = "/v1/card/login";
        let data = {"card": this._card, "device_id": this._device_id};
        let ret = this.Request(method, path, data);
        if (ret.code == 0) {
            this._token = ret.result.token;
            this.login_result = ret.result;
            if (this._auto_heartbeat) {
                this._startCardHeartbeat();
            }
        }
        return ret;
    }
    PJYSDK.prototype.CardHeartbeat = function() {  // 卡密心跳，默认会自动调用
        if (!this._token) {
            return {"code": -2, "message": "请在卡密登录成功后调用"};
        }
        let method = "POST";
        let path = "/v1/card/heartbeat";
        let data = {"card": this._card, "token": this._token};
        let ret = this.Request(method, path, data);
        if (ret.code == 0) {
            this.login_result.expires = ret.result.expires;
            this.login_result.expires_ts = ret.result.expires_ts;
        }
        return ret;
    }
    PJYSDK.prototype._startCardHeartbeat = function() {  // 开启卡密心跳任务
        if (this._heartbeat_task) {
            this._heartbeat_task.interrupt();
            this._heartbeat_task = null;
        }
        this._heartbeat_task = threads.start(function(){
            setInterval(function(){}, 10000);
        });
        this._heartbeat_ret = this.CardHeartbeat();
        
        this._heartbeat_task.setInterval((self) => {
            self._heartbeat_ret = self.CardHeartbeat();
            if (self._heartbeat_ret.code != 0) {
                self.event.emit("heartbeat_failed", self._heartbeat_ret);
            }
        }, this._heartbeat_gap, this);

        this._heartbeat_task.setInterval((self) => {
            if (self.GetTimeRemaining() == 0) {
                self.event.emit("heartbeat_failed", {"code": 10210, "message": "卡密已过期！"});
            }
        }, 1000, this);
    }
    PJYSDK.prototype.CardLogout = function() {  // 卡密退出登录
        this._heartbeat_ret = {"code": -9, "message": "还未开始验证"};
        if (this._heartbeat_task) { // 结束心跳任务
            this._heartbeat_task.interrupt();
            this._heartbeat_task = null;
        }
        if (!this._token) {
            return {"code": 0, "message": "OK"};
        }
        let method = "POST";
        let path = "/v1/card/logout";
        let data = {"card": this._card, "token": this._token};
        let ret = this.Request(method, path, data);
        // 清理
        this._token = null;
        this.login_result = {
            "card_type": "",
            "expires": "",
            "expires_ts": 0,
            "config": "",
        };
        return ret;
    }
    PJYSDK.prototype.CardUnbindDevice = function() { // 卡密解绑设备，需开发者后台配置
        if (!this._token) {
            return {"code": -2, "message": "请在卡密登录成功后调用"};
        }
        let method = "POST";
        let path = "/v1/card/unbind_device";
        let data = {"card": this._card, "device_id": this._device_id, "token": this._token};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.SetCardUnbindPassword = function(password) { // 自定义设置解绑密码
        if (!this._token) {
            return {"code": -2, "message": "请在卡密登录成功后调用"};
        }
        let method = "POST";
        let path = "/v1/card/unbind_password";
        let data = {"card": this._card, "password": password, "token": this._token};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.CardUnbindDeviceByPassword = function(password) { // 用户通过解绑密码解绑设备
        let method = "POST";
        let path = "/v1/card/unbind_device/by_password";
        let data = {"card": this._card, "password": password};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.CardRecharge = function(card, use_card) { // 以卡充卡
        let method = "POST";
        let path = "/v1/card/recharge";
        let data = {"card": card, "use_card": use_card};
        return this.Request(method, path, data);
    }
    /* 用户相关 */
    PJYSDK.prototype.UserRegister = function(username, password, card) {  // 用户注册（通过卡密）
        let method = "POST";
        let path = "/v1/user/register";
        let data = {"username": username, "password": password, "card": card, "device_id": this._device_id};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.UserLogin = function() {  // 用户账号登录
        if (!this._username || !this._password) {
            return {"code": -4, "message": "请先设置用户账号密码"};
        }
        let method = "POST";
        let path = "/v1/user/login";
        let data = {"username": this._username, "password": this._password, "device_id": this._device_id};
        let ret = this.Request(method, path, data);
        if (ret.code == 0) {
            this._token = ret.result.token;
            this.login_result = ret.result;
            if (this._auto_heartbeat) {
                this._startUserHeartbeat();
            }
        }
        return ret;
    }
    PJYSDK.prototype.UserHeartbeat = function() {  // 用户心跳，默认会自动开启
        if (!this._token) {
            return {"code": -2, "message": "请在用户登录成功后调用"};
        }
        let method = "POST";
        let path = "/v1/user/heartbeat";
        let data = {"username": this._username, "token": this._token};
        let ret = this.Request(method, path, data);
        if (ret.code == 0) {
            this.login_result.expires = ret.result.expires;
            this.login_result.expires_ts = ret.result.expires_ts;
        }
        return ret;
    }
    PJYSDK.prototype._startUserHeartbeat = function() {  // 开启用户心跳任务
        if (this._heartbeat_task) {
            this._heartbeat_task.interrupt();
            this._heartbeat_task = null;
        }
        this._heartbeat_task = threads.start(function(){
            setInterval(function(){}, 10000);
        });
        this._heartbeat_ret = this.UserHeartbeat();

        this._heartbeat_task.setInterval((self) => {
            self._heartbeat_ret = self.UserHeartbeat();
            if (self._heartbeat_ret.code != 0) {
                self.event.emit("heartbeat_failed", self._heartbeat_ret);
            }
        }, this._heartbeat_gap, this);

        this._heartbeat_task.setInterval((self) => {
            if (self.GetTimeRemaining() == 0) {
                self.event.emit("heartbeat_failed", {"code": 10250, "message": "用户已到期！"});
            }
        }, 1000, this);
    }
    PJYSDK.prototype.UserLogout = function() {  // 用户退出登录
        this._heartbeat_ret = {"code": -9, "message": "还未开始验证"};
        if (this._heartbeat_task) { // 结束心跳任务
            this._heartbeat_task.interrupt();
            this._heartbeat_task = null;
        }
        if (!this._token) {
            return {"code": 0, "message": "OK"};
        }
        let method = "POST";
        let path = "/v1/user/logout";
        let data = {"username": this._username, "token": this._token};
        let ret = this.Request(method, path, data);
        // 清理
        this._token = null;
        this.login_result = {
            "card_type": "",
            "expires": "",
            "expires_ts": 0,
            "config": "",
        };
        return ret;
    }
    PJYSDK.prototype.UserChangePassword = function(username, password, new_password) {  // 用户修改密码
        let method = "POST";
        let path = "/v1/user/password";
        let data = {"username": username, "password": password, "new_password": new_password};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.UserRecharge = function(username, card) { // 用户通过卡密充值
        let method = "POST";
        let path = "/v1/user/recharge";
        let data = {"username": username, "card": card};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.UserUnbindDevice = function() { // 用户解绑设备，需开发者后台配置
        if (!this._token) {
            return {"code": -2, "message": "请在用户登录成功后调用"};
        }
        let method = "POST";
        let path = "/v1/user/unbind_device";
        let data = {"username": this._username, "device_id": this._device_id, "token": this._token};
        return this.Request(method, path, data);
    }
    /* 配置相关 */
    PJYSDK.prototype.GetCardConfig = function() { // 获取卡密配置
        let method = "GET";
        let path = "/v1/card/config";
        let data = {"card": this._card};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.UpdateCardConfig = function(config) { // 更新卡密配置
        let method = "POST";
        let path = "/v1/card/config";
        let data = {"card": this._card, "config": config};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.GetUserConfig = function() { // 获取用户配置
        let method = "GET";
        let path = "/v1/user/config";
        let data = {"user": this._username};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.UpdateUserConfig = function(config) { // 更新用户配置
        let method = "POST";
        let path = "/v1/user/config";
        let data = {"username": this._username, "config": config};
        return this.Request(method, path, data);
    }
    /* 软件相关 */
    PJYSDK.prototype.GetSoftwareConfig = function() { // 获取软件配置
        let method = "GET";
        let path = "/v1/software/config";
        return this.Request(method, path, {});
    }
    PJYSDK.prototype.GetSoftwareNotice = function() { // 获取软件通知
        let method = "GET";
        let path = "/v1/software/notice";
        return this.Request(method, path, {});
    }
    PJYSDK.prototype.GetSoftwareLatestVersion = function(current_ver) { // 获取软件最新版本
        let method = "GET";
        let path = "/v1/software/latest_ver";
        let data = {"version": current_ver};
        return this.Request(method, path, data);
    }
    /* 试用功能 */
    PJYSDK.prototype.TrialLogin = function() {  // 试用登录
        let method = "POST";
        let path = "/v1/trial/login";
        let data = {"device_id": this._device_id};
        let ret = this.Request(method, path, data);
        if (ret.code == 0) {
            this.is_trial = true;
            this.login_result = ret.result;
            if (this._auto_heartbeat) {
                this._startTrialHeartbeat();
            }
        }
        return ret;
    }
    PJYSDK.prototype.TrialHeartbeat = function() {  // 试用心跳，默认会自动调用
        let method = "POST";
        let path = "/v1/trial/heartbeat";
        let data = {"device_id": this._device_id};
        let ret = this.Request(method, path, data);
        if (ret.code == 0) {
            this.login_result.expires = ret.result.expires;
            this.login_result.expires_ts = ret.result.expires_ts;
        }
        return ret;
    }
    PJYSDK.prototype._startTrialHeartbeat = function() {  // 开启试用心跳任务
        if (this._heartbeat_task) {
            this._heartbeat_task.interrupt();
            this._heartbeat_task = null;
        }
        this._heartbeat_task = threads.start(function(){
            setInterval(function(){}, 10000);
        });
        this._heartbeat_ret = this.TrialHeartbeat();

        this._heartbeat_task.setInterval((self) => {
            self._heartbeat_ret = self.TrialHeartbeat();
            if (self._heartbeat_ret.code != 0) {
                self.event.emit("heartbeat_failed", self._heartbeat_ret);
              //  vip = 1;
            }
        }, this._heartbeat_gap, this);

        this._heartbeat_task.setInterval((self) => {
            if (self.GetTimeRemaining() == 0) {
                self.event.emit("heartbeat_failed", {"code": 10407, "message": "试用已到期！"});
            }else vip = 1;
        }, 1000, this);
    }
    PJYSDK.prototype.TrialLogout = function() {  // 试用退出登录，没有http请求，只是清理本地记录
        this.is_trial = false;
        this._heartbeat_ret = {"code": -9, "message": "还未开始验证"};
        if (this._heartbeat_task) { // 结束心跳任务
            this._heartbeat_task.interrupt();
            this._heartbeat_task = null;
        }
        // 清理
        this._token = null;
        this.login_result = {
            "card_type": "",
            "expires": "",
            "expires_ts": 0,
            "config": "",
        };
        return {"code": 0, "message": "OK"};
    }
    /* 高级功能 */
    PJYSDK.prototype.GetRemoteVar = function(key) { // 获取远程变量
        let method = "GET";
        let path = "/v1/af/remote_var";
        let data = {"key": key};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.GetRemoteData = function(key) { // 获取远程数据
        let method = "GET";
        let path = "/v1/af/remote_data";
        let data = {"key": key};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.CreateRemoteData = function(key, value) { // 创建远程数据
        let method = "POST";
        let path = "/v1/af/remote_data";
        let data = {"action": "create", "key": key, "value": value};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.UpdateRemoteData = function(key, value) { // 修改远程数据
        let method = "POST";
        let path = "/v1/af/remote_data";
        let data = {"action": "update", "key": key, "value": value};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.DeleteRemoteData = function(key) { // 删除远程数据
        let method = "POST";
        let path = "/v1/af/remote_data";
        let data = {"action": "delete", "key": key};
        return this.Request(method, path, data);
    }
    PJYSDK.prototype.CallRemoteFunc = function(func_name, params) { // 执行远程函数
        let method = "POST";
        let path = "/v1/af/call_remote_func";
        let ps = JSON.stringify(params);
        let data = {"func_name": func_name, "params": ps};
        let ret = this.Request(method, path, data);
        if (ret.code == 0 && ret.result.return) {
            ret.result = JSON.parse(ret.result.return);
        }
        return ret;
    }
    return PJYSDK;
})();

/* 将PJYSDK.js文件中的代码复制粘贴到上面 */

// AppKey 和 AppSecret 在泡椒云开发者后台获取
let pjysdk = new PJYSDK("cfh8he3dqusul232gs60", "vPlS2036kID2IkVDqzFPGiojS6p7WeTD");
pjysdk.debug = true;

var vip = 0;//VIP权限自由开关
var color = "#FF4FB3FF";

ui.statusBarColor("#FF4FB3FF")

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" bg="#ff4fb3ff" title="学习减压四合一PRO"/>
                <tabs id="tabs" bg="#ff4fb3ff"/>
            </appbar>
            <viewpager id="viewpager">
            <ScrollView>
                <frame>
                    <vertical>
                        <vertical gravity="center" layout_weight="1">
                            <card w="*" h="70" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="脚本选择" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="共4脚本可按需选择" textColor="#999999" textSize="14sp" maxLines="1" />
                                        <text text="切换脚本后需在配置页设置" textColor="#999999" textSize="14sp" maxLines="1" />
                                    </vertical>
                                    <spinner id="script_chosen" marginLeft="4" marginRight="6" entries="(QG最新版)需root、虚拟机等去截图权限版|天天向上Pro|天天向上|Study改" />
                                </horizontal>
                            </card>
                            <card w="*" h="60" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="无障碍服务" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#999999" textSize="12sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="autoService" marginLeft="4" marginRight="6" checked="{{auto.service != null}}" />
                                </horizontal>
                            </card>
                            <card w="*" h="60" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="悬浮窗权限" textColor="#222222" textSize="16sp" maxLines="1" />
                                        <text text="请确保开启" textColor="#999999" textSize="12sp" maxLines="1" />
                                    </vertical>
                                    <checkbox id="consoleshow" marginLeft="4" marginRight="6" checked="{{floaty.checkPermission()}}" />
                                </horizontal>
                            </card>
                            <card w="*" h="40" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" foreground="?selectableItemBackground">
                                <horizontal gravity="center_vertical">
                                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                        <text text="音量上键可以停止所有脚本运行" textColor="#222222" textSize="16sp" maxLines="1" />
                                    </vertical>
                                </horizontal>
                            </card>
                        </vertical>
                        <vertical>
                           <horizontal>
                             <vertical>
                                {/* 脚本公告配置区域 */}
                             <vertical>
                                <text gravity='center' text='公告' w='*' h='auto' textSize='18sp' textColor='#ffffff' padding='10dp' bg='{{ui.主题颜色}}'></text>
                                <text padding='10dp' text='{{ui.启动赞助公告}}'></text>
                             </vertical>
                           </vertical>
                         </horizontal>
                       </vertical>
                        <button h="60" layout_gravity="center" id="log" textSize="18sp" text="查看日志" />
                        <button h="60" layout_gravity="center" id="update" textSize="18sp" />
                        <button id="start" text="开 始 学 习" textSize="25sp" color="#ffffff" bg="#FF4FB3FF" foreground="?selectableItemBackground"/>
                    </vertical>
                </frame>
                </ScrollView>
                <ScrollView>
                    <frame>
                        <vertical id="ttxs_pro" gravity="center">
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="看门狗(秒)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="填1800就是超过30分钟重试" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="空着或0默认5400秒，超过即重新执行" />
                                </vertical> 
                                <input id="ttxs_pro_watchdog" marginLeft="4" marginRight="6" text="1800"  hint="秒"  textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="滑动验证的滑动时间(ms)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="空着或0不开启自动滑动验证，滑动分3段" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="中间会折返一下，总时间是填的数值*3" />
                                </vertical> 
                                <input id="ttxs_pro_slide_verify" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="无障碍模式2" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="无障碍服务没问题就不勾选" />
                                </vertical>
                                <checkbox id="ttxs_pro_fast_mode" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="点点通功能" />
                                </vertical>
                                <checkbox id="ttxs_pro_ddtong" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="开始前强制结束强国" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="如果关闭，请确保强国已退出或在首页" />
                                </vertical>
                                <checkbox id="ttxs_pro_is_exit" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="评论" />
                                </vertical>
                                <checkbox id="ttxs_pro_pinglun" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="视听学习次数" />
                                </vertical>
                                <checkbox id="ttxs_pro_shipin" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="文章次数与时长" />
                                </vertical>
                                <checkbox id="ttxs_pro_wenzhang" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每日答题" />
                                </vertical>
                                <checkbox id="ttxs_pro_meiri" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每周答题(新版已弃，若已做完选不做)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="若有每周题目未做，可选" />
                                    <spinner id="ttxs_pro_meizhou" marginLeft="4" marginRight="6" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="专项答题" />
                                    <spinner id="ttxs_pro_zhuanxiang" marginLeft="4" marginRight="6" entries="最近一次已作答开始倒序|正序答题|不做" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="挑战答题" />
                                </vertical>
                                <checkbox id="ttxs_pro_tiaozhan" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="OCR选择" />
                                    <spinner id="ttxs_pro_ocr_choice" marginLeft="4" marginRight="6" entries="GoogleMLKit|PaddleOCR|第三方插件" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="ocr识别跳过阈值(ms)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="空着或0默认5000，超过此时间会跳过多人对战" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="建议按照平时正常的ocr识别时间设置" />
                                </vertical> 
                                <input id="ttxs_pro_ocr_maxtime" marginLeft="4" marginRight="6" text="5000" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="对战选项模式" />
                                    <spinner id="ttxs_pro_duizhan_mode" marginLeft="4" marginRight="6" entries="随机顺序(等选项显示后识别答案)|固定顺序(历史遗留选项)|手动答题(识别答案后等待用户手动点击)" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="对战极速模式延迟(历史遗留选项)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="只在选项固定顺序时生效" />
                                </vertical> 
                                <input id="ttxs_pro_jisu" marginLeft="4" marginRight="6" text="0" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="是否挂机跳过四人赛首局" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="首局匹配对手较强，挂机不会扣积分局数" />
                                </vertical>
                                <checkbox id="ttxs_pro_guaji" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="四人赛" />
                                </vertical>
                                <checkbox id="ttxs_pro_siren" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="平衡胜率(答错)次数" />
                                </vertical> 
                                <input id="ttxs_pro_dacuo_num" marginLeft="4" marginRight="6" text="2" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="双人对战" />
                                </vertical>
                                <checkbox id="ttxs_pro_shuangren" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="本地" />
                                </vertical>
                                <checkbox id="ttxs_pro_bendi" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="运动" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="没问题者不用选，仅为不点击查看不计运动步数而设，首次需要手动查看" />
                                </vertical>
                                <checkbox id="ttxs_pro_yundong" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="订阅" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="若已root或虚拟机等去除截图限制的参照()内容选择，QG旧版的忽略()内容" />
                                    <spinner id="ttxs_pro_dingyue" marginLeft="4" marginRight="6" entries="不做|正序订阅(若已去限制--表示遍历搜索‘强国号’，较费时)|只订阅年度上新(若已去限制--表示只看‘上新或2023年上线’)" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="pushplus_token(微信推送)开关" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="选推送，需要勾选并填写下方token" />
                                </vertical>
                                <checkbox id="ttxs_pro_kaiguan" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="pushplus_token(微信推送)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="微信关注pushplus推送加，复制token填入" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="注意！搜索结果有两个，一定要关注正确" />
                                    <input id="ttxs_pro_pushplus" text="" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="是否启用音量调节" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="每次运行脚本后调节音量百分比" />
                                </vertical>
                                <checkbox id="ttxs_pro_yl_on" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="音量" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="调节音量百分比(只填数字)" />
                                </vertical> 
                                <input id="ttxs_pro_yinliang" marginLeft="4" marginRight="6" text="0" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="多账号(仅支持VIP卡密用户。选填，不限个数)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="使用前确保所有账号都已完成短信验证" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="账号1:密码1:token1(换行/回车)账号2:密码2:token2(换行/回车)账号3:密码3:token3" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="结束后会自动登录回账号1" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="新增多账号1对1微信推送，按格式配置即可" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="没有则根据上面配置的pushplus_token为主" />
                                    <text w="auto" textColor="#999999" textSize="10sp" text="(开多账号，建议尽量关闭qg软件的所有权限，尽量减少上传手机信息)" />
                                    <input id="ttxs_pro_zhanghao" text="" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="ttxs_pro_save" text="保存配置" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="ttxs_pro_reset" text="恢复默认" padding="12dp" w="*" />
                            </horizontal>
                        </vertical>
                        <vertical id="ttxs" gravity="center">
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="测试" />
                                </vertical>
                                <checkbox id="test_article1" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                        </vertical>
                        <vertical id="study" gravity="center">
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="文章学习和广播收听" />
                                </vertical>
                                <checkbox id="study_article" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="视频学习" />
                                    <spinner id="study_video" marginLeft="4" marginRight="6" entries="新百灵视频学习|看电视视频学习|百灵视频学习|不进行学习" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每日答题" />
                                </vertical> 
                                <checkbox id="study_meiri" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="挑战答题" />
                                </vertical> 
                                <checkbox id="study_tiaozhan" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="专项答题" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="建议手动答题，否则不保证全对" />
                                </vertical> 
                                <checkbox id="study_checkbox_01" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每周答题(新版已弃，新版选不做)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="建议手动答题，否则不保证全对" />
                                </vertical> 
                                <checkbox id="study_checkbox_02" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="滑块验证延迟" />
                                </vertical> 
                                <input id="study_huakuaidelay" marginLeft="4" marginRight="6" text="300" textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="四人赛" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="可在答题页选择OCR配置，默认本地OCR" />
                                </vertical> 
                                <checkbox id="study_checkbox_03" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="双人对抗" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="可在答题页选择OCR配置，默认本地OCR" />
                                </vertical> 
                                <checkbox id="study_shuangren" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="专项答题模式选择" /> 
                                    <spinner id="study_select" marginLeft="4" marginRight="6" entries="不向下滑动，只答当天的题目,没有则返回|向下滑动，直到找到可答题的题目" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每周答题模式选择(新版已弃，新版选不做)" />
                                    <spinner id="study_selectm" marginLeft="4" marginRight="6" entries="不向下滑动，只答当天的题目,没有则返回|向下滑动，直到找到可答题的题目" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="四人赛模式选择" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="注：一般手机本地识别速度大于云端，部分手机内置ocr识别较慢，请自行测试" />
                                    <spinner id="study_select_01" marginLeft="4" marginRight="6" entries="内置PaddleOCR->推荐|百度OCR接口,在OCR页配置" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="四人/双人不受积分限制开关" />
                                </vertical> 
                                <checkbox id="study_xianzhi" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="四人/双人额外的随机答题次数(乱答)" />
                                </vertical> 
                                <input id="study_another" marginLeft="4" marginRight="6" text="1"  hint="乱答次数"  textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每日、(每周)、专项答题增强模式" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="使用在线OCR识别答案" />
                                    <spinner id="study_stronger" marginLeft="4" marginRight="6" entries="关闭|使用百度OCR识别答案" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="百度OCR的API Key" />
                                    <input id="study_AK" text=""  gravity="center" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="百度OCR的Secret Key" />
                                    <input id="study_SK" text=""  gravity="center" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="study_baidusave" text="保存并检查" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="study_baidureset" text="清空" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="study_baiduregister" text="注册百度智能云" padding="12dp" w="*" />
                            </horizontal><horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="订阅" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="仅支持学习强国2.33.0及以下版本" />
                                    <spinner id="study_ssub" marginLeft="4" marginRight="6" entries="关闭|翻遍全部，直到订阅完成|只查看上新" />
                                </vertical> 
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="点点通刷满" />
                                </vertical> 
                                <checkbox id="study_diandian" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="看门狗(秒)" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="脚本运行的最长时间,超时/错误自动重启脚本" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="防止出现不可控错误,一般重启脚本即可解决" />
                                </vertical> 
                                <input id="study_alltime" marginLeft="4" marginRight="6" text="2000"  hint="秒"  textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每篇文章学习时间" />
                                </vertical> 
                                <input id="study_time1" marginLeft="4" marginRight="6" text="61"  hint="秒"  textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="每个视频学习时间" />
                                </vertical> 
                                <input id="study_time2" marginLeft="4" marginRight="6" text="6"  hint="秒"  textSize="13sp"  inputType="number" />
                            </horizontal>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="15sp" text="push+ 消息推送" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="注：有需要的自行填写push+的Token，否则留空即可" />
                                    <input id="study_Token" text="" textSize="13sp" />
                                </vertical> 
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="study_save" text="保存配置" padding="12dp" w="*" />
                            </horizontal>
                            <horizontal>
                                <button style="Widget.AppCompat.Button.Colored" id="study_reset" text="恢复默认" padding="12dp" w="*" />
                            </horizontal>
                        </vertical>
                    </frame>
                </ScrollView>
                  <frame>
                     <vertical>
                               <text gravity='center' text='用户' w='*' h='auto' textSize='18sp' textColor='#ffffff' padding='10dp' bg='#00BFFF'></text>
                      <vertical padding='8dp'>
                            <horizontal  gravity="center_vertical" padding="5 5" >
                               <vertical padding="5 5" h="auto" w="0" layout_weight="1">
                               <text text='到期时间：'></text>
                               <text id='endTime'></text>
                               </vertical> 
                               <vertical padding="5 5" h="auto" w="0" layout_weight="1">
                               <text text='剩余时长：'></text>
                               <text id='Remaining_time'  w='120'></text>
                               </vertical>
                          </horizontal>
                          <horizontal>
                              <text text='设置卡密：'></text>
                              <input id='bh_kami' w='*'></input>
                           </horizontal>
                           <horizontal>
                               <button id='cun_bh_kami' text='保存卡密' h='40' color="#ffffff" bg="#FF4FB3FF" layout_weight='1'></button>
                               <button id='获取剩余时长' text='剩余时长' layout_weight='1'></button>
                               <button id='reset_bh_kami' text='重置卡密' layout_weight='1'></button>
                           </horizontal>
                           <horizontal> 
                               <button id='denglu' text='登录/试用' textSize='18sp' textColor='#ffffff' bg="#FF4FB3FF" layout_weight='1'></button>   
                           </horizontal>
                       </vertical>        
                           <horizontal>
                             <vertical>
                                {/* 脚本公告配置区域 */}
                             <vertical>
                                <text gravity='center' text='公告' w='*' h='auto' textSize='25sp' textColor='#ffffff' padding='10dp' bg='{{ui.主题颜色}}'></text>
                                <text padding='10dp' text='{{ui.公告}}'></text>
                             </vertical>
                         </vertical>
                        </horizontal>                
               </vertical>
              </frame>, "setTing"        
            </viewpager>
        </vertical>
    </drawer>
);

ui.update.visibility = 8;

http.__okhttp__.setTimeout(10000);
var BH_KAMI_CONFIG = storages.create("BH_KAMI_CONFIG");

var GLOBAL_CONFIG = storages.create("GLOBAL_CONFIG");
var TTXS_PRO_CONFIG = storages.create("TTXS_PRO_CONFIG");
var STUDY_CONFIG = storages.create("STUDY_CONFIG");
var BAIDUAPI = storages.create("BAIDUAPI");
var execution = "";
var thread = null;
Initialize();

// 版本更新检查
var apkurl = "https://wwsc.lanzouo.com/imSwd0mvp0ze";
var latest_version = "2.2.0";
if (GLOBAL_CONFIG.get("NO_UPDATE", 0) && (app.versionName != latest_version)) {
    ui.update.visibility = 0;
    ui.update.setText("点击更新至最新版v" + latest_version);
} else if (app.versionName != latest_version) {
    checkversion();
}
// 监听心跳失败事件
pjysdk.event.on("heartbeat_failed", function(hret) {
    toastLog(hret.message);
    if (hret.code === 10214) {
        sleep(200);
        exit();  // 退出脚本
        return
    }
    log("心跳失败，尝试重登...")
    sleep(2000);
    let login_ret = pjysdk.CardLogin();
    if (login_ret.code == 0) {
        log("重登成功");
         vip = 2;
    } else {
        toastLog(login_ret.message);  // 重登失败
        sleep(200);
        exit();  // 退出脚本
    }
});

// 当脚本正常或者异常退出时会触发exit事件
events.on("exit", function(){
    pjysdk.CardLogout(); // 调用退出登录
    log("结束运行");
});



//创建按键的点击事件
ui.denglu.click(function() {
    threads.start(function(){
        pjysdk.SetCard(ui.bh_kami.getText().toString());
        let login_ret = pjysdk.CardLogin();
        if (login_ret.code == 0) {
            // 登录成功，后面写你的业务代码
            // console.show();
            console.log('欢迎你使用本脚本');
            toast('欢迎你使用本脚本');
             vip = 2;
        
        } else {
            // 登录失败提示
            toast(login_ret.message);
        }
    });
});
//创建按键的点击事件--保存卡密
ui.cun_bh_kami.on('click', () => {
    let kami = ui.bh_kami.text();
    if (kami != "" && kami != null) {
        BH_KAMI_CONFIG.put("bh_kami", ui.bh_kami.getText() + "");
        toast('卡密保存成功');
     } else  toast('请正确输入卡密或联系群主');
    //ui.storage.put("bh_kami", ui.bh_kami.text());
 });
      //重置卡密
 ui.reset_bh_kami.on('click', () => {
    let kami = ui.bh_kami.text();
    if (kami != "" && kami != null) { 
        BH_KAMI_CONFIG.put("bh_kami", "");
        ui.bh_kami.setText(BH_KAMI_CONFIG.get("bh_kami"));
        toast('卡密重置成功');
      }else  toast('卡密为空不需重置');
    //ui.storage.put("bh_kami", ui.bh_kami.text());
 });
//创建按键的点击事件
ui.denglu.on('click', () => {
    // ui.storage.put("bh_kami", ui.bh_kami.text());
     threads.start(ui.pjyLoginFun);
 });
ui.获取剩余时长.click(function(){
    console.log('当前卡密使用剩余时长:' + pjysdk.GetTimeRemaining() + '秒');
    if(pjysdk.GetTimeRemaining() > 100 )  vip = 2;
    toast('当前卡密使用剩余时长:' + pjysdk.GetTimeRemaining() + '秒');
    ui.Remaining_time.setText(pjysdk.GetTimeRemaining() + '秒');
})
ui.pjyLoginFun = function () {
    //登陆线程
    ui.run(() => {
        ui.endTime.setText("登陆中...");
       // ui.Remaining_time.setText("登陆中...");
    });
    let kami = ui.bh_kami.text();
    if (kami != "" && kami != null) {
        console.info("读取到了卡密:%s", kami);
        //开始判断卡密是否过期
        pjysdk.SetCard(kami);
        pjyUser = pjysdk.CardLogin();
    } else {
        console.info("未读取到卡密，开始试用登陆");
        pjyUser = pjysdk.TrialLogin();
    }
    ui.run(function(){
        if (pjyUser.code == 0) {
            ui.endTime.setText(pjyUser.result.expires);

        } else {
            ui.endTime.setText(pjyUser.message);

        }
    });
}



// 创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("日志");
    menu.add("关于");
    menu.add("最新版下载(密码:ex28)");
    menu.add("V2.33.0下载");
});

// 监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "日志":
            app.startActivity("console");
            break;
        case "关于":
            alert("关于", "学习减压4+1Pro_v" + latest_version + "\n  新Q群：758116397");
            break;
            case "最新版下载(密码:ex28)":
                app.openUrl("https://wwsc.lanzouo.com/imSwd0mvp0ze");
                break;
        case "QGV2.33.0下载":
            app.openUrl("https://android-apps.pp.cn/fs08/2021/12/28/3/110_f37c420b0944cb7b9f60a2ad9b5518d2.apk?yingid=web_space&packageid=500730793&md5=664bb7bdcae57be189fc86100f4371c4&minSDK=21&size=191654161&shortMd5=1fee0bd160d08108a9d9e5f4773ce741&crc32=3879122865&did=ad484a175e19d0928044435e24bf03cb");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

// 设置滑动页面的标题
ui.viewpager.setTitles(["首页", "脚本配置",'VIP卡密']);
// 让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);

// 脚本选择监听
var script_chosen_Listener = new android.widget.AdapterView.OnItemSelectedListener({
    onItemSelected: function (parent, view, position, id) {
        toastLog('选择脚本：\n' + ui.script_chosen.getSelectedItem());
        if (ui.script_chosen.getSelectedItemPosition() == 0) {
            ui.ttxs.visibility = 8;
            ui.study.visibility = 8;
            ui.ttxs_pro.visibility = 0;
           
        }
        else if (ui.script_chosen.getSelectedItemPosition() == 1) {
            ui.ttxs.visibility = 8;
            ui.study.visibility = 8;
            ui.ttxs_pro.visibility = 0;
           
        }
        else if (ui.script_chosen.getSelectedItemPosition() == 2) {
            ui.ttxs_pro.visibility = 8;
            ui.study.visibility = 8;
            ui.ttxs.visibility = 0; 
        }
        else if (ui.script_chosen.getSelectedItemPosition() == 3) {
            ui.ttxs_pro.visibility = 8;
            ui.ttxs.visibility = 8;
            ui.study.visibility = 0;
        }
        GLOBAL_CONFIG.put("script_chosen", ui.script_chosen.getSelectedItemPosition());
    }
})
ui.script_chosen.setOnItemSelectedListener(script_chosen_Listener);

// 用户勾选无障碍服务的选项时，跳转到页面让用户去开启 
// android.permission.SYSTEM_ALERT_WINDOW
ui.autoService.on("check", function (checked) {
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 悬浮窗权限
ui.consoleshow.on("check", function (checked) {
    if (checked && !floaty.checkPermission()) {
        app.startActivity({
            packageName: "com.android.settings",
            className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
            data: "package:" + context.getPackageName(),
        });
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
    ui.consoleshow.checked = floaty.checkPermission();
});

// 打开日志
ui.log.click(function () {
    app.startActivity("console");
});

// APP更新检测
ui.update.click(function () {
    if (app.versionName != latest_version) {
        GLOBAL_CONFIG.put("NO_UPDATE", 0);
        checkversion();
    } else {
        toast("当前已经是最新版本！");
    }
});

// 下载并运行所选脚本
ui.start.click(function () {
    threads.shutDownAll();
    if (thread != null && thread.isAlive()) {
        alert("注意", "脚本正在运行，请结束之前进程");
        return;
    }
    threads.start(function () {
        //let url = 'https://gh-proxy.com/https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/' + ui.script_chosen.getSelectedItemPosition() + '.js';
        let url = 'https://ghproxy.com/https://github.com/sawdjh010/jianya/blob/main/'+ui.script_chosen.getSelectedItemPosition()+'.js';
        if (vip == 1|| vip == 2)
        {execution = engines.execScript("学习减压4合1pro", http.get(url).body.string());
       if(vip == 1) toast('试用期5天后需要你的赞助') 
       if(vip == 2) toast('感谢您的赞助与支持，欢迎正式登录使用') 
        }
        else {toast('请检查是否卡密已过（试用）期或者未输入卡密登录激活') 
            }
    });
});

// // 保存卡密设置
// ui.cun_bh_kami.click(function () {
//     TTXS_PRO_CONFIG.put("cun_bh", ui.bh_kami.getText() + "");
// });
// 保存学习减压四合一pro脚本设置
ui.ttxs_pro_save.click(function () {
    TTXS_PRO_CONFIG.put("watchdog", ui.ttxs_pro_watchdog.getText() + "");
    TTXS_PRO_CONFIG.put("slide_verify", ui.ttxs_pro_slide_verify.getText() + "");
    TTXS_PRO_CONFIG.put("fast_mode", ui.ttxs_pro_fast_mode.isChecked());
    TTXS_PRO_CONFIG.put("ddtong", ui.ttxs_pro_ddtong.isChecked());
    TTXS_PRO_CONFIG.put("weixin_kaiguan", ui.ttxs_pro_kaiguan.isChecked());
    TTXS_PRO_CONFIG.put("is_exit", ui.ttxs_pro_is_exit.isChecked());
    TTXS_PRO_CONFIG.put("pinglun", ui.ttxs_pro_pinglun.isChecked());
    TTXS_PRO_CONFIG.put("shipin", ui.ttxs_pro_shipin.isChecked());
    TTXS_PRO_CONFIG.put("wenzhang", ui.ttxs_pro_wenzhang.isChecked());
    TTXS_PRO_CONFIG.put("meiri", ui.ttxs_pro_meiri.isChecked());
    TTXS_PRO_CONFIG.put("meizhou", ui.ttxs_pro_meizhou.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("zhuanxiang", ui.ttxs_pro_zhuanxiang.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("tiaozhan", ui.ttxs_pro_tiaozhan.isChecked());
    TTXS_PRO_CONFIG.put("ocr_choice", ui.ttxs_pro_ocr_choice.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("ocr_maxtime", ui.ttxs_pro_ocr_maxtime.getText() + "");
    TTXS_PRO_CONFIG.put("duizhan_mode", ui.ttxs_pro_duizhan_mode.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("jisu", ui.ttxs_pro_jisu.getText() + "");
    TTXS_PRO_CONFIG.put("guaji", ui.ttxs_pro_guaji.isChecked());
    TTXS_PRO_CONFIG.put("siren", ui.ttxs_pro_siren.isChecked());
    TTXS_PRO_CONFIG.put("dacuo_num", ui.ttxs_pro_dacuo_num.getText() + "");
    TTXS_PRO_CONFIG.put("shuangren", ui.ttxs_pro_shuangren.isChecked());
    TTXS_PRO_CONFIG.put("bendi", ui.ttxs_pro_bendi.isChecked());
    TTXS_PRO_CONFIG.put("yundong", ui.ttxs_pro_yundong.isChecked());
    TTXS_PRO_CONFIG.put("dingyue", ui.ttxs_pro_dingyue.getSelectedItemPosition());
    TTXS_PRO_CONFIG.put("pushplus", ui.ttxs_pro_pushplus.getText() + "");
    TTXS_PRO_CONFIG.put("yl_on", ui.ttxs_pro_yl_on.isChecked());
    TTXS_PRO_CONFIG.put("yinliang", ui.ttxs_pro_yinliang.getText() + "");
    TTXS_PRO_CONFIG.put("zhanghao", ui.ttxs_pro_zhanghao.getText() + "");

    toastLog("学习减压四合一pro配置保存成功！");
});

// 重置学习减压四合一pro脚本设置
ui.ttxs_pro_reset.click(function () {
    TTXS_PRO_CONFIG.put("watchdog", "1800");
    ui.ttxs_pro_watchdog.setText(TTXS_PRO_CONFIG.get("watchdog"));
    TTXS_PRO_CONFIG.put("slide_verify", "300");
    ui.ttxs_pro_slide_verify.setText(TTXS_PRO_CONFIG.get("slide_verify"));
    TTXS_PRO_CONFIG.put("fast_mode", false);
    ui.ttxs_pro_fast_mode.setChecked(TTXS_PRO_CONFIG.get("fast_mode"));
    TTXS_PRO_CONFIG.put("ddtong", false);
    ui.ttxs_pro_ddtong.setChecked(TTXS_PRO_CONFIG.get("ddtong"));
    TTXS_PRO_CONFIG.put("weixin_kaiguan", true);
    ui.ttxs_pro_kaiguan.setChecked(TTXS_PRO_CONFIG.get("weixin_kaiguan"));
    TTXS_PRO_CONFIG.put("is_exit", true);
    ui.ttxs_pro_is_exit.setChecked(TTXS_PRO_CONFIG.get("is_exit"));
    TTXS_PRO_CONFIG.put("pinglun", true);
    ui.ttxs_pro_pinglun.setChecked(TTXS_PRO_CONFIG.get("pinglun"));
    TTXS_PRO_CONFIG.put("shipin", true);
    ui.ttxs_pro_shipin.setChecked(TTXS_PRO_CONFIG.get("shipin"));
    TTXS_PRO_CONFIG.put("wenzhang", true);
    ui.ttxs_pro_wenzhang.setChecked(TTXS_PRO_CONFIG.get("wenzhang"));
    TTXS_PRO_CONFIG.put("meiri", true);
    ui.ttxs_pro_meiri.setChecked(TTXS_PRO_CONFIG.get("meiri"));
    TTXS_PRO_CONFIG.put("meizhou", 0);
    ui.ttxs_pro_meizhou.setSelection(TTXS_PRO_CONFIG.get("meizhou"));
    TTXS_PRO_CONFIG.put("zhuanxiang", 0);
    ui.ttxs_pro_zhuanxiang.setSelection(TTXS_PRO_CONFIG.get("zhuanxiang"));
    TTXS_PRO_CONFIG.put("tiaozhan", true);
    ui.ttxs_pro_tiaozhan.setChecked(TTXS_PRO_CONFIG.get("tiaozhan"));
    TTXS_PRO_CONFIG.put("ocr_choice", 0);
    ui.ttxs_pro_ocr_choice.setSelection(TTXS_PRO_CONFIG.get("ocr_choice"));
    TTXS_PRO_CONFIG.put("ocr_maxtime", "5000");
    ui.ttxs_pro_ocr_maxtime.setText(TTXS_PRO_CONFIG.get("ocr_maxtime"));
    TTXS_PRO_CONFIG.put("duizhan_mode", 0);
    ui.ttxs_pro_duizhan_mode.setSelection(TTXS_PRO_CONFIG.get("duizhan_mode"));
    TTXS_PRO_CONFIG.put("jisu", "0");
    ui.ttxs_pro_jisu.setText(TTXS_PRO_CONFIG.get("jisu"));
    TTXS_PRO_CONFIG.put("guaji", true);
    ui.ttxs_pro_guaji.setChecked(TTXS_PRO_CONFIG.get("guaji"));
    TTXS_PRO_CONFIG.put("siren", true);
    ui.ttxs_pro_siren.setChecked(TTXS_PRO_CONFIG.get("siren"));
    TTXS_PRO_CONFIG.put("dacuo_num", "2");
    ui.ttxs_pro_dacuo_num.setText(TTXS_PRO_CONFIG.get("dacuo_num"));
    TTXS_PRO_CONFIG.put("shuangren", true);
    ui.ttxs_pro_shuangren.setChecked(TTXS_PRO_CONFIG.get("shuangren"));
    TTXS_PRO_CONFIG.put("bendi", true);
    ui.ttxs_pro_bendi.setChecked(TTXS_PRO_CONFIG.get("bendi"));
    TTXS_PRO_CONFIG.put("yundong", true);
    ui.ttxs_pro_yundong.setChecked(TTXS_PRO_CONFIG.get("yundong"));
    TTXS_PRO_CONFIG.put("dingyue", 0);
    ui.ttxs_pro_dingyue.setSelection(TTXS_PRO_CONFIG.get("dingyue"));
    TTXS_PRO_CONFIG.put("pushplus", "");
    ui.ttxs_pro_pushplus.setText(TTXS_PRO_CONFIG.get("pushplus"));
    TTXS_PRO_CONFIG.put("yl_on", true);
    ui.ttxs_pro_yl_on.setChecked(TTXS_PRO_CONFIG.get("yl_on"));
    TTXS_PRO_CONFIG.put("yinliang", "0");
    ui.ttxs_pro_yinliang.setText(TTXS_PRO_CONFIG.get("yinliang"));
    TTXS_PRO_CONFIG.put("zhanghao", "");
    ui.ttxs_pro_zhanghao.setText(TTXS_PRO_CONFIG.get("zhanghao"));

    toastLog("学习减压四合一pro配置恢复默认！");
});

// 保存study脚本设置
ui.study_save.click(function () {
    STUDY_CONFIG.put("article", ui.study_article.isChecked());
    STUDY_CONFIG.put("video", ui.study_video.getSelectedItemPosition());
    STUDY_CONFIG.put("meiri", ui.study_meiri.isChecked());
    STUDY_CONFIG.put("tiaozhan", ui.study_tiaozhan.isChecked());
    STUDY_CONFIG.put("checkbox_01", ui.study_checkbox_01.isChecked());
    STUDY_CONFIG.put("checkbox_02", ui.study_checkbox_02.isChecked());
    STUDY_CONFIG.put("checkbox_03", ui.study_checkbox_03.isChecked());
    STUDY_CONFIG.put("shuangren", ui.study_shuangren.isChecked());

    STUDY_CONFIG.put("huakuaidelay", ui.study_huakuaidelay.getText() + "");
    STUDY_CONFIG.put("select", ui.study_select.getSelectedItemPosition());
    STUDY_CONFIG.put("selectm", ui.study_selectm.getSelectedItemPosition());
    STUDY_CONFIG.put("select_01", ui.study_select_01.getSelectedItemPosition());
    STUDY_CONFIG.put("xianzhi", ui.study_xianzhi.isChecked());
    STUDY_CONFIG.put("another", ui.study_another.getText() + "");
    STUDY_CONFIG.put("stronger", ui.study_stronger.getSelectedItemPosition());

    STUDY_CONFIG.put("ssub", ui.study_ssub.getSelectedItemPosition());
    STUDY_CONFIG.put("diandian", ui.study_diandian.isChecked());
    STUDY_CONFIG.put("alltime", ui.study_alltime.getText() + "");
    STUDY_CONFIG.put("time1", ui.study_time1.getText() + "");
    STUDY_CONFIG.put("time2", ui.study_time2.getText() + "");
    STUDY_CONFIG.put("Token", ui.study_Token.getText() + "");

    toastLog("STUDY配置保存成功！");
});

// 重置study脚本设置
ui.study_reset.click(function () {
    STUDY_CONFIG.put("article", true);
    STUDY_CONFIG.put("video", 0);
    STUDY_CONFIG.put("meiri", true);
    STUDY_CONFIG.put("tiaozhan", true);
    STUDY_CONFIG.put("checkbox_01", true);
    STUDY_CONFIG.put("checkbox_02", true);
    STUDY_CONFIG.put("checkbox_03", true);
    STUDY_CONFIG.put("shuangren", true);
    ui.study_article.setChecked(STUDY_CONFIG.get("article"));
    ui.study_video.setSelection(STUDY_CONFIG.get("video"));
    ui.study_meiri.setChecked(STUDY_CONFIG.get("meiri"));
    ui.study_tiaozhan.setChecked(STUDY_CONFIG.get("tiaozhan"));
    ui.study_checkbox_01.setChecked(STUDY_CONFIG.get("checkbox_01"));
    ui.study_checkbox_02.setChecked(STUDY_CONFIG.get("checkbox_02"));
    ui.study_checkbox_03.setChecked(STUDY_CONFIG.get("checkbox_03"));
    ui.study_shuangren.setChecked(STUDY_CONFIG.get("shuangren"));

    STUDY_CONFIG.put("huakuaidelay", "300");
    STUDY_CONFIG.put("select", 0);
    STUDY_CONFIG.put("selectm", 0);
    STUDY_CONFIG.put("select_01", 0);
    STUDY_CONFIG.put("xianzhi", false);
    STUDY_CONFIG.put("another", "1");
    STUDY_CONFIG.put("stronger", 0);
    ui.study_huakuaidelay.setText(STUDY_CONFIG.get("huakuaidelay"));
    ui.study_select.setSelection(STUDY_CONFIG.get("select"));
    ui.study_selectm.setSelection(STUDY_CONFIG.get("selectm"));
    ui.study_select_01.setSelection(STUDY_CONFIG.get("select_01"));
    ui.study_xianzhi.setChecked(STUDY_CONFIG.get("xianzhi"));
    ui.study_another.setText(STUDY_CONFIG.get("another"));
    ui.study_stronger.setSelection(STUDY_CONFIG.get("stronger"));

    STUDY_CONFIG.put("ssub", 0);
    STUDY_CONFIG.put("diandian", false);
    STUDY_CONFIG.put("alltime", "2000");
    STUDY_CONFIG.put("time1", "61");
    STUDY_CONFIG.put("time2", "6");
    STUDY_CONFIG.put("Token", "");
    ui.study_ssub.setSelection(STUDY_CONFIG.get("ssub"));
    ui.study_diandian.setChecked(STUDY_CONFIG.get("diandian"));
    ui.study_alltime.setText(STUDY_CONFIG.get("alltime"));
    ui.study_time1.setText(STUDY_CONFIG.get("time1"));
    ui.study_time2.setText(STUDY_CONFIG.get("time2"));
    ui.study_Token.setText(STUDY_CONFIG.get("Token"));

    toastLog("STUDY配置恢复默认！");
});

ui.study_baidusave.click(function () {
    check_baidu_api();
});

ui.study_baidureset.click(function () {
    BAIDUAPI.put("AK", "");
    BAIDUAPI.put("SK", "");
    ui.study_AK.setText(BAIDUAPI.get("AK", ""));
    ui.study_SK.setText(BAIDUAPI.get("SK", ""));
    toastLog("百度API恢复默认！");
});

ui.study_baiduregister.click(function () {
    app.openUrl("https://cloud.baidu.com/doc/OCR/s/dk3iqnq51");
});

// 读取脚本设置
function Initialize() {
    ui.bh_kami.setText(BH_KAMI_CONFIG.get("bh_kami", ""));//读取卡密
    ui.script_chosen.setSelection(GLOBAL_CONFIG.get("script_chosen", 0));
    ui.ttxs_pro_watchdog.setText(TTXS_PRO_CONFIG.get("watchdog", "1800"));
    ui.ttxs_pro_slide_verify.setText(TTXS_PRO_CONFIG.get("slide_verify", "300"));
    ui.ttxs_pro_fast_mode.setChecked(TTXS_PRO_CONFIG.get("fast_mode", false));
    ui.ttxs_pro_ddtong.setChecked(TTXS_PRO_CONFIG.get("ddtong", false));
    ui.ttxs_pro_kaiguan.setChecked(TTXS_PRO_CONFIG.get("weixin_kaiguan", true));
    ui.ttxs_pro_is_exit.setChecked(TTXS_PRO_CONFIG.get("is_exit", true));
    ui.ttxs_pro_pinglun.setChecked(TTXS_PRO_CONFIG.get("pinglun", true));
    ui.ttxs_pro_shipin.setChecked(TTXS_PRO_CONFIG.get("shipin", true));
    ui.ttxs_pro_wenzhang.setChecked(TTXS_PRO_CONFIG.get("wenzhang", true));
    ui.ttxs_pro_meiri.setChecked(TTXS_PRO_CONFIG.get("meiri", true));
    ui.ttxs_pro_meizhou.setSelection(TTXS_PRO_CONFIG.get("meizhou", 0));
    ui.ttxs_pro_zhuanxiang.setSelection(TTXS_PRO_CONFIG.get("zhuanxiang", 0));
    ui.ttxs_pro_tiaozhan.setChecked(TTXS_PRO_CONFIG.get("tiaozhan", true));
    ui.ttxs_pro_ocr_choice.setSelection(TTXS_PRO_CONFIG.get("ocr_choice", 0));
    ui.ttxs_pro_ocr_maxtime.setText(TTXS_PRO_CONFIG.get("ocr_maxtime", "5000"));
    ui.ttxs_pro_duizhan_mode.setSelection(TTXS_PRO_CONFIG.get("duizhan_mode", 0));
    ui.ttxs_pro_jisu.setText(TTXS_PRO_CONFIG.get("jisu", "0"));
    ui.ttxs_pro_guaji.setChecked(TTXS_PRO_CONFIG.get("guaji", true));
    ui.ttxs_pro_siren.setChecked(TTXS_PRO_CONFIG.get("siren", true));
    ui.ttxs_pro_dacuo_num.setText(TTXS_PRO_CONFIG.get("dacuo_num", "2"));
    ui.ttxs_pro_shuangren.setChecked(TTXS_PRO_CONFIG.get("shuangren", true));
    ui.ttxs_pro_bendi.setChecked(TTXS_PRO_CONFIG.get("bendi", true));
    ui.ttxs_pro_yundong.setChecked(TTXS_PRO_CONFIG.get("yundong", true));
    ui.ttxs_pro_dingyue.setSelection(TTXS_PRO_CONFIG.get("dingyue", 0));
    ui.ttxs_pro_pushplus.setText(TTXS_PRO_CONFIG.get("pushplus", ""));
    ui.ttxs_pro_yl_on.setChecked(TTXS_PRO_CONFIG.get("yl_on", true));
    ui.ttxs_pro_yinliang.setText(TTXS_PRO_CONFIG.get("yinliang", "0"));
    ui.ttxs_pro_zhanghao.setText(TTXS_PRO_CONFIG.get("zhanghao", ""));

    ui.study_article.setChecked(STUDY_CONFIG.get("article", true));
    ui.study_video.setSelection(STUDY_CONFIG.get("video", 0));
    ui.study_meiri.setChecked(STUDY_CONFIG.get("meiri", true));
    ui.study_tiaozhan.setChecked(STUDY_CONFIG.get("tiaozhan", true));
    ui.study_checkbox_01.setChecked(STUDY_CONFIG.get("checkbox_01", true));
    ui.study_checkbox_02.setChecked(STUDY_CONFIG.get("checkbox_02", true));
    ui.study_checkbox_03.setChecked(STUDY_CONFIG.get("checkbox_03", true));
    ui.study_huakuaidelay.setText(STUDY_CONFIG.get("huakuaidelay", "300"));
    ui.study_shuangren.setChecked(STUDY_CONFIG.get("shuangren", true));
    ui.study_select.setSelection(STUDY_CONFIG.get("select", 0));
    ui.study_selectm.setSelection(STUDY_CONFIG.get("selectm", 0));
    ui.study_select_01.setSelection(STUDY_CONFIG.get("select_01", 0));
    ui.study_xianzhi.setChecked(STUDY_CONFIG.get("xianzhi", false));
    ui.study_another.setText(STUDY_CONFIG.get("another", "1"));
    ui.study_stronger.setSelection(STUDY_CONFIG.get("stronger", 0));
    ui.study_AK.setText(BAIDUAPI.get("AK", ""));
    ui.study_SK.setText(BAIDUAPI.get("SK", ""));
    ui.study_ssub.setSelection(STUDY_CONFIG.get("ssub", 0));
    ui.study_diandian.setChecked(STUDY_CONFIG.get("diandian", false));
    ui.study_alltime.setText(STUDY_CONFIG.get("alltime", "2000"));
    ui.study_time1.setText(STUDY_CONFIG.get("time1", "61"));
    ui.study_time2.setText(STUDY_CONFIG.get("time2", "6"));
    ui.study_Token.setText(STUDY_CONFIG.get("Token", ""));
}

// 检查百度API
function check_baidu_api() {
    thread = threads.start(function () {
        let AK = String(ui.study_AK.getText());
        let SK = String(ui.study_SK.getText());
        var res = http.post(
            'https://aip.baidubce.com/oauth/2.0/token', {
                grant_type: 'client_credentials',
                client_id: AK,
                client_secret: SK
            }
        ).body.json();
        if ("error" in res) {
            toastLog("API Key或Secret Key存在错误");
            console.log(AK);
            console.log(SK);
            ui.study_AK.setText(BAIDUAPI.get("AK", ""));
            ui.study_SK.setText(BAIDUAPI.get("SK", ""));
            BAIDUAPI.put("AK", "");
            BAIDUAPI.put("SK", "");
        } else {
            toastLog("API Key、Secret Key正确，且已缓存");
            BAIDUAPI.put("AK", AK);
            BAIDUAPI.put("SK", SK);
        }
    });
}

// APP更新提示
function checkversion() {
    var releaseNotes = "版本 v" + latest_version + "\n" +
        "更新日志:\n" +
        "* 1.基于AutoX v6.3.4重新打包\n" +
        "* 2.调整默认OCR为Google ML kIT OCR"
    dialogs.build({
            title: "发现新版本",
            content: releaseNotes,
            positive: "立即下载",
            negative: "取消",
            neutral: "浏览器下载",
            checkBoxPrompt: "不再提示",
            cancelable: false
        })
        .on("positive", () => {
            download(apkurl);
        })
        .on("neutral", () => {
            app.openUrl(apkurl);
        })
        .on("check", (checked) => {
            GLOBAL_CONFIG.put("NO_UPDATE", 1);
        }).show();
}

// 打开下载进度面板
function download(url) {
    downloadDialog = dialogs.build({
        title: "正在下载...",
        progress: {
            max: 100,
            showMinMax: true
        },
        autoDismiss: false,
        cancelable: false
    }).show();
    startDownload(url);
}

// 下载apk的主方法体
function startDownload(url) {
    threads.start(function () {
        var path = files.cwd() + "/new.apk";
        let apkFile = new File(path);
        var conn = new URL(url).openConnection();
        conn.connect();
        let is = conn.getInputStream();
        let length = conn.getContentLength();
        let fos = new FileOutputStream(apkFile);
        let count = 0;
        let buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
        while (true) {
            var p = ((count / length) * 100);
            let numread = is.read(buffer);
            count += numread;
            // 下载完成
            if (numread < 0) {
                toast("下载完成");
                downloadDialog.dismiss();
                downloadDialog = null;
                break;
            }
            // 更新进度条
            downloadDialog.setProgress(p);
            fos.write(buffer, 0, numread);
        }
        fos.close();
        is.close();
        //自动打开进行安装
        app.viewFile(path);
    })
}
require('./去限制.js')