function Bai2(){
    let day = new Date();
    let ngay = day.getDate();
    let thang = day.getUTCMonth()+1;
    let nam = day.getFullYear();
    string = "DD MM YY \n";
    string += ngay + "-" + thang + "-" + nam + "\n";
    string += ngay + "/" + thang + "/" + nam + "\n";
    string += "MM DD YY \n";
    string += thang + "-" + ngay + "-" + nam + "\n";
    string += thang + "/" + ngay + "/" + nam ;
    document.getElementById("KQ2").innerText = string;
}