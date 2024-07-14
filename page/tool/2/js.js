//  __  ___                _____           ____  ______   __
//  \ \/ / |   _   _  ___ |  ___|____  __ |  _ \/ ___\ \ / /
//   \  /| |  | | | |/ _ \| |_ / _ \ \/ / | | | \___ \\ V /
//   /  \| |__| |_| | (_) |  _| (_) >  < _| |_| |___) || |
//  /_/\_\_____\__,_|\___/|_|  \___/_/\_(_)____/|____/ |_|
//
// page/tool/2/js.js
///////////////////////////////////////////////////////////////////////////////////////////////////
// 函数：位移文本的Unicode编码
// 参数：xl_原文本元素id：原文本元素的id
//       xl_偏移量：Unicode编码偏移量输入框的id
//       xl_结果输出元素id：结果输出元素的id
//       xl_是否复制：是否复制到剪贴板
function xl_unicode_位移编码(xl_原文本元素id, xl_偏移量元素id, xl_结果输出元素id, xl_是否复制) {
  const xl_原文本 = xl_元素_获取_使用ID(xl_原文本元素id).value;
  const xl_偏移量 = Number(xl_元素_获取_使用ID(xl_偏移量元素id).value);
  const xl_结果输出元素 = xl_元素_获取_使用ID(xl_结果输出元素id);

  // 遍历原文本的每个字符，处理偏移并生成结果
  const xl_结果 = Array.from(xl_原文本, (char) => {
    let xl_字符码 = char.charCodeAt(0);
    xl_字符码 += xl_偏移量;
    return String.fromCodePoint(Math.max(0, Math.min(xl_字符码, 0x10ffff)));
  });

  // 将结果数组转换为字符串并输出到结果输出元素中
  xl_结果输出元素.value = xl_结果.join("");

  if (xl_是否复制) {
    xl_剪贴板_设置文本(xl_结果输出元素.value);
  }
}
