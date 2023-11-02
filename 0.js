auto.waitFor(); //mode = "fast"
var delay_time = 3000;
var myScores = {}; //分数
device.wakeUpIfNeeded();
var meizhou_0 = true;
var meizhou_end = 1;
// 读取自定义配置
var BH_KAMI_CONFIG = storages.create("BH_KAMI_CONFIG");

var TTXS_PRO_CONFIG = storages.create("TTXS_PRO_CONFIG");
var watchdog = TTXS_PRO_CONFIG.get("watchdog", "1800");
var slide_verify = TTXS_PRO_CONFIG.get("slide_verify", "300");
var fast_mode = TTXS_PRO_CONFIG.get("fast_mode", false);
var ddtong = TTXS_PRO_CONFIG.get("ddtong", false);
var weixin_kaiguan = TTXS_PRO_CONFIG.get("weixin_kaiguan", true);
var is_exit = TTXS_PRO_CONFIG.get("is_exit", true);
var pinglun = TTXS_PRO_CONFIG.get("pinglun", true);
var shipin = TTXS_PRO_CONFIG.get("shipin", true);
var wenzhang = TTXS_PRO_CONFIG.get("wenzhang", true);
var meiri = TTXS_PRO_CONFIG.get("meiri", true);
var meizhou = TTXS_PRO_CONFIG.get("meizhou", 0);
var zhuanxiang = TTXS_PRO_CONFIG.get("zhuanxiang", 0);
var tiaozhan = TTXS_PRO_CONFIG.get("tiaozhan", true);
var ocr_choice = TTXS_PRO_CONFIG.get("ocr_choice", 0);
var ocr_maxtime = TTXS_PRO_CONFIG.get("ocr_maxtime", "5000");
var duizhan_mode = TTXS_PRO_CONFIG.get("duizhan_mode", 0);
var jisu = TTXS_PRO_CONFIG.get("jisu", "0");
var guaji = TTXS_PRO_CONFIG.get("guaji", true);
var siren = TTXS_PRO_CONFIG.get("siren", true);
var dacuo_num = TTXS_PRO_CONFIG.get("dacuo_num", "2");
var shuangren = TTXS_PRO_CONFIG.get("shuangren", true);
var bendi = TTXS_PRO_CONFIG.get("bendi", true);
var yundong = TTXS_PRO_CONFIG.get("yundong", true);
var dingyue = TTXS_PRO_CONFIG.get("dingyue", 0);
var pushplus = TTXS_PRO_CONFIG.get("pushplus", "");
var yl_on = TTXS_PRO_CONFIG.get("yl_on", true);
var yinliang = TTXS_PRO_CONFIG.get("yinliang", "0");
var zhanghao = TTXS_PRO_CONFIG.get("zhanghao", "");
var vip = BH_KAMI_CONFIG.get("bh_kami", "");
var isPrivateModes = getVersion("cn.xuexi.android").match(/[0-9][0-9]*/g).join('');
var isPrivateMode_1 = isPrivateModes-2380;

var privateModeStartVersion = "2.39.0";
var isPrivateMode = version1GreaterVersion2(getVersion("cn.xuexi.android"), privateModeStartVersion);
function getVersion(package_name) {
    // 该函数来源：https://blog.csdn.net/aa490791706/article/details/122863666
    let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
    for (let i in pkgs) {
        if (pkgs[i].packageName.toString() === package_name) {
            return pkgs[i].versionName;
        }
    }
}
function version1GreaterVersion2(version1, version2, equal) {
    // 该函数来源：https://blog.csdn.net/aa490791706/article/details/122863666
    if (equal && version1 === version2) {
        return true;
    }
    let versionArr1 = version1.split('.');
    let versionArr2 = version2.split('.');
    let result = false;
    for (var i = 0; i < versionArr1.length; i++) {
        if (versionArr1[i] > versionArr2[i]) {
            result = true;
            break;
        }
    }
    return result;
}
//（找）图片点击
var url_xuexijifen_jpg = 'https://ghproxy.com/https://github.com/01buluo/zuguo/blob/main/xuexijifen_jpg.jpg'
var url_xuexijifen_1_jpg = 'https://ghproxy.com/https://github.com/01buluo/zuguo/blob/main/xuexijifen_1_jpg.jpg'
var path_xuexijifen_jpg = '/sdcard/xuexijifen_jpg.jpg';  //学习积分---qg2.39图标位置
var path_xuexijifen_1_jpg = '/sdcard/xuexijifen_1_jpg.jpg';  //学习积分---qg2.43/2.44图标位置
// var path_jpg_2 = '/sdcard/2022_shangxian.jpg'; //2022上线--图片位置
// var path_jpg_3 = '/sdcard/2022_shangxian_end.jpg';//2022上线最新更新图标位置
// var path_jpg_4 = '/sdcard/shangxin_1.jpg';//最近上线--图片位置

  function pic_click(path_jpg_y, url_jpg_y, x_1, x_2){
    if(!files.exists(path_jpg_y)) {
      fClear();
     fInfo('重要点击参数不存在,准备下载，若此次报错无法运行，不要勾选订阅重新运行脚本');
     var img_small = images.load(url_jpg_y);
     sleep(3000);
     //保存图片   这一步保存完图片后，相册里不会显示图片
     images.save(img_small, path_xuexijifen_jpg);
    }
      setScreenMetrics(1080, 1920);
       sleep(1000);
       if(files.exists(path_jpg_y)) fInfo('找到本地文文本点击参考');
        var path_jpg_x = 0;
       //requestScreenCapture();
        //  while (true && path_jpg_x != 2){
          for(let i = 0; i < 6; i++){
            fClear();
            setScreenMetrics(1080, 1920);
           let img_small_t = images.read(path_jpg_y);
            let img_big_t = captureScreen();
            // let result_0 = images.matchTemplate(img_big_t, img_small_t, {
            //   // threshold: 0.8,
            //   // region:[400, 1100, 100, 550],
            //   max: 2
            // });
            // fInfo(result_0);
            sleep(2000);
          //   var pic_0 = images.findMultiColors(img_big_t, "#ffa837a", [[11, 20, "#ffff978f"], [10, 36, "#fffffff"], [1, -42, "#fffffff"], [-2, 109, "#fffffff"], [-42, 96, "#fffffff"], [-58, 15, "#ffe73426"], [-18, 13, "#fff57066"]], {
          //     region: [400, 1100, 100, 550]
          // });
             var pic_0 = findImage(img_big_t, img_small_t);
            // var pic_0 = findImage(img_big_t, img_small_t, {
            //   region: [400, 1100, 100, 550],
            //   threshold: 0.8
            //      });
            sleep(2000);
            if (pic_0) {
                  fInfo("'学习积分'---找到了，坐标：" + pic_0.x+"----" + pic_0.y);
                  click(pic_0.x + x_1, pic_0.y + x_2);
                  press(pic_0.x + x_1, pic_0.y + x_2 ,100);//点击坐标
                  //click(pic_0.x + x_1, pic_0.y + x_2);
                  path_jpg_x = 2;
                  break;
              } else {
                img_big_t.recycle();
                if(textContains("学习积分").exists()) break;
                 path_jpg_x = 0;
                  fInfo("继续尝试点击--‘学习积分’");
                  sleep(random(700, 1100));
                } 
           }

   }
