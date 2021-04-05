function Bai5(){
    let str = document.getElementById("input5").value;
    if (str.length % 2 == 0 || str.length < 3){
        document.getElementById("KQ5").innerText = "Dữ liệu sai";
    }
    else {
        let l = str.length;
        document.getElementById("KQ5").innerText = str[(l-1)/2 - 1] + str[(l-1)/2] +str[(l-1)/2 + 1];
    }
}