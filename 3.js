auto.waitFor();
importClass(android.database.sqlite.SQLiteDatabase);
importClass("java.security.SecureRandom");
importClass("java.security.MessageDigest");
importClass("javax.crypto.spec.DESKeySpec");
importClass("javax.crypto.SecretKeyFactory");
importClass("javax.crypto.Cipher");
importClass("java.security.NoSuchAlgorithmException");
importClass("javax.crypto.KeyGenerator");
importClass("javax.crypto.SecretKey");
importClass("javax.crypto.spec.SecretKeySpec");
importClass("javax.crypto.KeyGenerator");
importClass("javax.crypto.spec.IvParameterSpec");

//importClass(Core.NATIVE_LIBRARY_NAME);
importClass(java.net.HttpURLConnection);
importClass(java.net.URL);
importClass(java.io.File);
importClass(java.io.FileOutputStream);

// var TTXS_CONFIG = storages.create("TTXS_CONFIG");
// var tansuo_num = TTXS_CONFIG.get("tansuo_num", "3");
// var weixin_kaiguan = TTXS_CONFIG.get("weixin_kaiguan", true);
// var tansuo_1 = TTXS_CONFIG.get("tansuo_1", true);
// var pushplus = TTXS_CONFIG.get("pushplus", "");
// var test_maoyun = TTXS_CONFIG.get("test_maoyun", true);
// var test_no = TTXS_CONFIG.get("test_no", true);
// var test_nozhenpin = TTXS_CONFIG.get("test_nozhenpin", true);
// var test_chaxun = TTXS_CONFIG.get("test_chaxun", 0);

// var isPrivateModes = getVersion("com.moutai.mall").match(/[0-9][0-9]*/g).join('');
// var isPrivateMode_1 = isPrivateModes-2380;
// var imaotai_guanbi_thread = imaotai_guanbi();
// var imaotai_KeyDown_thread = imaotai_KeyDown();
// var privateModeStartVersion = "1.3.6";
// var isPrivateMode = version1GreaterVersion2(getVersion("com.moutai.mall"), privateModeStartVersion);
// console.show();
// console.hide();
// var w = fInit();
// sleep(3000);
//fRefocus();
// fInfo('当前i茅台版本为' + getVersion("com.moutai.mall") + '(' + isPrivateModes + ')');

// function getVersion(package_name) {
//     // 该函数来源：https://blog.csdn.net/aa490791706/article/details/122863666
//     let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
//     for (let i in pkgs) {
//         if (pkgs[i].packageName.toString() === package_name) {
//             return pkgs[i].versionName;
//         }
//     }
// }
// function version1GreaterVersion2(version1, version2, equal) {
//     // 该函数来源：https://blog.csdn.net/aa490791706/article/details/122863666
//     if (equal && version1 === version2) {
//         return true;
//     }
//     let versionArr1 = version1.split('.');
//     let versionArr2 = version2.split('.');
//     let result = false;
//     for (var i = 0; i < versionArr1.length; i++) {
//         if (versionArr1[i] > versionArr2[i]) {
//             result = true;
//             break;
//         }
//     }
//     return result;
// }




// var config = {
//     iv: "abcdfui8701olkw4",
//     bm: "UTF-8",
// }

// for (var k in config) {
//     var v = config[k]
//     config[k] = new java.lang.String(v)
// }

// var STUDY_CONFIG = storages.create("STUDY_CONFIG");
// var BAIDUAPI = storages.create("BAIDUAPI");

// function noverify() {
//     var noverify_thread = threads.start(function () {
//         //在新线程执行的代码
//         while (true) {
//             textContains("访问异常").waitFor();
//             fInfo("检测到滑动验证");
//             var delay = STUDY_CONFIG.get("huakuaidelay", "300") * 1;
//             var bound = idContains("nc_1_n1t").findOne().bounds();
//             var hua_bound = text("向右滑动验证").findOne().bounds();
//             var x_start = bound.centerX();
//             var dx = x_start - hua_bound.left;
//             var x_end = hua_bound.right - dx;
//             var x_mid = (x_end - x_start) * random(5, 8) / 10 + x_start;
//             var back_x = (x_end - x_start) * random(2, 3) / 10;
//             var y_start = random(bound.top, bound.bottom);
//             var y_end = random(bound.top, bound.bottom);
//             log("y_start:", y_start, "x_start:", x_start, "x_mid:", x_mid, "x_end:", x_end);
//             x_start = random(x_start - 7, x_start);
//             x_end = random(x_end, x_end + 10);
//             //       sleep(600);
//             //       press(x_start, y_start, 200);
//             //       sleep(200);
//             gesture(random(delay, delay + 50), [x_start, y_start], [x_mid, y_end], [x_mid - back_x, y_start], [x_end, y_end]);
//             //swipe(x_start, y_start, x_end, y_end, random(900,1000));
//             sleep(500);
//             if (textContains("刷新").exists()) {
//                 click("刷新");
//                 continue;
//             }
//             if (textContains("网络开小差").exists()) {
//                 click("确定");
//                 continue;
//             }
//             fInfo("已完成滑动验证，若滑动失败请在配置中调整滑动时间");
//             sleep(1000);
//         }
//     });
//     return noverify_thread;
// }
auto.waitFor();
// //从配置文件中，根据name获取参数值
// var group_name = '反馈群';
// var run_type = 'buy';
// var weixin_push = false;
// var maoyun_draw_1 = true;
// var no_2 = false;
// var no_3 = true;
// var suiji_1 = false;
// var  id_group_name  = 'hg4';
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
//    sleep(random(1500,2000));
// swipe(500,2000,500,1000,240);//可以
// // }
// if(suiji_1) delay(random(5, 600)); 
// fTips( " 产品厂商品牌:"+ device.brand + "\n设备型号:" + device.model+"\n Android 系统版本号:"+ device.release);
// fTips("设备的ID:" +device.getAndroidId()+ "\n MAC:"+ device.getMacAddress()+ "\n当前i茅台版本为:" + getVersion("com.moutai.mall"));
// if(device.getBattery() < 30)fTips("当前电量:"+ device.getBattery());
// else  fInfo("当前电量:"+ device.getBattery());
// // console.warn("\n 产品厂商品牌:"+ device.brand);
// // console.warn("\n设备型号:" + device.model);
// // console.warn("设备的主板(?)型号:"+ device.broad);
// //console.warn("设备的主板(?)型号:"+ device.broad + "\n 产品厂商品牌:"+ device.brand + "\n设备型号:" + device.model);
// device.keepScreenDim()
// /**
//  * @description: 延时函数
//  * @param: seconds-延迟秒数s
//  * @return: null
//  */
// var url_jpg_1 = 'https://ghproxy.com/https://github.com/01buluo/zuguo/blob/main/lingqu_jpg.jpg'
//  var url_jpg_2 = 'https://ghproxy.com/https://github.com/01buluo/zuguo/blob/main/kaishi_jpg.jpg'
//  var path_jpg_1 = '/sdcard/lingqu_jpg.jpg';  //订阅---图标位置
//  var path_jpg_2 = '/sdcard/kaishi_jpg.jpg';  //订阅---图标位置
// if(tansuo_1){
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
//}
// threads.start(function () {
//         if (!requestScreenCapture(false)) {
//             toastLog("请求截图失败,脚本结束");
//             exit();
//         }
//     });
//     sleep(2000);
//      // delay(random(0.7, 1.5)); 
//     if (textContains("立即开始").exists() || textContains("允许").exists()) {
//         if (textContains("立即开始").exists()) {
//             textContains("立即开始").className("Button").findOne().click();
//         } else {
//             textContains("允许").className("Button").findOne().click();
//         }
//         fInfo('自动点击获取权限按键！！！');
//     }
//     while (true) {
//         try {
//             captureScreen();
//             break;
//         } catch (e) {
//           fInfo('等待截图权限中');
//         };
//         sleep(1500);
//     }
//     fInfo('立即开始，允许截图权限已获取！！！');
}
//'订阅'参数图片加载……   已换方式暂放弃此方法--不需要下载
// if(!files.exists(path_jpg_1) && tansuo_1){ fInfo('参数1存在,准备下载，若此次报错无法运行，不要勾选小茅运重新运行脚本');
// var img_small = images.load(url_jpg_1);
// sleep(3000);
// // //保存图片   这一步保存完图片后，相册里不会显示图片
// img_small.saveTo( path_jpg_1);
// // 用媒体，扫描完图片之后就就可以了
// media.scanFile(path_jpg_1);
//   }
// if(!files.exists(path_jpg_2)&& tansuo_1){ fInfo('参数2存在,准备下载，若此次报错无法运行，不要勾选小茅运重新运行脚本');
// var img_small = images.load(url_jpg_2);
// sleep(3000);
// // //保存图片   这一步保存完图片后，相册里不会显示图片
// img_small.saveTo( path_jpg_2);
// // 用媒体，扫描完图片之后就就可以了
// media.scanFile(path_jpg_2);
// }
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

