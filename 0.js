auto.waitFor(); //mode = "fast"
var delay_time = 3000;
var myScores = {}; //分数
var myScores_1 = {}; //分数
var myScores_2 = {}; //分数
device.wakeUpIfNeeded();
var meizhou_0 = true;
var meizhou_end = 1;
var quweidati = false;
// 读取自定义配置
var w = fInit();
var BH_KAMI_CONFIG = storages.create("BH_KAMI_CONFIG");

var TTXS_PRO_CONFIG = storages.create("TTXS_PRO_CONFIG");
var watchdog = TTXS_PRO_CONFIG.get("watchdog", "1800");
var slide_verify = TTXS_PRO_CONFIG.get("slide_verify", "300");
var slide_verify_on = TTXS_PRO_CONFIG.get("slide_verify_on", 0);
var fast_mode = TTXS_PRO_CONFIG.get("fast_mode", false);
var ddtong = TTXS_PRO_CONFIG.get("ddtong", false);
var weixin_kaiguan = TTXS_PRO_CONFIG.get("weixin_kaiguan", true);
var is_exit = TTXS_PRO_CONFIG.get("is_exit", true);
var pinglun = TTXS_PRO_CONFIG.get("pinglun", true);
var shipin = TTXS_PRO_CONFIG.get("shipin", true);
var wenzhang = TTXS_PRO_CONFIG.get("wenzhang", true);
var meiri = TTXS_PRO_CONFIG.get("meiri", true);
var meizhou = TTXS_PRO_CONFIG.get("meizhou", 2);
var zhuanxiang = TTXS_PRO_CONFIG.get("zhuanxiang", 0);
var tiaozhan = TTXS_PRO_CONFIG.get("tiaozhan", true);
var ocr_choice = TTXS_PRO_CONFIG.get("ocr_choice", 0);
var ocr_maxtime = TTXS_PRO_CONFIG.get("ocr_maxtime", "5000");
var duizhan_mode = TTXS_PRO_CONFIG.get("duizhan_mode", 0);
var jisu = TTXS_PRO_CONFIG.get("jisu", "0");
var guaji = TTXS_PRO_CONFIG.get("guaji", false);
var siren = TTXS_PRO_CONFIG.get("siren", true);
var dacuo_num = TTXS_PRO_CONFIG.get("dacuo_num", "0");
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
    sleep(random(2500, 3500));
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
fInfo("检测题库更新");//https://fastly.jsdelivr.net/gh/OuO-dodo/tiku@master/info.json
const update_info = get_tiku_by_http("https://ghproxy.com/https://github.com/OuO-dodo/tiku/blob/master/info.json");
if (!(update_info.statusCode >= 200 && update_info.statusCode < 300)){update_info = {
  "dati_tiku_version" : 20230121,
  "dati_tiku_link": "https://gitcode.net/m0_64980826/songge_tiku/-/raw/master/dati_tiku_20230121.txt",
  "dati_tiku_link2": "https://raw.kgithub.com/OuO-dodo/tiku/master/dati_tiku_20230121.txt",
  "tiku_version": 20230428,
  "tiku_link": "https://gitcode.net/m0_64980826/songge_tiku/-/raw/master/tiku_json_20230428.txt",
  "tiku_link2": "https://raw.kgithub.com/OuO-dodo/tiku/master/tiku_json_20230428.txt",
  "question_reg": "魏晋时期|立春时节|投笔|永乐皇帝|古代建筑|志愿者|预警信号|公狮|七律长征|太阳的大气层|含氧量|国之大事|体育健身|三部著作|泓水之战|本土作物|甲肝|古代皇帝|古代社会|超流体|气囊中|一条鱼|生肖邮票|医学奖|痛风|台风根据|幽禽|以下水域|冷热病|古典文学|龙泉窑址|敌友|唇形科|江苏目前|绵白糖|预备党员",
  "include_reg": "排水口|古代兵器|变脸|培大豆|节能减排|四岳|鸳鸯|子午觉|汉字产生|宇宙中|变声|血型|长征四号|标准文字|力量体制|原始农业",
  "default_ocr_replace": {"\\+":"十"},
  "old_ocr_replace": {"[闵阅]值":"阈值","[點赔精]然失色":"黯然失色","九雪云外":"九霄云外","不落[集案室][白自]":"不落窠臼"},
  "accent_ocr_replace": {
      "草营人":"草菅人","消[强洱]":"消弭","切[碟槎碳]":"切磋","并行不[停惊]?(?!背)":"并行不悖","[评呼]然心动":"怦然心动","[此吃北][陀吃呢]风云":"叱咤风云",
      "chaiqian":"chāiqiǎn","浓意妄为":"恣意妄为","[厦魔]品":"赝品","九[^宵]?云外":"九霄云外","葱是生非":"惹是生非","言简意购":"言简意赅",
      "[脸胎]炙人口":"脍炙人口","不落[^巢]?[白自]":"不落窠臼","针碗时[蜂摔辩]":"针砭时弊","[哆哔][唆峻]":"啰唆","既往不[答智]":"既往不咎","组拿":"缉拿",
      "暖[陀跑]":"蹉跎","跨踏":"踌躇","调帐":"惆怅","[任仟]悔":"忏悔","快[寄密窑]":"诀窍","浙临":"濒临","底护":"庇护","抵悟":"抵牾","情懒":"慵懒",
      "[泽溶]炼":"淬炼","博奔":"博弈","[疼痉]李":"痉挛","[凌演]合":"凑合","神抵":"神祗","发物":"发轫","声名[鸽韵]起":"声名鹊起","貂鲜":"貂蝉","b6":"bù",
      "[悠慈]气":"憋气","[继绎伴]脚石":"绊脚石","河汉":"河汊","修营":"修葺","杯盘狼精":"杯盘狼藉","有特无恐":"有恃无恐","蒸[^溜]?水":"蒸馏水",
      "嘴之以鼻":"嗤之以鼻","款收":"歉收","[链挺键]而走险":"铤而走险","[进母][康庸]置疑":"毋庸置疑","叫苦不[选送]":"叫苦不迭","追不及待":"迫不及待",
      "相形见细":"相形见绌","饮鸽止渴":"饮鸩止渴","不[胜胚]而走":"不胫而走","[晖蹄]红":"蹿红","挑三栋四":"挑三拣四","沉酒":"沉湎","[忆恒]气":"怄气",
      "跌[容岩]起伏":"跌宕起伏","声内":"声呐","蓝等充数":"滥竽充数","[驻姓]款":"赃款","差[造道]":"差遣","再接再历":"再接再厉","菱摩不振":"萎靡不振",
      "喉声叹气":"唉声叹气","点.zhui":"点缀zhuì","寒暗":"寒暄","[组祖]击手":"狙击手","奴.?bi":"奴婢bì","矫.造作":"矫揉造作","巨壁":"巨擘",
      ".之若[跨鹭]":"趋之若鹜","白暴白弃":"自暴自弃","cuotu[od]":"cuōtuó","鞭答":"鞭笞","夏然而止":"戛然而止","[壁跨]浑水":"蹚浑水","鱼鲤":"鱼鳔",
      "瓜熟带":"瓜熟蒂",
      "粗[^矿]?(?!矿)":"粗犷","陷[^井]?(?!井)":"陷阱","古今杂[^揉]?(?!揉)":"古今杂糅",
      "[^蟹董\\.]?伏":"蛰伏","[^阀\\.]?值":"阈值","[^暗\\.]?然失色":"黯然失色"
      },
  "other_ocr_replace": {
      "[斐翡表]秀":"裴秀","何族":"侗族","从[我戒]":"从戎","朱捷":"朱棣","李诚":"李诫","\\+儿":"十八","黄色.橙色.红色":"黄色-橙色-红色","狐虎兽":"狮虎兽",
      "五岭.乌蒙.金沙.+?山":"五岭、乌蒙、金沙、大渡、岷山","([a-d].?)光球层、?色球层.*?(?=[a-d].?|$)":"$1光球层、色球层、日冕层","动脉巾":"动脉血",
      "[福祝][成戒]":"祀戎","准备活动.基本活动.放松活动":"准备活动-基本活动-放松活动","诗经\\W+?春秋\\W+?论语":"诗经-春秋-论语","宋囊公":"宋襄公","南稻北栗":"南稻北粟",
      "娄.+?传播":"粪-口传播","([a-d].?)龙有.?五爪.*?四爪.?(?=[a-d].?|$)":"$1龙有“五爪”，蟒有“四爪”","令媛":"令嫒","液氨":"液氦","氨气":"氮气","鱼鲜":"鱼鳞",
      "庚电年":"庚申年","青营素":"青蒿素","[嘎嘿漂][岭吟]":"嘌呤","热带风晶":"热带风暴","合风":"台风","婴武":"鹦鹉","潮海":"渤海","症疾":"疟疾","刘森思|刘想":"刘勰",
      "蜜头":"窑头","嘎觉":"嗅觉","苦塞":"苦寒","游猴":"猕猴","藤糖":"蔗糖","捅讨":"通过"
  },
  "include_ocr_replace":{
      "排水口":[["麒麟|鹿其"],"[蜗璃蝙]","螭"],"古代兵器":[["戈","矛"],"载","戟"],"变脸":[["京","豫"],"JI","川"],"培大豆":[["泰"],"[藏救]","菽"],
      "节能减排":[["26","24","28"],"[^C]C","℃"],"四岳":[["舜","禹"],"解|鱼系","鲧"],"鸳鸯":[["爸","驾"],"驾","鸳"],"子午觉":[["23时","11时"],"一","—"],
      "汉字产生":[["行书","楷书"],"小[豪拿蒙]","小篆"],"宇宙中":[["氧","碳"],"氨","氦"],"变声":[["氧气"],"氨气","氦气"],"血型":[["A型","B型"],"0","O"],
      "长征四号":[["甲","丙"],"Z","乙"],"标准文字":[["隶书","金文"],"小[豪拿蒙]","小篆"],"力量体制":[["工","士"],"衣","农"],
      "原始农业":[["豆","麦"],"[栗菜]","粟"]
  }
}
};
//const update_info = get_tiku_by_http("https://gitcode.net/m0_64980826/songge_tiku/-/raw/master/info.json");
//const update_info = get_tiku_by_http("https://gitee.com/djh010/xuexiqiangguo-xxqg/blob/master/info.json");
fInfo("正在加载对战题库......请稍等\n题库版本:" + update_info["tiku_version"]);
fInfo("如果不动就是正在下载，多等会");
var tiku_link3 = "https://raw.kgithub.com/01buluo/zuguo/main/tiku_json_20230428.txt";
var dati_tiku_link3 = "https://raw.kgithub.com/01buluo/zuguo/main/dati_tiku_20230121.txt";
var tiku = [];
try {
  tiku = get_tiku_by_http(update_info["tiku_link"]);
} catch (e) {
  try {
    tiku = get_tiku_by_http(update_info["tiku_link2"]);
  } catch (e) {
    tiku = get_tiku_by_http(update_info["tiku_link3"]);
  }
}
// var tiku = get_tiku_by_gitee();
fInfo("正在加载专项题库......请稍等\n题库版本:" + update_info["dati_tiku_version"]);
var dati_tiku = [];
try {
  dati_tiku = update_dati_tiku()
} catch (e) {
  fError("网络原因未获取到在线题库，请尝试切换流量或者更换114DNS");
  dati_tiku = get_tiku_by_ct('https://webapi.ctfile.com/get_file_url.php?uid=35157972&fid=555754562&file_chk=94c3c662ba28f583d2128a1eb9d78af4&app=0&acheck=2&rd=0.14725283060014105');
}
// 设置资源保存路径
files.createWithDirs("/sdcard/学习减压四合一/");
// 调整音量
if (yl_on) {
  fInfo("设置媒体音量");
  var yuan_yl = device.getMusicVolume();
  var max_yl = device.getMusicMaxVolume();
  let yl = Math.ceil(yinliang * max_yl / 100);
  //log(yuan_yl, max_yl, yl, typeof yl);
  device.setMusicVolume(yl);
  fInfo("当前音量：" + device.getMusicVolume());
}
if (is_exit) {
  fInfo("运行前重置学习APP");
  exit_app("学习强国");
  sleep(1500);
}
// 检测地理位置权限代码，出现就点掉
fInfo("开始位置权限弹窗检测");
var nolocate_thread = threads.start(function () {
  //在新线程执行的代码
  id("title_text").textContains("地理位置").waitFor();
  fInfo("检测到位置权限弹窗");
  sleep(1000);
  text("暂不开启").findOne().click();
  fInfo("已关闭定位");
});
fInfo("跳转学习APP");
// launch('cn.xuexi.android');
app.launchApp('学习强国');
var qg_guanbi_thread = qg_guanbi();
sleep(2000);
// console.hide();
// 命令行方式启动，似乎需要root
// var result_shell = shell("pm disable cn.xuexi.android");
// log(result_shell.code, result_shell.error);
/***************不要动****************
 * **********************************
// 创建一个安卓动作，打开软件，此功能可以跳过开屏页，还在实验中
// app.startActivity({
//   action: 'android.intent.action.VIEW',
//   data: 'dtxuexi://appclient/page/study_feeds',
//   packageName: 'cn.xuexi.android',
// });
 * **********************************
*************************************/


function do_pinglun() {
 // entry_jifen_project("发表观点");
  entry_model(jifen_map["评论"]);
  fSet("title", "评论…");
  fClear();
  sleep(1000);
  swipe(device_w / 2+random(-5, 6), device_h * 0.7+random(-7, 10), device_w / 2+random(-6, 6), device_h * 0.4+random(-4, 4), random(950, 1100));
  id("general_card_title_id").findOne().parent().parent();
  fInfo("尝试点击title:" + id("general_card_title_id").findOne().text());
  //   //log("文章click:", wen_box.click());
  //   while (!id("general_card_title_id").findOne().parent().parent().click()) {log("文章click: false");}
  //   log("文章click: true");
  real_click(id("general_card_title_id").findOne().parent().parent());
  log("等待加载");
  idContains("image-text-content").waitFor();
  let text_edit = text("欢迎发表你的观点");
  log("查找评论框");
  text_edit.waitFor();
  sleep(random(1400, 1600));
  swipe(device_w / 2 + random(-7, 9), device_h * 0.8 + random(-4, 8), device_w / 2 + random(-5, 5), device_h * 0.5+random(-10, 15), random(900, 1100));
  while (text_edit.exists()) {
    let pinglun_edit = text_edit.findOne(500);
    fInfo("尝试点击评论框中");
    log(pinglun_edit.click());
    sleep(random(1400, 1600));
    fRefocus();
  }
  fInfo("评论框click: true");
  let content_list = ["全心全意为人民服务", "坚持学习,全心全意为人民服务","思想受礼，点赞","实事求是,不忘初心","不忘初心，牢记使命", "不忘初心，方得始终", "永远坚持党的领导","坚守一线，筑梦未来", "富强、民主、文明、和谐", "不忘初心，追梦，筑梦","自由，平等，公正，法治"];
  classNameEndsWith("EditText").findOne().setText(content_list[random(0, content_list.length - 1)]);
  sleep(random(1070, 1400));
  text("发布").findOne().click();
  sleep(random(1030, 1560));
  text("删除").findOne().click();
  sleep(random(700, 1100));
  text("确认").findOne().click();
  sleep(random(800, 1200));
  //   // 下面是分享
  //   for (let i=0; i<2; i++) {
  //     text_edit.findOne().parent().child(3).click();
  //     sleep(500);
  //     textContains("学习强国").findOne().parent().click();
  //     sleep(500);
  //     text("创建新的聊天").waitFor();
  //     sleep(1000);
  //     back();
  //     sleep(1000);
  //   }
  // 回到首页
  back();
  // 返回积分页
  jifen_init();
  ran_sleep();
  return true;
}

/********时长部分*********/
function do_shipin() {
 // entry_jifen_project("视听学习");
  entry_model(jifen_map["视频"]);
 // jifen_list.child(jifen_map["视频"]).child(4).click();
  if (ddtong) {
    fSet("title", "视听(dd通)…");
  } else {
    fSet("title", "视听学习…");
  }
  fClear();
  desc("百灵").findOne().click();
  sleep(1000);
  fInfo("检测温馨提示弹窗");
  if (text("温馨提示").findOne(1500)) {
    text("关闭").findOne().click();
    fInfo("检测到温馨提示并已关闭");
  }
  desc("百灵").findOne().click();
  let shu = text("竖").findOne();
  fInfo("找到 竖")
  shu.click();
  sleep(1000);
  // 定位到整个百灵frame_box
  let frame_box = shu.parent().parent().parent().parent();
  textMatches(/\d{2}:\d{2}/).waitFor();
  let video_list = frame_box.findOne(className("android.widget.ListView"));
  var v = className('android.widget.FrameLayout').clickable(true).depth(22).findOne().bounds();
  press(v.centerX() + random(-7, 8), v.centerY()+ random(-7, 8) - 50, random(130, 188));
  fInfo('点击视频');
  sleep(2500);
  //video_list.child(1).child(1).child(0).click();
  text("分享").waitFor();
  if (idContains("guide_view").findOne(1500)) {
    fInfo("检测到引导遮罩");
    sleep(random(900, 1100));
    click(device_w / 2, device_h / 2);
    sleep(random(900, 1200));
    click(device_w / 2, device_h / 4);
  }
  sleep(800);
  //log(text("刷新重试").exists());
  textMatches(/刷新重试|继续播放/).exists() && (fInfo("检测到流量提醒"),
    textMatches(/刷新重试|继续播放/).findOne().click());
    sleep(random(1000, 1500));
    if(textContains("刷新重试").exists()) {
      console.error("检测到使用的手机流量，准备点击'刷新重试'");
       var v = text("刷新重试").findOne().bounds();
      press(v.centerX()+random(-1, 5), v.centerY() + random(-7, 8), random(120, 180));;
      sleep(random(1000, 1500));
    }
  sleep(random(8000, 9500));
  let re_times = 6;
  if (ddtong) {
    re_times += 6;
  }
  for (let i = 0; i < re_times; i++) {
    click(device_w / 2 +random(-7, 8), device_h / 2 + random(-5, 6));
    sleep(random(490, 560));
    swipe(device_w / 2 + random(-7, 9), device_h * 0.8 + random(-4, 8), device_w / 2 + random(-5, 5), device_h * 0.1+random(-3, 5), random(900, 1100));
    sleep(random(8300, 12500));
  }
  back();
  fInfo("视频个数已刷完");
  // 返回积分页
  jifen_init();
  ran_sleep();
  return true;
}

