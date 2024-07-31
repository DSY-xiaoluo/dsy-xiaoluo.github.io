//  __  ___                _____           ____  ______   __
//  \ \/ / |   _   _  ___ |  ___|____  __ |  _ \/ ___\ \ / /
//   \  /| |  | | | |/ _ \| |_ / _ \ \/ / | | | \___ \\ V /
//   /  \| |__| |_| | (_) |  _| (_) >  < _| |_| |___) || |
//  /_/\_\_____\__,_|\___/|_|  \___/_/\_(_)____/|____/ |_|
//
// yhchat.js
//
// 官方开放文档：https://www.yhchat.com/document/1-3

// 函数：发送消息
// 说明：使云湖机器人发送一条消息
// 文档：https://www.yhchat.com/document/400-410
// 参数：token：机器人token
//       接收者ID：接收者的云湖ID
//       接收者类型：接收者类型，接受以下值：
//                     用户（"user"）
//                     群组（"group"）
//       消息类型：消息类型，接受以下值：
//                     文本（"text"）
//                     图片（"image"）
//                     Markdown（"markdown"）
//                     文件（"file"）
//       消息内容：实际发送的消息内容
//       消息按钮（非必填）：消息按钮对象
async function yh_发送消息(token, 接收者ID, 消息类型, 接收者类型, 消息内容, 消息按钮) {
  // 创建一个Headers对象，并设置请求头
  const xl_请求头 = new Headers({
    "Content-Type": "application/json",
  });

  // 构造消息体，使用JSON格式
  const xl_消息内容 = JSON.stringify({
    recvId: 接收者ID,
    recvType: 接收者类型,
    contentType: 消息类型,
    content: {
      text: 消息内容,
      buttons: 消息按钮,
    },
  });

  // 配置请求选项
  const xl_请求选项 = {
    method: "POST",
    headers: xl_请求头,
    body: xl_消息内容,
    redirect: "follow",
  };

  try {
    // 发送请求到指定的URL
    const response = await fetch(`https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=${token}`, xl_请求选项);
    const xl_结果 = await response.text();
    yi_调试_输出("yh_发送消息", xl_结果);
  } catch (xl_错误) {
    yi_调试_输出_错误("yh_发送消息", xl_错误);
  }
}

// 易js.js

function yi_调试_输出(欲输出消息时附带的备注, 欲输出的消息) {
  console.log(`${new Date().toLocaleString()} > ${欲输出消息时附带的备注} > \n ${欲输出的消息}`);
}

function yi_调试_输出_错误(欲输出消息时附带的备注, 欲输出的消息) {
  console.error(`${new Date().toLocaleString()} > ${欲输出消息时附带的备注} > \n ${欲输出的消息}`);
}

function yi_调试_输出_警告(欲输出消息时附带的备注, 欲输出的消息) {
  console.warn(`${new Date().toLocaleString()} > ${欲输出消息时附带的备注} > \n ${欲输出的消息}`);
}
