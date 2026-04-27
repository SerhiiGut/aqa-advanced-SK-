const Score = (Math.random()*100).toFixed(0)
console.log(Score)

switch (true) {
    case (Score >= 90):
        console.log("Відмінно");
        break;
    case (Score >= 80):
        console.log("Дуже добре");
        break;
    case (Score >= 70):
        console.log("Добре");
        break;
    case (Score >= 60):
        console.log("Задовільно");
        break;
    default:
        console.log("Незадовільно");
}