function do_wenzhang() {
  //   jifen_list_1 = jifen_list_1();
  // 点击进入本地
  let old_wen = storage_user.get("old_wen_list", []);
 // entry_jifen_project("本地频道");
  entry_model(jifen_map["本地"]);
  if (ddtong) {
    fSet("title", "文章(dd通)…");
  } else {
    fSet("title", "选读文章…");
  }
  fClear();
  fInfo("切换地区为北京");
  if(text("亮点").findOne(2000)) text("亮点").findOne(2000).parent().parent().child(5).click();
  my_click_non_clickable("北京");
  delay(2);
  my_click_non_clickable("北京");
  text("切换地区").findOne(3000);
  let beijing_2 =className("android.widget.TexitView").depth(17).find();
  queryList_1(beijing_2,"北京");
  
  if (text("立即切换").exists()) {
    text("取消").findOne(3000).click();
  }
  log("切换地区");
  //let beijing_1 =className("android.widget.TexitView").depth(17).find();
 // queryList_1(find(),"北京");
  //className("android.widget.TexitView").depth(17).findOne(2000)
  try {
    text("切换地区").findOne().click();
  } catch (e) {
    fInfo("手动点击切换地区");
    text("亮点").findOne(2000).parent().parent().child(5).click();
  }
  log("查找北京");
  text("北京").waitFor();
  sleep(500);exit
  log("切换北京");
  if(text("北京").findOne()) text("北京").findOne().parent().parent().click();
  else queryList_1(find(),"北京");
  log("查找banner");
  //let banner = className("android.support.v7.widget.RecyclerView").findOne();
  let banner = classNameContains("RecyclerView").findOne();
  fInfo("查找北京新闻广播");
  //fRefocus();
  while (banner.findOne(text("北京新闻广播").boundsInside(0, 0, device_w, device_h)) == null) {
    banner.scrollForward();
    sleep(500);
  }
  last_obj = banner.findOne(text("北京新闻广播"));
  //   fInfo("点击北京新闻广播", text("北京新闻广播").findOne().parent().click());
  fInfo("点击北京新闻广播：" + last_obj.parent().click());
  fInfo("视听广播时长");
  sleep(11500);
  back();
  fClear();
  // 下面正式刷文章
  fInfo("开始文章");
  sleep(1500);
  banner = classNameContains("RecyclerView").findOne();
  //log(banner);
  while (banner.findOne(text("北京学习平台").boundsInside(0, 0, device_w, device_h)) == null) {
    banner.scrollBackward();
    sleep(500);
  }
  sleep(1000);
  fInfo("查找北京学习平台，尝试点击");
  first_obj = banner.findOne(text("北京学习平台"));
  //   while (!text("北京学习平台").findOne().parent().click()) {log("click: false");}
  //   log("click: true");
  //   real_click(text("北京学习平台").findOne().parent());
  real_click(first_obj.parent());
  log("等待加载");
  sleep(1000);
  text("新思想扎根京华").waitFor();
  sleep(1000);
  let swipe_y = text("新思想扎根京华").findOne().parent().parent().bounds().bottom;
  log("识别出顶部：", swipe_y);
  fRefocus();
  let listview = className("android.widget.ListView").depth(17).findOne();
  // 先判断是否有可刷文章，没有则停止脚本
  // while (!id("general_card_image_id").findOne(1000)) {listview.scrollForward();}
  for (i = 0; i < 2; i++) {
    listview.scrollForward();
    sleep(500);
  }
  // 自定义没有刷过的文章筛选器
  let wen_box_slt = className("android.view.ViewGroup").depth(20).filter(function (l) {
    let title = l.findOne(idContains("general_card_title_id"));
    let image = l.findOne(idContains("general_card_image_id"));
    let pic_num = l.findOne(idContains("st_feeds_card_mask_pic_num"));
    if (title && image && !pic_num) {
      return old_wen.indexOf(title.text()) == -1 && title.text().indexOf("【专题】") == -1;
    }
    return false;
  });
  log("查找文章");
  //while (!idContains("general_card_image_id").findOne(500)) {
  while (!wen_box_slt.findOne(500)) {
    listview.scrollForward();
    //sleep(500);
  }
  log("找到文章");
  // 下面那句会定位到新思想的文章，不能加载过新思想
  let wen_box = wen_box_slt.findOne();
  // 先做5次
  let wen_num = 0;
  let re_times = 6;
  if (ddtong) {
    re_times += 6;
  }
  while (true) {
    let title = wen_box.findOne(idContains("general_card_title_id")).text();
    old_wen.push(title);
    if (old_wen.length > 100) {
      old_wen.shift();
    }
    fClear();
    fInfo("点击文章：" + title);
    //wen_box.click();
    let title_click = wen_box.parent().parent().click();
    fInfo("点击：" + title_click);
    classNameContains("com.uc.webview.export").waitFor();
    fInfo("查找webview");
    let father_view = className("android.webkit.WebView").findOne(9000);
    sleep(random(1000, 1500));
    //     let father_view = className("android.view.View").depth(16).findOne();
    // 判断是否为专题而不是文章
    if (father_view && father_view.find(idContains("__next")).empty()) {
      fInfo("查找文章内容");
      let content = idContains("image-text-content").findOne(9000);
      // log(idContains("image-text-content").findOne().id());
      if (content) {
        // 不先点一下划不动
        idContains("xxqg-article-header").findOne().child(0).click();
      }
      swipe(device_w / 2+random(-3, 7), device_h * 0.7+random(-3, 8), device_w / 2+random(-7, 10), device_h * 0.3+random(-5, 6), random(950, 1100));
      if (wen_num < re_times - 1) {
        sleep(random(9000, 10500));
      } else {
        // 第6次停顿刷时间
        //console.show();   
        toastLog("正在刷时长程序未停止");
        let shichang = 6 * random(55, 66);
        fClear();
        fInfo("开始刷时长，总共" + shichang + "秒");
        let wait_time = 1;
        for (let i = 0; i < shichang; i++) { //*random(55, 60)
          // 每15秒增加一次滑动防息屏
          if (i % random(8, 16) == 0) {
            swipe(device_w / 2 + random(-5, 10), device_h * 0.6 + random(-10, 5), device_w / 2+ random(-5, 10), device_h * 0.6+ random(-15, 10) - 100, 500);
            sleep(500 + random(-5, 10));
          } else {
            sleep(1000 + random(7, 12));
          }
          //w.info.setText("已观看文章" + wait_time + "秒，总共" + shichang + "秒");
          fSet("info", "已观看文章" + wait_time + "秒，总共" + shichang + "秒");
          wait_time++;
        }
        fSet("info", "已结束文章时长");
        console.hide();
        back();
        break;
      }
    } else {
      wen_num -= 1;
    }
    back();
    //id("general_card_image_id").waitFor();
    className("android.widget.ListView").scrollable().depth(17).waitFor();
    sleep(random(900, 1200));
    while (!wen_box_slt.exists()) {
      listview.scrollForward();
      sleep(200);
    }
    wen_box = wen_box_slt.findOne();
    wen_num += 1;
  }
  // 更新已读文章库
  storage_user.put("old_wen_list", old_wen);
  sleep(random(3000, 4000));
  // 关闭音乐
  close_video();
  back();
  sleep(random(3000, 4000));
  // 返回积分页
  jifen_init();
  ran_sleep();
  return true;
}

/********每日答题*********/
function do_meiri() {
 // entry_jifen_project("每日答题");
 entry_model(jifen_map["每日"]);
  fSet("title", "每日答题…");
  fClear();
  // 等待加载
  text("查看提示").waitFor();
  // 获取右上题号，如1 /5
  var tihao = className("android.view.View").depth(24).findOnce(1).text();
  var num = Number(tihao[0]);
  var sum = Number(tihao[tihao.length - 1]);
  var substr = tihao.slice(1);
  while (num <= sum) {
    fClear();
    fInfo("第" + num + "题");
    // 等待加载
    text(num + substr).waitFor();
    num++;
    // 如果是视频题则重新开始
    if (className("android.widget.Image").exists()) {
      num = 1;
      restart(0);
      continue;
    }
    do_exec();
    delay(0.3);
    // 点击确定下一题
    depth(20).text("确定").findOne().click();
    ran_sleep();
    // 如果题做错了重来
    if (text("下一题").exists() || text("完成").exists()) {
      fInfo("答错重试");
      num = 1;
      restart(0);
      continue;
    }
  }
  // 循环结束完成答题
  text("返回").findOne().click();
  text("登录").waitFor();
  ran_sleep();
  return true;
}

/********每周答题*********/
function do_meizhou() {
 let meizhou_d = text("每周答题").findOne(4000);
if(meizhou_d != null) meizhou_d.parent().click()
  else{var textOrder = text("排行榜").findOnce().parent();
    while (text("排行榜").exists()) {
        console.info("点击每周答题");
      
        textOrder.child(4).click();
    
      sleep(random(700, 1500)); 
       sleep(1000);
    }
  }
  //text("每周答题").findOne().parent().click();
  fSet("title", "每周答题…");
  fClear();
  // 等待加载
  textMatches(/.*月|发现新版本/).waitFor();
  if (text("发现新版本").exists()) return fError("有弹窗无法每周答题，可使用旧版修改版本号版取消弹窗或者升级最新版"), sleep(1000), text("取消").findOne().click(), sleep(1000), back(), text("我要答题").waitFor(),
    sleep(1000), back(), ran_sleep(), !0;
  let scoll = depth(21).scrollable().findOne();
  // 下面是倒叙作答
  if (meizhou_dao) {
    fInfo("倒序查找未做题目");
    //当出现已作答时，点击最后一个未作答
    while (!text("已作答").exists()) {
      scoll.scrollForward();
      sleep(300);
      let dixian_slt = text("您已经看到了我的底线").filter(function (w) {
        log("底线：", w.bounds().top, device_h);
        return w.bounds().top <= device_h - 30;
      });
      if (dixian_slt.exists()) {fInfo("每周答题全部已作答。"); break;}
    }
    var clt = text("未作答").find();
    if (clt.empty()) return fInfo("每周答题全部已作答。"), ran_sleep(), back(), 
    sleep(random(2000, 3200)), back(), sleep(random(1600, 3300)), back(),  fInfo("已全部作答 返回至‘我的’"), text("我的").waitFor(), ran_sleep(), !0;
    var title = clt[clt.length - 1].parent().child(0).text();
    fInfo(title + "开始作答");
    clt[clt.length - 1].parent().click();
    // 测试用
    // text("已作答").findOnce(0).click();
  }
  // 下面是正序作答
  else {
    fInfo("正序查找未做题目");
    // 找到未作答就停止滚动
    let dixian_slt = text("您已经看到了我的底线").filter(function (w) {
      log("底线：", w.bounds().top, device_h);
      return w.bounds().top <= device_h - 30;
    });
    //while (true) { //测试用
    while (!text("未作答").exists()) {
      if (dixian_slt.exists()) return fInfo("每周答题全部已作答。"),
      ran_sleep(), back(),sleep(random(2000, 3200)), back(), sleep(random(1600, 3300)), back(), fInfo("已全部作答返回至‘我的’"), text("我的").waitFor(), ran_sleep(), !0;
        // back(), text("每周答题").waitFor(), sleep(1000), back(), text("我要答题").waitFor(), sleep(1000), back(), text("我的").waitFor(), ran_sleep(), !0;
      // 如果到底则设置倒序为true
      scoll.scrollForward();
      sleep(200);
    }
    title = text("未作答").findOne().parent().child(0).text();
    fInfo(title + "开始作答");
    text("未作答").findOne().parent().click();
  }
  // 等待加载
  text("查看提示").waitFor();
  // 获取右上题号，如1 /5
  var tihao = className("android.view.View").depth(24).findOnce(1).text();
  var num = Number(tihao[0]);
  var sum = Number(tihao[tihao.length - 1]);
  var substr = tihao.slice(1);
  while (num <= sum) {
    fClear();
    fInfo("第" + num + "题");
    // 等待加载
    text(num + substr).waitFor();
    num++;
    do_exec("（每周）");
    // 点击确定下一题
    depth(20).text("确定").findOne().click();
    ran_sleep();
    // 如果题做错了重来
    if (text("下一题").exists() || text("完成").exists()) {
      //toastLog(title + "我无能为力啦，请手动作答吧");
      fInfo("做错尝试重答");
      text("答案解析").waitFor();
      upload_wrong_exec("（每周）");
      storage.put('dati_tiku', dati_tiku);
      back();
      text("退出").findOne().click();
      ran_sleep();
      back();
      text("每周答题").waitFor();
      ran_sleep();
      return false;
    }
  }
  // 循环结束完成答题
  text("返回").findOne().click();
  sleep(1000);
  back();
 // text("每周答题").waitFor();
  sleep(1000);
  back();
  //text("我要答题").waitFor();
  sleep(1000);
  back();
  sleep(1500);
  if (!text("我的").exists()) {sleep(3500);
    if (!text("我的").exists()) back();
    sleep(1000);
    }
  text("我的").waitFor();
  ran_sleep();
  meizhou_end = 0;
  // getScores(3);
  // sleep(800);
  // back();
  return true;
}

/********专项答题*********/
/*专项答题中提示的层次与每日每周的不一样
 * 专项答题出现的倒计时会影响22,23层的结构*/
function do_zhuanxiang() {
  let zhuanxiang_d = text("专项答题").findOne(4000);
  if(zhuanxiang_d != null) zhuanxiang_d.parent().click()
    else{var textOrder = text("排行榜").findOnce().parent();
      while (text("排行榜").exists()) {
          console.info("点击专项答题");
        
          textOrder.child(4).click();
      
        sleep(random(700, 1500)); 
         sleep(1000);
      }
    }
  //entry_jifen_project("专项答题");
  fSet("title", "专项答题…");
  fClear();
  // 等待加载
  depth(23).waitFor();
  ran_sleep();
  let scoll = depth(21).indexInParent(1).scrollable().findOne();
  //let new_tihao = [];
  // 下面是倒序答题
  if (zhuanxiang_dao) {
    // 当出现已满分时，点击最后一个开始答题
    while (!text("已满分").exists()) {
      scoll.scrollForward();
      // 不加延迟会很卡
      sleep(200);
    }
    var clt = text("开始答题").find();
    if (clt.empty()) {
      fInfo("专项答题全部已作答。");
      back();
      text("登录").waitFor();
      ran_sleep();
      return true;
    }
    // 点击最后一项
    clt[clt.length - 1].click();
  }
  // 下面是正序
  else {
    // 直到找到开始答题
    let dixian_slt = text("您已经看到了我的底线").filter(function (w) {
      return w.bounds().top <= device_h - 30;
    });
    //while (true) { //测试用
    while (!text("开始答题").exists()) { //开始答题
      // 如果到底则设置倒序为true
      if (dixian_slt.exists()) {
        //storage_user.put('zhuanxiang_dao', true); 自定义不用读取
        fInfo("专项答题全部已作答。");
        back();
        sleep(1200);
        back();
       // text("登录").waitFor();
        ran_sleep();
        return true;
      }
      // 滚动20次
      for (i = 0; i < 15; i++) {
        scoll.scrollForward();
        // 不加延迟会很卡
        sleep(300);
      }
    }
    text("开始答题").findOne().click();
  }
  ran_sleep();
  // 等待加载
  text("查看提示").waitFor();
  sleep(2000);
  // 获取右上题号，如1 /5
  var tihao = className("android.view.View").depth(24).findOnce(1).text();
  // 需要加个斜杠转义
  let reg = /(\d+) \/(\d+)/;
  var num = Number(tihao.match(reg)[1]);
  var sum = Number(tihao.match(reg)[2]);
  var substr = " /" + sum;
  //log(tihao);
  while (num <= sum) {
    fClear();
    fInfo("第" + num + "题");
    // 等待加载
    text(num + substr).waitFor();
    num++;
    do_exec();
    delay(0.2);
    // 点击确定下一题
    let next = className("android.view.View").filter(function (l) {
      return (l.text() == "下一题") || (l.text() == "完成");
    });
    next.findOne().click();
    //     if (!click("下一题")) {
    //       click("完成");
    //     }
    ran_sleep();
  }
  // 循环结束完成答题
  text("查看解析").waitFor();
  delay(random(0.9, 1.2));
  // 如果题目答错，循环每一题并添加错题
  if (textMatches(/\d+分/).findOne().text() != "100分") {
    fInfo("有错题，尝试上传错题");
    text("查看解析").findOne().click();
    delay(random(0.5, 1));
    tihao = textMatches(reg).findOne().text();
    num = Number(tihao.match(reg)[1]);
    sum = Number(tihao.match(reg)[2]);
    substr = " /" + sum;
    //log(tihao);
    sleep(1500);
    while (num <= sum) {
      // 等待加载
      text(num + substr).waitFor();
      num++;
      if (textEndsWith("回答错误").exists()) {
        upload_wrong_exec();
      }
      // 点击确定下一题
      let next = className("android.view.View").filter(function (l) {
        return (l.text() == "下一题") || (l.text() == "完成");
      });
      next.findOne().click();
      sleep(random(1000, 1500));
    }
    storage.put('dati_tiku', dati_tiku);
  } else {
    back();
    ran_sleep();
  }
  back();
  sleep(random(700, 1200));
        back();
        if (!(textMatches("我的").exists() || textMatches("登录").exists()) ||!(text("我的").exists() || text("登录").exists())) {
      back();
      sleep(random(700, 1200));
      if (!id("comm_head_xuexi_score").exists())back();
    sleep(random(600, 1000));
    }
 // text("登录").waitFor();
  ran_sleep();
  return true;
}