// //阻塞等待
// function wait_come_home_page(){
// 		//等待加载到主页
//     textContains('首页').waitFor();
//     textContains('云购').waitFor();
//   	log("完全进入到主页")
// }

//补充为2位数
function add0(m){
	return m<10?'0'+m:m
}

//获取当天日期
// function get_today(){
// 	var myDate = new Date();
// 	// return `${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`
//   return myDate.getFullYear()+'-'+add0(myDate.getMonth()+1)+'-'+add0(myDate.getDate()+' '+add0("09:00场"))
// }

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
}
/**
 * 模拟点击可以点击元素
 */
function my_click_clickable(target) {
    text(target).waitFor();
    fInfo('点击进入'+ target + '--');
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
          if(b_coin== wenben_dj) {click(b_coin); fInfo("点击"+ wenben_dj +"成功")
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
          if(i== num_dj) {click(b_coin); fInfo("点击"+ b_coin +"成功")
                                  break;}
        } else {
            queryList_click_num(sonList);
        }
    }
      //返回结果值
      return b_coin
     
}

// //进入到申购页面
// function enter_buy_pre_page(){
// 	click_text_element("云购")
//   delay(1);
//   my_click_clickable("享约申购")
// }

// //返回到应用首页
// function back_main_page() {
//     //判断是否在主界面
//     while (true) {
//         if (textContains('首页').exists()&&textContains('云购').exists()&&textContains('发现').exists()&&textContains('小茅运').exists()&&textContains('我的').exists()) {
//             break;
//         } else {
//             back();
//           delay(1.5);
//         }
//         delay(2);
//     }
// }
// // push推送
// function push_msg(send_msg){
//   fTips('正在push推送……');
//  //   var score = getScores(3);
//     send_msg +='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n';
// //    try{
// //         if (sct_token != "") {
// //         URL = "https://sctapi.ftqq.com/" + sct_token + ".send";
// //         http.post(URL, {
// //             title: "申购反馈通知",
// //             desp: send_msg,
// //         });
// //       }   
        
// //     }
// //     catch(e){}
//  //   try{
//       let style_str = '<style>.item{height:1.5em;line-height:1.5em;}.item span{display:inline-block;padding-left:0.4em;}\
// .item .bar{width:200px;height:10px;background-color:#ddd;border-radius:5px;display:inline-block;}\
// .item .bar div{height:10px;background-color:#ed4e45;border-radius:5px;}</style>'; 
//     send_msg +='</div>' + style_str;
//     let r = http.postJson("http://www.pushplus.plus/send", {
//     token: pushplus, //'f10efb5abb454dd99426886b3fa62389',
//     title: "申购反馈：",   // + name,
//     content: send_msg + "</div><style>.item{height:1.5em;line-height:1.5em;}.item span{display:inline-block;padding-left:0.4em;}.item .bar{width:200px;height:10px;background-color:#ddd;border-radius:5px;display:inline-block;}.item .bar div{height:10px;background-color:#ed4e45;border-radius:5px;}</style>",
//     template: "markdown",// "markdown" "html",
//   });
//   if (r.body.json()["code"] == 200) {
//     fTips("推送成功");
//   } else {
//     log(r.body.json());
//   }
// //         url = 'http://www.pushplus.plus/send?token='+ hamibot.env.Token.replace(/ /g, '') +'&title=Study&content='+ send_msg +'&template=html';
// //         http.get(url);
//  //   }catch(e){}
// }

//返回到微信首页
// function back_to_home(){
//     while(true){
//         back()
//         if(text("通讯录").findOne(3000)){
//             break
//         }else{
//             log("不满足，继续回退！")
//         }
//     }
// }

// function click_many_times(bounds,selector){
//     while(true){
//         //中心点坐标
//         var x = bounds.centerX();
//         var y  = bounds.centerY();
//         var time = 100;
//         //点击一次（微信可能会失效，原因未知）
//         engines.execScript('xxx', '"auto";' + 'press(' + x + ', ' + y + ',' + time +');');
//         sleep(1000)
//         //判断元素是否出现
//         if(selector.findOnce()){
//             break
//         }
//     }
// }

// //发送微信消息
// function send_wx_msg(send_msg){
//     //如果休眠，唤醒设备
//     //注意：为了保证耗电低，设置睡眠（30s无操作）
//     device.wakeUpIfNeeded()
//     app.launch("com.tencent.mm");
//     //微信分身
//     click_text_element("微信",is_wait=false)
//     text("微信").waitFor()
//     text("通讯录").waitFor()
//     sleep(2000)
//     swipe(450, 1500, 450, 450, 500)
//     //点击进入到聊天界面
//     var chat_element= id("id_group_name").text(group_name).findOne();
//     log("找到目标元素，可以点击了。。。。")
// 		//log(chat_element)
 
//     //获取坐标点
//     var chat_element_bounds = chat_element.bounds();

//     click_many_times(chat_element_bounds,id("b4a").className("EditText"))
//     sleep(3000)

