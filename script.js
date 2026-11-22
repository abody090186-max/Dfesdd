function showForm() {

const form = document.getElementById("updateForm");

form.style.display = "block";

form.scrollIntoView({
    behavior: "smooth"
});

}

document.getElementById("customerForm")
.addEventListener("submit", function(event) {

event.preventDefault();

alert(
    "تم استلام النموذج في هذه النسخة التجريبية. لم يتم إرسال البيانات إلى خادم."
);

});