/********挑战答题*********/
function do_tiaozhan() {
 // entry_jifen_project("挑战答题");
 //entry_model(jifen_map["挑战"]);
  if (ddtong) {
    fSet("title", "挑战(dd通)…");d
  } else {
    fSet("title", "挑战答题…");
  }
  fClear();
  // 等待加载、积分页面也有Image和List，需要用depth筛选
  className("android.widget.Image").textMatches(/total.*|chanllenge.*/).waitFor();
  if (textStartsWith("total").exists()) {
    var a = !0,
      b = className("android.widget.Image").textStartsWith("total").findOne().parent();
    ran_sleep();
    b.click();
    className("android.widget.Image").textStartsWith("chanllenge").waitFor()
  }
  let total = 0;
  let max_total = 3;
  if (ddtong) {
    max_total += 10;
  }
  while (true) {
    fClear();
    fInfo("第" + (total + 1) + "题");
    delay(1.5);
    // 等待选项列表
    let xuan_list = className("android.widget.ListView").findOne().children();
    // 获取题目
    let que_txt = className("android.widget.ListView").findOne().parent().child(0).text();
    //log(que_txt);
    // 获取答案列表，可能找到多个答案
    // let ans_list = get_ans_by_http(que_txt.replace(/来源：.*|出题单位：.+/, ""));
    let ans_list = get_ans_by_tiku(que_txt.replace(/[^\u4e00-\u9fa5\d]|来源：.+|出题单位：.+/g, ""));
    //     fInfo(que_txt.replace(/[^\u4e00-\u9fa5\d]|来源：.+|出题单位：.+/g, ""));
    //log("答案："+ans_list);
    ran_sleep();
    if (total >= max_total) {
      // 题数数够了随便选
      fInfo("已答对" + max_total + "题，全选A");
      xuan_list[0].child(0).click();
    } else if (ans_list.length != 0) {
      let max_simi = 0;
      let xuanxiang = null;
      // 循环对比所有选项和答案，选出相似度最大的
      for (let xuan_box of xuan_list) {
        let xuan_txt = xuan_box.child(0).child(1).text();
        log(xuan_txt);
        for (let ans of ans_list) {
          let similar = str_similar(ans.slice(2), xuan_txt);
          //log(xuan_txt, similar);
          if (similar > max_simi) {
            max_simi = similar;
            xuanxiang = xuan_box.child(0);
          }
        }
      }
      if(xuanxiang == null){
        var question = className("android.view.View").depth(25).enabled(true).drawingOrder(0).indexInParent(0).findOne(30000).text();
        // 截取到下划线前
        question = question.slice(0, question.indexOf(" "));

        try {
          // 此网站只支持十个字符的搜索
          var r1 = http.get("http://www.syiban.com/search/index/init.html?modelid=1&q=" + encodeURI(question.slice(0, 10)));
          ans = r1.body.string().match(/答案：.*</);
      } catch (error) { }
      let max_simi = 0;
      let xuanxiang = null;
      // 循环对比所有选项和答案，选出相似度最大的
      for (let xuan_box of xuan_list) {
        let xuan_txt = xuan_box.child(0).child(1).text();
        //log(xuan_txt);
        for (let ans of ans_list) {
          let similar = str_similar(ans.slice(2), xuan_txt);
          //log(xuan_txt, similar);
          if (similar > max_simi) {
            max_simi = similar;
            xuanxiang = xuan_box.child(0);
          }
        }
      }
      };
      if (xuanxiang != null) {
        fInfo("最终：" + xuanxiang.child(1).text());
        xuanxiang.click();
      } else {
        fInfo("无匹配答案");
        xuan_list[0].child(0).click();
      }
    }
    // 如果没找到答案
    else {
      fInfo("未找到答案");
      // 选第一个选项
      tiaozhan_01();//备选通道
     // break;
     // xuan_list[0].child(0).click();
    }
    sleep(2500);
    // 判断题是否答错
    if (text("结束本局").exists()) {
      sleep(5000);
      click("结束本局");
      text("再来一局").waitFor();
      if (total < 3) {
        fInfo("答错重试");
        console.warn("warn:", que_txt);
        text("再来一局").findOne().click();
      } else {
        // 退出
        a && (back(), textStartsWith("total").waitFor(), sleep(2000)), back(), 
        text("登录").waitFor();
        ran_sleep();
        return true;
      }
      total = 0;
      sleep(2000);
      continue;
    }
    // 没答错总数加1
    total += 1;
  }
}

/********双人、四人赛*********/
function do_duizhan1(renshu) {
  //   jifen_list_1 = jifen_list_1();
  fClear();
  if (renshu == 2) {
    // 点击进入双人对战
    //entry_jifen_project("双人对战");
   // entry_model(jifen_map["双人"]);
    fSet("title", "双人对战");
    fInfo("等待随机匹配");
    text("随机匹配").waitFor();
    sleep(1000);
    let match = text("随机匹配").findOne().parent().child(0);
    do {
      fInfo("点击：" + match.click());
      sleep(500);
    } while (text("随机匹配").exists());
  } else if (4 == renshu || 0 == renshu) {
    // 点击进入四人赛
    //entry_jifen_project("四人赛");
   // entry_model(jifen_map["四人"]);
    fSet("title", "四人赛");
    // 等待开始比赛并点击
    fInfo("等待开始比赛");
    text("开始比赛").waitFor();
    sleep(1000);
    let start_click = text("开始比赛").findOne().click();
    fInfo("点击：" + start_click);
  }
  let delay = Number(jisu);
  if (delay > 0 && duizhan_mode == 1) {
    ui.run(function () {
      let title = w.title.getText();
      w.title.setText(title + "(固定)");
      toastLog("这是废弃模式，没有正确率");
    });
  } else if (duizhan_mode == 2) {
    ui.run(function () {
      let title = w.title.getText();
      w.title.setText(title + "(手动)");
      toastLog("请手动点击答案");
    });
  }
  //text("开始").findOne(1000);
  className("android.widget.ListView").waitFor();
  fClear();
  //   if (renshu == 0) {
  //   }
  let num = 1;
  let err_flag = true;
  while (true) {
    // 如果是第一题或者下面出错，则跳过前面等待过渡
    if (num != 1 && err_flag) {
      // 检查到其中一个过渡界面为止
      while (true) {
        // 检测是否结束并退出
        if (text("继续挑战").exists()) {
          sleep(1000);
          let tz_click = text("继续挑战").findOne().click();
          fInfo("点击继续挑战:" + tz_click);
          sleep(1500);
          back();
          if (renshu == 2) {
            sleep(1000);
            fInfo("查找退出按钮");
            if (fast_mode) {
              winReshow();
            }
            var exit_click = text("退出").findOne().click();
            fInfo("点击退出:" + exit_click);
          }
          sleep(1000);
          text("登录").waitFor();
          ran_sleep();
          return true;
        } else if (text("第" + num + "题").exists()) {
          fClear();
          fInfo("第" + num + "题");
          break;
        }
      }
      // 直到过渡界面消失，再匹配下一题
      while (text("第" + num + "题").exists()) {} //sleep(100);
      //fTips("题号过渡消失");
    } else if (!err_flag) {
      err_flag = true;
      if (text("继续挑战").exists()) {
        sleep(1000);
        let tz_click = text("继续挑战").findOne().click();
        fInfo("点击继续挑战:" + tz_click);
        sleep(1500);
        back();
        if (renshu == 2) {
          sleep(1000);
          fInfo("查找退出按钮");
          if (fast_mode) {
            winReshow();
          }
          var exit_click = text("退出").findOne().click();
          fInfo("点击退出:" + exit_click);
        }
        sleep(1000);
        text("登录").waitFor();
        ran_sleep();
        return true;
      }
    }
    let listview = className("android.widget.ListView").findOne(1000);
    if (!listview) {
      log("找不到listview");
      err_flag = false;
      sleep(200);
      continue;
    }
    sleep(100); // 追求极限速度，不知道会不会出错
    let view_d28 = className("android.view.View").depth(28).indexInParent(0).findOne(1000);
    if (!view_d28) {
      toastLog("找不到view_d28");
      err_flag = false;
      sleep(200);
      continue;
    }
    // 根据父框的孩子数
    if (view_d28.childCount() > 0) {
      que_x = view_d28.bounds().left;
      que_y = view_d28.bounds().top;
      que_w = view_d28.bounds().width();
      if (view_d28.child(0).text().length <= 4) { //有来源的是前面两个空格元素，文本为4个空格
        que_h = view_d28.child(2).bounds().top - view_d28.bounds().top;
      } else { //无来源的是题目，文本为8个空格
        que_h = view_d28.child(0).bounds().bottom - view_d28.bounds().top;
      }
    } else {
      toastLog("找不到框体");
      log(view_d28.childCount(), view_d28.bounds());
      err_flag = false;
      sleep(200);
      continue;
    }
    // 查找选项个数
    var radio_num = className("android.widget.RadioButton").find().length;
    if (!radio_num) {
      log("找不到选项");
      err_flag = false;
      sleep(200);
      continue;
    }
    //fTips("开始识别题目");
    for (let i = 0; i < 3; i++) {
      let img = captureScreen();
      // 裁剪题干区域，识别题干
      let que_img = images.clip(img, que_x, que_y, que_w, que_h);
      //images.save(que_img, '/sdcard/1/que_img' + num + '.png');
      //       console.time('题目识别1');
      //       let results = ocr.recognize(que_img).results;
      //       var que_txt = ocr_rslt_to_txt(results).replace(/[^\u4e00-\u9fa5\d]|^\d{1,2}\.?/g, "");
      //       console.timeEnd('题目识别1');
      // 为了适配OCR插件改为下面这句
      console.time('题目识别');

      if (ocr_choice == 0) {
        var que_txt = google_ocr_api(que_img).replace(/[^\u4e00-\u9fa5\d]|\d{1,2}\./g, "");
      } else if (ocr_choice == 1) {
        var que_txt = paddle_ocr_api(que_img).replace(/[^\u4e00-\u9fa5\d]|\d{1,2}\./g, "");
      } else {
        var que_txt = ocr.recognizeText(que_img).replace(/[^\u4e00-\u9fa5\d]|\d{1,2}\./g, "");
      }
      console.timeEnd('题目识别');
      if (!que_txt) {
        images.save(img, '/sdcard/学习减压四合一/' + renshu + '-' + num + '.png', 'png', 50);
        images.save(que_img, '/sdcard/学习减压四合一/' + renshu + '-' + num + '-q.png', 'png', 50);
        fError("未识别出题目，图片保存至‘/sdcard/学习减压四合一/’");
        console.error("大概率无障碍服务失效" + auto.service);
        console.error("题目框体范围：", que_x, que_y, que_w, que_h);
        img.recycle();
        que_img.recycle();
      } else {
        fInfo("题目识别：" + que_txt);
        img.recycle();
        que_img.recycle();
        break
      }
    }
    if (renshu == 0) {
      fInfo("由于第一局匹配对手较强，正在挂机中。");
      fInfo("经测试挂机不会扣积分局数，此功能可在配置中关闭");
      fTips("请不要点击任何选项，不要作答！！！");
      num++;
      text("继续挑战").waitFor();
      continue;
    }
    // 选项清洗标识
    var replace_sign = "default_ocr_replace";
    let question_reg = new RegExp(update_info["question_reg"], "gi");
    let include_reg = new RegExp(update_info["include_reg"], "gi");
    var que_key = null;
    if (que_key = question_reg.exec(que_txt)) {
      replace_sign = "other_ocr_replace";
    } else if (que_key = (/读音|词形/g).exec(que_txt)) {
      replace_sign = "accent_ocr_replace";
    } else if (que_key = include_reg.exec(que_txt)) {
      replace_sign = "include_ocr_replace";
    }

    let ans_list = get_ans_by_tiku(que_txt);
    //log(ans_list);
    let idx_dict = {
      "A": 0,
      "B": 1,
      "C": 2,
      "D": 3
    };
    /************以下是因为随机选项顺序后失效的代码*****************/
    try { //防止别人先答完出错
      let idx = 0;
      if (ans_list.length <= 1) {
        if (ans_list.length == 1 && idx_dict[ans_list[0][0]] != undefined) {
          idx = idx_dict[ans_list[0][0]];
          fTips("答案:" + ans_list[0].slice(2));
          //           fInfo("答案:"+ ans_list[0]);
        } else if (ans_list.length == 0) {
          fInfo("未找到答案");
        }
        if (duizhan_mode == 1) {
          if (delay > 0 && num != 1) {
            sleep(random(delay, delay + 50));
          } else {
            // 直到选项完全出现在屏幕
            while (className("android.widget.ListView").findOne(1000).indexInParent() == 0) {}
          }
          let is_click = className("android.widget.RadioButton").findOnce(idx).parent().click();
          log(is_click);
          if (!is_click) {
            sleep(200);
            log(className("android.widget.RadioButton").findOnce(idx).parent().click());
          }
          num++;
          continue;
        } else if (duizhan_mode == 2) {
          num++;
          textMatches(/第.+题|继续挑战/).waitFor();
          continue;
        }
      }
    } catch (e) {
      log("error1:", e);
    }
    /************以上是因为随机选项顺序后失效的代码*****************/


    // 如果上面答案不唯一或者不包含找到的选项，直到选项完全出现在屏幕
    try {
      while (className("android.widget.ListView").findOne(1000).indexInParent() == 0) {}
      //fTips("选项显现");
    } catch (e) {
      log("error2:", e);
      err_flag = false;
      sleep(200);
      continue;
    }
    let xuanxiang_list = className("android.widget.ListView").findOne(1000);
    let xuanxiang_index = xuanxiang_list.indexInParent();
    let xuanxiang_list_x = xuanxiang_list.bounds().left;
    let xuanxiang_list_y = xuanxiang_list.bounds().top;
    let xuanxiang_list_w = xuanxiang_list.bounds().width();
    let xuanxiang_list_h = xuanxiang_list.bounds().height();

    if (!xuanxiang_list || !xuanxiang_list.parent().childCount() || !xuanxiang_list.parent().child(0)) {
      log("xuan_box is null");
      err_flag = false;
      sleep(200);
      continue;
    }
    log("开始截选项");
    console.time("选项识别");
    img = captureScreen();
    // 裁剪所有选项区域
    img = images.clip(img, xuanxiang_list_x, xuanxiang_list_y, xuanxiang_list_w, xuanxiang_list_h);
    //images.save(allx_img, '/sdcard/1/x_img' + num + '.png');
    let xuan_txt_list = [];
    let allx_txt = "";
    if (ocr_choice == 0) {
      // 排序顺序
      //     console.time('选项识别1');
      let x_results = JSON.parse(JSON.stringify(gmlkit.ocr(img, "zh").toArray(3)));
      allx_txt = ocr_rslt_to_txt(x_results).replace(/\s+/g, "");
      //     console.timeEnd('选项识别1');
    } else if (ocr_choice == 1) {
      let x_results = JSON.parse(JSON.stringify(paddle.ocr(img)));
      allx_txt = ocr_rslt_to_txt(x_results).replace(/\s+/g, "");
    } else {
      //     // 直接识别
      //     console.time('选项识别2');
      allx_txt = ocr.recognizeText(img);
      //     console.timeEnd('选项识别2');
    }
    console.timeEnd("选项识别");
    // log(allx_txt);
    if (!allx_txt) {
      images.save(img, '/sdcard/学习减压四合一/' + renshu + '-' + num + '-a.png', 'png', 50);
      log("识别不出选项文本，图片保存至‘/sdcard/学习减压四合一/’");
      err_flag = false;
      sleep(200);
      continue;
    }
    img.recycle();
    // 清洗选项文本
    log("replace_sign:" + replace_sign);
    log("清洗前：" + allx_txt);
    let replace_d = update_info[replace_sign];
    if (replace_sign == "include_ocr_replace") {
      let result = true;
      log("que_key:" + que_key);
      let [words, r, repl] = replace_d[que_key];
      for (let word of words) {
        let reg = new RegExp(word, "gi");
        if (!reg.test(allx_txt)) {
          result = false;
          break;
        }
      }
      if (result) {
        let reg = new RegExp(r, "gi");
        allx_txt = allx_txt.replace(reg, repl);
      }
    } else {
      for (let r of Object.keys(replace_d)) {
        let reg = new RegExp(r, "gi");
        allx_txt = allx_txt.replace(reg, replace_d[r]);
      }
    }
    // allx_txt.replace(/令媛/g, "令嫒");
    // 获取选项列表
    xuan_txt_list = allx_txt.match(/[a-d][^a-z\u4e00-\u9fa5\d]?\s*.*?(?=[a-d][^a-z\u4e00-\u9fa5\d]?|$)/gi);
    if (!xuan_txt_list) {
      log("识别不出选项");
      err_flag = false;
      sleep(200);
      continue;
    }
    if (xuan_txt_list && xuan_txt_list.length != radio_num) {
      xuan_txt_list = allx_txt.match(/[a-d][^a-z\u4e00-\u9fa5\d]\s*.*?(?=[a-d][^a-z\u4e00-\u9fa5\d]|$)/gi);
    }
    log(xuan_txt_list.toString());

    if (xuan_txt_list.length != 0) {
      let max_simi = 0;
      let right_xuan = '';
      let right_xuan2 = '';
      let ans_txt = '';
      for (let xuan_txt of xuan_txt_list) {
        let txt = xuan_txt.replace(/^[A-Z]\.?/gi, "");;
        for (let ans of ans_list) {
          let similar = str_similar(ans.slice(2), txt);
          if (similar > max_simi) {
            max_simi = similar;
            ans_txt = ans;
            if (duizhan_mode == 1) {
              // 答案默认顺序优先
              right_xuan = ans[0];
              right_xuan2 = xuan_txt[0].toUpperCase();
            } else {
              // 文本匹配优先
              right_xuan2 = ans[0];
              right_xuan = xuan_txt[0].toUpperCase();
            }
          }
        }
      }
      if (ans_list.length > 1) {
        fTips("匹配答案:" + ans_txt);
      }
      if (right_xuan != '' && duizhan_mode != 2) {
        let idx = idx_dict[right_xuan];
        fInfo("最终:" + right_xuan);
        try {
          className("android.widget.RadioButton").findOnce(idx).parent().click();
        } catch (e) {
          idx = idx_dict[right_xuan2];
          fInfo("备选:" + right_xuan2);
          try {
            className("android.widget.RadioButton").findOnce(idx).parent().click();
          } catch (e1) {
            log("error3:", e1);
            err_flag = false;
            sleep(200);
            continue;
          }
        }
        //log(a);
      } else if (duizhan_mode == 2) {
        textMatches(/第.+题|继续挑战/).waitFor();
      } else {
        try {
          className("android.widget.RadioButton").findOnce().parent().click();
        } catch (e1) {
          log("error4:", e1);
          err_flag = false;
          sleep(200);
          continue;
        }
      }
    } else {
      console.warn("未识别出选项");
      err_flag = false;
      sleep(200);
      continue;
    }
    num++;
  }
}