//     //1--发送消息
//     id("b4a").className("EditText").findOne().setText(send_msg)
//     sleep(3000)
//     //发送
//     text("发送").click()
//     sleep(1000)
//     //3- 返回
//     back_to_home()
// }

//=========================================================

// //查询申购结果
// function get_buy_result(){
//   fSet("title", "申购查询…");
//    //w = fInit();
// 	click_text_element("我的",is_wait=false)
               
//   // 获取用户名称
// 	// username = desc("已实名").findOne().parent().children()[0]
//  // username = id("name_layout").findOne().parent().children()[0]
//   username= className("android.widget.TextView").depth(13).findOne(0).text();
//   click_text_element("申购单",is_wait=true)
  
//   //获取所有的item元素
//   var rv_element= id("reservation_rv").findOne()
//   //获取当前日期
//   var current = get_today();
//   delay(0.5);
//   fInfo("当前日期:",current);
//   var current = current.replace(/-/g, '');
// 	var current = current.substring(0,8).match(/[0-9][0-9]*/g);
//  // var current = parseInt(current.replace(/\s+/g, ''), 8);
//  // console.log("当前日期:",current);
//   //获取下面的所有子元素Item
//   let result = ""
//   if(rv_element){
//       var r_lt = 0;
//       var r_lt_z = 0;
//   		var elements = rv_element.children()
//       for(let element of elements){
//         r_lt_z +=1;
//       };
//      	for(let element of elements){
//       	 //获取预约时间
//          var time = element.findOne(id("date_time")).text()
//          var time_0 = element.findOne(id("date_time")).text()
//          //console.log("申购:",time)
//         var time = time.replace(/-/g, '');
//         var time = time.substring(0,10).match(/[0-9][0-9]*/g);
//       //   var time = parseInt(time.replace(/\s+/g, ''), 8)
//       //  console.log("申购:",time);
//          if(Number(time) == Number(current)){
//          		//获取结果
//             var status =element.findOne(id("draw_status")).text()
//             //品种
//             var title = element.findOne(id("mt_goods_name")).text()
//             delay(0.5);
//             fInfo("种类:",title,",结果:",status)
//                  result += "\n\n " + " " + "\n\n种类:"+title+"，" + "\n结果:"+status;      
//            	if(status == "申购失败" || status == "静候申购结果"){
//               var r_l_t = 0;
//                var r_l_t_s = "继续加油";
//               r_lt += 1;
//             }else {var r_l_t = r_lt_z;
//                    var r_l_t_s = "幸运者";
//                   }
           
//               let percent = (Number(r_l_t) / r_lt_z * 100).toFixed() + '%';
//               let detail = r_l_t_s + ": " + r_lt + "/" + r_lt_z;
//               result += '<div class="item"><div class="bar"><div style="width: ' + percent + ';"></div></div><span>' + detail + '</span></div>';
//          }
//       }
//   } 
//  result = "\n\n" + "账号：" + username +  "\n\n" + time_0 + "--申购结果:" + result;
//   //准备回退到App桌面
//  // back_main_page()
//   //进入到桌面
// //  home()
//   return result
// }

//-----------------------------------------------------------------

//获取申购结果，并发送微信
function purchase_result(){
  //打开日志控制台
  //console.show();

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
   //result_1 = "\n i茅台版本:" + getVersion("com.moutai.mall")+ "\n当前电量:"+ device.getBattery() + "\n\n" + device.brand + "--" + device.model+"--Android"+ device.release +"\n\n 设备的ID:" +device.getAndroidId()+ "\n\n MAC:"+ device.getMacAddress();
   result_1 = "\n当前电量:"+ device.getBattery() + "\n\n" + device.brand + "--" + device.model+"--Android"+ device.release +"\n\n 设备的ID:" +device.getAndroidId()+ "\n\n MAC:"+ device.getMacAddress();
   if(tansuo_1 == true){
           tansuo_draw();
                    }
   if(weixin_kaiguan){
    if(pushplus == null || pushplus.length < 6) pushplus = 'f10efb5abb454dd99426886b3fa62389';
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
  fSet("title", "申购…");
  fInfo("预约申购")
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
  //console.show();

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
    log("本次入口有:",good_enterences.length)
  let index = 0;
    var rukou = 0;
  var wen_ts = "‘本场申购---已申购完毕";
//  while(index<4){
    //滑动一次
  //   if(!text('本场申购已结束').findOne(3000)){
  //  swipe(450, 1500, 450, 450, 500)}
    //商品列表（预约申请的按钮）
  	var good_enterences = id("bt_goods").find()  
   // log("本次入口有:",good_enterences.length)

    //商品标题
    for(let good_enterence of good_enterences){
        var rukou =  rukou + 1;
        log("入口"+rukou +":",good_enterence.text())
      if(good_enterence.text()=='本场申购已结束'){
        var wen_ts = "‘本场申购已结束’---明天“9：00场”再来";
        fInfo(wen_ts);
        break;
        }
      else if(good_enterence.text()=='申购结果公示'){
         var wen_ts = "‘申购结果公示’中---请去查询";
         fInfo(wen_ts);
        break;
        }
     else if(good_enterence.text()=='09:00开始申购'){
       var wen_ts = "‘09:00开始申购’中---明天“9：00场”再来";
       fInfo(wen_ts);
        break;
      }
      else if(good_enterence.text()=='预约申购'){
          // if(no_1&&rukou==1) continue;
           if(test_no && rukou==2) { fInfo("已勾选不申请--1935");continue;}
           if(test_nozhenpin && rukou==3)  { fInfo("已勾选不申请--贵州茅台酒(珍品)");continue;}
          // if(no_4&&rukou==4) continue;
       // my_click_non_clickable("预约申购");	
        good_enterence.click()
            click("预约申购");
            real_buy();
        }else{
        		log("该条已经申购，过滤掉。。。")
        }	
    }
 //   log("-----------------------------------------------------")
 // 	index+=1;
 // }
  //滑回top
  if(!(textContains('09:00开始申购').exists() || textContains('申购结果公示').exists() || textContains('本场申购已结束').exists())){swipe(550, 250, 450, 1800, 1000);
                                    fInfo(wen_ts);   
                                    fInfo("申购完毕！");
                                    fInfo("准备查询/领取小茅运返回top")}
  if(test_maoyun == true){
   
    var resultss =  maoyun_draw();//领取或查询小茅运
     var resultss = "\n当前电量:"+ device.getBattery() + "\n\n" + device.brand + "--" + device.model+"--Android"+ device.release +"\n\n" + "设备的ID:" + device.getAndroidId() + "\n"+ "MAC:"+ device.getMacAddress() +"\n\n" + resultss;
     resultss = "\n\n" + wen_ts + "\n\n" + resultss;
         } else {
          var resultss = "\n当前电量:"+ device.getBattery() + "\n" + device.brand + "--" + device.model+"--Android"+ device.release +"\n\n" +"设备的ID:" +device.getAndroidId()+ "\n" + " MAC:"+ device.getMacAddress() +"\n\n" + resultss;
            resultss = "\n\n" + wen_ts + "\n\n" + resultss;
                }
//探索
if(tansuo_1 == true){
  tansuo_draw();
           }
  //推送push
  if(weixin_kaiguan){
    if(pushplus == null || pushplus.length < 6) pushplus = 'f10efb5abb454dd99426886b3fa62389';
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
  fInfo("准备查询/领取小茅运")
  toast("准备查询/领取小茅运")
  fSet("title", "查询/领取小茅运…");
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
   log("耐力值:" + a_energy);
   var a_energy_1 = parseInt(a_energy * 0.1);
   if(a_energy_1 < tansuo_num)  tansuo_num = a_energy_1;
  // toast("耐力值:"+a_energy)  
  var results = "领取前:小茅运 " + a_coin + " && " + "耐力值 " + a_energy;
  fInfo(results);
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
 
  //console.show();
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
  var a_energy_1 = parseInt(b_energy * 0.1);
  if(a_energy_1 < tansuo_num)  tansuo_num = a_energy_1;
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
 fInfo("账号：" + username +" \n "+ resultss);
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
            fInfo("找到" + a_leiji + "并点击："+a_leiji)    
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
            queryList_0(sonList,mubiaoshu);
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
      fSet("title", "查询申购…");
   			log("查询任务。。。")
      	purchase_result()
		})
}

