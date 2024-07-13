//  __  ___                _____           ____  ______   __
//  \ \/ / |   _   _  ___ |  ___|____  __ |  _ \/ ___\ \ / /
//   \  /| |  | | | |/ _ \| |_ / _ \ \/ / | | | \___ \\ V /
//   /  \| |__| |_| | (_) |  _| (_) >  < _| |_| |___) || |
//  /_/\_\_____\__,_|\___/|_|  \___/_/\_(_)____/|____/ |_|
//
// page/tool/2/js.js

// 函数：位移文本的Unicode编码
// 参数：xl_原文本：原文本
//       xl_真为加假为减：true为加，false为减
//       xl_偏移量：Unicode编码偏移量
//       xl_结果输出元素id：结果输出元素的id
function xl_unicode_位移编码(xl_原文本, xl_真为加假为减, xl_偏移量, xl_结果输出元素id) {
  // 获取结果输出元素
  const xl_结果输出元素 = xl_元素_获取_使用ID(xl_结果输出元素id);

  let xl_结果 = [];

  // 遍历原文本的每个字符
  for (let i = 0; i < xl_原文本.length; i++) {
    // 获取字符的Unicode编码
    let xl_字符码 = xl_原文本.charCodeAt(i);
    // 根据参数决定是加还是减偏移量
    xl_字符码 += xl_真为加假为减 ? xl_偏移量 : -xl_偏移量;
    // 确保Unicode编码在0到0x10FFFF之间
    xl_字符码 = Math.max(0, Math.min(xl_字符码, 0x10ffff));
    // 将Unicode编码转换为字符并添加到结果数组中
    xl_结果.push(String.fromCharCode(xl_字符码));
  }
  // 将结果数组转换为字符串并输出到结果输出元素中
  xl_结果输出元素.textContent = xl_结果.join("");
}