// 对战答错版
function dacuo(renshu) {
  jifen_list_1 = jifen_list_1();
  fClear();
  if (renshu == 2) {
    // 点击进入双人对战
   // entry_jifen_project("双人对战");
   //entry_model(jifen_map["双人"]);
    text("随机匹配").waitFor();
    sleep(1000);
    text("随机匹配").findOne().parent().child(0).click();
  } else if (renshu == 4) {
    // 点击进入四人赛
   // entry_jifen_project("四人赛");
   // entry_model(jifen_map["四人"]);
    // 等待开始比赛并点击
    fInfo("等待开始比赛");
    sleep(1000);
    let start_click = text("开始比赛").findOne().click();
    log("点击：" + start_click);
  }
  //fInfo("等待开始过渡");
  //text("开始").findOne(1000);
  className("android.widget.ListView").waitFor();
  let num = 1;
  let err_flag = true;
  while (true) {
    // 如果是第一题或者下面出错，则跳过前面等待过渡
    if (num != 1 && err_flag) {
      // 检查到其中一个过渡界面为止
      while (true) {
        // 检测是否结束并退出
        if (text("继续挑战").exists()) {
          fInfo("本轮结束");
          sleep(1000);
          text("继续挑战").findOne().click();
          sleep(1500);
          back();
          if (renshu == 2) {
            text("退出").findOne().click();
          }
          text("登录").waitFor();
          ran_sleep();
          fClear();
          return true;
        } else if (text("第" + num + "题").exists()) {
          break;
        }
      }
      // 直到过渡界面消失，再匹配下一题
      //log("等待题号过渡");
      while (text("第" + num + "题").exists()) {} //sleep(100);
    } else if (!err_flag) {
      err_flag = true;
      if (text("继续挑战").exists()) {
        fInfo("本轮结束");
        sleep(1000);
        text("继续挑战").findOne().click();
        sleep(1500);
        back();
        if (renshu == 2) {
          text("退出").findOne().click();
        }
        text("登录").waitFor();
        ran_sleep();
        return true;
      }
    }
    //log("开始第"+num+"题，等待listview");
    //className("android.widget.ListView").waitFor();
    let listview = className("android.widget.ListView").findOne(1000);
    if (!listview) {
      //log("找不到listview");
      err_flag = false;
      sleep(200);
      continue;
    }
    sleep(100); // 追求极限速度，不知道会不会出错
    //log("find view_d28");
    // listview父框体
    let view_d28 = className("android.view.View").depth(28).indexInParent(0).findOne(1000);
    if (!view_d28) {
      //log("找不到view_d28");
      //log('far:', listview.parent());
      //log('garfa', listview.parent().parent());
      err_flag = false;
      sleep(200);
      continue;
    }
    if (view_d28.childCount() > 0) {
      que_x = view_d28.bounds().left;
      que_y = view_d28.bounds().top;
      que_w = view_d28.bounds().width();
      que_h = view_d28.child(0).bounds().bottom - view_d28.bounds().top;
    } else {
      toastLog("找不到框体内容");
      //log(view_d28.childCount(), view_d28.bounds());
      err_flag = false;
      sleep(200);
      continue;
    }
    let idx_dict = {
      "A": 0,
      "B": 1,
      "C": 2,
      "D": 3
    };
    try { //防止别人先答完出错
      while (className("android.widget.ListView").findOne(1000).indexInParent() == 0) {}
      sleep(random(2000, 3000));
      //log("选项显现");
      className("android.widget.RadioButton").findOnce(random(0, 3)).parent().click();
      num++;
      continue;
    } catch (e) {
      //log("error1:", e);
      err_flag = false;
      sleep(200);
      continue;
    }
    num++;
  }
}

var delay_time = 2;
var seconds=1;
function delay(seconds) {
  sleep(1000 * seconds + randomNum(0, 500)); //sleep函数参数单位为毫秒所以乘1000
}
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
/********订阅*********/
function do_dingyue() {
 // entry_jifen_project("订阅");
  entry_model(jifen_map["订阅"]);
  fSet("title", "订阅…");
  fClear();
  fInfo("设置订阅");
  fRefocus()
    h = device_h; //屏幕高
    w = device_w; //屏幕宽
    x = (w / 3) * 2;
    h1 = (h / 10) * 9;
    h2 = (h / 12); 
    let total_click = 0;
    if (dingyue_dao) {
      w = fInit();
        // fSet("title", "搜索‘上新/2023年上线’订阅…");
         fClear();
         fInfo("上新/2023年上线--搜索中……");
         var t_1 = 468;
         var t_2 = 1199;
         var arr = [2, 6];
       }else{
        w = fInit();
      // fSet("title", "搜索‘强国号’订阅…");
       fClear();
       fInfo("强国号’-- 遍历搜索中………");
       var t_1 = 318;
       var t_2 = 150;
     var arr = [4, 3, 10, 35, 38, 4, 45, 44, 4, 1];
        }
  for (let i = 0; i < arr.length + 1; i++) {
    var asub_1 = parseInt(arr[i]);
    sleep(random(400, 800)); 
    press(136,t_1,100) ;
    sleep(random(800, 1500));
   
        for (let ii = 0; ii < asub_1; ii++) {
          while (total_click < 2 && asub_1 != 0) {
          while(total_click < 2){
            sleep(random(500, 1000)); 
            let img = captureScreen();
          sleep(random(300, 500));
          try {
            var pot = findColorInRegion(img, "#E42417", 1000, 100,
            device.width - 1000, device.height - 200, 30);
          } catch (e) {
            console.error('继续搜寻');
            continue;
          }
        if(pot) {
            //fInfo("找到新订阅");
            sleep(random(800, 1500)); 
            // let is_click = dingyue.click();
            fInfo("找到并准备点击：订阅");
            //click(dingyue.bounds().centerX(), dingyue.bounds().centerY());
            sleep(random(800, 1500)); 
            click(pot.x, pot.y+5);
            fInfo("点击坐标 (" + pot.x + "," + (pot.y+5) + ")");
            fInfo("完成第 " + (total_click + 1) + " 订阅");
            total_click += 1;
             img.recycle();
             sleep(random(800, 1500));
          }else {
             img.recycle();
            break;
              }
        }
          if (total_click == 2) {
           
           // w = fInit();
            fInfo("订阅已完成,准备返回");
            back();
            text("登录").waitFor();
            ran_sleep();
            return true;
            } else { 
           //   img.recycle();
              swipe(x+random(-5, 5), h1+random(-2, 8), x + random(-4, 6), h2+random(-2, 7), random(800, 1200)); // 下滑动
              toastLog("下滑搜索中……");
              //fInfo("下滑搜索中……");
              asub_1--;
          sleep(random(800, 1500)); 
                   }
        }
        //img.recycle();
        sleep(500);
        }
        t_1 += t_2;
    }
      if(total_click < 2 && dingyue_dao){
      fClear();
         fInfo("继续地方-上新/2023年上线-搜索……");
         press(670,167,100) ;
         sleep(random(600, 1000));
         var t_1 = 468;
         var t_2 = 449;
         var arr = [1, 2];
         for (let i = 0; i < arr.length + 1; i++) {
          var asub_1 = parseInt(arr[i]);
          sleep(random(400, 800)); 
          press(136,t_1,100) ;
          sleep(random(800, 1500));
              for (let ii = 0; ii < asub_1; ii++) {
                while (total_click < 2 && asub_1 != 0) {
                  while(total_click < 2){
                sleep(random(500, 1000)); 
                let img = captureScreen();
                sleep(random(300, 500));
                try {
                  var pot = findColorInRegion(img, "#E42417", 1000, 100,
                  device.width - 1000, device.height - 200, 30);
                } catch (e) {
                  console.error('继续搜寻');
                  continue;
                }
                if (pot) {
                 // fInfo("找到一个订阅");
                  sleep(random(800, 1500)); 
                  // let is_click = dingyue.click();
                  fInfo("找到并准备点击：订阅");
                  //click(dingyue.bounds().centerX(), dingyue.bounds().centerY());
                  sleep(random(800, 1500)); 
                  click(pot.x, pot.y+5);
                  fInfo("点击坐标 (" + pot.x + "," + (pot.y+5) + ")");
                  fInfo("完成第 " + (total_click + 1) + " 订阅"); 
                  total_click += 1;
                 // sleep(random(800, 1500));
                   img.recycle();
                   sleep(random(800, 1500));
                }else{
                  img.recycle();
                  break;
                }
                }
                if (total_click == 2) {
                 // img.recycle();
                 // w = fInit();
                  fInfo("订阅已完成,准备返回");
                  back();
                  text("登录").waitFor();
                  ran_sleep();
                  return true;
                  } else { 
                 //   img.recycle();
                    swipe(x+random(-5, 5), h1+random(-3, 3), x+random(-2, 5), h2+random(-3, 7), random(800, 1200)); // 下滑动
                    toastLog("下滑搜索中……");
                    asub_1--;
                sleep(random(800, 1500)); 
                         }
              }
              //img.recycle();
              sleep(500);
              }
              t_1 += t_2;
          }
      }


    if (total_click == 0) fError("无新可订阅项目");
    if (total_click == 1) fTips("此次仅发现1个可订阅项目");
    back();
    text("登录").waitFor();
    ran_sleep();
    return true;
   }

/********订阅*********/
function do_dingyue_0() {
 // entry_jifen_project("订阅");
  entry_model(jifen_map["订阅"]);
  fSet("title", "订阅…");
  fClear();
  let tab1 = descContains("Tab").findOne(9000);
  if (!tab1) {
    back();
    text("登录").waitFor();
    return false
  }
  let zuo1 = descContains("上新").findOne(9000);
  if (!zuo1) {
    back();
    text("登录").waitFor();
    return false
  }
  // 上方标签
  let tab_clt = descContains("Tab").untilFind();
  var total_click = 0;
  for (let tab of tab_clt) {
    tab.click();
    sleep(500);
    // 左方分类
    let zuo_clt = className("android.view.View").depth(14).findOne().children();
    for (let zuo of zuo_clt) {
      if (dingyue_dao) {
        zuo = zuo_clt[zuo_clt.length - 1];
      }
      zuo.click();
      sleep(500);
      // 右方列表
      className("android.view.View").depth(14).waitFor();
      let you_clt = className("android.view.View").depth(14).findOnce(1);
      let last_desc = "";
      while (you_clt) {
        //let img = captureScreen();
        // 订阅按钮集合
        //fInfo("查找订阅集合");
        let dingyue_clt = className("android.widget.ImageView").indexInParent(2).untilFind();
        try {
          //fInfo(dingyue_clt[dingyue_clt.length-1].parent().child(1).desc().slice(0,4)+" 旧:"+last_desc.slice(0,4));
          if (dingyue_clt[dingyue_clt.length - 1].parent().child(1).desc() == last_desc) {
            fClear();
            fInfo("到底了");
            break;
          }
          // 最底下订阅的名称
          last_desc = dingyue_clt[dingyue_clt.length - 1].parent().child(1).desc();
        } catch (e) {
          log(e);
          continue;
        }
        let img = captureScreen();
        for (let dingyue of dingyue_clt) {
          if (dingyue.bounds().bottom >= device_h) {
            continue;
          }
          try {
            var pot = findColorInRegion(img, "#E42417", dingyue.bounds().left, dingyue.bounds().top,
              dingyue.bounds().width(), dingyue.bounds().height(), 30);
          } catch (e) {
            console.error(dingyue.bounds());
            console.error(dingyue.parent().child(1).desc());
          }
          //if (pot && dingyue.bounds().bottom < device_h) {
          if (pot) {
            fInfo("找到一个订阅");
            sleep(1000);
            let is_click = dingyue.click();
            fInfo("点击：" + is_click);
            //click(dingyue.bounds().centerX(), dingyue.bounds().centerY());
            sleep(1000);
            //click(pot.x, pot.y+5);
            total_click += 1;
          }
          if (total_click >= 2) {
            fInfo("订阅已完成");
            back();
            text("登录").waitFor();
            ran_sleep();
            return true;
          }
        }
        //img.recycle();
        let scr_result = you_clt.scrollForward();
        sleep(500);
        //         swipe(device_w*0.6, device_h*0.8, device_w*0.6, device_h*0.3, 800);
        //         while (desc("加载中").exists()) { sleep(1000); }
      }
      if (dingyue_dao) {
        fInfo("只检查年度上新");
        break;
      }
    }
    //sleep(1000);
  }
  fInfo("无可订阅项目");
  back();
  text("登录").waitFor();
  ran_sleep();
  return true;
}

/*********本地*********/
function do_bendi() {
  //entry_jifen_project("本地频道");
  entry_model(jifen_map["本地"]);
  fSet("title", "本地…");
  fClear();
  text("切换地区").findOne(5000);
  if (text("立即切换").exists()) {
    text("取消").findOne(3000).click();
  }
  //let banner = className("android.support.v7.widget.RecyclerView").findOne();
  let banner = classNameContains("RecyclerView").findOne();
  let txt = banner.child(0).child(1).text();
  banner.child(0).click();
  className("android.widget.TextView").depth(11).text(txt).waitFor();
  sleep(1500);
  back();
  ran_sleep();
  jifen_init();
  ran_sleep();
  return true;
}


/*********运动*********/
function do_yundong() {
 // entry_jifen_project("强国运动");
  entry_model(jifen_map["运动"]);
  fSet("title", "运动…");
  fClear();
  sleep(1000);
while(!id("sport_step")){
  sleep(random(3000, delay_time))
  fInfo("尝试查询");
  back();
  //entry_jifen_project("强国运动");
  entry_model(jifen_map["运动"]);
 }
 sleep(random(700, 1500))
  let dong_0 = className("android.widget.TextView").id("sport_step").findOne();
   dong_0.click();
 sleep(random(700, 1500))
   back();
  //  sleep(2000);
//    let dong_3 = className("android.widget.TextView").id("empty_rank_describe").findOne(3000);
//   if(dong_3) fInfo("非组织用户暂不支持排名");
//    else {let dong_name = className("android.widget.TextView").id("sport_name").findOnce(0).text();
//  let dong_rank = className("android.widget.TextView").id("sport_self_rank_info").findOnce(0).text();
//  if(dong_rank == "暂无排名信息") fInfo("暂无排名信息");
//  else fInfo(dong_name + dong_rank +"运动步数" + dong_0 +"步");
//      }
sleep(random(700, 1500))
 // back();
  // ran_sleep();
  // jifen_init();
  text("登录").waitFor();
  ran_sleep();
  return true;
}
/**************************************上方为执行各项目函数*********************************************/



