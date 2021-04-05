function Bai3(){
    let str = document.getElementById("input3").value;
    for (let i = 0; i < str.length - 1; i++){
        if (str.charCodeAt(i) > str.charCodeAt(i+1))
            {
                document.getElementById("KQ3").innerText = "Sai";
                return;
            }
    }
    document.getElementById("KQ3").innerText = "Đúng";
};