function google_ocr_api(img) {
  console.log('GoogleMLKit文字识别中');
  let list = JSON.parse(JSON.stringify(gmlkit.ocr(img, "zh").toArray(3))); // 识别文字，并得到results
  let eps = 30; // 坐标误差
  for (
    var i = 0; i < list.length; i++ // 选择排序对上下排序,复杂度O(N²)但一般list的长度较短只需几十次运算
  ) {
    for (var j = i + 1; j < list.length; j++) {
      if (list[i]['bounds']['bottom'] > list[j]['bounds']['bottom']) {
        var tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
    }
  }

  for (
    var i = 0; i < list.length; i++ // 在上下排序完成后，进行左右排序
  ) {
    for (var j = i + 1; j < list.length; j++) {
      // 由于上下坐标并不绝对，采用误差eps
      if (
        Math.abs(list[i]['bounds']['bottom'] - list[j]['bounds']['bottom']) <
        eps &&
        list[i]['bounds']['left'] > list[j]['bounds']['left']
      ) {
        var tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
    }
  }
  let res = '';
  for (var i = 0; i < list.length; i++) {
    res += list[i]['text'];
  }
  list = null;
  return res;
}

function paddle_ocr_api() {
  console.log('PaddleOCR文字识别中');
  let list = JSON.parse(JSON.stringify(paddle.ocr(arguments[0]))); // 识别文字，并得到results
  let eps = 30; // 坐标误差
  if (arguments.length >= 2) eps = arguments[1];
  for (
    var i = 0; i < list.length; i++ // 选择排序对上下排序,复杂度O(N²)但一般list的长度较短只需几十次运算
  ) {
    for (var j = i + 1; j < list.length; j++) {
      if (list[i]['bounds']['bottom'] > list[j]['bounds']['bottom']) {
        var tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
    }
  }

  for (
    var i = 0; i < list.length; i++ // 在上下排序完成后，进行左右排序
  ) {
    for (var j = i + 1; j < list.length; j++) {
      // 由于上下坐标并不绝对，采用误差eps
      if (
        Math.abs(list[i]['bounds']['bottom'] - list[j]['bounds']['bottom']) <
        eps &&
        list[i]['bounds']['left'] > list[j]['bounds']['left']
      ) {
        var tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
    }
  }
  let res = '';
  for (var i = 0; i < list.length; i++) {
    res += list[i]['text'];
  }
  list = null;
  return res;
}

if (fast_mode) {
  auto.setMode("fast");
}
events.observeToast();
sleep(delay_time);
/*****************更新内容弹窗部分*****************/
var storage = storages.create('songgedodo');
// 脚本版本号
var last_version = "V10.11";
var engine_version = "V11.2";
var newest_version = "V11.5";
if (storage.get(engine_version, true)) {
  storage.remove(last_version);
  let gengxin_rows = ["最新版本强国APP需要虚拟机或者root【请确保手机已root或使用的虚拟机+相应插件】",
        "四人/双人赛等才能使用!(并新增支持qg新版的订阅)",
    "其它版本的脚本仅适用qg V2.33版，可以在豌豆荚中下载历史版本",
    "（点击取消不再提示）"
  ];
  let is_show = confirm(engine_version + "版更新内容", gengxin_rows.join("\n"));
  if (!is_show) {
    storage.put(engine_version, false);
  }
}
var w = fInit();
// console.setTitle("学习减压四合一");
// console.show();
fInfo("学习减压四合一Pro" + newest_version + "\n……脚本初始化……");
fTips('当前强国版本为' + getVersion("cn.xuexi.android") + '(' + isPrivateModes + ')');
  if(isPrivateMode_1 > 0 || isPrivateMode) fError('须去除截图限制权限，四人/双人赛等才可用ocr自动答题');  
// 初始化宽高
var [device_w, device_h] = init_wh();
// log("fina:", device_w, device_h);
// OCR初始化，重写内置OCR module
if (ocr_choice == 2) {
  fInfo("初始化第三方ocr插件");
  try {
    ocr = plugins.load("com.hraps.ocr");
    ocr.recognizeText = function (img) {
      let results = this.detect(img.getBitmap(), 1);
      let all_txt = "";
      for (let i = 0; i < results.size(); i++) {
        let re = results.get(i);
        all_txt += re.text;
      }
      return all_txt
    }
  } catch (e) {
    fError("未安装第三方OCR插件，请安装后重新运行");
    alert("未安装第三方OCR插件，点击确认跳转浏览器下载，密码为ttxs");
    app.openUrl("https://wwc.lanzouo.com/ikILs001d0wh");
    exit();
  }
}
// sleep(2000);
// 自动允许权限进程
threads.start(function () {
  //在新线程执行的代码
  //sleep(500);
  toastLog("开始自动获取截图权限");
  var btn = className("android.widget.Button").textMatches(/允许|立即开始|START NOW/).findOne(5000);
  if (btn) {
    sleep(1000);
    btn.click();
  }
  toastLog("结束获取截图权限");
});
fInfo("请求截图权限");
// 请求截图权限、似乎请求两次会失效
if (!requestScreenCapture(false)) { // false为竖屏方向
  fError('请求截图失败');
  exit();
}
// 防止设备息屏
fInfo("设置屏幕常亮");
device.keepScreenOn(3600 * 1000);
// 下载题库
fInfo("检测题库更新");
auto.waitFor();
//从配置文件中，根据name获取参数值
const { group_name,run_type } = hamibot.env;
var weixin_push = hamibot.env.weixin_push;
var maoyun_draw_1 = hamibot.env.maoyun_draw_1;
var no_2 = hamibot.env.no_2;
var no_3 = hamibot.env.no_3;
var suiji_1 = hamibot.env.suiji_1;
var { id_group_name } = hamibot.env;
device.wakeUp();//唤醒设备 
sleep(2000); // 等待屏幕亮起 
device.wakeUpIfNeeded();
// if (!device.isScreenOn()) { 
//   //从息屏状态 将屏幕唤醒
//    device.wakeUp();//唤醒设备 
//   sleep(2000); // 等待屏幕亮起 
//   swipe(random(device.width / 3, device.width / 2), random(device.height * 8 / 10, device.height * 7 / 10), random(device.width / 3, device.width / 2), random(device.height * 2 / 10, device.height / 10), random(500, 1000));
//         sleep(1000); //解锁 
//   desc(1).findOne().click();
//   desc(2).findOne().click();
//   desc(3).findOne().click();
//   desc(4).findOne().click();
// }
 //if (!device.isScreenOn()) { 
   sleep(random(1500,2000));
swipe(500,2000,500,1000,240);//可以
// }
if(suiji_1) delay(random(5, 600)); 
console.warn( " 产品厂商品牌:"+ device.brand + "\n设备型号:" + device.model+"\n Android 系统版本号:"+ device.release);
console.warn("设备的ID:" +device.getAndroidId()+ "\n MAC:"+ device.getMacAddress()+ "\n当前电量:"+ device.getBattery());
if(device.getBattery() < 30)console.error("当前电量:"+ device.getBattery());
else console.info("当前电量:"+ device.getBattery());
// console.warn("设备IMEI:"+ device.getIMEI());
// console.warn("\n Android 系统版本号:"+ device.release);
// console.warn("\n硬件序列号:" + device.serial);

// console.warn("设备IMEI:"+ device.getIMEI()+ "\n Android 系统版本号:"+ device.release + "\n硬件序列号:" + device.serial);
// console.warn("\n 产品厂商品牌:"+ device.brand);
// console.warn("\n设备型号:" + device.model);
// console.warn("设备的主板(?)型号:"+ device.broad);
//console.warn("设备的主板(?)型号:"+ device.broad + "\n 产品厂商品牌:"+ device.brand + "\n设备型号:" + device.model);
device.keepScreenDim()
/**
 * @description: 延时函数
 * @param: seconds-延迟秒数s
 * @return: null
 */
function delay(seconds) {
    sleep(1000 * seconds + randomNum(0, 500)); //sleep函数参数单位为毫秒所以乘1000
}
/**
 * @description: 随机秒数
 * @param: seconds-秒数s
 * @return: [seconds+100,seconds+1000]
 */
function random_time(time) {
    return time + random(100, 1000);
}

/**
 * @description: 生成从minNum到maxNum的随机数
 * @param: minNum-较小的数
 * @param: maxNum-较大的数
 * @return: null
 */
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

//阻塞等待
function wait_come_home_page(){
		//等待加载到主页
    textContains('首页').waitFor();
    textContains('云购').waitFor();
  	log("完全进入到主页")
}

//补充为2位数
function add0(m){
	return m<10?'0'+m:m
}

//获取当天日期
function get_today(){
	var myDate = new Date();
	// return `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`
  return myDate.getFullYear()+'-'+add0(myDate.getMonth()+1)+'-'+add0(myDate.getDate()+' '+add0("09:00场"))
}

//根据文本内容查找元素，并执行点击操作
function click_text_element(content,is_wait){
    //是否需要等待
    if(is_wait){
    	 textContains(content).waitFor();
    }
    log("等待元素 ‘"+ content + "’ 加载完成，继续点击操作。。。")
    //查找元素
    var buy_element = text(content).findOne()
    if(buy_element){
    	click(buy_element.bounds().centerX(), buy_element.bounds().centerY());
    }
}

function click_desc_element(content,is_wait){
    //是否需要等待
    if(is_wait){
    	 descContains(content).waitFor();
    }
    log("等待元素: ‘"+ content + "’ 加载完成，继续点击操作。。。")
    //查找元素
    var buy_element = desc(content).findOne()
    if(buy_element){
    	click(buy_element.bounds().centerX(), buy_element.bounds().centerY());
    }
}
/**
 * 模拟点击不可以点击元素
 * @param {UiObject / string} target 控件或者是控件文本
 */
function my_click_non_clickable(target) {
    if (typeof target == "string") {
        text(target).waitFor();
        var tmp = text(target).findOne().bounds();
    } else {
        var tmp = target.bounds();
    }
    var randomX = random(tmp.left, tmp.right);
    var randomY = random(tmp.top, tmp.bottom);
    click(randomX, randomY);
    console.info('完成点击'+ target + '！');
    fInfo('完成点击'+ target + '！');
}
/**
 * 模拟点击可以点击元素
 */
function my_click_clickable(target) {
    text(target).waitFor();
    console.info('点击进入'+ target + '--');
    click(target);
}

//遍历点击
function queryList_click(json,wenben_dj) {
    for (var i = 0; i < json.length; i++) {
        var sonList = json[i];
        if (sonList.childCount() == 0) {
            //console.log("---"+json[i]+"+++")
           var b_coin = json[i].text()
          // log("文本："+b_coin)
          if(b_coin== wenben_dj) {click(b_coin);console.info("点击"+ wenben_dj +"成功")
                                  break;}
        } else {
            queryList_click(sonList);
        }
    }
      //返回结果值
      return b_coin
     
}

//遍历点击++遍历数
function queryList_click_num(json,num_dj) {
    for (var i = 0; i < json.length; i++) {
        var sonList = json[i];
        if (sonList.childCount() == 0) {
            //console.log("---"+json[i]+"+++")
           var b_coin = json[i].text()
          // log("文本："+b_coin)
          if(i== num_dj) {click(b_coin);console.info("点击"+ b_coin +"成功")
                                  break;}
        } else {
            queryList_click_num(sonList);
        }
    }
      //返回结果值
      return b_coin
     
}

//进入到申购页面
function enter_buy_pre_page(){
	click_text_element("云购")
  delay(1);
  my_click_clickable("享约申购")
}

//返回到应用首页
function back_main_page() {
    //判断是否在主界面
    while (true) {
        if (textContains('首页').exists()&&textContains('云购').exists()&&textContains('发现').exists()&&textContains('小茅运').exists()&&textContains('我的').exists()) {
            break;
        } else {
            back();
          delay(1.5);
        }
        delay(2);
    }
}
// push推送
function push_msg(send_msg){
    console.warn('正在push推送……');
 //   var score = getScores(3);
    send_msg +='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
//    try{
//         if (sct_token != "") {
//         URL = "https://sctapi.ftqq.com/" + sct_token + ".send";
//         http.post(URL, {
//             title: "申购反馈通知",
//             desp: send_msg,
//         });
//       }   
        
//     }
//     catch(e){}
 //   try{
      let style_str = '<style>.item{height:1.5em;line-height:1.5em;}.item span{display:inline-block;padding-left:0.4em;}\
.item .bar{width:200px;height:10px;background-color:#ddd;border-radius:5px;display:inline-block;}\
.item .bar div{height:10px;background-color:#ed4e45;border-radius:5px;}</style>'; 
    send_msg +='</div>' + style_str;
    let r = http.postJson("http://www.pushplus.plus/send", {
    token: hamibot.env.Token.replace(/ /g, ''),
    title: "申购反馈：",   // + name,
    content: send_msg + "</div><style>.item{height:1.5em;line-height:1.5em;}.item span{display:inline-block;padding-left:0.4em;}.item .bar{width:200px;height:10px;background-color:#ddd;border-radius:5px;display:inline-block;}.item .bar div{height:10px;background-color:#ed4e45;border-radius:5px;}</style>",
    template: "markdown",// "markdown" "html",
  });
  if (r.body.json()["code"] == 200) {
    console.warn("推送成功");
  } else {
    log(r.body.json());
  }
//         url = 'http://www.pushplus.plus/send?token='+ hamibot.env.Token.replace(/ /g, '') +'&title=Study&content='+ send_msg +'&template=html';
//         http.get(url);
 //   }catch(e){}
}

//返回到微信首页
function back_to_home(){
    while(true){
        back()
        if(text("通讯录").findOne(3000)){
            break
        }else{
            log("不满足，继续回退！")
        }
    }
}

function click_many_times(bounds,selector){
    while(true){
        //中心点坐标
        var x = bounds.centerX();
        var y  = bounds.centerY();
        var time = 100;
        //点击一次（微信可能会失效，原因未知）
        engines.execScript('xxx', '"auto";' + 'press(' + x + ', ' + y + ',' + time +');');
        sleep(1000)
        //判断元素是否出现
        if(selector.findOnce()){
            break
        }
    }
}

//发送微信消息
function send_wx_msg(send_msg){
    //如果休眠，唤醒设备
    //注意：为了保证耗电低，设置睡眠（30s无操作）
    device.wakeUpIfNeeded()
    app.launch("com.tencent.mm");
    //微信分身
    click_text_element("微信",is_wait=false)
    text("微信").waitFor()
    text("通讯录").waitFor()
    sleep(2000)
    swipe(450, 1500, 450, 450, 500)
    //点击进入到聊天界面
    var chat_element= id("id_group_name").text(group_name).findOne();
    log("找到目标元素，可以点击了。。。。")
		//log(chat_element)
 
    //获取坐标点
    var chat_element_bounds = chat_element.bounds();

    click_many_times(chat_element_bounds,id("b4a").className("EditText"))
    sleep(3000)

    //1--发送消息
    id("b4a").className("EditText").findOne().setText(send_msg)
    sleep(3000)
    //发送
    text("发送").click()
    sleep(1000)
    //3- 返回
    back_to_home()
}

//=========================================================

//查询申购结果
function get_buy_result(){
	click_text_element("我的",is_wait=false)
               
  // 获取用户名称
	// username = desc("已实名").findOne().parent().children()[0]
 // username = id("name_layout").findOne().parent().children()[0]
  username= className("android.widget.TextView").depth(13).findOne(0).text();
  click_text_element("申购单",is_wait=true)
  
  //获取所有的item元素
  var rv_element= id("reservation_rv").findOne()
  
  //获取当前日期
  var current = get_today();
  console.log("当前日期:",current);
  var current = current.replace(/-/g, '');
	var current = current.substring(0,8).match(/[0-9][0-9]*/g);
 // var current = parseInt(current.replace(/\s+/g, ''), 8);
 // console.log("当前日期:",current);
  //获取下面的所有子元素Item
  let result = ""
  if(rv_element){
      var r_lt = 0;
      var r_lt_z = 0;
  		var elements = rv_element.children()
      for(let element of elements){
        r_lt_z +=1;
      };
     	for(let element of elements){
      	 //获取预约时间
         var time = element.findOne(id("date_time")).text()
         var time_0 = element.findOne(id("date_time")).text()
         //console.log("申购:",time)
        var time = time.replace(/-/g, '');
        var time = time.substring(0,10).match(/[0-9][0-9]*/g);
      //   var time = parseInt(time.replace(/\s+/g, ''), 8)
      //  console.log("申购:",time);
         if(Number(time) == Number(current)){
         		//获取结果
            var status =element.findOne(id("draw_status")).text()
            //品种
            var title = element.findOne(id("mt_goods_name")).text()
                console.log("种类:",title,",结果:",status)
                 result += "\n\n " + " " + "\n\n种类:"+title+"，" + "\n结果:"+status;      
           	if(status == "申购失败" || status == "静候申购结果"){
              var r_l_t = 0;
               var r_l_t_s = "继续加油";
              r_lt += 1;
            }else {var r_l_t = r_lt_z;
                   var r_l_t_s = "幸运者";
                  }
           
              let percent = (Number(r_l_t) / r_lt_z * 100).toFixed() + '%';
              let detail = r_l_t_s + ": " + r_lt + "/" + r_lt_z;
              result += '<div class="item"><div class="bar"><div style="width: ' + percent + ';"></div></div><span>' + detail + '</span></div>';
         }
      }
  } 
 result = "\n\n" + "账号：" + username +  "\n\n" + time_0 + "--申购结果:" + result;
  //准备回退到App桌面
 // back_main_page()
  //进入到桌面
//  home()
  return result
}

//-----------------------------------------------------------------

//获取申购结果，并发送微信
function purchase_result(){
  //打开日志控制台
  console.show();

  //打开App
  launchApp('i茅台');
  
	//进入主页
  wait_come_home_page()
  //点击进入申购页面
  //enter_buy_pre_page()

  //查询申购结果
  var result_pre = get_buy_result()
  var result = result_pre?result_pre:"查询结果为空"
  var result = result_pre?result_pre:"查询结果为空"
  if(maoyun_draw_1 == true){
    var resultss = maoyun_draw();//领取或查询小茅运
    var result = resultss + "\n\n" + result
         }
   //推送push
   result_1 = "\n当前电量:"+ device.getBattery() + "\n\n" + device.brand + "--" + device.model+"--Android"+ device.release +"\n\n 设备的ID:" +device.getAndroidId()+ "\n\n MAC:"+ device.getMacAddress();
  if(hamibot.env.Token != null && hamibot.env.Token.length > 6){
        delay(random(0.7, 1)); 
        push_msg(result_1 + result);
        delay(random(4, 5)); 
    }
  //发送微信
  if(weixin_push == true){
  send_wx_msg(result_1 + result)
  }
}

//真实预约
function real_buy(){
    log("预约申购")
    //等待【选择门店】页面加载完全
  
  	id("btReserve").waitFor()
 	 //由于抢到即使赚到，这里直接取默认地址的第一个
  my_click_non_clickable("申购");
  	//id("btReserve").click()
  	//确定申购
  //	text("确定").findOne().click() 
  delay(random(2, 3)); 
my_click_non_clickable("确定申购");
    //text("确定申购").findOne().click()
  delay(random(2, 3)); 
    //点击【查看详情】，返回申购列表
 //  text("继续申购").findOne(3000).click();
  //queryList_click(find(),"继续申购");
my_click_non_clickable("继续申购");
//   if(textMatches("继续申购").exists() || text("继续申购").exists()) text("继续申购").findOne().click();
//   else	{text("查看详情").findOne().click();
//          swipe(950, 1000, 750, 1000, 100);
//         }
   delay(1);
  	//返回
  	back_main_page();
}

//申购购买
function purchase_buy(){
  console.show();

  //打开App
  launchApp('i茅台');
  
  //等待进入到主页
  wait_come_home_page()
  
  //进入【云购】Tab
  click_text_element("云购",is_wait=false)
//  click_text_element("线上销售",is_wait=false)
  my_click_clickable("享约申购");
   delay(1);
  my_click_clickable("享约申购");
//  my_click_clickable("享约申购",is_wait=true)
  //注意：可能屏幕太小，导致第一屏就没有购买入口
  	var good_enterences = id("bt_goods").find()  
    log("本次入口有:",good_enterences.length);
    fInfo("本次入口有:",good_enterences.length);
  let index = 0;
    var rukou = 0;
  var wen_ts = "‘本场申购---已申购完毕";
//  while(index<4){
    //滑动一次
  //   if(!text('本场申购已结束').findOne(3000)){
  //  swipe(450, 1500, 450, 450, 500)}
    //商品列表（预约申请的按钮）
  //	var good_enterences = id("bt_goods").find()  
   // log("本次入口有:",good_enterences.length)

    //商品标题
    for(let good_enterence of good_enterences){
        var rukou =  rukou + 1;
        if(good_enterence.text()=='预约申购') var ruko = '入口' + rukou;
        else var ruko = '入口';
        fClear();
        log(ruko +":",good_enterence.text());
        fInfo(ruko +":",good_enterence.text());
      if(good_enterence.text()=='本场申购已结束'){
        var wen_ts = "‘本场申购已结束’---明天“9：00场”再来";
        console.info(wen_ts);
        fInfo(wen_ts);
        break;
        }
      else if(good_enterence.text()=='申购结果公示'){
         var wen_ts = "‘申购结果公示’中---请去查询";
      console.info(wen_ts);
      fInfo(wen_ts);
        break;
        }
     else if(good_enterence.text()=='09:00开始申购'){
       var wen_ts = "‘09:00开始申购’中---明天“9：00场”再来";
       console.info(wen_ts);
       fInfo(wen_ts);
        break;
      }
      else if(good_enterence.text()=='预约申购'){
          // if(no_1&&rukou==1) continue;
          //  if(no_2 && rukou==2) {console.info("已勾选不申请--1935");continue;}
          //  if(no_3 && rukou==3)  {console.info("已勾选不申请--贵州茅台酒(珍品)");continue;}
           if(no_2 && rukou == 2) {console.info("已勾选不申请--1935");
           fInfo("已勾选不申请--1935");
           // sleep(random(1500,2000));
          // swipe(x_1, y_1, x_1, y_1 - 520 + random(-14,56), random(530,760));//滑动
            continue;} 
           if(no_3 && rukou == 3)  {console.info("已勾选不申请--贵州茅台酒(珍品)");
           fInfo("已勾选不申请--贵州茅台酒(珍品)");
          // swipe(x_1, y_1, x_1, y_1 - 520 + random(-14,56), random(530,760));//滑动
            continue;}
          // if(no_4&&rukou==4) continue;
       // my_click_non_clickable("预约申购");	
       delay(random(0.9, 1.6));
        good_enterence.click()
         //   click("预约申购");
            real_buy();
            delay(random(0.9, 1.6));
           // swipe(x_1, y_1, x_1, y_1 - 520 + random(-14,56), random(530,760));//滑动
        }else{
          fInfo("该条已经申购，过滤掉。。。");
        		log("该条已经申购，过滤掉。。。");
        }	
    }
 //   log("-----------------------------------------------------")
 // 	index+=1;
 // }
  //滑回top
  if(!(textContains('09:00开始申购').exists() || textContains('申购结果公示').exists() || textContains('本场申购已结束').exists())){swipe(550, 250, 450, 1800, 1000);
                                   console.info(wen_ts);   
                                   console.info("申购完毕！");
                                 log("准备查询/领取小茅运返回top")}
  if(maoyun_draw_1 == true){
    console.info("准备查询/领取小茅运")
    toast("准备查询/领取小茅运")
    var resultss =  maoyun_draw();//领取或查询小茅运
     var resultss = "\n当前电量:"+ device.getBattery() + "\n\n" + device.brand + "--" + device.model+"--Android"+ device.release +"\n\n" + "设备的ID:" + device.getAndroidId() + "\n"+ "MAC:"+ device.getMacAddress() +"\n\n" + resultss;
     resultss = "\n\n" + wen_ts + "\n\n" + resultss;
         } else {
          var resultss = "\n当前电量:"+ device.getBattery() + "\n" + device.brand + "--" + device.model+"--Android"+ device.release +"\n\n" +"设备的ID:" +device.getAndroidId()+ "\n" + " MAC:"+ device.getMacAddress() +"\n\n" + resultss;
            resultss = "\n\n" + wen_ts + "\n\n" + resultss;
                }
  //推送push
  if(hamibot.env.Token != null && hamibot.env.Token.length > 6){
         delay(random(0.7, 1)); 
        push_msg(resultss);
         delay(random(4, 5)); 
    }
  //发送微信
  if(weixin_push == true){
  send_wx_msg(resultss)
    
  }
}
//领取小茅运
function maoyun_draw(){
//     //打开App
//   launchApp('i茅台');
//    //等待进入到主页
//   wait_come_home_page()
//   //领取前查询【小茅运】Tab
    back_main_page()
  text("我的").waitFor()
  //sleep(2000)
	click_text_element("我的",is_wait=false);
   delay(2);
   text("我的订单").waitFor()
   delay(2);
//查询小茅运
 //  var mubiaoshu = 1;//小茅运遍历1
  var rooot = className("android.widget.TextView").depth(14).drawingOrder(3).indexInParent(2).enabled(true).find();
  var a_coin = queryList_0(rooot,1);
   toast("小茅运:" + a_coin);
   log("小茅运:" + a_coin);
  //查询耐力值
 //  var mubiaoshu = 2;//耐力值遍历2
 // let rooot = className("android.widget.TextView").depth(14).drawingOrder(3).enabled(true).find()
  var a_energy = queryList_0(rooot, 2);
   log("耐力值:"+a_energy);
  // toast("耐力值:"+a_energy)  
  var results = "领取前:小茅运 " + a_coin + " && " + "耐力值 " + a_energy;
  console.info(results);
   toast(results);
  //获取所有的item元素
  sleep(1000);
 //return results
   //进入【小茅运】Tab
  log("点击小茅运");
    delay(2);
  click_text_element("首页",is_wait=false);
 delay(2);
   click_text_element("云购",is_wait=false);
  delay(2);
  back_main_page();
   delay(1);
  click_text_element("小茅运",is_wait=false);
   delay(1);
 // click_text_element("小茅运",is_wait=false)
   toast("继续尝试进入探索领取中，等待…………")
  delay(5);
  var rooot_1 = className("android.widget.TextView").depth(18).find();
 // if(!rooot_1){
  //  sleep(3000);
    click_text_element("我的",is_wait=false);
    delay(2);
   click_text_element("云购",is_wait=false)
                delay(2);
    click_text_element("小茅运",is_wait=false)
   delay(1);   //  }
//if(!rooot_1){
       delay(3);
             press(660, 600,100);
             press(660, 600,150);
          //   click(660, 600);
  //}
  log('准备进入  日程');
 //  textContains('探索').waitFor();
  queryList_click(find(),"领取");
  var rooot_1 = className("android.widget.TextView").depth(18).find()
  queryList_click_num(rooot_1,2);
   delay(4);
 // var maoyun_draw_s = className("android.view.View").find()
 // var maoyun_draw_ss = className("android.widget.TextView").find()
  //queryList_0(maoyun_draw_s,"领取");
  queryList_click(find(),"领取");
 //  var maoyun0_draws = className("android.view.View").text("领取").find()   
  className("android.view.View").text("领取").find().click();
   textContains('前往日程').waitFor();
  click_text_element("前往日程",is_wait=false);
  continued_draw();
//     log("本次领取入口有:",maoyun0_draws.length)   
//     //商品标题
//     for(let maoyun0_draw of maoyun0_draws){      
//       log("文本:",maoyun0_draw.text())
//         if(maoyun0_draw.text()=='领取'){
//           log("发现领取，领取中")
//         		maoyun0_draw.click()
//           text("领取").findOne(1000).click()
//            className("android.view.View").text("领取").find() .click()
//           sleep(2)
//           className("android.widget.TextView").text("领取").find() .click()
//           text("领取").findOne(1000).click()
//            toast("发现领取，领取成功")
//            //back()
//           //break
//         }else{
//           var maoyun1_draws = className("android.widget.TextView").text("你有新的奖励到啦").find() 
//     log("本次入口有:",maoyun1_draws.length)   
//    for(let maoyun1_draw of maoyun1_draws){      
//       log("文本:",maoyun1_draw.text())
//         if(maoyun1_draw.text()=='你有新的奖励到啦'){
//           log("发现领取，领取中")
//         		maoyun1_draw.click()
//           text("领取").findOne(1000).click()
//            className("android.view.View").text("领取").find() .click()
//           sleep(2)
//           className("android.widget.TextView").text("领取").find() .click()
//           text("领取").findOne(1000).click()
//            toast("发现领取，领取成功")
//           //back()
//          }else{
//         		  toast("申购后首次尝试‘领取’无发现，继续尝试其它方式")
//           log("申购后首次尝试‘领取’无发现，继续")
//               }	
//         }              		
//         }	
//     }
//   delay(1);
//   //查找7天连续申购领取小茅运
//    back_main_page()
//    toast("换种方式继续查找是否满足连续申购7天并领取，尽量确保领取")
//     log("换种方式查找是否满足连续申购7天并领取")
//           click_text_element("我的",is_wait=false)
//       toast("继续尝试查找中，等待…………")
//            delay(1);
//           click_text_element("获取更多小茅运",is_wait=true)
//     className("android.view.View").text("获取更多小茅运").find().click()
//        //toast("继续尝试中，等待…………")
//        className("android.view.View").text("领取").find() .click()
//    sleep(2)
//           className("android.view.View").text("领取").find() .click()
//            delay(1);
//   //toast("继续尝试查找中，等待…………")
//           click_text_element("旅行",is_wait=false)
//           delay(1.5);
//       // toast("继续尝试查找中，等待…………")
//           className("android.view.View").text("进去看看").find().click()
//           //click_text_element("进去看看",is_wait=false)
//            delay(1);
//      //toast("继续尝试查找中，等待…………")
//           className("android.view.View").text("我知道了").find().click()
//           delay(1);
//          className("android.view.View").text("领取奖励").find().click()
//         className("android.widget.TextView").text("领取奖励").find().click()
//          delay(1);
//         className("android.view.View").text("我知道了").find().click()
//           delay(1);
//         className("android.widget.TextView").text("我知道了").find().click()
//           //click_text_element("我知道了",is_wait=false)
//         // toast("换种方式进入日程若仍然未进入，被盾，及时截图留言反馈！！等待后续版本更新")
//           delay(1);
//            className("android.widget.Image").text("1649814918149f13").find().click()
//          sleep(2)
//          className("android.widget.Image").text("1649814918149f13").find().click()
//    sleep(2)
//          className("android.widget.Image").text("1658819152389434").find().click()
//    delay(1);
//             bounds(45,456,198,621).depth(16).find().click()
//              sleep(2)
//             bounds(45,456,198,621).depth(16).find().click()
//     sleep(2)
//             bounds(41,429,181,580).depth(17).find().click()
//      delay(1);
//             className("android.widget.Image").text("16526814338009ec").find().click()
//              sleep(2)
//             className("android.widget.Image").text("16526814338009ec").find().click()
//    delay(1);
//             className("android.widget.Image").text("16501128103d4eef").find().click()
//              sleep(2)
//             className("android.widget.Image").text("16501128103d4eef").find().click()
//   delay(1);
//    click_text_element("申购领小茅运",is_wait=false)
//    delay(1);
//   var maoyun01_draws = className("android.view.View").text("申购领小茅运").find() 
//     // toast("继续尝试查找中，等待…………")
//     //log("本次领取入口有:",maoyun01_draws.length)
//     for(let maoyun01_draw of maoyun01_draws){
//         log("文本:",maoyun01_draw.text())
//         if(maoyun01_draw.text()==='申购领小茅运'){      
//            //toast("查找中")
//         		maoyun01_draw.click()        
//         }else{
//            bounds(45,456,198,621).depth(16).find().click()
//            delay(1);
//         		 className("android.widget.Image").text("16526814338009ec").find().click()
//              sleep(2)
//             className("android.widget.Image").text("16526814338009ec").find().click()
//       toast("换种方式进入日程若仍然未进入，被盾，及时截图留言反馈！！等待后续版本更新")   
//          delay(1);
          
//         }
//     }
//   delay(1);
//         // var maoyun_draws = className("android.widget.TextView").text("领取耐力").find() 
//        var maoyun_draws = className("android.view.View").text("领取耐力").find() 
//     log("本次领取耐力入口有:",maoyun_draws.length)
//    delay(1);
//    // toast("继续尝试查找中，等待…………")
//      for(let maoyun_draw of maoyun_draws){
//         log("文本:",maoyun_draw.text())
//         if(maoyun_draw.text()==='领取耐力'){
//             log("点击领取")
//           maoyun_draw.click()
//           text("领取耐力").findOne(1000)
//           click_text_element("领取耐力",is_wait=false)
      
//        //   text("领取").find(1000).click()                 
//         toast("换种方式继续尝试‘领取’，新成功领取耐力")
//         //  toast("换种方式继续尝试‘领取’，新成功领取耐力")
//           log("换种方式继续尝试‘领取’，新成功领取耐力")
//             delay(1);
//           // continued_draw()
       
//         }else{ 
           
//           toast("尝试查找连续申购7天小茅运，耐心等待…………")
//           //continued_draw()
       
//         }
 
//      }
//    continued_draw()
  
  delay(1);
  // back()
  //sleep(2000)
 // back()
  back_main_page()
   text("我的").waitFor()
  //sleep(2000)
	click_text_element("我的",is_wait=false)
  delay(2);
   text("我的小茅运").waitFor()
//  sleep(1000)
 
  console.show();
  //获取所有的item元素
 //  delay(1);
  click_text_element("我的服务",is_wait=true)
 // var mubiaoshu = 1;//小茅运遍历1
   text("我的订单").waitFor()
  delay(2);
  var rooot = className("android.widget.TextView").depth(14).drawingOrder(3).indexInParent(2).enabled(true).find();
  var b_coin = queryList_0(rooot,1);
   toast("小茅运:" + b_coin);
   log("小茅运:" + b_coin);
//  var mubiaoshu = 2; //耐力值遍历2
 // let rooot = className("android.widget.TextView").depth(14).drawingOrder(3).enabled(true).find()
  var b_energy = queryList_0(rooot,2);
  log("耐力值1:" + b_energy);
  //  toast("耐力值:" + b_energy)
  var resultss = "当前现有:小茅运"+b_coin+"---&&---"+"耐力值"+b_energy;
  // log(resultss)
   toast(resultss);
  className("android.widget.TextView").depth(13).findOne(0).click();
  //click_text_element("已实名",is_wait=false)
  id("avatar").find().click();
  sleep(2)
  id("avatar").find().click();
  delay(2);
  //click_text_element("手机号",is_wait=false)
 // var mubiaoshu = 1;//姓名1 手机号2
  var rooot = className("android.widget.TextView").depth(9).drawingOrder(2).enabled(true).find();
  var username = queryList_0(rooot,1);
  //var usernames = queryList().parent()
  back();
 // send_wx_msg("软件"+group_name01 + " ，  账号：" + username + resultss)
  console.info("账号：" + username +" \n "+ resultss);
  	//返回
//   	back_main_page()
    delay(1);
//   home()
  return resultss;
  //var resultss = "领取后:小茅运 "+b_coin+" && "+"耐力值 "+b_energy
 // send_wx_msg(resultss)
}


 //申购连续满足7/14/21/28天领取小茅运
 function continued_draw(){  
   toast("继续查找中，等待…………")
    delay(1);
    function get_leiji(json) {
    for (var i = 0; i < json.length; i++) {
        var sonList = json[i];
        if (sonList.childCount() == 0) {
          //  console.log(json[i])
           var a_leiji = json[i].text()
           log("元素："+a_leiji)
           if(a_leiji=="领取"){ 
            console.info("找到" + a_leiji + "并点击："+a_leiji)    
             toast("找到" + a_leiji + "并点击："+a_leiji)
             click_text_element(a_leiji,is_wait=false);
            delay(1);
           }
        //  break
        } else {
            get_leiji(sonList);
        }
    }
   return a_leiji 
}
    delay(2);
 let leiji = className("android.view.View").depth(17).indexInParent(5).drawingOrder(0).find()
//  let leiji = find();
   var jianduanleiji = get_leiji(leiji);
   //my_click_non_clickable("领取");
    delay(2);
   let leiji0 = className("android.view.View").depth(17).indexInParent(4).drawingOrder(0).find()
   var jianduanleiji0 = get_leiji(leiji0);
   //click_text_element("16535352520cafb7",is_wait=false)
    delay(2);
    var maoyun010_draws = className("android.view.View").text("申购领小茅运").find() 
     toast("继续尝试查找是否优7天待领取，等待…………")
    log("本次连续7天领取入口有:",maoyun010_draws.length)
    for(let maoyun010_draw of maoyun010_draws){
        log("文本:",maoyun010_draw.text())
        if(maoyun010_draw.text()==='申购领小茅运'){
        let index = 0;
         while(index<22){
          // toast("继续查找中，等待…………")
           var a0 = index
           log(a0)
           var b0 = index+7
           log(b0)
           var c0 = 7+"/"+b0
           log(c0)
            delay(1);
          // queryList_click(find(),"领取");
          //className("android.view.View").text(c0).find().click()
           sleep(2)
          //className("android.view.View").text(c0).find().click()
           //  sleep(300)
    toast("继续尝试查找中，等待…………")
     if(text(c0).findOne(1000)){
            log("点击领取")
       //toast("继续查找中，等待…………")
          click_text_element(c0,is_wait=false)
        delay(0.5);
         //text(c0).findOne(1000)
         // click_text_element(c0,is_wait=false)
        toast("循环查找满足7天的‘领取’")
          log("循环查找满足7天的‘领取’")
       // break
        }else{
         // toast("继续尝试查找中，等待…………")
          toast("多次循环无领取发现，请手动查询确认")
          log("多次循环无领取发现，请手动查询确认")
          // break
        }
    log("-----------------------------------------------------")
  	index+=7;
  }
       }else{
      
       break
        }
      }
   
 }

//遍历取目标(茅运/耐力值等) json.length
function queryList_0(json, mubiaoshu) {
    for (var i = 0; i < mubiaoshu; i++) {
        var sonList = json[i];
        if (sonList.childCount() == 0) {
          //  console.log(json[i])
           var a_coin = json[i].text()
          // log("小茅运"+a_coin)
        //  break
        } else {
            queryList_0(sonList);
        }
    }
      //返回结果值
      return a_coin
     
}
//遍历取目标
  function queryList(json) {
    for (var i = 0; i < json.length; i++) {
        var sonList = json[i];
        if (sonList.childCount() == 0) {
          //  console.log(json[i])
           var a_energy = json[i].text()
          // log("耐力值"+a_energy)
          
        } else {
            queryList(sonList);
        }
    }
    // 返回结果值
     return a_energy
}

//小时+分钟，定时任务
function setScheduledTask(hour, minute, callTask) {
    let taskTime = new Date();
    taskTime.setHours(hour);
    taskTime.setMinutes(minute);
    let timeDiff = taskTime.getTime() - (new Date()).getTime(); // 获取时间差
    timeDiff = timeDiff > 0 ? timeDiff : (timeDiff + 24 * 60 * 60 * 1000);
    setTimeout(function() {
        callTask(); // 首次执行
        setInterval(callTask, 24 * 60 * 60 * 1000); // 24小时为循环周期
    }, timeDiff); 
}

//申购
// function maoyun_draw_1(){
// 			//定义子线程
// 		threads.start(function(){
//          log("领取查询小茅运。。。")
//    			 maoyun_draw()
// 		})
// }
function buy_task(){
			//定义子线程
		threads.start(function(){
         log("申购任务。。。")
   			 purchase_buy()
		})
}
//查询
function result_task(){
		threads.start(function(){
   			log("查询任务。。。")
      	purchase_result()
		})
}

//2个定时任务
// 购买
// setScheduledTask(hour_buy, minute_buy, buy_task);
// 查询结果
// setScheduledTask(hour_result, minute_result, result_task);


var ta = hamibot.env.alltime*1;
if(!ta || ta <=0) ta = 1500; 
var thread = null;
function rt(){
    var num = 0;
    while(true){
        num++;
        console.log('设置脚本运行最长时间为：' + ta+'s');
        device.keepScreenOn(ta*1000+60000);
        thread = threads.start(function(){
          var start = new Date().getTime(); //程序开始时间
                  
          //购买
          if(run_type=='buy'){
	          //  buy_task();
             purchase_buy()
               }
                  //查询结果
           else{
	        // result_task();
             purchase_result()
           }
       
           end = new Date().getTime();
    console.log("运行结束,共耗时" + (parseInt(end - start)) / 1000 + "秒");
          back_main_page()   //返回主页
          click_text_element("首页",is_wait=false)
    console.log("3s后自动关闭悬浮窗，查看日志请到hamibot内查看");
   sleep(3000);
    console.hide();
    device.cancelKeepingAwake();
    home();
  
    hamibot.exit();
    exit();
        })
        thread.join(ta*1000);
        thread.interrupt();
        console.error('脚本超时或者出错！！！重启脚本--');
      
        if (!(launchApp('i茅台') || launch('com.moutai.mall'))) //启动app
        {}
        console.info('等待10s后继续开始');
        toast('等待10s后继续开始');
        sleep(10000);
      back_main_page();
       // back_table();
        toast(' ');
        if(num>3) break;
    }
    console.error('已经重新运行了3轮，停止脚本');
  //  question_list = null;
    console.error('无障碍服务可能出了问题或push推送出了问题');
   back_main_page();
   home();
    exit();
}
rt();


//查询