// 做一次题
function do_exec(type) {
  // 等待加载
  let tishi = text("查看提示").findOne();
  //log(tishi);
  delay(random(0.5, 0.8));
  // 点击查看提示按钮
  tishi.click();
  // 随机延迟、等待提示
  ran_sleep();
  // 等待加载
  let tishi_0 = text("提示").findOne(3000);
  if (!tishi_0) text("查看提示").findOne().click();
  delay(random(0.2,0.8));
   text("提示").waitFor();

  // 判断题型
  /******************单选题*******************/
  if (textStartsWith("单选题").exists()) {
    // 获取题目
    //let que_txt = className("android.view.View").depth(23).findOnce(1).text();
    // 上面被专项答题影响了22、23层的元素数，只能通过其他层定位
    let que_txt = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).text();
    // log(que_txt);
    var ans = get_ans_by_re(que_txt);
    if (ans && depth(26).text(ans).exists()) {
      // 定位选项并点击
      delay(0.1);
      depth(26).text(ans).findOnce().parent().click();
    }
    //else if (ans = get_ans_by_http_dati(que_txt)) {
    else {
      if (type) {
        ans = get_ans_by_dati_tiku(que_txt, type);
      } else {
        ans = get_ans_by_dati_tiku(que_txt);
      }
      let reg = /[A-F]/;
      if (ans && reg.test(ans) && ans.length == 1) {
        ans = ans.match(reg)[0];
        let idx_dict = {
          "A": 0,
          "B": 1,
          "C": 2,
          "D": 3,
          "E": 4,
          "F": 5
        };
        className("android.widget.RadioButton").findOnce(idx_dict[ans[0]]).parent().click();
        delay(0.7);
      }
      // 否则用ocr
      else {
        if (!ans) {
          ans = get_ans_by_ocr1().replace(/\s/g, "");
        }
        if (depth(26).text(ans).exists()) {
          delay(0.3);
          depth(26).text(ans).findOne().parent().click();
        } else {
          // 筛选出相似度最大的
          let xuan_clt = className("android.widget.RadioButton").find();
          let max_simi = 0;
          let xuanxiang = null;
          for (let n of xuan_clt) {
            let similar = str_similar(ans, n.parent().child(2).text());
            if (similar > max_simi) {
              max_simi = similar;
              xuanxiang = n.parent();
            }
          }
          //点击选项
          if (xuanxiang) {
            delay(0.3);
            xuanxiang.click();
          } else {
            delay(0.5);
            className("android.widget.RadioButton").findOne().parent().click();
          }
          //log(xuanxiang.find().size());
        }
      }
    }
  }
  /******************填空题*******************/
  else if (textStartsWith("填空题").exists()) {
    // 填空题题干会被空格分割
    //let que = className("android.view.View").depth(23).findOnce(1).children();
    // 上面被专项答题影响了22、23层的元素数，只能通过其他层定位
    let que = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).children();
    // 第一个编辑框的父元素
    let text_edit = className("android.widget.EditText").findOne().parent().children();
    // 第一个空答案字数，后期考虑换成全部答案字数
    let word_num = text_edit.find(className("android.view.View")).length;
    // 填空数
    let kong_num = 0;
    let que_txt = "";
    for (let i of que) {
      // 如果没有text则加个空格
      if (i.text()) {
        que_txt = que_txt + i.text();
      } else {
        kong_num += 1;
        que_txt = que_txt + "    ";
      }
    }
    // log(que_txt);
    // log("kong_num:", kong_num);
    // 判断是否只有一个空，re只能得出第一空答案
    if (kong_num <= 1) {
      //一个空时，先正则匹配，再题库匹配，以防题库出错，最后OCR
      //var ans = get_ans_by_http_dati(que_txt);
      if (type) {
        ans = get_ans_by_dati_tiku(que_txt, type);
      } else {
        ans = get_ans_by_dati_tiku(que_txt);
      }
      if (!ans) {
        ans = get_ans_by_re(que_txt);
      }
      //长度和空格数相等才会填充
      if (ans && word_num == ans.length) {
        // 定位填空并填入
        delay(0.7);
        depth(25).className("android.widget.EditText").findOne().setText(ans);
      } else {
        ans = get_ans_by_ocr1().replace(/\s/g, "");
        if (!ans) {
          ans = "未识别出文字";
        }
        delay(0.7);
        depth(25).className("android.widget.EditText").setText(ans);
      }
    }
    // 如果多个空，直接ocr按顺序填入
    else {
      //ans = get_ans_by_http_dati(que_txt);
      if (type) {
        ans = get_ans_by_dati_tiku(que_txt, type);
      } else {
        ans = get_ans_by_dati_tiku(que_txt);
      }
      if (!ans) {
        ans = get_ans_by_ocr1().replace(/\s/g, "");
      }
      if (!ans) {
        ans = "未识别出文字";
      }
      edit_clt = className("android.widget.EditText").find();
      let ans_txt = ans;
      for (let edit of edit_clt) {
        let n = edit.parent().children().find(className("android.view.View")).length;
        delay(0.7);
        edit.setText(ans_txt.slice(0, n));
        ans_txt = ans_txt.slice(n);
      }
    }
  }
  /******************多选题*******************/
  else if (textStartsWith("多选题").exists()) {
    sleep(500);
    // 获取题目
    // let que_txt = className("android.view.View").depth(23).findOnce(1).text();
    // 上面被专项答题影响了22、23层的元素数，只能通过其他层定位
    let que_txt = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).text();
    // log(que_txt);
    // 这里匹配出全部挖空
    let reg1 = /\s{3,}/g;
    let res = que_txt.match(reg1);
    // log(res);
    // 先看挖空数量和选项数量是否一致，判断是否全选
    let collect = className("android.widget.CheckBox").find();
    // 如果全选
    if (res.length == collect.length) {
      ans = "全选";
      sleep(500);
      for (let n of collect) {
        // 直接点击会点不上全部
        delay(random(1.1, 1.8)); 
        n.parent().click();
      }
    }
    //else if (ans = get_ans_by_http_dati(que_txt)) {
    else {
      if (type) {
        ans = get_ans_by_dati_tiku(que_txt, type);
      } else {
        ans = get_ans_by_dati_tiku(que_txt);
      }
      let reg = /[A-F]{1,6}/;
      if (ans && reg.test(ans)) {
        ans = ans.match(reg)[0];
        let idx_dict = {
          "A": 0,
          "B": 1,
          "C": 2,
          "D": 3,
          "E": 4,
          "F": 5
        };
        for (let n of ans) {
          className("android.widget.CheckBox").findOnce(idx_dict[n]).parent().click();
          delay(random(0.9, 1.7));
        }
      }
      // 如果不是全选
      else {
        ans = get_ans_by_ocr1();
        // 下面为匹配子串法
        ans = ans.replace(/[^\u4e00-\u9fa5\w]/g, "");
        log(ans);
        for (let n of collect) {
          let xuan_txt = n.parent().child(2).text().replace(/[^\u4e00-\u9fa5\w]/g, "");
          if (ans.indexOf(xuan_txt) >= 0) {
            delay(random(0.8, 1.8));
            n.parent().click();
          }
        }
      }
    }
  }
  fInfo("答案：" + ans);
  // 返回退出查看提示界面
  back();
  delay(random(0.3, 0.7));
  return true;
}

// 通过re匹配答案
function get_ans_by_re(que_txt) {
  // 定位挖空两侧字符，限制在两个标点符号内
  let reg1 = /([^，。？、；：” ]*?)\s{3,}([^，。？、；：” ]*)/;
  let res = que_txt.match(reg1);
  if (res[1] == '' && res[2] == '') {
    reg1 = /([^，。？、；：” ]*?[，。？、；：” ]*?)\s{3,}([，。？、；：” ]*?[^，。？、；：” ]*)/;
    res = que_txt.match(reg1);
  }
  // log(res);
  // 生成正则表达式
  let reg2_str = "/" + res[1] + "([^，。？、；：” ]*)" + res[2] + "/";
  let reg2 = eval(reg2_str);
  // log(reg2);
  // 获取试题信息、匹配答案
  // let tishi_txt = className("android.view.View").depth(23).findOnce(6).text();
  // 上面的查找方式会被出题方干扰
  // let tishi_txt = className("android.view.View").depth(22).findOnce(2).child(0).text();
  // 上面的层次在专项答题中出现变化
  let tishi_txt = text("提示").findOne().parent().parent().child(1).child(0).text();
  //log(tishi_txt);
  // 如果匹配到答案
  if (tishi_txt.match(reg2)) {
    let ans = tishi_txt.match(reg2)[1];
    log(ans);
    return ans;
  } else {
    return 0;
  }
}

// 通过ocr匹配答案
function get_ans_by_ocr1() {
  // 定位提示框位置
  //let tishi_box = className("android.view.View").depth(22).findOnce(2).child(0).bounds();
  // 上面的层次在专项答题中出现变化
  fRefocus();
  let tishi_box = text("提示").findOne().parent().parent().child(1).child(0).bounds();
  fInfo('开始截屏');
  let img = captureScreen();
  // 控制截图范围
  delay(1.2);
  img = images.clip(img, tishi_box.left - 10, tishi_box.top - 10, tishi_box.width() + 20, tishi_box.height());
  //images.save(img, '/sdcard/1/1.png');
  // 二值化
  img = images.interval(img, "#FD1111", 120); //比inRange()好用多了
  //images.save(img, '/sdcard/1/2.png');
  let ans = "";
  //   let resp = ocr.recognize(img).results;
  //   ans = ocr_rslt_to_txt(resp);
  // 为适配第三方OCR改动
  if (ocr_choice == 0) {
    ans = google_ocr_api(img);
  } else if (ocr_choice == 1) {
    ans = paddle_ocr_api(img);
  } else {
    ans = ocr.recognizeText(img);
  }
  if (!ans) {
    fInfo("未识别出文字");
  } else {
    log(ans);
  }
  img.recycle();
  return ans;
}

// 通过http请求匹配答案
function get_ans_by_http(que_txt) {
  // 匹配题空两边汉字、字母及数字
  let reg = /[\u4e00-\u9fa5\d]+/g;
  //let reg = /(\S*)\s{2,}(\S*)/;
  let res = que_txt.match(reg);
  if (res == null) {
    return [];
  }
  // 此处可以加个判断，不然截图没截好时会有bug
  // 选取长的一边并控制在十个字
  let longest = '';
  for (let r of res) {
    if (r.length > longest.length && r.indexOf("中华人民共和") < 0 && r.indexOf("习近平总书记") < 0) {
      longest = r;
    }
  }
  let keyword = longest.slice(0, 6);
  log(keyword);
  // 获取答案html并解析
  let req = http.get('http://www.syiban.com/search/index/init.html?modelid=1&q=' + encodeURI(keyword));
  let resp_str = req.body.string();
  let resp_list = resp_str.match(/答案：(.*?)<\/span><\/p>/g);
  let ans_list = [];
  if (resp_list != null) {
    for (let a of resp_list) {
      // 查找出来后答案中有不可见的ZERO WIDTH SPACE，需要清洗
      ans = a.match(/答案：(.*?)<\/span><\/p>/)[1].replace(/[\u200B-\u200D\uFEFF]/g, "");
      //log(ans);
      ans_list.push(ans);
    }
  }
  //log(ans_list);
  return ans_list;
}

// 通过离线答题题库匹配答案
function get_ans_by_dati_tiku(que_txt, type) {
  let keyword = que_txt.replace(/\s/g, "");
  let ans_list = [];
  let ans = null;
  if (dati_tiku.length == 0) {
    return false;
  }
  //for (let ti of dati_tiku) {
  for (let i = dati_tiku.length - 1; i >= 0; i--) {
    let ti = dati_tiku[i];
    if (ti[0].indexOf(keyword) > -1) {
      ans = ti[1];
      if (ans != "None") {
        ans_list.push(ans);
      }
    }
  }
  //if (!ans || ans == "None") {return false;}
  if (!ans_list) {
    return false;
  }
  if (type) { // && ans_list.length > 1
    for (let a of ans_list) {
      if (a.indexOf(type) > -1) {
        ans = a.replace(type, "");
        break;
      }
    }
  }
  log("匹配题库：", ans);
  return ans;
}

// 通过http请求匹配答题答案
function get_ans_by_http_dati(que_txt) {
  // 获取答案html并解析
  let keyword = que_txt.replace(/\s/g, "");
  let req = http.get('https://tiku.3141314.xyz/search?table_name=tiku&page=1&rows=20&keyword=' + encodeURI(keyword));
  let resp_json = req.body.json();
  if (resp_json["total"] == 0) {
    return false;
  }
  let rows = resp_json["rows"];
  log(rows[0]);
  let ans_list = [];
  let ans = rows[0]["answer"];
  if (ans == "None") {
    return false;
  }
  //log(ans_list);
  return ans;
}

// 检测|更新离线题库
function update_dati_tiku() {
  //   let total_req = http.get("https://tiku.3141314.xyz/tableCount");
  let total = 1;
  let last_dati_tiku_link = storage.get("dati_tiku_link", "");
  let dati_tiku = storage.get('dati_tiku', []);
  //   if (total_req.statusCode == 200) {
  //     total = total_req.body.json()[0][0];
  //   } else {
  try {
    //dati_tiku = get_tiku_by_ct('https://webapi.ctfile.com/get_file_url.php?uid=35157972&fid=555754562&file_chk=94c3c662ba28f583d2128a1eb9d78af4&app=0&acheck=2&rd=0.14725283060014105');
    //dati_tiku = get_tiku_by_gitee('https://gitee.com/songgedodo/songge_tiku/raw/master/dati_tiku.txt');
    if (update_info["dati_tiku_link"] != last_dati_tiku_link) {
      try {
        dati_tiku = get_tiku_by_http(update_info["dati_tiku_link"]);
      } catch (e) {
        try {
          dati_tiku = get_tiku_by_http(update_info["dati_tiku_link2"]);
        } catch (e) {
          dati_tiku = get_tiku_by_http(update_info["dati_tiku_link3"]);
        }
      }
      storage.put("dati_tiku_link", update_info["dati_tiku_link"]);
      storage.put('dati_tiku', dati_tiku);
      fInfo("已更新离线题库");
    } else {
      fInfo("未检测到题库更新，已用历史题库");
    }
    return dati_tiku
  } catch (e) {
    console.warn(e);
    if (dati_tiku) {
      fInfo("未识别出离线题库，已用历史题库");
      return dati_tiku
    }
  }
  //   } 上面else的}
  //log("update total:", total);
  if (!dati_tiku || dati_tiku.length != total) {
    let req = http.get("https://tiku.3141314.xyz/getAnswer");
    if (req.statusCode == 200) {
      dati_tiku = req.body.json();
      storage.put('dati_tiku', dati_tiku);
      fInfo("题库已更新");
    } else {
      fInfo("网络问题识别不出在线题库");
    }
  }
  return dati_tiku;
}

//上传错题
function upload_wrong_exec(endstr) {
  text("答案解析").waitFor();
  let que_txt = "";
  if (textStartsWith("填空题").exists()) {
    let que = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).children();
    for (let i of que) {
      // 如果没有text则加个空格
      if (i.text()) {
        que_txt = que_txt + i.text();
      } else {
        que_txt = que_txt + "    ";
      }
    }
  } else {
    que_txt = className("android.view.View").depth(24).findOnce(1).parent().parent().child(1).text();
  }
  let ans_txt = textStartsWith("正确答案：").findOne().text().replace(/正确答案：|\s+/g, "");
  let question = que_txt.replace(/\s/g, "");
  if (endstr) {
    ans_txt += endstr;
  }
  fError("错题:" + question + ans_txt);
  dati_tiku.push([question, ans_txt, null, null, null]);
}

// 通过缓存题库获取答案
function get_ans_by_tiku(que_txt) {
  let ans_list = [];
  let max_simi = 0;
  for (let ti of Object.keys(tiku)) {
    //log(ti.replace(/[\s_]/g, "").indexOf(que_txt));
    let ti_txt = ti.replace(/\[.+\]|^\d+\./g, "").replace(/[^\u4e00-\u9fa5\d]/g, "");
    //log(ti_txt);
    let len = que_txt.length;
    //let simi = str_similar(ti_txt.slice(0, len+6), que_txt);
    let simi = str_similar(ti_txt.slice(0, len), que_txt);
    //if (ti_txt.indexOf(que_txt) >= 0) {
    if (simi >= 0.25) {
      if (simi > max_simi) {
        ans_list.length = 0;
        ans_list.push(tiku[ti][1]);
        max_simi = simi;
      } else if (simi == max_simi) {
        ans_list.push(tiku[ti][1]);
      }
    }
  }
  return ans_list;
}

// 获取直链json
function get_tiku_by_http(link) {
  // 通过gitee的原始数据保存题库
  if (!link) {
   // link = "https://mart-17684809426.coding.net/p/tiku/d/tiku/git/raw/master/tiku_json.txt"
   link ="https://gh.api.99988866.xyz/https://github.com/OuO-dodo/tiku/blob/master/info.json"
  }
  let req = http.get(link, {
    headers: {
      "Accept-Language": "zh-cn,zh;q=0.5",
      "User-Agent": random(0, 17),
    },
  });
  log(req.statusCode);
  // 更新题库时若获取不到，则文件名+1
  if (req.statusCode != 200) {
   throw "网络原因未获取到题库，请尝试切换流量或者更换114DNS，退出脚本";
    return false;
  }
  return req.body.json();
}

// 获取城通网盘题库
function get_tiku_by_ct(link) {
  // 获取答案html并解析
  // 城通网盘解析
  if (!link) {
    link = "https://webapi.ctfile.com/get_file_url.php?uid=35157972&fid=546999609&file_chk=e83f4b72a2f142cca6ee87c64baba15c&app=0&acheck=2&rd=0.9023931062078081"
  }
  let req = http.get(link);
  //   let resp_str = req.body.string();
  //   let result = eval("("+ resp_str + ")");
  let result = req.body.json();
  let file = http.get(result["downurl"]);
  //   return eval("("+ file.body.string() + ")");
  return file.body.json();
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
  //log(ans);
  return ans;
}

// 重启每日、每周
function restart(restart_flag) {
  // 点击退出
  ran_sleep();
  back();
  text("退出").findOne().click();
  ran_sleep();
  switch (restart_flag) {
    // 0为每日答题
    case 0:
      text('登录').waitFor();
     // entry_jifen_project("每日答题");
      entry_model(jifen_map["每日"]);
      break;
      // 1为每周答题
    case 1:
      // 等待列表加载
      text('本月').waitFor();
      //当出现已作答时，点击最后一个未作答
      while (!text("已作答").exists()) {
        depth(21).scrollable().findOne().scrollForward();
        sleep(200);
      }
      var clt = text("未作答").find();
      clt[clt.length - 1].parent().click();
      break;
  }
}

