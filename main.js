let  contraktEl =2000;

let  superkontrskt = 3000;

let  text = document.querySelector(".text")

let scoreEl = +prompt ("Umumiy balingizni kiriting (maximum 200 ball bo'lishi kerak)");

if (scoreEl >=150){
    text.textContent = "Siz grand asosida talabalikka tavsiya etildingiz."
} else if (scoreEl < 150 && scoreEl >=100){
    let kontraktMoney = +prompt ("siz o'qishga kontrakt asosida tavsiya qilindingiz, endi mablag'ingizni kiriting(minimum summa 2000 dollar)");
    if (kontraktMoney >= contraktEl){
        text.textContent = "Siz kontrakt asosida talabalikka tavsiya etildingiz "
    } else {
        text.textContent = "Siz oqishga tavsiya etilmadingiz "
    }
} else if (scoreEl > 80 && scoreEl < 100 ){
    let superkontrsktMoney = +prompt("Siz super kontrakt aso sida tavsiya qilindingiz , pulingizni kiriting (minimal mablag' 3000 dollar)")
    if (superkontrsktMoney >= superkontrskt){
        text.textContent = "Super kontraktga tavsiya qilindingiz "
    } else {
        text.textContent = "Siz o'qishga kira olmadingiz"
    }
} else {
    text.textContent = "Siz o'qishga kira o'lmadingiz"
} 