function showTextAfterDelay(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

showTextAfterDelay("Текст", 3000);