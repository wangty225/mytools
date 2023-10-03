/* chrome插件操作 */
window.onload = function(){
const key=encodeURIComponent('右键二维码识别:thunder-sword');if(window[key]){return;}window[key]=true;

function outputurl(qrcodeurl) {
    console.log("test-in");
    // 创建模态框的外部容器
    var modalContainer = document.createElement("div");
    modalContainer.style.display = "block";
    modalContainer.style.position = "fixed";
    modalContainer.style.zIndex = "1000";
    modalContainer.style.left = "0";
    modalContainer.style.top = "0";
    modalContainer.style.width = "100%";
    modalContainer.style.height = "100%";
    modalContainer.style.backgroundColor = "rgba(0,0,0,0.7)";

    // 创建模态框内容容器
    var modalContent = document.createElement("div");
    modalContent.style.position = "absolute";
    modalContent.style.left = "50%";
    modalContent.style.top = "40%";
    modalContent.style.lineHeight = "2em";
    modalContent.style.transform = "translate(-50%, -50%)";
    modalContent.style.backgroundColor = "#fff";
    modalContent.style.padding = "20px";
    modalContent.style.padding = "40px";
    modalContent.style.borderRadius = "5px";
    modalContent.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

    // 创建关闭按钮
    var closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.fontSize = "20px";
    closeButton.style.cursor = "pointer";

    // 创建超链接
    var link = document.createElement("a");
    link.href = qrcodeurl;
    link.textContent = qrcodeurl;

    // 将内容添加到模态框中
    modalContent.appendChild(closeButton);
    modalContent.appendChild(link);
    
    // 将模态框内容容器添加到模态框外部容器
    modalContainer.appendChild(modalContent);

    // 将模态框外部容器添加到页面
    document.body.appendChild(modalContainer);

    // 点击关闭按钮或模态框外部区域可以关闭模态框
    closeButton.addEventListener("click", function() {
        modalContainer.style.display = "none";
    });

    modalContainer.addEventListener("click", function(event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = "none";
        }
    });
    console.log("test-end");
};



function qrcode_output(a) {
    var b = "";
    b=""+a;
    
    openNewTab(b);


    // if (0 === a.indexOf("http://") || 0 === a.indexOf("https://"))
    //     b += "<a target='_blank' href='" + a + "'>" + a + "</a><br>";
    // b += "" + htmlEntities(a) + "<br>";
    // document.getElementById("qrcode_result").innerHTML = b;
    
    alert(b);
};
function isCanvasSupported() {
    var a = document.createElement("canvas");
    return !(!a.getContext || !a.getContext("2d"))
};

function openNewTab(url) {
    window.open(url, "_blank");
}

var canvasFlag=isCanvasSupported();
chrome.contextMenus.create({
    title: "识别二维码",
    contexts: ['image'],
    onclick: function(info){
        /* alert('debuging……');console.log(info);console.log(tab); */
        
        if(canvasFlag){
            qrcode.callback = qrcode_output;
            qrcode.decode_url(info.srcUrl);
        }
        else{
            alert("该浏览器不支持canvas");
        }
    }
});
};