const Score = (Math.random()*100).toFixed(0)
console.log(Score)

if (Score >= 90) {
    console.log("Відмінно");
} else if (Score >= 80) {
    console.log("Дуже добре");
} else if (Score >= 70) {
    console.log("Добре");
} else if (Score >= 60) {
    console.log("Задовільно");
} else {
    console.log("Незадовільно");
}