// 从首页进入积分界面初始化
function jifen_init() {
  for (id("comm_head_xuexi_score").findOne().click(); !className("android.view.View").text("登录").findOne(9E3);) back(), sleep(1E3), id("comm_head_xuexi_score").findOne().click();
  fRefocus();
  text("登录").waitFor();
  className("android.webkit.WebView").scrollable().findOne().scrollForward()
}

// 模拟随机时间0.5-3秒，后期可以用户自定义
function ran_sleep() {
  return sleep(random(1000, delay_time));
}

// 比较两个字符串相似度
function str_similar(str1, str2) {
  str1 = str1.replace(/[^\u4e00-\u9fa5\u2460-\u2469\wāáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜ]/g, "");
  str2 = str2.replace(/[^\u4e00-\u9fa5\u2460-\u2469\wāáǎàōóǒòēéěèīíǐìūúǔùüǖǘǚǜ]/g, "");
  if (str1 == str2) {
    return 99;
  }
  if (str1.length > str2.length) {
    var muzi = str2;
    var instr = str1;
  } else {
    muzi = str1;
    instr = str2;
  }
  let reg = "/[" + muzi + "]{1}/g";
  let resu = instr.match(eval(reg));
  if (resu) {
    return (resu.length / instr.length);
  } else {
    return 0;
  }
}

// 关闭音乐浮动插件
function close_video() {
  let imv = className("android.widget.ImageView").find();
  //log(imv.empty());
  let swtch = imv[imv.length - 1];
  swtch.click();
  sleep(1000);
  swtch.click();
  return true;
}

