document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('不显示兼容性提示') === 'true') {
    guan1bi4jian1rong2xing4ti2shi4();
  };

  // 自定义元素xl-vistatextbox
  customElements.define('xl-vistatextbox', class extends HTMLElement {
    constructor() {
      super();
      const color = this.getAttribute('color') || '#00000000';
      const title = this.getAttribute('title') || 'Default Title';
      const style1 = this.getAttribute('style1') || '';
      const style2 = this.getAttribute('style2') || '';
      const style3 = this.getAttribute('style3') || '';
      const style4 = this.getAttribute('style4') || '';
      const style5 = this.getAttribute('style5') || '';
      const id1 = this.getAttribute('id1') || '';
      const id2 = this.getAttribute('id2') || '';
      const content = this.innerHTML || 'Default Content';
      this.innerHTML = `
      <a name="${title}"></a>
      <div class="vista1" style="${style1}" id="${id1}">
        <div class="vista2" style="background-color: ${color}; ${style2}" id="${id2}">
          <div class="vista3" style="${style3}">
            <span>${title}</span>
          </div>
          <div class="vista4" style="${style4}">
            <div class="vista5" style="${style5}">
              ${content}
            </div>
          </div>
       </div>
      </div>
      `;
    }
  });

  // 自定义元素xl-navbox
  customElements.define('xl-navbox', class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <xl-vistatextbox title="加载指示器" id="jia1zai3ti2shi4">
        <div style="background-color: #ff0;">
          <span>页面加载未完成<br>
          由于此站托管于GitHub，可能需要一段时间才可完全加载</span>
        </div>
      </xl-vistatextbox>
      <xl-vistatextbox title="导航">
        <a href="/index.html">
          <div style="padding: 10px; text-align: center;"><span>首页</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
        <a href="/blog/index.html">
          <div style="padding: 10px; text-align: center;"><span>博客</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
        <a href="/page/index.html">
          <div style="padding: 10px; text-align: center;"><span>页面</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
        <a href="/about.html">
          <div style="padding: 10px; text-align: center;"><span>关于</span><img src="/file/img/mao2dian3lian4jie1.png"></div>
        </a>
      </xl-vistatextbox>
      `;
    }
  });

  // 自定义元素xl-ce4bian1lan2
  customElements.define('xl-ce4bian1lan2', class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <xl-vistatextbox title="COPYRIGHT">
       <div style="text-shadow: 0px 0px 10px #fff, 0px 0px 10px #fff; background: url(/file/img/1.jpg);   background-size: cover; background-repeat: no-repeat; background-position: center;">
         <span>Copyright © 2024 XLuoFox.DSY</span>
         <hr>
         <span>特别鸣谢：<br>
         <a href="https://www.stylestar.win/" target="_blank">StyleStar论坛<img src="/file/img/wai4bu4lian4jie1.png"></a><br>
         <a href="https://spectrollay.github.io/minecraft_repository_test/" target="_blank">星月Minecraft版本库<img src="/file/img/wai4bu4lian4jie1.png"></a>
         </span>
       </div>
      </xl-vistatextbox>
      `;
    }
  });

  // 自定义元素xl-jian1rong2xing4ti2shi4
  customElements.define('xl-jian1rong2xing4ti2shi4', class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = `
      <div style="display: flex; align-items: center; margin: 10px 10px 0px 10px;">
      <div>
        <img src="/file/img/imageres-76.png" width="64px" height="64px" style="margin-right: 10px;">
      </div>
      <div>
        <span style="font-size: 24px;">公告</span><br>
        <span>此网站的域名（xiaoluo.link）将在今年7月23日到期，我们后续可能会更换为“xluofox.top”域名，请注意关注此处</span>
        <hr>
        <span style="font-size: 24px;">兼容性提示</span><br>
        <span>此网站使用较复杂的CSS样式和较新的HTML标签，不能确保兼容所有浏览器，建议使用最新发行版Firefox、Chrome以及Edge访问此站</span>
      </div>
    </div>
    <br>
    <div style="position: sticky; bottom: 0;">
      <div style="border: 1px solid transparent; border-top-color: #00000040; border-bottom-color: #ffffff40;"></div>
      <div style="background-color: #cbcbcb; text-align: right;">
        <button onclick="guan1bi4jian1rong2xing4ti2shi4()">关闭</button>
        <button id="tan2chuang1bu2zai4xian3shi4" onclick="bu2zai4xian3shi4jian1rong2xing4ti2shi4()"
          style="margin-right: 10px;">不再显示</button>
      </div>
    </div>     `;
    }
  });

  var tuo1odng4 = document.getElementById('jian1rong2xing4ti2shi4');
  var offsetX, offsetY, isDragging = false;

  tuo1odng4.addEventListener('mousedown', function (e) {
    offsetX = e.clientX - tuo1odng4.offsetLeft;
    offsetY = e.clientY - tuo1odng4.offsetTop;
    isDragging = true;
  });

  document.addEventListener('mousemove', function (e) {
    if (isDragging) {
      tuo1odng4.style.left = (e.clientX - offsetX) + 'px';
      tuo1odng4.style.top = (e.clientY - offsetY) + 'px';
    }
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
  });

  // 获取id为"dao3hang2lan2gao1du4huo4qu3yong4"的元素
  const dao3hang2lan2gao1du4huo4qu3yong4Element = document.getElementById('dao3hang2lan2gao1du4huo4qu3yong4');

  // 获取元素在视口中的高度
  const heightInView = dao3hang2lan2gao1du4huo4qu3yong4Element.getBoundingClientRect().height;

  // 打印获取的高度到控制台
  console.log("标题栏在视口中的高度：", heightInView);

  // 应用高度到具有类".empty1"的元素的CSS中
  const empty1Elements = document.querySelectorAll('.empty1');
  empty1Elements.forEach(element => {
    element.style.height = `${heightInView}px`;
  });

})

window.addEventListener('load', function () {
  this.document.getElementById('jia1zai3ti2shi4').style.display = "none";
})

// 加载iframe
function loadIframe(iframeId, iframeSrc) {
  var iframe = document.getElementById(iframeId);
  iframe.src = iframeSrc;
  iframe.style.height = 50 + "vh";
  if (iframeSrc === "") {
    iframe.style.height = 0 + "vh";
  }
}

// 改变指定id的iframe尺寸
function iframesize(iframeid, size) {
  var iframe = document.getElementById(iframeid);
  iframe.style.height = size + "vh";
}

// 不再显示兼容性提示
function bu2zai4xian3shi4jian1rong2xing4ti2shi4() {
  localStorage.setItem('不显示兼容性提示', 'true');
  guan1bi4jian1rong2xing4ti2shi4();
}

// 关闭兼容性提示
function guan1bi4jian1rong2xing4ti2shi4() {
  // document.getElementById('jian1rong2xing4ti2shi4kuang1').style.display = "none";
  document.getElementById('jian1rong2xing4ti2shi4').style.display = "none";
}