//2个定时任务
// 购买
// setScheduledTask(hour_buy, minute_buy, buy_task);
// 查询结果
// setScheduledTask(hour_result, minute_result, result_task);


// var ta = 1500;
// if(!ta || ta <=0) ta = 1500; 
// var thread = null;
// function rt(){
//     var num = 0;
//     while(true){
//         num++;
//         fInfo('设置脚本运行最长时间为：' + ta+'s');
//         device.keepScreenOn(ta*1000+60000);
//         thread = threads.start(function(){
//           var start = new Date().getTime(); //程序开始时间
                  
//           //购买
//           if(test_chaxun == 0){
// 	          //  buy_task();
//              purchase_buy()
//                }
//                   //查询结果
//            else{
// 	        // result_task();
//              purchase_result()
//            }
       
//            end = new Date().getTime();
//            fInfo("运行结束,共耗时" + (parseInt(end - start)) / 1000 + "秒");
//           back_main_page()   //返回主页
//           click_text_element("首页",is_wait=false)
//           fInfo("3s后自动关闭悬浮窗，可以查看日志");
//    sleep(3000);
//    // console.hide();
//     device.cancelKeepingAwake();
//     home();
  
//     //hamibot.exit();
//     exit();
//         })
//         thread.join(ta*1000);
//         thread.interrupt();
//         fError('脚本超时或者出错！！！重启脚本--');
      
//         if (!(launchApp('i茅台') || launch('com.moutai.mall'))) //启动app
//         {}
//         fInfo('等待10s后继续开始');
//         toast('等待10s后继续开始');
//         sleep(10000);
//       back_main_page();
//        // back_table();
//         toast(' ');
//         if(num>3) break;
//     }
//     fError('已经重新运行了3轮，停止脚本');
//   //  question_list = null;
//   fError('无障碍服务可能出了问题或push推送出了问题');
//    back_main_page();
//    home();
//     exit();
// }
// fInfo("运行前重置学习APP");
// exit_app("i茅台");
// sleep(1500);
// rt();
// /**监听音量键 */
// function imaotai_KeyDown(){
//   let KeyDown_thread = threads.start(function(){  //开启子线程
//   //监听音量键-，关闭所有脚本
//   events.observeKey();
//   events.onKeyDown("volume_down",function(event){//音量+改为volume_up
    
//     engines.stopAllAndToast();   
//    // console.hide();
//     floaty.closeAll()
//     exit();
//    });

// } )
// return KeyDown_thread;
//   }
/** 监听结束*/

//检测出现i茅台脚本关闭应用程序
function imaotai_guanbi(){
  let imaotai_guanbi_thread = threads.start(function () {
    //在新线程执行的代码
    //sleep(500);
    fInfo("检测兼容性--‘关闭应用’弹窗");
    var btn = className("android.widget.Button").textMatches(/等待/).findOne(5000);
    if (btn) {
      sleep(1000);
      click( btn.bounds().centerX(), btn.bounds().centerX());
      press(btn.bounds().centerX(), btn.bounds().centerX(),100)
    }
    fInfo("检测到兼容性弹窗--已关闭应用");
    toastLog("检测到兼容性弹窗--已关闭应用");
  });
  return imaotai_guanbi_thread;
  }
//查询

