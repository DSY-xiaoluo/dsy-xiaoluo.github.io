// 功能：将图片转换为base64
// 参数：xl_图片：要转换的图片；xl_结果输出元素：输出结果的元素；xl_完成后复制：是否完成后复制
// 调用：xl_图片_转换_base64( ,  ,  )
function xl_图片_转换_base64(xl_图片, xl_结果输出元素, xl_完成后复制) {
  // 创建一个FileReader对象
  var xl_文件读取器 = new FileReader();
  // 当FileReader加载完成时，执行该函数
  xl_文件读取器.onload = function (xl_事件) {
    // 获取转换后的base64数据
    var xl_base64数据 = xl_事件.target.result;
    // 将base64数据赋值给输出元素
    xl_结果输出元素.value = xl_base64数据;
    if (xl_完成后复制) {
      // 完成后复制
      xl_结果输出元素.select();
      xl_剪贴板_设置文本(xl_base64数据);
    }
  };
  // 开始读取图片，并将其转换为base64
  xl_文件读取器.readAsDataURL(xl_图片);
}

// CODEGEEX:失败
function xl_base64_转换_图片(xl_base64数据, xl_结果输出元素, xl_完成后下载) {
  var xl_图片 = new Image();
  xl_图片.onload = function () {
    var xl_画布 = document.createElement("canvas");
    xl_画布.width = xl_图片.width;
    xl_画布.height = xl_图片.height;
    var xl_上下文 = xl_画布.getContext("2d");
    xl_上下文.drawImage(xl_图片, 0, 0);
    var xl_图片URL = xl_画布.toDataURL("image/png");
    xl_结果输出元素.src = xl_图片URL;

    if (xl_完成后下载) {
      var xl_链接 = document.createElement("a");
      var xl_mime类型 = xl_base64数据.split(";")[0].split(":")[1];
      var xl_扩展名 = xl_mime类型.split("/")[1];
      xl_链接.href = xl_图片URL;
      xl_链接.download = "base64转换后的图片." + xl_扩展名;
      xl_链接.click();
    }
  };
  xl_图片.src = xl_base64数据;
}
