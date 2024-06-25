function xl_时间_转换() {
  const xl_输入时间 = xl_元素_获取_使用ID("时间输入框").value;
  xl_元素_获取_使用ID("转换结果_JS_toString").value = new Date(xl_输入时间).toString();
  xl_元素_获取_使用ID("转换结果_ISO_8601").value = new Date(xl_输入时间).toISOString();
  xl_元素_获取_使用ID("转换结果_ISO_9075").value = new Date(xl_输入时间).toISOString().replace(/T/, " ").replace(/\..+/, "");
  xl_元素_获取_使用ID("转换结果_RFC_7231").value = new Date(xl_输入时间).toUTCString();
  xl_元素_获取_使用ID("转换结果_LocaleString").value = new Date(xl_输入时间).toLocaleString();
  xl_元素_获取_使用ID("转换结果_UnixTimestamp").value = new Date(xl_输入时间).getTime();
}