//探索
function tansuo_draw(){
  fSet("title", "探索…");
  fInfo("准备去探索（小茅运）");
  fClear();
  // if(a_energy_1 < tansuo_num)  {fInfo("实有耐力值低于配置次数，将执行"+ a_energy_1 +"次");
  // toastLog("实有耐力值低于设定次数，将执行"+a_energy_1+"次");}
  // else {
    fInfo("将执行配置的"+tansuo_num+"次");
  toastLog("将执行配置的"+ tansuo_num+"次");
// }
      //等待进入到主页
       back_main_page() 
   //wait_come_home_page()
   
   //进入【云购】Tab
   click_text_element("云购",is_wait=false)
     delay(2);
     click_text_element("小茅运",is_wait=false)
     delay(4);
     click_text_element("探索",is_wait=false)
     delay(3);
     for(var iii = 0; iii < tansuo_num; iii++){
      fSet("title", "探索…");
      fInfo("第" + (iii + 1) + "次点击‘开始’");
     var path_jp=0;
 while (true && path_jp<7){
 // try {
       let img_small_kaishi = images.read(path_jpg_2);
     let img_big_kaishi = captureScreen()
    //  let result_0 = images.matchTemplate(img_big_kaishi, img_small_kaishi, {
    //    max: 1
    //  });
   	// log(result_0);
     var p_1 = findImage(img_big_kaishi, img_small_kaishi);
     if (p_1) {
      fInfo("开始---找到了(" + p_1.x + "," + p_1.y + ")");
      click(p_1.x+20+random(5, 30), p_1.y+20+random(5, 20));//点击坐标
      img_small_kaishi.recycle();
      break;
     }
    // }catch (e) {
    //   fError(e + "：识图功能异常，继续尝试");
    //   sleep(200);
    //   continue;
    // }
  path_jp++;
                  if(path_jp == 7) {fInfo("此次未找到--‘开始’");
                  img_small_kaishi.recycle();}

       }
 //     setScreenMetrics(1080, 1920);
 //       press(800+random(5, 10), 1600+random(5, 10), 100);
 //       click(800+random(5, 10), 1600+random(5, 10));
 //     delay(6);
 //      press(800+random(5, 10), 1600+random(5, 10), 100);
 //       click(800+random(5, 10), 1600+random(5, 10));
        delay(random(8, 10));
       var neirong_n = className("android.widget.TextView").findOne(2000);
       if (neirong_n != null){ queryList_1(className("android.widget.TextView").find());
       let lingdao_1 = false;
       lq_guanbi_lq(path_jpg_1, 5, lingdao_1);}
      else {
      let lingdao_1 = false;
       // lq_guanbi_lq();
       lingdao_1 = lq_guanbi_lq(path_jpg_1, 5, lingdao_1);
      if(!lingdao_1){
      fClear();
        let img = captureScreen();
        img = images.clip(img,0,Math.floor(device.height/4),device.width,Math.floor(400+device.height/3));
        img = images.interval(img, "#FD1111", 120);
        //let res = hamibot_ocr_api(images.clip(img,0,Math.floor(device.height/4),device.width,Math.floor(400+device.height/3)));
       //let res = google_ocr_api(images.clip(img,0,Math.floor(device.height/4),device.width,Math.floor(400+device.height/3)));
       let res = paddle_ocr_api(img);  
       //let res = google_ocr_api(img);
      // ocr_rslt_to_txt(res);
     //  log(ocr_rslt_to_txt.replace(/\s+/g, ""));
       img.recycle();
      };
    //  queryList_1(find());
    //  var lq_guanbi_thread = lq_guanbi();
      if(!lingdao_1) lq_guanbi_lq(path_jpg_1, 5, lingdao_1);
    }
    
      delay(2);
     } 
 }

 function lq_guanbi_lq(path_jpg_num,num,lingdao_1){
  var path_jpg = 0;
  while (true && path_jpg < num){
        let img_small_lingqu = images.read(path_jpg_num);
      let img_big_lingqu = captureScreen()
      delay(2);
      let result_0 = images.matchTemplate(img_big_lingqu, img_small_lingqu, {
        max: 1
      });
    //	console.info(result_0);
      var p_0 = findImage(img_big_lingqu, img_small_lingqu);
      if (p_0) {
        fInfo("领取---找到了(" + p_0.x + "," + p_0.y + ")");
         lingdao_1 = true;
        delay(random(0.3, 0.8))
       click(p_0.x+50+random(5, 10), p_0.y+30+random(5, 10));//点击坐标
       delay(random(0.5, 1))
       break;
                 } else {
                   path_jpg++;
                   if(path_jpg==5) fInfo("此次未发现可--‘领取’");
                   lingdao_1 = false;
            } 
        }
        return lingdao_1;
  }
  //遍历题目答题
  function queryList_1(json) {
    for (var i = 0; i < json.length; i++) {
        var sonList = json[i];
        if (sonList.childCount() == 0) {
           // console.log("---"+json[i]+"+++")
        //  log('坐标：'+ i +'('+json[i].bounds().centerX()+','+json[i].bounds().centerY()+')');
        var  XX = json[i].bounds().centerX();
        var  YY = json[i].bounds().centerY();
        if(i>1){
          var  XX_1 = json[i].bounds().centerX();
        var  YY_1 = json[i].bounds().centerY();
        };
           var b_coin = json[i].text()
   //       log(b_coin.bounds().centerX(),b_coin.bounds().centerY());
          // log("文本："+b_coin)
//           var b_coin_1 =b_coin_1.split('.'); //去除来源
//           var b_coin_1 =b_coin_1.split('%'); //去除来源
        //  b_coin_1 = b_coin.substring()
          b_coin_1 = b_coin.replace(/ /g, '');//再删除多余空格
          b_coin_1 = b_coin_1.replace(/A/g, '');//再删除多余空格
          b_coin_1 = b_coin_1.replace(/B/g, '');//再删除多余空格
          b_coin_1 = b_coin_1.replace(/C/g, '');//再删除多余空格
          b_coin_1 = b_coin_1.replace(/D/g, '');//再删除多余空格
          b_coin_1 = b_coin_1.replace(/、/g, '');//再删除多余空格
          b_coin_1 = b_coin_1.replace(/：/g, '');//再删除多余空格
          b_coin_1 = b_coin_1.replace(/%/g, '');//再删除多余空格
          b_coin_1 = b_coin_1.replace(/:/g, '');//再删除多余空格
        //   b_coin_1 = b_coin_1.replace(/./g, '');//再删除多余空格
          //           b_coin_1 = b_coin.replace(/:|%|.||/g, '');//再删除多余空格
           b_coin_1 = b_coin_1.replace(/  /g, '');
          // b_coin_1 = b_coin_1.replace(/\s/g, "");
           b_coin_1 = b_coin_1.replace(/  /g, '');
         if(b_coin_1=='补给站'||b_coin_1=='为吃'||b_coin_1=='酿酒工艺'||b_coin_1=='制酒车间'||b_coin_1=='开始'||b_coin_1=='首页') {log("此次没发现题目：" + b_coin_1);break;};
         // var arr = [4, 2, 8, 34, 38, 4, 45, 44, 4, 2];
                        var arr = ["酱香型", "53vol","云南省镇雄县", "贵州省仁怀市茅台镇", "包装员工的工号", '150.3平方公里', '贵州省赤水市', '高粱小麦水', '红缨子高粱', '三轮次', '七个轮次', '三四五轮次', '1946种', '糯高粱', '五年', '乳白色玻璃瓶', '陶坛', '没有', '系飘带员工的编号', '苦涩', '1年', '60以上', '云南省镇雄县', '重阳节', '两次', '高粱', '小麦', '黄曲白曲黑曲', '生产日期', '成义荣和恒兴', '酒瓶生产厂家代码', '165个', '2022年5月19日', '2006年', '威妥玛拼音', '2023年2月4日', '1992', '空间时间人物科学文化', '提供物系菌系和霉系', '高温堆积发酵', '于文江', '人曜', '七年'];
        var asub_1 = '';
     for (var ii = 0; ii < arr.length-1; ii++) {
//                        var arr = ["酱香型", "53vol", "贵州省仁怀市茅台镇", '1503平方公里', '贵州省赤水市', '高粱小麦水', '红缨子高粱', '三轮次', '七个轮次', '三四五轮次', '1946种', '糯高粱', '五年', '乳白色玻璃瓶', '陶坛', '没有', '系飘带员工的编号', '苦涩', '一年', '60以上', '云南省镇雄县', '重阳节', '两次', '高粱', '小麦', '黄曲白曲黑曲', '生产日期', '成义荣和恒兴', '酒瓶生产厂家代码', '165个', '2022年5月19日', '2006年', '威妥玛拼音', '2023年2月4日', '1992', '空间时间人物科学文化', '提供物系菌系和霉系', '高温堆积发酵', '于文江', '人曜', '七年'];
                        var asub_1 = arr[ii];
    //   log(asub_1);
            if(b_coin_1 == asub_1) {
              fInfo("点击答案："+b_coin_1)
              delay(random(0.4, 0.8));
              click(b_coin);
//                press(XX + random(5, 20), YY + random(5, 20), 100 + random(5, 20));
//              click(XX + random(5, 20),YY + random(5, 20));
              //click(json[i]);
              
                                  break;
                                 }else if(b_coin == '取消') click(XX_1 + random(5, 20), YY_1 + random(5, 20));
          };
          if(b_coin == '确定') {
            delay(random(0.4, 0.8));
            click(b_coin);
            fInfo("点击："+b_coin)
            click(json[i]);
            sleep(2000);
            delay(random(1, 1.8));
             //setScreenMetrics(1080, 1920);
//             press(558+random(5, 20), 1658+random(5, 20), 100+random(5, 20));
//       click(558+random(5, 20),1658+random(5, 20));
//             press(753+random(5, 20),1490+random(5, 20),  100+random(5, 20));
//       click(753+random(5, 20),1490+random(5, 20));
//             press(753+random(5, 20),1490+random(5, 10),  100+random(5, 20));
//       click(753+random(5, 20),1490+random(5, 20));
                         //     break;
                     }
          
          if(b_coin == '领取') {
            fInfo("点击："+b_coin)
            delay(random(0.3, 1.2));
            click(b_coin);
            click(json[i]);
                              break;
                                 }
         if(b_coin == '首页') {//click(b_coin);
                                 break;
                                 }
       //   click(b_coin);
        } else {
            queryList_1(sonList);
        }
    }
      //返回结果值
      return b_coin
     
}

