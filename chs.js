/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "-ScienceCrafter": "- 科学工匠",
    "planting them": "种植它们",
    "Potato Tycoon": "土豆大亨",
    "Potato Works": "土豆工厂",
    "Prestige": "声望",
    "Plant a seed": "种一粒种子",
    "Play 1 hour": "玩 1 小时",
    "OF TUTORIAL]": "教程]",
    "potato buddy out of loneliness, calls it a spuddy": "孤独的土豆哥，叫它小土豆",
    "(unlocks chips)": "(解锁薯片)",
    "(unlocks fries)": "(解锁薯条)",
    "(unlocks prestige)": "(解锁声望)",
    "(unlocks the kitchen)": "(解锁厨房)",
    "(unlocks the lab)": "(解锁实验室)",
    "(unlocks the shop)": "(解锁商店)",
    "[END OF TUTORIAL]": "[教程结束]",
    "Achievements -": "成就 -",
    "Real Gamer": "真正的玩家",
    "Research": "研究",
    "RESET": "重置",
    "Retro": "复古",
    "RIAL]": "里亚尔]",
    "Robotic Retainment": "机器人保留",
    "Robust": "健壮",
    "ScienceCrafter": "科学工匠",
    "Sell It": "出售",
    "Sell your potato": "出售你的土豆",
    "Settings (WIP": "设置 (在制品",
    "Shop": "商店",
    "Skyrockets as first trillionaire, Max Spud, Made His Money by investing Potato Coins": "作为首位万亿富翁 马克斯·斯普德 通过投资 土豆币 赚到了钱",
    "Smooth": "光滑",
    "So, as I Pray-- Unlimited Potato Works": "所以，正如我祈祷的那样——无限马铃薯作品",
    "speak of yams here": "在这里谈论山药",
    "Make some chips": "制作一些薯片",
    "Make some fries": "制作一些薯条",
    "Mash your potato": "捣碎你的土豆",
    "Load": "加载",
    "Kitchen": "厨房",
    "Lab": "实验室",
    "lcome to One Potato Incremental! Get started by turning your potato into seeds and then planting them": "欢迎来到 土豆增量！ 开始将您的马铃薯变成种子然后种植它们",
    "Look at the achievements for more tips [END OF TUTORIAL]": "查看成就获取更多提示 [教程结束]",
    "Make Fries": "制作薯条",
    "Make Chips": "制作薯片",
    "It is strongly recommended to have your highest available potato when mashing": "强烈建议在捣碎时使用最高可用的马铃薯",
    "Epic Dirt": "史诗泥土",
    "Eat It": "吃了它",
    "DNA Upgrades": "基因升级",
    "Delicious!": "美味！",
    "Data Decryption": "数据解密",
    "Copied Spuds": "复制土豆",
    "Crafting -": "制作 -",
    "Cooking with Taters": "烹饪和土豆",
    "Buy some fertilizer": "买点肥料",
    "Auto Harvest": "自动收割",
    "Auto Planter": "自动种植器",
    "Auto Seed Crafter": "自动育种",
    "Bake a potato": "烤一个土豆",
    "Bake Your Potato": "烤土豆",
    "No coins": "无硬币",
    "Max": "最大",
    "Mediocrity": "平庸",
    "No mashed potatoes": "没有土豆泥",
    "No potato dna": "无土豆基因",
    "No potato is growing here": "这里没有土豆生长",
    "No seeds": "无种子",
    "Obtain the antimatter potato": "获得反物质土豆",
    "One Potato Incremental, a minimalist farming simulator (v0.2.0)": "土豆增量，一款极简农业模拟器（v0.2.0）",
    "Potato Life: Evolution": "马铃薯生命：进化",
    "Potato Entreprenuer": "土豆企业家",
    "Research ": "研究",
    "Research potato cloning": "研究土豆克隆",
    "Seeded Potatoes?": "种土豆？",
    "The Kitchen -": "厨房 -",
    "The Lab -": "实验室 -",
    "The Shop -": "商店 -",
    "Tinkerer": "工匠",
    "Turn potato into seeds": "把土豆变成种子",
    "Turn your potato into seeds": "把你的土豆变成种子",
    "Twice baked, twice lived": "两次烘焙，两次生活",
    "Harvest": "收获",
    "Harvest a meh potato": "收获一个无聊的土豆",
    "Harvest a robust potato": "收获一个健壮的土豆",
    "Harvest a smooth potato": "收获一个光滑的土豆",
    "Harvest an 8-bit potato": "收获一个 8 位土豆",
    "Airbags": "安全气囊",
    "Also known as chips": "也称为薯片",
    "Actually just a microwave": "其实只是一个微波炉",
    "Age Of Automation": "自动化时代",
    "Antipotato": "反土豆",
    "Cloning": "克隆",
    "Coins worth more than a dollar": "硬币价值超过一美元",
    "Contemporary Cuisine (WIP": "现代美食（WIP",
    "Currency Potato Coins worth more than a dollar": "价值超过一美元的货币土豆币",
    "Eat a tier 8 baked potato": "吃一个8层的烤土豆",
    "Gene Modification": "基因改造",
    "Get 1 billion coins": "获得 1 billion 硬币",
    "Get 1 million coins": "获得 1 million 硬币",
    "Unlock contemporary cuisine": "解锁当代美食",
    "Unlock the autoharvester": "解锁自动收割机",
    "Unlock the autoseeder": "解锁自动播种机",
    "Unlock the legendary potato": "解锁传奇土豆",
    "Upgrade the dna of your potato": "升级马铃薯的 dna",
    "Why Are We Still Here?": "为什么我们还在这里？",
    "You win a potato!": "你赢了一个土豆！",
    "Trade 1 mashed potatoes": "交易 1 个土豆泥",
    "NOT COUNT": "不算数",
    "OPI because he doesn't exist yet": "OPI 因为他还不存在",
    "COUNT": "算数",
    "Time spent wisely": "明智地花费时间",
    "auto": "自动",
    "研究你的土豆 5 times and unlock tier 2": "研究你的土豆 5 并解锁 品阶 2",
    "Potatopedia": "土豆百科",
    "Potatopedia -": "土豆百科 -",
    "one Potato?": "一个土豆？",
    "\"potato\"": "\"土豆\"",
    "\"Think about this theres probably a alternate reality where people use potatos and soly potatos as a money unit\" -Joel_": "“想想看，这可能是另一种现实，人们用土豆和土豆作为货币单位”——乔尔_",
    "\"well I just put a potato into an oven to see if I would get a different kind of potato\"": "“嗯，我只是把土豆放进烤箱看看能不能得到另一种土豆”",
    "\"You can bake your potato and eat it too!\" -Zman": "“你可以烤土豆然后吃！”-Zman",
    "(unlocks the potatopedia)": "（解锁土豆百科）",
    "[funny potato joke here] haha!": "[这里有趣的土豆笑话]哈哈！",
    "On": "开启",
    "Off": "关闭",
    "news messages!": "新闻消息！",
    "Number Notation": "数字格式",
    "Progress Bars": "进度条",
    "One Potato Incremental, a minimalist farming simulator (v0.3.0)": "One Potato Incremental，一个极简农业模拟器（v0.3.0）",
    ", you peeled my father, prepare to fry": "，你剥了我爸的皮，准备炸了",
    ", from potatopedia the free encyclopedia": "，来自马铃薯百科免费百科全书",
    ", prepare to fry": "，准备炒",
    "? real potatoes don't have seeds! (the dev is not aware of this information": "? 真正的土豆没有种子！ （开发人员不知道此信息",
    "We just couldn't stop at baked potatoes, and now we have fries? What next, ultra thin potatoes, why no one would like that": "我们只是不能在烤土豆上停下来，现在我们有薯条了吗？ 下一个，超薄土豆，为什么没人喜欢",
    "Welcome to One Potato Incremental! Get started by turning your potato into seeds and then planting them": "欢迎来到 One Potato Incremental！ 开始把你的马铃薯变成种子，然后种植它们",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Baked Potato, Tier ": "烤土豆，层 ",
    "Inventory -": "仓库 -",
    "Growth speed": "生长速度",
    "Eat It": "吃掉它",
    "Eat Them": "吃掉它们",
    "Fries, Tier ": "薯条，品阶",
    "Auto Save: ": "自动保存：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "Seeds": "种子",
    "Terrible Potato": "可怕的土豆",
    "Pale Potato": "淡马铃薯",
    "Meh Potato": "马铃薯",
    "Robust Potato": "健壮的土豆",
    "Hearty Potato": "丰盛的土豆",
    "Smooth Potato": "光滑的土豆",
    "Blue Potato": "蓝土豆",
    "8bit Potato": "8位土豆",
    "Error Potato": "错误土豆",
    "Photorealistic Potato": "逼真的土豆",
    "Antimatter Potato": "反物质马铃薯",
    "Shadow Potato": "暗影土豆",
    "Cookie Potato": "饼干土豆",
    "Fire Potato": "火之土豆",
    "Ice Potato": "冰之土豆",
    "Legendary Potato": "传奇马铃薯",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^Buy Fertilizer (.+)$/, '购买肥料 $1'],
    [/^Buy fertilizer (.+)$/, '购买肥料 $1'],
    [/^Study your potato (.+)$/, '研究你的土豆 $1'],
    [/^Seeds per potato (.+)$/, '每个土豆的种子 $1'],
    [/^Currently Tier (.+) \($/, '当前品阶 $1 \('],
    [/^(.+) coins from food$/, '$1 金币来自食物'],
    [/^(.+) growth time for tier (.+)$/, '$1 生长时间对于 品阶 $2'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Play for (.+) hours$/, '玩 $1 小时'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);
