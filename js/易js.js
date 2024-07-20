//  __  ___                _____           ____  ______   __
//  \ \/ / |   _   _  ___ |  ___|____  __ |  _ \/ ___\ \ / /
//   \  /| |  | | | |/ _ \| |_ / _ \ \/ / | | | \___ \\ V /
//   /  \| |__| |_| | (_) |  _| (_) >  < _| |_| |___) || |
//  /_/\_\_____\__,_|\___/|_|  \___/_/\_(_)____/|____/ |_|
//
// 易js.js
//
// ”易js“是一个轻量级的JavaScript库，
// 受到“易语言”的中文编程思维启发，
// 使用中文命名函数，
// 旨在简化JavaScript编程，
// 让中国人使用自己的母语编程，
// 使编程更加直观和易读。
// 然而，
// 目前这个库还不够完善，
// 仅适配了几个常用的函数，
// 还有很多问题需要解决，
// 例如，
// 如何让在不切换输入法使编辑器补全中文函数，
// 部分无法使用中文函数名的地方该如何处理，
// 以及如何让这个库更加易用，
// 这些问题都需要解决。

function yi_元素_获取_使用ID(欲获取的元素ID) {
  return document.getElementById(欲获取的元素ID);
}

function yi_元素_获取_使用Class(欲获取元素的Class) {
  return document.getElementsByClassName(欲获取元素的Class);
}

function yi_元素_样式_添加类(欲添加类的元素, 欲添加的类) {
  欲添加类的元素.classList.add(欲添加的类);
}

function yi_元素_样式_移除类(欲移除类的元素, 欲移除的类) {
  欲移除类的元素.classList.remove(欲移除的类);
}

function yi_调试_输出(欲输出消息时附带的备注, 欲输出的消息) {
  console.log(`${new Date().toLocaleString()} > ${欲输出消息时附带的备注} > \n ${欲输出的消息}`);
}

function yi_调试_输出_错误(欲输出消息时附带的备注, 欲输出的消息) {
  console.error(`${new Date().toLocaleString()} > ${欲输出消息时附带的备注} > \n ${欲输出的消息}`);
}

function yi_调试_输出_警告(欲输出消息时附带的备注, 欲输出的消息) {
  console.warn(`${new Date().toLocaleString()} > ${欲输出消息时附带的备注} > \n ${欲输出的消息}`);
}

function yi_本地存储_读(欲读的项目) {
  return localStorage.getItem(欲读的项目);
}

function yi_本地存储_写(欲写的项目, 欲写的值) {
  localStorage.setItem(欲写的项目, 欲写的值);
}

function yi_cookie_读(欲读的项目) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(欲读的项目 + "="))
    ?.split("=")[1];
}

function yi_cookie_写(欲写的项目, 欲写的值, 欲写的过期天数) {
  const d = new Date();
  d.setTime(d.getTime() + 欲写的过期天数 * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  const sameSite = "SameSite=None; Secure";
  document.cookie = 欲写的项目 + "=" + 欲写的值 + "; " + expires + "; " + sameSite + "; path=/";
}

function yi_延时_执行(欲延时执行的函数, 欲延时的毫秒数) {
  setTimeout(欲延时执行的函数, 欲延时的毫秒数);
}

function yi_取_视口_高() {
  return window.innerHeight;
}

function yi_取_视口_宽() {
  return window.innerWidth;
}

function yi_取_元素_高_client(欲取高的元素) {
  return 欲取高的元素.clientHeight;
}

function yi_取_元素_宽_client(欲取宽的元素) {
  return 欲取宽的元素.clientWidth;
}

function yi_取_元素_高_contentRect(欲取高的元素) {
  return 欲取高的元素.contentRect.height;
}

function yi_取_元素_宽_contentRect(欲取宽的元素) {
  return 欲取宽的元素.contentRect.width;
}

function yi_取_元素_高_offset(欲取高的元素) {
  return 欲取高的元素.offsetHeight;
}

function yi_取_元素_宽_offset(欲取宽的元素) {
  return 欲取宽的元素.offsetWidth;
}