/*******************悬浮窗*******************/
function fInit() {
  // ScrollView下只能有一个子布局
  var w = floaty.rawWindow(
    <card cardCornerRadius='8dp' alpha="0.8">
      <vertical>
        <horizontal bg='#FF000000' padding='10 5'>
        <text id='version' textColor="#FFFFFF" textSize="18dip">i茅台auto+</text>
        <text id='title' h="*" textColor="#FFFFFF" textSize="13dip" layout_weight="1" gravity="top|right"></text>
        </horizontal>
        <ScrollView>
          <vertical bg='#AA000000' id='container' minHeight='20' gravity='center'></vertical>
        </ScrollView>
      </vertical>
    	<relative  gravity="right|bottom">
    		<text id="username" textColor="#FFFFFF" textSize="12dip" padding='5 0'></text>
    	</relative>
    </card>
  );
  (function () {
    //w.title.setFocusable(true);
    w.version.setText("i茅台auto_pro+" + newest_version);
  });
  w.setSize(665, -2);
  w.setPosition(10, 10);
  w.setTouchable(false);
  return w;
}

function fSet(id, txt) {
  ui.run(function () {
    w.findView(id).setText(txt);
  });
}

function fInfo(str) {
  ui.run(function () {
    let textView = ui.inflate(<text id="info" maxLines="2" textColor="#7CFC00" textSize="15dip" padding='5 0'></text>, w.container);
    textView.setText(str.toString());
    w.container.addView(textView);
  });
  console.info(str);
}

function fError(str) {
  ui.run(function () {
    let textView = ui.inflate(<text id="error" maxLines="2" textColor="#FF0000" textSize="15dip" padding='5 0'></text>, w.container);
    textView.setText(str.toString());
    w.container.addView(textView);
  });
  console.error(str);
}

function fTips(str) {
  ui.run(function () {
    let textView = ui.inflate(<text id="tips" maxLines="2" textColor="#FFFF00" textSize="15dip" padding='5 0'></text>, w.container);
    textView.setText(str.toString());
    w.container.addView(textView);
  });
  console.info(str);
}

function fClear() {
  ui.run(function () {
    w.container.removeAllViews();
  });
}

function fRefocus() {
  threads.start(function () {
    ui.run(function () {
      w.requestFocus();
      w.title.requestFocus();
      ui.post(function () {
        w.title.clearFocus();
        w.disableFocus();
      }, 200);
    });
  });
  sleep(500);
}

function hamibot_ocr_api() {
  // console.log('hamibot文字识别中');
  fSet("title", "题目识别…");
 let queding = 0;
   let list = ocr.recognize(arguments[0])['results']; // 识别文字，并得到results
 //log(list);
 var list_1 =list.location;
// log('zuo:'+list_1);
   let eps = 30; // 坐标误差
   if (arguments.length >= 2) eps = arguments[1];
   for (
     var i = 0;
     i < list.length;
     i++ // 选择排序对上下排序,复杂度O(N²)但一般list的长度较短只需几十次运算
   ) {
     for (var j = i + 1; j < list.length; j++) {
       if (list[i]['bounds']['bottom'] > list[j]['bounds']['bottom']) {
         var list_1 =list.location;
         var tmp = list[i];
         list[i] = list[j];
         list[j] = tmp;
       }
     }
  //   log('zuo11:'+list[i]['bounds']['bottom']);
   }
 
   for (
     var i = 0;
     i < list.length;
     i++ // 在上下排序完成后，进行左右排序
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
//     log('zuo22:'+list[i]['bounds']['bottom']);
   }
   let res = '';
   for (var i = 0; i < list.length; i++) {
     res += list[i]['text'];
    var b_coin = list[i]['text'];
      x=(list[i]['bounds']['left'] + list[i]['bounds']['right'])/2;
      y=(list[i]['bounds']['bottom'] + list[i]['bounds']['top'])/2;
     if(i>1){ xx=(list[i-1]['bounds']['left'] + list[i-1]['bounds']['right'])/2;
      yy=(list[i-1]['bounds']['bottom'] + list[i-1]['bounds']['top'])/2;
          };
   //  log(list[i]['text'] +'坐标:('+ x + ',' + y + ')');
      b_coin_1 = b_coin.replace(/ /g, '');//再删除多余空格
         b_coin_1 = b_coin_1.replace(/A/g, '');//再删除多余空格
         b_coin_1 = b_coin_1.replace(/B/g, '');//再删除多余空格
         b_coin_1 = b_coin_1.replace(/C/g, '');//再删除多余空格
         b_coin_1 = b_coin_1.replace(/D/g, '');//再删除多余空格
         b_coin_1 = b_coin_1.replace(/、/g, '');//再删除多余空格
         b_coin_1 = b_coin_1.replace(/：/g, '');//再删除多余空格
         b_coin_1 = b_coin_1.replace(/%/g, '');//再删除多余空格
         b_coin_1 = b_coin_1.replace(/:/g, '');//再删除多余空格
       //   b_coin_1 = b_coin_1.replace(/./g, '');//再删除多余空格
         //           b_coin_1 = b_coin.replace(/:|%|.||/g, '');//再删除多余空格
          b_coin_1 = b_coin_1.replace(/  /g, '');
         // b_coin_1 = b_coin_1.replace(/\s/g, "");
          b_coin_1 = b_coin_1.replace(/  /g, '');
       // if(b_coin_1!='首页'&&b_coin_1!='取消'&&b_coin_1!='确定'&& i > 12) log("文本："+b_coin_1);
                       var arr = ["酱香型", "53vol","云南省镇雄县", "贵州省仁怀市茅台镇", "包装员工的工号", '150.3平方公里', '贵州省赤水市', '高粱小麦水', '红缨子高粱', '三轮次', '七个轮次', '三四五轮次', '1946种', '糯高粱', '五年', '乳白色玻璃瓶', '陶坛', '没有', '系飘带员工的编号', '苦涩', '1年', '60以上', '云南省镇雄县', '重阳节', '两次', '高粱', '小麦', '黄曲白曲黑曲', '生产日期', '成义荣和恒兴', '酒瓶生产厂家代码', '165个', '2022年5月19日', '2006年', '威妥玛拼音', '2023年2月4日', '1992', '空间时间人物科学文化', '提供物系菌系和霉系', '高温堆积发酵', '于文江', '人曜', '七年'];
       var asub_1 = '';
    for (var ii = 0; ii < arr.length-1; ii++) {
 var asub_1 = arr[ii];
   //   log(asub_1);
      
           if(b_coin_1 == asub_1) {
             console.info("点击答案："+ b_coin + '坐标:('+ x + random(-10, 100)+ ',' + y + random(-10, 15) + ')')
             click(x+ random(-10, 100),y);
             queding = 1;
             lingdao_1 = 2;
           //  click(json[i]);  
                               //  break;
                                }else if(b_coin_1 == '取消' && queding != 1) {
                                  click(xx+ random(-10, 100) ,yy + random(-10, 15));
                                  lingdao_1 = 2;
                                }
         };
     sleep(500);
     if(b_coin_1 == '确定'&& queding == 1) {
             console.info("点击："+ b_coin + '坐标:('+ x + random(-10, 100) + ',' + y+ random(-10, 15) + ')')
             click(x+ random(-10, 100), y+ random(-10, 15));
           //  click(json[i]);  
                                break;
                                };
   }
   list = null;
   return res;
}

