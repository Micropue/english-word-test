# english-word-test

### 一个简单好用的网页英语背单词神器

**核心文件**：`index.html`（网页） `script.js`（运行脚本）`style.css`（样式表）\
**单词库**：`wordbase.js`\
**介绍：**\
支持单词或短语，实时显示正确或错误的字母。\
单词库文件使用换行进行分割，两个常量用于管理单词与翻译。并且支持短语等。单词数量与翻译数量必须一一对应。\
支持单词列表并单独选择单词进行测试。\
测试正确的单词在单词列表区域会显示为绿色，并在下方标注单词全称。\
在达到该单词的最大长度并没有测试正确时，会再单词列表区域将该单词标注为红色。\
没测试正确一个单词，会自动跳转到下一单词。\
支持查看提示，每次只会显示单词长度的25%。可在此处调节：\

<pre>
const word = all[n][0].substr(0, parseInt(all[n][0].length * 0.25)) + "..."//调节0.25 参数
</pre>

已兼容移动设备，移动设备点击左侧边缘部分即可弹出单词列表。\
**单词列表示例：**

<pre>
//注意换行问题！核心文件不会自动去除开头或结尾换行！
const words = 
`hello world
today is a good day
apple
yellow`

const trans = 
`你好世界
不错的一天
苹果
黄色`
</pre>

**API 介绍**（部分）\
Array:`arr_word`存储单词数组。\
Array:`arr_trans`存储汉译数组。\
Array:`all`存储所有单词与汉译的数组，一一对应。\
HTMLElement:`present`测试时，输入框下方与单词字数一一对应的横条。\
HTMLElement:`searchInput`单词列表的搜索框。\
Function:`shuffleArray()`打乱数组。（默认被注释）\
Function:`checkWho()`每次进行切换单词时，检查在单词列表中对应的单词并予以标注。\
Function:`change(i)`用于切换单词，参数`i`为单词的对应索引。\
Function:`next()`切换下一单词。\
css:`[wave]`html 标签内属性，用于点击的波纹动画，父元素需要相对定位。\
Function:`removeAll(item)`在所有时用于将对应列表项隐藏。`item`参数为隐藏的HTMLElement 数组。\
Function:`showAll(item)`相反于上一条。\
**打开`index.html`以运行。页面将自动规划。部分html标签属性会影响运行。**
