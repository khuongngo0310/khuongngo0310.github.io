function Bai7(){
    let str = document.getElementById("input7").value + "";
    document.getElementById("KQ7").innerText = (str.indexOf('java') != -1) ? "Có" : "Không";
}