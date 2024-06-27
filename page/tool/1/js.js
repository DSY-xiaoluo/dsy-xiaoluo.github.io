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
function xl_base64_转换_图片(xl_base64数据, xl_结果输出元素) {
  // 创建一个新的图像对象
  let xl_图像 = new Image();

  // 将图像的来源设置为 Base64 数据
  xl_图像.src = xl_base64数据;

  // 当图像加载完成后，将其添加到输出元素中
  xl_图像.onload = function () {
    xl_结果输出元素.appendChild(xl_图像);
  };

  // 处理加载错误的情况
  xl_图像.onerror = function () {
    console.error("图片加载失败，请检查 Base64 数据格式是否正确。");
  };
}
