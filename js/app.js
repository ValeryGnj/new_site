function openFeedbackForm() {
    document.getElementById("feedbackForm").classList.remove("hide");
}

function closeFeedbackForm() {
    document.getElementById("feedbackForm").classList.add("hide");
}

function submitFeedbackForm() {
    // Здесь можно добавить код для отправки данных формы
    // Например, можно использовать AJAX или другой метод
    // После отправки данных можно закрыть форму
    alert("Спасибо за ваше сообщение!");
}