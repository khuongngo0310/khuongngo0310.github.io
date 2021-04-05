function Bai8() {
    let thang = document.getElementById("input8").value;
    let obj = {
        1: "Tháng một",
        2: "Tháng hai",
        3: "Tháng ba",
        4: "Tháng tư",
        5: "Tháng năm",
        6: "Tháng sáu",
        7: "Tháng bảy",
        8: "Tháng tám",
        9: "Tháng chín",
        10: "Tháng mười",
        11: "Tháng mườI một",
        12: "Tháng mười hai"
    }
    document.getElementById("KQ8").innerText = (obj[thang]) ? obj[thang] : "Không có tháng này!!";
}