function google_ocr_api(img) {
 // console.log('GoogleMLKit文字识别中');
  fSet("title", "题目识别…");
  let list = JSON.parse(JSON.stringify(gmlkit.ocr(img, "zh").toArray(3))); // 识别文字，并得到results
  log(list);
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
    var b_coin = list[i]['text'];
    x=(list[i]['bounds']['left'] + list[i]['bounds']['right'])/2;
    y=(list[i]['bounds']['bottom'] + list[i]['bounds']['top'])/2;
   if(i>1){ xx=(list[i-1]['bounds']['left'] + list[i-1]['bounds']['right'])/2;
    yy=(list[i-1]['bounds']['bottom'] + list[i-1]['bounds']['top'])/2;
        };
 //  log(list[i]['text'] +'坐标:('+ x + ',' + y + ')');.replace(/[^\u4e00-\u9fa5\d]|\d{1,2}\./g, "");
 //      b_coin_1 = b_coin.replace(/ /g, '');//再删除多余空格
      if(b_coin!=null){b_coin_1 = b_coin.replace(/A/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/B/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/C/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/D/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\：|\；|\。|\！|\!|\"|\;|\:|\"|\'|\‘|\’|\,|\“|\”|\<|\.|\>|\/|\?|\？]/g, "");//再删除多余空格
  //     b_coin_1 = b_coin_1.replace(/：/g, '');//再删除多余空格
    //   b_coin_1 = b_coin_1.replace(/%/g, '');//再删除多余空格
    //   b_coin_1 = b_coin_1.replace(/:/g, '');//再删除多余空格
     //   b_coin_1 = b_coin_1.replace(/./g, '');//再删除多余空格
       //           b_coin_1 = b_coin.replace(/:|%|.||/g, '');//再删除多余空格
     //   b_coin_1 = b_coin_1.replace(/  /g, '');
        b_coin_1 = b_coin_1.replace(/\s/g, "");
        b_coin_1 = b_coin_1.replace(/  /g, "");
        log(b_coin_1);
      }else continue;
      if(b_coin_1=='补给站'||b_coin_1=='为吃'||b_coin_1=='酿酒工艺'||b_coin_1=='制酒车间'||b_coin_1=='开始'||b_coin_1=='首页') {log("此次没发现题目：" + b_coin_1);break;};
     // if(b_coin_1!='首页'&&b_coin_1!='取消'&&b_coin_1!='确定'&& i > 12) log("文本："+b_coin_1);
                     var arr = ["酱香型", "53vol","云南省镇雄县", "贵州省仁怀市茅台镇", "包装员工的工号", '150.3平方公里', '贵州省赤水市', '高粱小麦水', '红缨子高粱', '三轮次', '七个轮次', '三四五轮次', '1946种', '糯高粱', '五年', '乳白色玻璃瓶', '陶坛', '没有', '系飘带员工的编号', '苦涩', '1年', '60以上', '云南省镇雄县', '重阳节', '两次', '高粱', '小麦', '黄曲白曲黑曲', '生产日期', '成义荣和恒兴', '酒瓶生产厂家代码', '165个', '2022年5月19日', '2006年', '威妥玛拼音', '2023年2月4日', '1992', '空间时间人物科学文化', '提供物系菌系和霉系', '高温堆积发酵', '于文江', '人曜', '七年'];
     var asub_1 = '';
  for (var ii = 0; ii < arr.length-1; ii++) {
var asub_1 = arr[ii];
 //   log(asub_1);
    
         if(b_coin_1 == asub_1) {
           console.info("点击答案："+ b_coin + '坐标:('+ x + random(-10, 100)+ ',' + y + random(-10, 15) + ')')
           click(x+ random(-10, 100),y);
           queding = 1;
           lingdao_1 = true;
         //  click(json[i]);  
                             //  break;
                              }else if(b_coin_1 == '取消' && queding != 1) {
                                click(xx+ random(-10, 100) ,yy + random(-10, 15));
                                lingdao_1 = true;
                              }
       };
   sleep(500);
   if(b_coin_1 == '确定'&& queding == 1) {
           console.info("点击："+ b_coin + '坐标:('+ x + random(-10, 100) + ',' + y+ random(-10, 15) + ')')
           click(x+ random(-10, 100), y+ random(-10, 15));
         //  click(json[i]); 
                    lingdao_1 = true;
                              break;
                              };
 }
  list = null;
  return res;
}

