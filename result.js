const faqs = document.querySelectorAll(".faq");

console.log(faqs); // should show 4 items

faqs.forEach((faq) => {

    const question = faq.querySelector(".question");

    question.addEventListener("click", () => {

        faq.classList.toggle("active");

    });

});
const searchButton = document.getElementById("searchAgain");

searchButton.addEventListener("click", function () {

    window.location.href = "page2.html";

});