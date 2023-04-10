let number = 34;

if (number % 7 == 0) {
    console.log(number + " 7'ye bölünür");
} else {
    let aroundNumber = Math.round(number / 7) * 7;
    if (aroundNumber == number) {
        console.log("7'ye bölünür");
    } else {
        console.log("Daxil edilen reqeme en yaxin 7ye bölünen reqem " + aroundNumber);
    }
}