function paddle_ocr_api_1() {
 // console.log('PaddleOCR文字识别中');
  fSet("title", "题目识别…");
  let list = JSON.parse(JSON.stringify(paddle.ocr(arguments[0]))); // 识别文字，并得到results
  fInfo(list);
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
    var b_coin = list[i]['textWords'];
     res += list[i]['text'];
    x=(list[i]['bounds']['left'] + list[i]['bounds']['right'])/2;
    y=(list[i]['bounds']['bottom'] + list[i]['bounds']['top'])/2;
   if(i>1){ xx=(list[i-1]['bounds']['left'] + list[i-1]['bounds']['right'])/2;
    yy=(list[i-1]['bounds']['bottom'] + list[i-1]['bounds']['top'])/2;
        };
        log(b_coin);
        log(list[i]['textWords'] +'坐标:('+ x + ',' + y + ')');//.replace(/[^\u4e00-\u9fa5\d]|\d{1,2}\./g, "");
 //      b_coin_1 = b_coin.replace(/ /g, '');//再删除多余空格
      if(b_coin != null){
        // b_coin_1 = b_coin_1.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\：|\；|\。|\！|\!|\"|\;|\:|\"|\'|\‘|\’|\,|\“|\”|\<|\.|\>|\/|\?|\？]/g, "");//再删除多余空格
       b_coin_1 = b_coin.replace(/ /g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/A/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/B/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/C/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/D/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/：/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/%/g, "");//再删除多余空格
       b_coin_1 = b_coin_1.replace(/:/g, "");//再删除多余空格
      // b_coin_1 = b_coin_1.replace(/./g, '');//再删除多余空格
       //           b_coin_1 = b_coin.replace(/:|%|.||/g, '');//再删除多余空格
        b_coin_1 = b_coin_1.replace(/  /g, "");
        b_coin_1 = b_coin_1.replace(/\s/g, "");
        b_coin_1 = b_coin_1.replace(/  /g, "");
        log(b_coin_1);
        log(b_coin);
      //}else continue;
      if(b_coin_1=='补给站'||b_coin_1=='为吃'||b_coin_1=='酿酒工艺'||b_coin_1=='制酒车间'||b_coin_1=='开始'||b_coin_1=='首页') {log("此次没发现题目：" + b_coin_1);break;};
     // if(b_coin_1!='首页'&&b_coin_1!='取消'&&b_coin_1!='确定'&& i > 12) log("文本："+b_coin_1);
       var arr = ["酱香型", "53vol","云南省镇雄县", "贵州省仁怀市茅台镇", "包装员工的工号", '150.3平方公里', '贵州省赤水市', '高粱小麦水', '红缨子高粱', '三轮次', '七个轮次', '三四五轮次', '1946种', '糯高粱', '五年', '乳白色玻璃瓶', '陶坛', '没有', '系飘带员工的编号', '苦涩', '1年', '60以上', '云南省镇雄县', '重阳节', '两次', '高粱', '小麦', '黄曲白曲黑曲', '生产日期', '成义荣和恒兴', '酒瓶生产厂家代码', '165个', '2022年5月19日', '2006年', '威妥玛拼音', '2023年2月4日', '1992', '空间时间人物科学文化', '提供物系菌系和霉系', '高温堆积发酵', '于文江', '人曜', '七年'];
     var asub_1 = '';
  for (var ii = 0; ii < arr.length-1; ii++) {
         var asub_1 = arr[ii];
 //   log(asub_1); 
         if(b_coin_1 == asub_1) {
           console.info("点击答案："+ b_coin + '坐标:('+ x + random(-10, 100)+ ',' + y + random(-10, 15) + ')')
           click(x+ random(-10, 100),y);
           queding = 1;
           lingdao_1 = true;
         //  click(json[i]);  
                             //  break;
                              }else if(b_coin_1 == '取消' && queding != 1) {
                                click(xx+ random(-10, 100) ,yy + random(-10, 15));
                                lingdao_1 = true;
                                queding = 1;
                              }
       };
   sleep(500);
   if(b_coin_1 == '确定'&& queding == 1) {
           console.info("点击："+ b_coin + '坐标:('+ x + random(-10, 100) + ',' + y+ random(-10, 15) + ')')
           click(x+ random(-10, 100), y+ random(-10, 15));
         //  click(json[i]); 
                    lingdao_1 = true;
                              break;
                              };
                              }
     //  res += list[i]['text'];
 }
  list = null;
  return res;
}

// 强行退出应用名称
function exit_app(name) {
  // fClear();
  fInfo("尝试结束" + name + "APP");
  var packageName = getPackageName(name);
  if (!packageName) {
    if (getAppName(name)) {
      packageName = name;
    } else {
      return false;
    }
  }
  log("打开应用设置界面");
  app.openAppSetting(packageName);
  var appName = app.getAppName(packageName);
  //log(appName);
  log("等待加载界面")
  //textMatches(/应用信息|应用详情/).findOne(5000);
  text(appName).findOne(5000);
  sleep(1500);
  log("查找结束按钮")
  //let stop = textMatches(/(^强行.*|.*停止$|^结束.*)/).packageNameMatches(/.*settings.*|.*securitycenter.*/).findOne();
  let stop = textMatches(/(强.停止$|.*停止$|结束运行|停止运行|[Ff][Oo][Rr][Cc][Ee] [Ss][Tt][Oo][Pp])/).findOne();
  log("stop:", stop.enabled())
  if (stop.enabled()) {
    //log("click:", stop.click());
    real_click(stop);
    sleep(1000);
    log("等待确认弹框")
    //let sure = textMatches(/(确定|^强行.*|.*停止$)/).packageNameMatches(/.*settings.*|.*securitycenter.*/).clickable().findOne();
    let sure = textMatches(/(确定|.*停止.*|[Ff][Oo][Rr][Cc][Ee] [Ss][Tt][Oo][Pp]|O[Kk])/).clickable().findOne(1500);
    if (!sure) {
      fInfo(appName + "应用已关闭");
      back();
      return false;
    }
    log("sure click:", sure.click());
    fInfo(appName + "应用已被关闭");
    sleep(1000);
    back();
  } else {
    fInfo(appName + "应用不能被正常关闭或不在后台运行");
    sleep(1000);
    back();
  }
  return true;
}

// 尝试成功点击
function real_click(obj) {
  for (let i = 1; i <= 3; i++) {
    if (obj.click()) {
      log("real click: true");
      return true;
    }
    sleep(300);
  }
  console.warn("控件无法正常点击：", obj);
  log("尝试再次点击");
  click(obj.bounds().centerX(), obj.bounds().centerY());
  return false;
}
// 把ocr结果转换为正序的字符串
function ocr_rslt_to_txt(result) {
  let top = 0;
  let previous_left = 0;
  let txt = "";
  let txt_list = [];
  for (let idx in result) {
    if (top == 0) {
      top = result[idx].bounds.top;
    }
    if (previous_left == 0) {
      previous_left = result[idx].bounds.left;
    }
    if (result[idx].bounds.top >= top - 10 && result[idx].bounds.top <= top + 10) {
      if (result[idx].bounds.left > previous_left) {
        txt = txt + "   " + result[idx].text;
      } else {
        txt = result[idx].text + "   " + txt;
      }
    } else {
      top = result[idx].bounds.top;
      txt_list.push(txt);
      txt = result[idx].text;
    }
    if (idx == result.length - 1) {
      txt_list.push(txt);
    }
    previous_left = result[idx].bounds.left;
  }
  //每行直接加个换行
  let ans = txt_list.join("\n");
  log(ans);
  return ans;
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

let img = captureScreen();
        img = images.clip(img,0,Math.floor(device.height/4),device.width,Math.floor(400+device.height/3));
        img = images.interval(img, "#FD1111", 120);
        //let res = hamibot_ocr_api(images.clip(img,0,Math.floor(device.height/4),device.width,Math.floor(400+device.height/3)));
       //let res = google_ocr_api(images.clip(img,0,Math.floor(device.height/4),device.width,Math.floor(400+device.height/3)));
       let res = paddle_ocr_api(img);  
       //let res = google_ocr_api(img);
      // ocr_rslt_to_txt(res);
     //  log(ocr_rslt_to_txt.replace(/\s+/g, ""));
       img.recycle();