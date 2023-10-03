function htmlEntities(a) {
    return String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/\n/g,"<br>");
};
function output_print(a) {
    var b = "";
    if (0 === a.indexOf("http://") || 0 === a.indexOf("https://"))
        b += "<a target='_blank' href='" + a + "'>" + a + "</a><br>";
    b += "" + htmlEntities(a) + "<br>";
    document.getElementById("qrcode_result").innerHTML = b
};
function handleFiles(a) {
    console.log("handleFiles运行");
    for (var b = 0; b < a.length; b++) {
        var d = new FileReader;
        d.onload = function(a) {
            return function(a) {
                qrcode.callback = output_print;
                qrcode.decode(a.target.result)
            }
        }(a[b]);
        d.readAsDataURL(a[b])
    }
};
document.getElementById('input_file').addEventListener('change', function () {
    handleFiles(this.files);
    console.log(this);
}, false);