// 屏幕宽高、方向初始化
function init_wh() {
  fInfo("屏幕方向检测");
  log(device.width + "*" + device.height);
  var device_w = depth(0).findOne().bounds().width();
  var device_h = depth(0).findOne().bounds().height();
  log(device_w + "*" + device_h);
  if (device.width == device_h && device.height == device_w) {
    fError("设备屏幕方向检测为横向，后续运行很可能会报错，建议调整后重新运行脚本");
    sleep(10000);
  } else if (device.width == 0 || device.height == 0) {
    fError("识别不出设备宽高，建议重启‘学习减压四合一’助手后重新运行脚本");
    sleep(10000);
  }
  return [device_w, device_h]
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

// 测试ocr功能
function ocr_test() {
  if (Number(ocr_maxtime)) {
    var test_limit = Number(ocr_maxtime);
  } else {
    var test_limit = 5000;
  }
  try {
    fInfo("测试ocr功能，开始截图");
    var jietu_01 = true;
    var jietu_02 = true;
    while(jietu_01){
      let img_test = captureScreen();
    delay(1);
    if(img_test) {jietu_01 = false;return img_test;}
    else fInfo("测试ocr功能，开始截图1");
    }
    try {
       img_test = images.clip(img_test, 0, 100, device_w, 250);
       delay(1);
    } catch (e) {
      img_test = images.clip(img_test, 0, 100, device_w, 250);
      delay(1);
    }   
    log("开始识别");
    //console.time("OCR识别结束");
    let begin = new Date();

    if (ocr_choice == 0) {
      let test_txt = google_ocr_api(img_test);
    } else if (ocr_choice == 1) {
      let test_txt = paddle_ocr_api(img_test);
    } else {
      let test_txt = ocr.recognizeText(img_test);
    }
    //console.timeEnd("OCR识别结束");
    let end = new Date();
    let test_time = end - begin;
    fInfo("OCR识别结束:" + test_time + "ms");
    if (test_time > test_limit) {
      fError("OCR识别过慢(>" + test_limit + "ms)，已跳过多人对战，可在配置中设置跳过阈值");
      fError("如偶然变慢，可能为无障碍服务抽风，建议重启‘学习减压四合一’助手后重试");
      sleep(3000);
      return false
    } else {
      fInfo("OCR功能正常");
      img_test.recycle();
      return true;
    }
  } catch (e) {
    fError(e + "：ocr功能异常，退出脚本");
    exit();
    return false;
  }
}

// pushplus推送
function send_pushplus(token, sign_list) {
  zongfen = "old" == jifen_flag ? text("成长总积分").findOne().parent().child(3).text() : text("成长总积分").findOne().parent().child(1).text();
  jinri = jifen_list.parent().child(1).text().replace(" ", "").replace("累积", "累积:");
  let style_str = '<style>.item{height:1.5em;line-height:1.5em;}.item span{display:inline-block;padding-left:0.4em;}\
.item .bar{width:100px;height:10px;background-color:#ddd;border-radius:5px;display:inline-block;}\
.item .bar div{height:10px;background-color:#ed4e45;border-radius:5px;}</style>';
  let content_str = "<h6>" + jinri + " 总积分:" + zongfen + "</h6><div>";
  if(2 != meizhou) content_str += "<h6>"  + " (含仅计入总积分的每周答题:" + meizhou_score + "分)" + "</h6><div>";
  jinri.match(/\d+/g) || (content_str += "由于网络原因，未识别出总分，请自行查看");
  for (let sign of sign_list) {
    if (sign == "ocr_false") {
      content_str = '由于ocr过慢，已跳过多人对战' + content_str;
    }
  }
  for (let option of jifen_list.children()) {
    if ("old" == jifen_flag)
      var title = option.child(0).child(0).text(),
        score = option.child(2).text().match(/\d+/g)[0],
        total = option.child(2).text().match(/\d+/g)[1];
    else
      "new1" == jifen_flag ? ((title = option.child(0).text()), (score = option.child(3).child(0).text()), (total = option.child(3).child(2).text().match(/\d+/g)[0])) :
      "new2" == jifen_flag && (title = option.child(0).text(), score = option.child(3).text().match(/\d+/g)[0], total = option.child(3).text().match(/\d+/g)[1]);
    "专项答题" == title && (total = 5);
    let percent = (Number(score) / Number(total) * 100).toFixed() + '%';
    let detail = title + ": " + score + "/" + total;
    content_str += '<div class="item"><div class="bar"><div style="width: ' + percent + ';"></div></div><span>' + detail + '</span></div>';
  }
  if(2 != meizhou){
    let percent_0 = (Number(meizhou_score) / 5 * 100).toFixed() + '%';
    let detail_0 = "每周答题" + ": " + meizhou_score + "/" + 5;
  content_str += '<div class="item"><div class="bar"><div style="width: ' + percent_0 + ';"></div></div><span>' + detail_0 + '</span></div>';

  }
  content_str += '</div>' + style_str;
  let r = http.postJson("http://www.pushplus.plus/send", {
    token: token,
    title: "学习减压四合一：" + name,
    content: content_str + "</div><style>.item{height:1.5em;line-height:1.5em;}.item span{display:inline-block;padding-left:0.4em;}.item .bar{width:100px;height:10px;background-color:#ddd;border-radius:5px;display:inline-block;}.item .bar div{height:10px;background-color:#ed4e45;border-radius:5px;}</style>",
    template: "markdown",
  });
  if (r.body.json()["code"] == 200) {
    fInfo("推送成功");
  } else {
    log(r.body.json());
  }
}

// 发送email通知
function send_email(email) {
  let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
  let e_addr = email.match(reg);
  if (!e_addr) {
    fError("请配置正确的邮件格式");
    return false;
  }
  let zongfen = jifen_list.parent().child(1).text();
  let content = "用户" + name + "已完成：" + zongfen;
  var data = app.intent({
    action: "SENDTO"
  });
  data.setData(app.parseUri("mailto:" + e_addr));
  data.putExtra(Intent.EXTRA_SUBJECT, "学习减压四合一：" + name);
  data.putExtra(Intent.EXTRA_TEXT, content);
  app.startActivity(data);
  return true;
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

// 登录
function login(username, pwd) {
  sleep(random(1700, 2500));
 
  if(2 != meizhou && 0 == meizhou_end){
    sleep(random(1200, 1700));
  if (!textMatches("我的").exists() && !text("我的").exists()){
    fInfo("耐心等待……");
    sleep(random(2600, 3500));
    // if(queryList_1(find(),"确定")) {
    //   sleep(1250); 
    //   queryList_1(find(),"登录");
    //   log("再登录……");
    //   slee(1000);
    //   var json_0 = find();
    //     queryList_2(json_0,"拖动滑块直到出现","后松开","此滑动验证（目前）需要手动--震动2s");
    // };//检测是否‘当前功能使用人数过多……’的防护机制
    if (!(textMatches("我的").exists() || textMatches("登录").exists()) ||!(text("我的").exists() || text("登录").exists())) {
      back();
    sleep(random(2600, 3500));
    }
    if (!textMatches("我的").exists() && !text("我的").exists()) {
      app.launchApp('学习强国');
      fInfo("重启 ‘q-g’  耐心等待……");
      sleep(random(1200, 1700))
      if (!textMatches("我的").exists() && !text("我的").exists()) sleep(random(3600, 4500));}
    if (!textMatches("我的").exists() && !text("我的").exists()) {
      fInfo("此处可能 bug，手动点击到qg首页……或者一直等到第一轮结束自动重启");
    sleep(3000);
    if (!textMatches("我的").exists() && !text("我的").exists()) back();
    }
    // queryList_1(find(),"确定")
      // sleep(1250); 
      // queryList_1(find(),"登录");
  };
  };
  var begin_obj = idMatches(/.*comm_head_xuexi_mine|.*btn_next/).findOne();
  //fInfo("准备查找ab");
  if (begin_obj.text() == "登录") {
    log("查找ab");
    let a = className("EditText").id("et_phone_input").findOne();
    let b = className("EditText").id("et_pwd_login").findOne();
    a.setText(username);
    sleep(1000);
    b.setText(pwd);
    sleep(1000);
    begin_obj.click();
    sleep(4000);
    if(queryList_1(find(),"确定")) {
      sleep(1250); 
      queryList_1(find(),"登录");
      log("再登录……");
    };//检测是否‘当前功能使用人数过多……’的防护机制
    sleep(1000);
    var json_0 = find();
      queryList_2(json_0,"拖动滑块直到出现","后松开","此滑动验证（目前）需要手动--震动2s");
    let packageName = getPackageName('学习强国');
    if (currentPackage() != packageName) {
      log("检测到弹窗，尝试返回");
      if (textMatches(/取消/).exists()) {
        textMatches(/取消/).findOne().click();
      } else {
        back();
      }
    }
  }
}

function refind_jifen() {
  className("android.webkit.WebView").scrollable().findOne().scrollForward();
  var a = className("android.widget.ListView").filter(function (b) {
    return 11 < b.rowCount()
  }).findOne();
  21 == a.depth() ? (jifen_flag = "old", fInfo("检测为旧版界面")) : 23 == a.depth() && (jifen_flag = 0 < a.child(0).child(3).childCount() ? "new1" : "new2", fInfo("检测为新版界面"));
  return a
}

function entry_jifen_project(a) {
  var b = "old" == jifen_flag ? 3 : 4;
  jifen_list.findOne(textEndsWith(a)).parent().child(b).click()
}

function winReshow() {
  for (i = 0; i < 4; i++) {
    recents();
    sleep(1000);
  }
}
//遍历文本
function queryList_0(json) {
  for (var i = 0; i < json.length; i++) {
      var sonList = json[i];
      if (sonList.childCount() == 0) {
       //   console.log(json[i])
         var b_coin = json[i].text()
       //  log("文本："+b_coin)
      //  break
      } else {
          queryList_0(sonList);
      }
  }
    //返回结果值
    return b_coin
   
}
//遍历2个目标文本
function queryList_2(json,wenben_1,wenben_2,wenben_c) {
  for (var i = 0; i < json.length; i++) {
      var sonList = json[i];
      if (sonList.childCount() == 0) {
       //   console.log(json[i])
         var b_coin = json[i].text()
        // fInfo("文本："+b_coin)
         if(b_coin == wenben_1 || b_coin== wenben_2) { 
         fTips(wenben_c);
         toastLog(wenben_c);
         device.cancelKeepingAwake();
         for (var ii = 0; ii < 3; ii++) {
        device.vibrate(1000);//震动提示手动（滑块）
        toastLog(wenben_c);
          }
      //  sleep(1500);
        break;
         };
      //  break
      } else {
          queryList_2(sonList);
      }
  }
    //返回结果值
    return b_coin
   
}
//遍历文本点击目标文本
function queryList_1(json,wenben_dj) {
  for (var i = 0; i < json.length; i++) {
      var sonList = json[i];
      if (sonList.childCount() == 0) {
       //   console.log(json[i])
         var b_coin = json[i].text()
        // log("文本："+b_coin)
        if(b_coin== wenben_dj){
          click(b_coin);
           break;
        }  
      } else {
          queryList_1(sonList);
      }
  }
    //返回结果值
    return b_coin
   
}
// 模拟随机时间
function random_time(time) {
  return time + random(100, 1000);
}
//滑动验证---手动提示
function handling_huatu_exceptions() {
  var thread_handling_huatu_exceptions = threads.start(function () {
      while (true) {
          text("当前功能使用人数过多，请稍后重试").waitFor();
          queryList_1(find(),"确定")//被防护--重试 登录
          console.info("尝试在登陆……");
          sleep(random_time(800));
          toastLog("尝试再登录……")
         queryList_1(find(),"登录")
          // textContains("重试").className("android.widget.Button").findOne(3000).click()
          sleep(random_time(2000));
      }
  });
  return thread_handling_huatu_exceptions;
}
//检测出现强国关闭应用程序
function qg_guanbi(){
let qg_guanbi_thread = threads.start(function () {
  //在新线程执行的代码
  sleep(500);
  fInfo("检测兼容性--‘关闭应用’弹窗");
  var btn = className("android.widget.Button").textMatches(/关闭应用|应用信息|“学习强国”屡次停止运行|"学习强国"屡次停止运行/).findOne(5000);
  if (btn) {
    sleep(1000);
    click( btn.bounds().centerX() + 50, btn.bounds().centerX() - 50);
    press(btn.bounds().centerX() + 50, btn.bounds().centerX() - 50,100)
    swipe(btn.bounds().centerX()+50+random(-3, 6), btn.bounds().centerY()-70, btn.bounds().centerX() + 50, btn.bounds().centerY()-100, random(800, 1200)); // 下滑动
  }
  sleep(500);
  var btn = className("android.widget.Button").textMatches(/关闭应用|应用信息|“学习强国”屡次停止运行|"学习强国"屡次停止运行/).findOne(5000);
  if (btn) {
    sleep(1000);
    click( btn.bounds().centerX(), btn.bounds().centerX());
    press(btn.bounds().centerX(), btn.bounds().centerX(),100)
    swipe(btn.bounds().centerX()+50, btn.bounds().centerY()-70, btn.bounds().centerX() + 50, btn.bounds().centerY()-100, random(800, 1200)); // 下滑动
    swipe(btn.bounds().centerX()+100, btn.bounds().centerY()-80, btn.bounds().centerX() + 100, btn.bounds().centerY()-100, random(800, 1200)); // 下滑动
    
    fInfo("检测到兼容性弹窗--已关闭应用");
    toastLog("检测到兼容性弹窗--已关闭应用");
  }
  // fInfo("检测到兼容性弹窗--已关闭应用");
  // toastLog("检测到兼容性弹窗--已关闭应用");
});
return qg_guanbi_thread;
}
function noverify() {
  let noverify_thread = threads.start(function () {
    //在新线程执行的代码
    while (true) {
      textContains("请按照说明拖动滑块").waitFor();
      fInfo("检测到滑动验证");
      if (!Number(slide_verify)) {
        fInfo("未开启自动验证");
        break
      } else{
        var delay = Number(slide_verify);
        click(222,375);
        press(222,375,150);
      }
      var json_0 = find();
      queryList_2(json_0,"后松开","请按照说明拖动滑块","尝试滑动验证，若未通过，请需要手动！--震动1s");
      if (id("navigationBarBackground").exists() || textContains("拖动滑块直到出现").exists()||text("拖动滑块直到出现").exists()||text("后松开").exists()||textContains("后松开").exists()||textContains("请按照说明拖动滑块").exists()) {
        device.vibrate(1000);//震动提示手动（滑块）
        fInfo("此滑动验证（目前）需要手动");
        toastLog("提醒:尝试滑动验证，若未通过，请需要手动！")
        sleep(1000);
      //  continue;
      }
      if(slide_verify_on = 1){
      text("请按照说明拖动滑块").waitFor();
      let bound = textContains("请按照说明拖动滑块").findOne().parent().child(1).bounds();
      let hua_bound = text("请按照说明拖动滑块").findOne().bounds();
      let x_start = bound.centerX();
      let dx = x_start - hua_bound.left;
      let x_end = (hua_bound.right - dx) * random(5.1, 6.0) / 10; // “hua_bound.right - dx”表示拖动到最后，为了准确率更高点 拖动到一半左右即可
      let x_mid = (x_end - x_start) * random(5, 7) / 10 + x_start;
      let back_x = (x_end - x_start) * random(2, 3) / 10;
      let y_start = random(bound.top, bound.bottom);
      let y_end = random(bound.top, bound.bottom);
      // log("y_start:", y_start, "x_start:", x_start, "x_mid:", x_mid, "x_end:", x_end);
      x_start = random(x_start - 7, x_start);
      x_end = random(x_end, x_end + 10);
      gesture(random(delay, delay + 200), [x_start, y_start], [x_end, y_end]);
      //swipe(x_start, y_start, x_end, y_end, random(900,1000));
      sleep(random(1000, 1500));
      while (textContains("滑动位置不对哦，请再试一次").exists()) {
        text("请按照说明拖动滑块").waitFor();
        text("icon/24/icon_Y_shuaxin").findOne().parent().click();
        sleep(random(1000, 1500));
        continue;
      }
       }else{
      var bound = idContains("nc_1_n1t").findOne().bounds();
      var hua_bound = text("向右滑动验证").findOne().bounds();
      var x_start = bound.centerX();
      var dx = x_start - hua_bound.left;
      var x_end = hua_bound.right - dx;
      var x_mid = (x_end - x_start) * random(5, 8) / 10 + x_start;
      var back_x = (x_end - x_start) * random(2, 3) / 10;
      var y_start = random(bound.top, bound.bottom);
      var y_end = random(bound.top, bound.bottom);
      log("y_start:", y_start, "x_start:", x_start, "x_mid:", x_mid, "x_end:", x_end);
      x_start = random(x_start - 7, x_start);
      x_end = random(x_end, x_end + 10);
      //       sleep(600);
      //       press(x_start, y_start, 200);
      //       sleep(200);
      gesture(random(delay, delay + 50), [x_start, y_start], [x_mid, y_end], [x_mid - back_x, y_start], [x_end, y_end]);
      //swipe(x_start, y_start, x_end, y_end, random(900,1000));
      sleep(500);
       }
      if (textContains("刷新").exists()) {
        click("刷新");
        sleep(random(1000, 1500));
        continue;
      }
      if (textContains("网络开小差").exists()) {
        click("确定");
        sleep(random(1000, 1500));
        continue;
      }
      if (text("当前功能使用人数过多，请稍后重试").exists()) {
        click("确定");
        id("btn_next").findOne().click();
        sleep(random(1000, 1500));
        continue;
      }
      fInfo("已完成滑动验证，若滑动失败请在Pro版配置中调整滑动时间");
      sleep(1000);
      fClear();
    }
  });
  return noverify_thread;
}
function noverify_0() {
  let noverify_thread = threads.start(function () {
    //在新线程执行的代码
    while (true) {
      textContains("访问异常").waitFor();
      fInfo("检测到滑动验证");
      if (!Number(slide_verify)) {
        fInfo("未开启自动验证");
        break
      } else{
        var delay = Number(slide_verify);
         click(222,375);
         press(222,375,150);
      }
      
      var json_0 = find();
      queryList_2(json_0,"后松开","请按照说明拖动滑块","此滑动验证（目前）需要手动--震动2s");
      //var rooot11 = className("android.widget.TextView").find();
      // queryList_0(rooot11);
     //  fInfo("此滑动验证（目前）需要手动");
      if (id("navigationBarBackground").exists() || textContains("拖动滑块直到出现").exists()||text("拖动滑块直到出现").exists()||text("后松开").exists()||textContains("后松开").exists()||textContains("请按照说明拖动滑块").exists()) {
        device.vibrate(1000);//震动提示手动（滑块）
        fInfo("此滑动验证（目前）需要手动");
        toastLog("提醒:此滑动验证（目前）需要手动！")
        sleep(1500);
      //  continue;
      }
      var bound = idContains("nc_1_n1t").findOne().bounds();
      var hua_bound = text("向右滑动验证").findOne().bounds();
      var x_start = bound.centerX();
      var dx = x_start - hua_bound.left;
      var x_end = hua_bound.right - dx;
      var x_mid = (x_end - x_start) * random(5, 8) / 10 + x_start;
      var back_x = (x_end - x_start) * random(2, 3) / 10;
      var y_start = random(bound.top, bound.bottom);
      var y_end = random(bound.top, bound.bottom);
      log("y_start:", y_start, "x_start:", x_start, "x_mid:", x_mid, "x_end:", x_end);
      x_start = random(x_start - 7, x_start);
      x_end = random(x_end, x_end + 10);
      //       sleep(600);
      //       press(x_start, y_start, 200);
      //       sleep(200);
      gesture(random(delay, delay + 50), [x_start, y_start], [x_mid, y_end], [x_mid - back_x, y_start], [x_end, y_end]);
      //swipe(x_start, y_start, x_end, y_end, random(900,1000));
      sleep(500);
      if (textContains("刷新").exists()||text("刷新").exists()) {
        click("刷新");
        continue;
      }
      if (textContains("网络开小差").exists()||text("网络开小差").exists()) {
        click("确定");
        continue;
      }
      fInfo("已完成滑动验证，若滑动失败请在Pro版配置中调整滑动时间");
      sleep(1000);
      fClear();
    }
  });
  return noverify_thread;
}

function displayProp(obj) {
  var names = "";
  for (var name in obj) {
    names += name + ": " + obj[name] + ", ";
  }
  log(names);
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

// 模拟点击可点击元素
// function my_click_clickable(target) {
//     text(target).waitFor();
//     防止点到页面中其他有包含本地城市名称"adress"的控件，比如搜索栏
//     if (target == adress) {
//         log("点击:" + "depth(17)");
//         className("android.weige.TextView").depth(17).findOne(2000).click();
//     } else {
//         click(target);
//     }
// }
   function my_click_clickable(target) {
  text(target).waitFor();
  //console.info('点击进入--');
  click(target);
  }

/*******************悬浮窗*******************/
function fInit() {
  // ScrollView下只能有一个子布局
  var w = floaty.rawWindow(
    <card cardCornerRadius='8dp' alpha="0.8">
      <vertical>
        <horizontal bg='#FF000000' padding='10 5'>
        <text id='version' textColor="#FFFFFF" textSize="18dip">学习测试四合一+</text>
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
    w.version.setText("学习测试四合一pro+" + newest_version);
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
//获取积分明细
function getScores(i) {
  //while (!desc("工作").exists()); //等待加载出主页
  sleep(random(700, 1100));
  sleep(2000);
  while (!text("积分明细").exists()) {
      if (id("comm_head_xuexi_score").exists()) {
          id("comm_head_xuexi_score").findOnce().click();
      } else if (text("积分").exists()) {
        delay(1);
          text("积分").findOnce().parent().child(1).click();
      }
      sleep(3000);
    sleep(random(700, 1500));
    className("android.view.View").depth(22).findOnce(2).child(0).click();
  }
  while (!text('登录').exists()) {
    sleep(random(700, 1500));
    sleep(1500);
  }
  text("积分明细").findOnce().click();
  textContains('+').findOne(5000);
   var zhuanxiangs = {
    '专项答题':0
     };
     zhuanxiangs['专项答题'] = 0; 
    try{
        textContains('+').findOne(5000).parent().parent().children().forEach(item => {
            try{
                let name = item.child(2).text();         
               let score = item.child(4).text().substring(0,5).match(/[0-9][0-9]*/g);
            //  log(score);
             // if(score == null || score == undefined){ let score = item.child(3).text().substring(0,5).match(/[0-9][0-9]*/g);}
             zhuanxiangs[name] = score;
               // log(name + ' ' +score);
            }catch(e){}
        });
    }catch(e){};
   //  log(meizhousores);
      lCount = Number(zhuanxiangs['专项答题']);
   // 点点通['挑战答题'] = Math.max(0,3-Math.floor((点点通['挑战答题']*1)/3));
   //fInfo(lCount);
if (lCount == 0) { zhuanxiang = 0;
  fTips("专项答题将放最后部分完成"); 
  zhuanxiang_0 = false;}
  else{ 
    zhuanxiang_score = lCount;
    zhuanxiang_0 = true; 
    fTips("勾选的‘专项答题’今日任务已完成");
  }
  sleep(random(1000, 1500));
  back();
  fTips("专项答题检测后返回"); 
  sleep(random(1000, 1500));
}


function xxqg(userinfo) {
  var sign_list = [];
  fInfo("开始更新弹窗检测");
  // console.show()
  // console.info("开始更新弹窗检测")
  var noupdate_thread = threads.start(function () {
    //在新线程执行的代码
    className("android.widget.Button").text("立即升级").waitFor();
    fInfo("检测到升级弹窗");
    sleep(1000);
    var btn = className("android.widget.Button").text("取消").findOne();
    btn.click();
    fInfo("已取消升级");
  });
  fInfo("开始消息通知弹窗检测");
  var nonotice_thread = threads.start(function () {
    //在新线程执行的代码
    className("android.widget.Button").text("去开启").waitFor();
    fInfo("检测到消息通知弹窗");
    sleep(1000);
    var btn = className("android.widget.Button").text("取消").findOne();
    btn.click();
    fInfo("已取消消息通知");
  });
  if (userinfo) {
    var [username, pwd, token] = userinfo;
   // fInfo("userinfo");
    login(username, pwd);
    sleep(random(1500, 2000));
    // queryList_1(find(),"确定");
    // if(queryList_1(find(),"确定")) {
    //   sleep(1000); 
    //   queryList_0(find(),"登录");
    //   log("再次登录");
    //      };//检测防护机制后再登录
    if (!textMatches("我的").exists() && !text("我的").exists()) {
      sleep(random(3600, 3500));
      back();
    sleep(random(2600, 3500));
    }
    if (!textMatches("我的").exists() && !text("我的").exists()) {
      app.launchApp('学习强国');
      fInfo("重启‘qg-’  耐心等待……");
      sleep(random(1200, 1700))
      if (!textMatches("我的").exists() && !text("我的").exists()) sleep(random(3600, 4500));}
    if (!textMatches("我的").exists() && !text("我的").exists()) fInfo("此处可能bug，手动点击到qg首页……或者一直等到第一轮结束自动重启");
    // queryList_1(find(),"确定")
    // sleep(1250); 
    // queryList_1(find(),"登录");
  }
  /********获取用户姓名并读取本地数据*********/
 // fInfo("vip:" + vip)
 //fInfo("等待首页---我的");
  text("我的").findOne().click();
  fInfo("检测界面……?新?旧 " + "\n   此处时间可能略长耐心等待……")
  // name = id("my_display_name").findOne().text();
  a = id("tv_item_content").findOne(5000);
  swipe(device_w / 2 + random(-5, 10), device_h * 0.4+random(-3, 3), device_w / 2+random(-5, 7), device_h * 0.5+random(-7, 5), random(950, 1100));
  if(a == null){fInfo("检测到新版界面");
    setScreenMetrics(1080, 1920);
    a_a = text("学习积分").findOne(3000);
    if(a_a) {press(964, 330, 100);  name = id("tv_item_content").findOne().text();}
    else {sleep(1000); press(964, 330, 100); click(994, 330);  name = id("tv_item_content").findOne().text();}
    }else  name = a.text();
  storage_user = storages.create('songgedodo:' + name);
  fSet("username", name);
  back();
  ran_sleep();
  if (meizhou == 1) {
    meizhou_dao = false;
  } else if (meizhou == 0) {
    meizhou_dao = true;
  }
  if (zhuanxiang == 1) {
    zhuanxiang_dao = false;
  } else if (zhuanxiang == 0) {
    zhuanxiang_dao = true;
  }
  if (dingyue == 1) {
    dingyue_dao = false;
  } else if (dingyue == 2) {
    dingyue_dao = true;
  }
  back();
  sleep(1000);
   jifen_jiemian = text("积分").findOne(2000);
  if(jifen_jiemian) {text("积分").findOnce().parent().child(1).click(); text("积分规则").waitFor();}
  else if(textContains("学习积分").exists()) my_click_clickable("学习积分");
  else {a_0 = id("comm_head_xuexi_score").findOne(5000);
  if(a_0 == null){fInfo("新版界面");
       sleep(1500);
  //qg2.38版本界面判断
     if(text("学习积分").exists()||textContains("积分").exists()||textContains("学习积分").exists()||textContains("收藏").exists()||textContains("学签到服务").exists()) {
      fInfo("等待点击‘学习积分-’");
        my_click_clickable("学习积分");
        sleep(1500);
       setScreenMetrics(1080, 1920);
       if(!textContains("积分规则").exists()) click(186, 1009);press(186, 1009, 100);
      } 
    }else id("comm_head_xuexi_score").findOne().click();
  }
   // sleep(1500);
      a_1 = text("积分规则").findOne(4000);
      if(a_1 == null){ 
        fInfo("等待点击‘学习积分--’");
        click(228, 855); press(228, 855, 100); 
        a_2 = text("积分规则").findOne(4000);
       if(a_2 == null)  {
        fInfo("等待点击‘学习积分---’");
        pic_click(path_xuexijifen_jpg, url_xuexijifen_jpg, 50, 40);
       }
       a_3 = text("积分规则").findOne(4000);
       if(a_3 == null)  {
        fInfo("等待点击‘学习积分---’");
        pic_click(path_xuexijifen_1_jpg, url_xuexijifen_1_jpg, 70, -40);
       }
       my_click_clickable("学习积分");
       a_4 = text("积分规则").findOne(4000);
       if(a_4 == null){click(186, 1009); press(186, 1009, 100);
         fInfo("多种点击'学习积分'均未成功，请手动点击或退出并更换qg版本");}
    }  
    //每周答题勾选后检测是否已完成
   if(2 != meizhou) {
    fTips("脚本已勾选'每周答题'，正在查询答题情况...");
    getScores(3); 
     }
     //每周答题勾选后检测是否已完成
   if(2 != zhuanxiang) {
    fTips("脚本已勾选'专项答题'，正在查询答题情况...");
    getScores(4); 
     }
  text("积分规则").waitFor();
  fInfo("找到积分规则");
  if (qg_guanbi_thread.isAlive()) {
    qg_guanbi_thread.interrupt();
  }
   //检测趣味答题---当日答题类型
   jifen_list_2();
   log(myScores_1);
   log(myScores_2);

  nolocate_thread.isAlive() && (nolocate_thread.interrupt(), fInfo("终止位置权限弹窗检测"));
  noupdate_thread.isAlive() && (noupdate_thread.interrupt(), fInfo("终止更新弹窗检测"));
  nonotice_thread.isAlive() && (nonotice_thread.interrupt(), fInfo("终止消息通知检测"));
  true == pinglun && ("0" == myScores_2["发表观点"]) && (toastLog("开始评论"), do_pinglun());
  true == shipin && "已完成" != myScores_1["我要视听学习"] && (console.verbose("无障碍服务：" + auto.service), toastLog("开始视听次数"), do_shipin());
  true == wenzhang && "已完成" != myScores_1["我要选读文章"] && (console.verbose("无障碍服务：" + auto.service), toastLog("开始文章次数与时长"), do_wenzhang());
  true == meiri && "0" == myScores_2["每日答题"] && (toastLog("每日答题开始"), do_meiri());
  c = 1;
  //2 != zhuanxiang && ("old" == jifen_flag && "0" == jifen_list.child(jifen_map["专项"]).child(2).text().match(/\d+/)[0] || "new1" == jifen_flag && "0" == jifen_list.child(jifen_map["专项"]).child(3).child(0).text() || "new2" == jifen_flag && "0" == jifen_list.child(jifen_map["专项"]).child(3).text().match(/\d+/)[0]) && (toastLog("专项答题开始"), do_zhuanxiang(), jifen_list_1 = jifen_list_1());
  //趣味答题
  true == quweidati && (toastLog("趣味答题开始"),do_quweidati())
  // true == tiaozhan && "0" == myScores_2["挑战答题"] && (toastLog("挑战答题开始"), do_tiaozhan());
  // if (ocr_test()) {
  //   if (true == siren && "0" == myScores_2["四人赛"]) {
  //     toastLog("四人赛开始");
  //     guaji && do_duizhan1(0);
  //     do_duizhan1(4);
  //     do_duizhan1(4);
  //     if (d = Number(dacuo_num))
  //       for (fSet("title", "平衡胜率…"), fClear(), console.info("开始平衡胜率，答错次数：" + d), i = 0; i < d; i++) fInfo("答错第" + (i + 1) + "轮"), dacuo(4), fClear()
  //   }
  //   true == shuangren && "0" == myScores_2["双人对战"] && (toastLog("双人对战开始"), do_duizhan1(2))
  // } else true == siren && true == shuangren && sign_list.push("ocr_false");
 
  true == bendi && "已完成" != myScores_1["本地频道"] && (toastLog("本地开始"), do_bendi());
  true == yundong && "已完成" != myScores_1["强国运动"] && (toastLog("强国运动"), do_yundong());
  d = 1;
  //1 == dingyue && ("old" == jifen_flag && "0" == jifen_list.child(jifen_map["订阅"]).child(2).text().match(/\d+/)[0] || "new1" == jifen_flag && "0" == jifen_list.child(jifen_map["订阅"]).child(3).child(0).text() || "new2" == jifen_flag && "0" == jifen_list.child(jifen_map["订阅"]).child(3).text().match(/\d+/)[0]) && (toastLog("订阅开始--遍历上新/2023年上线"), d = do_dingyue_1(), jifen_list_1 = jifen_list_1());
  0 != dingyue && "0" == myScores_2["订阅"] && (toastLog("订阅开始--"), d = do_dingyue());
  // // 1 == dingyue && ("old" == jifen_flag && "已完成" == jifen_list.child(jifen_map["订阅"]).child(3).text() || "new" == jifen_flag && "已完成" == jifen_list.child(jifen_map["订阅"]).child(4).text()) && (toastLog("订阅开始--遍历上新/2023年上线"), d = do_dingyue_1(), jifen_list_1 = jifen_list_1());
  // // 2 == dingyue && ("old" == jifen_flag && "已完成" == jifen_list.child(jifen_map["订阅"]).child(3).text() || "new" == jifen_flag && "已完成" == jifen_list.child(jifen_map["订阅"]).child(4).text()) && (toastLog("订阅开始--遍历整个‘强国号’"), d = do_dingyue(), jifen_list_1 = jifen_list_1());
  // if(1 == dingyue) {toastLog("订阅开始--遍历上新/2023年上线"); d = do_dingyue_1();};
  // if(2 == dingyue) {toastLog("订阅开始--遍历整个‘强国号’"); d = do_dingyue();};
  if (2 != zhuanxiang && false == zhuanxiang_0) {
    back();
    fClear();
    toastLog("专项答题开始");
    mz_0 = text("我的").findOne(2000);
   if(mz_0 == null) back(),sleep(1000),text("我的").findOne().click();
   else mz_0.click();
    sleep(1000);
    mz_1 = text("我要答题").findOne(3500);
    if(mz_1 == null){ click(522,855); press(522,855,150);}
    else mz_1.parent().click();
    sleep(1000);
    for (c = do_zhuanxiang(); !c;) c = do_zhuanxiang();
   if(!text("我的").findOne(4500)) {
    if(!(textContains("我的").exists()||text("我的").exists())) back();}
    text("我的").waitFor();
    getScores(4);
    sleep(random(900, 1500));
     if((textContains("积分规则").exists()||textContains("登录").exists())) return;
      else back();
     sleep(random(900, 1700));
     if(textContains("我的").exists()||textContains("积分").exists()) {text("积分").findOnce().parent().child(1).click(); text("积分规则").waitFor();}
     c || fError("专项答题可能已经放弃或其它原因无法继续，请手动作答")
    }
  b = 1;
  if (2 != meizhou && false == meizhou_0) {
    back();
    fClear();
    toastLog("每周答题开始");
    mz_0 = text("我的").findOne(2000);
   if(mz_0 == null) back(),sleep(1000),text("我的").findOne().click();
   else mz_0.click();
    sleep(1000);
    mz_1 = text("我要答题").findOne(3500);
    if(mz_1 == null){ click(522,855); press(522,855,150);}
    else mz_1.parent().click();
    sleep(1000);
    for (b = do_meizhou(); !b;) b = do_meizhou();
   if(!text("我的").findOne(4500)) {
    if(!(textContains("我的").exists()||text("我的").exists())) back();}
    text("我的").waitFor();
    getScores(3);
    sleep(random(900, 1500));
     if((textContains("积分规则").exists()||textContains("登录").exists())) return;
      else back();
     sleep(random(900, 1700));
     if(textContains("我的").exists()||textContains("积分").exists()) {text("积分").findOnce().parent().child(1).click(); text("积分规则").waitFor();}
    b || fError("每周答题可能由于识别错误、包含视频题而不能满分，请手动作答")
  }
  0 == dingyue || d || fError("未能识别出订阅界面，订阅不支持学习强国V2.33.0以上版本");

  //微信推送
  sleep(random(700, 1500));
  if (weixin_kaiguan && (pushplus || token)) {
    fInfo("推送前等待积分刷新5秒");
    sleep(random(700, 1500));
    sleep(5E3);
    token || (token = pushplus);
    try {
      send_pushplus(token, sign_list)
    } catch (h) {
      fError(h + ":push+推送失败，请尝试切换流量运行或者设置114DNS")
    }
  }
  if (zhanghao && (vip == null || vip.length != 12)) fInfo("多账号仅适用于VIP卡用户，请联系群主支持赞助");
  if (!zhanghao || (zhanghao && vip.length != 12)) return !0;
  fInfo("vip用户，运行多账号中……");
  sleep(3000);
  while(!(textContains("我的").exists() && text("我的").exists())) {back();sleep(3000);}
  // if(!textContains("我的").exists()) back();
  // sleep(3000);
  // if(!textContains("我的").exists()) back();
  //     sleep(3000);
  // if(!textContains("我的").exists()) back();
  text("我的").findOne().click();
  fInfo("等待设置按钮");
  b = id("my_setting").findOne(4000);
  fInfo("点击设置按钮");
  if(b == null) click(995,155);
  else  real_click(b);
  sleep(1E3);
  fInfo("等待退出登录");
  // b = id("uidic_forms_item_text").findOne(4000);
  // if(b != null) b.click();
  // else{
  b = id("setting_sign_out").findOne(4000);
  sleep(1E3);
  real_click(b);
  //  }
   fInfo("点击退出登录");
  text("确认").findOne().click();
  // back();
  // sleep(1500);
  // back();
  sleep(1500);
  return !0
}

function main(userinfo) {
  var retry_time;
  if (!Number(watchdog)) {
    retry_time = 5400;
  } else if (Number(watchdog) < 900) {
    fTips("建议重试延迟不要低于900s即15分钟，已设为1800s");
    retry_time = 1800;
  } else {
    retry_time = Number(watchdog)
  }
  for (let i = 0; i < 3; i++) {
    fClear();
    fInfo("开始第" + (i + 1) + "轮，最长运行时间为" + retry_time + "s");
    let xxqg_begin = new Date();
    var main_thread = threads.start(function () {
      xxqg(userinfo);
    })
    main_thread.join(retry_time * 1000);
    if (main_thread.isAlive()) {
      main_thread.interrupt();
      fError("运行超时，重试");
      exit_app("学习强国");
      sleep(1500);
      app.launchApp('学习强国');
      sleep(2000);
    } else {
      let xxqg_end = new Date();
      let spent_time = ((xxqg_end - xxqg_begin) / 1000).toFixed();
      fInfo("本轮已正常结束，花费时间" + spent_time + "s");
      sleep(3000);
      //if(!textContains("我的").exists()) back();
      return true
    }
  }
  fError("已重试3次，可能无障碍服务出现故障，退出脚本");
  exit();
}

/*******************主程序部分*******************/
/********定义全局变量*********/
var xxqg_begin_1 = new Date();
var jifen_list, meizhou_dao, zhuanxiang_dao, dingyue_dao, storage_user, name, jinri, zongfen;
var jifen_map = {
    "评论": 35,
    "视频": 15,
    "文章": 10,
    "每日": 20,
    "趣味答题": 25,
    "挑战": 25,
    "四人": 25,
    "双人": 25,
    "订阅": 30,
    "本地": 40,
    "运动": 45
  },
  jifen_flag = "old";
// 分割账号
var noverify_thread = noverify();
var thread_handling_huatu_exceptions = handling_huatu_exceptions();
if (zhanghao && vip.length == 12) {
  var zhanghao_list = [];
  for (let zh of zhanghao.split("\n")) {
    let userinfo = zh.split(/:|：/);
    zhanghao_list.push(userinfo);
  };
  // if (zhanghao_list.length > 3) {zhanghao_list.length = 3;}
  //console.verbose(zhanghao_list);
  for (let userinfo of zhanghao_list) {
    console.verbose(userinfo);
    main(userinfo);
  }
  fClear();
  fInfo("登录回账号1");
  console.verbose(zhanghao_list[0][0], zhanghao_list[0][1]);
  //fInfo(zhanghao_list[0][0] +"," + zhanghao_list[0][1]);
  login(zhanghao_list[0][0], zhanghao_list[0][1]);
 // fInfo("输入准备返回");
} else {
  main();
}
if (noverify_thread.isAlive()) {
  noverify_thread.interrupt();
}
if (thread_handling_huatu_exceptions.isAlive()) {
  thread_handling_huatu_exceptions.interrupt();
}

/*****************结束后配置*****************/
//console.show();
// console.clear();
back();
fInfo("已全部结束");
// 调回原始音量
if (yl_on) {
  fInfo("调回初始音量:" + yuan_yl);
  device.setMusicVolume(yuan_yl);
}
// 取消屏幕常亮
fInfo("取消屏幕常亮");
device.cancelKeepingAwake();
// exit_app("学习强国");
// if (email) {
//   send_email(email);
// }
// 震动提示
device.vibrate(500);
fInfo("十秒后关闭悬浮窗");
sleep(10000);
console.hide();
home();
exit();
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

// 模拟点击可点击元素
function my_click_clickable(target) {

  text(target).waitFor();
  // 防止点到页面中其他有包含“我的”的控件，比如搜索栏
  if (target == "我的") {
      log("点击:" + "comm_head_xuexi_mine");
      id("comm_head_xuexi_mine").findOne().click();
  } else {
      click(target);
  }
}
/*备用调整答题
 **********挑战答题*********
 */
 function tiaozhan_01() {
  log("开启‘挑战答题’备用方式");
  sleep(random_time(delay_time));
  // 加载页面
  log("等待:" + "android.view.View");
  className("android.view.View").clickable(true).depth(22).waitFor();
 sleep(random_time(delay_time));
          // 题目
          log("题目等待:" + "android.view.View");
          className("android.view.View").depth(24).waitFor();
        log("题目等待完成1:" );
          var question = className("android.view.View").depth(25).enabled(true).drawingOrder(0).indexInParent(0).findOne(30000).text();
          // 截取到下划线前
          question = question.slice(0, question.indexOf(" "));
          // 选项文字列表
          var options_text = [];
          // 等待选项加载
          log("等待选项加载:" + "android.widget.RadioButton");
          className("android.widget.RadioButton").depth(28).clickable(true).waitFor();
         log("等待选项加载01:")
          // 获取所有选项控件，以RadioButton对象为基准，根据UI控件树相对位置寻找选项文字内容
           var options = className("android.view.View").depth(28).enabled(true).drawingOrder(0).indexInParent(1).find();
         // var options = className("android.widget.RadioButton").depth(28).find();
         log("等待选项加载:"+options)
          // 选项文本
          options.forEach((element, index) => {
              //挑战答题中，选项文字位于RadioButton对象的兄弟对象中
              options_text[index] = element.parent().child(1).text();
          });
          do_contest_answer_01(28, question, options_text);
 sleep(random_time(delay_time * 2));
}
/**
 * 答题（挑战答题、四人赛与双人对战）
 * @param {int} depth_click_option 点击选项控件的深度，用于点击选项
 * @param {string} question 问题
 * @param {list[string]} options_text 每个选项文本
 */
function do_contest_answer_01(depth_click_option, question, options_text) {
  if(textContains("继续").exists() && textContains("退出").exists()) click("继续");
   if (textContains("网络开小差").exists() && textContains("确定").exists()) click("确定");
    question = question.slice(0, 10);
    // 如果是特殊问题需要用选项搜索答案，而不是问题
    if (special_problem.indexOf(question.slice(0, 7)) != -1) {
        var original_options_text = options_text.concat();
        var sorted_options_text = original_options_text.sort();
        question = sorted_options_text.join("|");
    }
    // 从哈希表中取出答案
    var answer = map_get(question);
log("000"+ answer)
    // 如果本地题库没搜到，则搜网络题库
    if (answer == null) {
        var result;
        // 发送http请求获取答案 网站搜题速度 r1 > r2
        try {
            // 此网站只支持十个字符的搜索
            var r1 = http.get("http://www.syiban.com/search/index/init.html?modelid=1&q=" + encodeURI(question.slice(0, 10)));
            result = r1.body.string().match(/答案：.*</);
        } catch (error) { }
//         // 如果第一个网站没获取到正确答案，则利用第二个网站
//         if (!(result && result[0].charCodeAt(3) > 64 && result[0].charCodeAt(3) < 69)) {
//             try {
//                 // 此网站只支持六个字符的搜索
//                 var r2 = http.get("https://www.souwen123.com/search/select.php?age=" + encodeURI(question.slice(0, 6)));
//                 result = r2.body.string().match(/答案：.*</);
//             } catch (error) { }
//         }

        if (result) {
            // 答案文本
            var result = result[0].slice(5, result[0].indexOf("<"));
            log("0答案: " + result);
            select_option(result, depth_click_option, options_text);
        } else {
            // 没找到答案，点击第一个
            log("点击:" + "android.widget.RadioButton");
            try {
                className("android.widget.RadioButton").depth(depth_click_option).clickable(true).findOne(delay_time * 3).click();
            } catch (error) { }
        }
    } else {
        log("1答案: " + answer);
        select_option(answer, depth_click_option, options_text);
    }
}
/**
 * 用于下面选择题
 * 获取2个字符串的相似度
 * @param {string} str1 字符串1
 * @param {string} str2 字符串2
 * @returns {number} 相似度
 */
function getSimilarity(str1, str2) {
    var sameNum = 0;
    //寻找相同字符
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                sameNum++;
                break;
            }
        }
    }
    return sameNum / str2.length;
}


/**
 * 点击对应的去答题或去看看
 * @param {int} number 7对应为每日答题模块，以此类推
 */
function entry_model(number) {
 
  var model = className("android.view.View").depth(25).findOnce(number);
  while (!model.click());
}
//6-登录  我要读文章10  15 21 26 31  36  41 45

function jifen_list_1() {
  sleep(2000);
try {
            className("android.widget.ListView").findOnce().children().forEach(item => {
                var name;
                var name_1;
                var name_2;
                try {
                    name = item.child(0).child(0).text();
                    name_1 = item.child(3).child(2).text();
                    name_2 = item.child(4).text();
                } catch (e) {
                    name = item.child(0).text();
                    name_1 = item.child(3).child(2).text();
                    name_2 = item.child(4).text();
                }
                let str = item.child(3).child(0).text().substring(0,5).split("/");
               //let str_1 = item.child(3).child(0).text().substring(0,5).split("/");
               //let score = str[0].match(/[0-9][0-9]*/g);
                let score = str[0].match(/[0-9][0-9]*/g);
           //   log("分值"+score)
                myScores_2[name] = score;
                myScores_1[name] = name_2;
            });
           
        } catch (e) {
            console.log(e);
        }
        if(myScores_2['趣味答题']!= null && myScores_2['趣味答题']== 0){
          entry_model(jifen_map["趣味答题"]);
          sleep(2000);
          while (!(text("开始比赛").exists()||text("挑战答题").exists()||text("开始对战").exists()||text("时事政治").exists()||text("随机匹配").exists()||text("规则说明").exists()||textStartsWith("total").exists())) {
          //  scoll.scrollForward();
            // 不加延迟会很卡
            sleep(700);
          }
        //  className("android.widget.FrameLayout").textMatches(/total.*|chanllenge.*/).findOne().waitFor();
      if(text("随机匹配").exists()||textStartsWith("随机匹配").exists()||text("开始对战").exists()){myScores_2['四人赛'] = 1; myScores_2['挑战答题'] = 1 ;myScores_2["双人对战"]='0';}
        else if(text("开始比赛").exists()||textStartsWith("开始比赛").exists()){myScores_2['双人对战'] = 1; myScores_2['挑战答题'] = 1 ;myScores_2["四人赛"]='0';}
        else if(textStartsWith("total").exists()||text("时事政治").exists()||text("挑战答题").exists()){myScores_2['四人赛'] = 1; myScores_2['双人对战'] = 1 ; myScores_2["挑战答题"]='0';}
          // 等待加载、积分页面也有Image和List，需要用depth筛选
  // var tz = className("android.widget.Image").textMatches(/total.*|chanllenge.*/).findOne(2000);
  // var sr = text("开始比赛").findOne(2000);
  // var s_r = text("随机匹配").findOne(2000);
  // if (tz && textStartsWith("total").exists()) {
  //     b = className("android.widget.Image").textStartsWith("total").findOne().parent();
     ran_sleep();
     back();
     ran_sleep();
  //   text("开始比赛").waitFor();//四人赛
  //   sleep(1000);
  //   let start_click = text("开始比赛").findOne().click();

  //   text("随机匹配").waitFor();
  //   sleep(1000);
  //   text("随机匹配").findOne().parent().child(0).click();


        // if(myScores_2['双人对战']!= null){myScores_2['四人赛'] = 1; myScores_2['挑战答题'] = 1 ;}
        // else if(myScores_2['四人赛']!= null){myScores_2['双人对战'] = 1; myScores_2['挑战答题'] = 1 ;}
        // else if(myScores_2['挑战答题']!= null){myScores_2['四人赛'] = 1; myScores_2['双人对战'] = 1 ;}
       }else{myScores_2['四人赛'] = 1; myScores_2['双人对战'] = 1 ; myScores_2["挑战答题"]= 1;}
        //var w = fInit();
      }
      function do_quweidati() {
        entry_model(jifen_map["趣味答题"]);
          sleep(2500);
          while (!(text("开始比赛").exists()||text("挑战答题").exists()||text("开始对战").exists()||text("时事政治").exists()||text("随机匹配").exists()||text("规则说明").exists()||textStartsWith("total").exists())) {
            sleep(700);
          }
        //  className("android.widget.FrameLayout").textMatches(/total.*|chanllenge.*/).findOne().waitFor();
      if(text("随机匹配").exists()||textStartsWith("随机匹配").exists()||text("开始对战").exists()){do_duizhan1(2);}
        else if(text("开始比赛").exists()||textStartsWith("开始比赛").exists()){do_duizhan1(4);}
        else if(textStartsWith("total").exists()||text("时事政治").exists()||text("挑战答题").exists()){do_tiaozhan()}
     ran_sleep();
       }
       function jifen_list_2() {
        sleep(2000);
      try {
                  className("android.widget.ListView").findOnce().children().forEach(item => {
                      var name;
                      var name_1;
                      var name_2;
                      try {
                          name = item.child(0).child(0).text();
                          name_1 = item.child(3).child(2).text();
                          name_2 = item.child(4).text();
                      } catch (e) {
                          name = item.child(0).text();
                          name_1 = item.child(3).child(2).text();
                          name_2 = item.child(4).text();
                      }
                      let str = item.child(3).child(0).text().substring(0,5).split("/");
                     //let str_1 = item.child(3).child(0).text().substring(0,5).split("/");
                     //let score = str[0].match(/[0-9][0-9]*/g);
                      let score = str[0].match(/[0-9][0-9]*/g);
                 //   log("分值"+score)
                      myScores_2[name] = score;
                      myScores_1[name] = name_2;
                  });
                 
              } catch (e) {
                  console.log(e);
              }
              if(myScores_2['趣味答题']!= null && myScores_2['趣味答题']== 0) quweidati = true;
               
            }
