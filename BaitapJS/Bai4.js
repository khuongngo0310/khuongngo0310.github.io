function Bai4() {
    let string = document.getElementById("input4").value;
    let str = "";
    for (let i in string){
        if ((string.charAt(i) >= 'a' && string.charAt(i) <='z') || (string.charAt(i)>= 'A' && string.charAt(i) <= 'Z'))
            {
                str +=  String.fromCharCode(string.charCodeAt(i) + 1);
            }
        else str += string[i];
    }
    document.getElementById("KQ4").innerText = str;
};