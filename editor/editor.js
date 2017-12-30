function $(selector, multiple) {
  return multiple ? document.querySelectorAll(selector) : document.querySelector(selector);
}
var title = $("#title");
var date = $("#date");
var link = $("#link");
var content = $("#content");
var submit = $("#formSubmit");
var modal = $("#output"); 
var editor = new SimpleMDE();
var regexUpperCase = /[A-Z]/;
var regexNonAlphanum = /(\s+|[!@#\$%^&*()+=`~{}\][\\'":;?/\.,<>]+)/; // - and _ are allowed
var regexDate = /(\d{2}\/){2}\d{2}/;
function getToday() {
  var today = new Date();
  return today.getDate() + '/' + ((today.getMonth() + 1).toString().padStart(2, '0')) + '/' + today.getFullYear().toString().substr(2);
}
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (!title.value) {
    alert("A title is required!");
    return;
  }
  if (link.value && (regexNonAlphanum.test(link.value) || regexUpperCase.test(link.value))) {
    alert("Link must not contain uppercase characters, non alpha-numeric characters and/or any whitespace!");
    return;
  }
  if (date.value && !regexDate.test(date.value)) {
    alert("Date must be in the format dd/mm/yy!");
    return;
  }
  if (!editor.value()) {
    if (!confirm("Create an empty post?")) return;
  }
  let post = {
    title: title.value,
    date: date.value || getToday(),
    link: (link.value || title.value.toLowerCase().replace(/\W+/g, "-")) + ".md"
  }
  $("#postOutput").innerHTML = JSON.stringify(post, null, 4)
  $("#linkOutput").innerHTML = post.link
  $("#contentOutput").innerHTML = editor.value();
  openModal();
});

window.onclick = function (event) {
  if (event.target == modal) closeModal();
}
$(".close", true).forEach(function (close) {
  close.addEventListener("click", function (event) {
    event.preventDefault();
    closeModal();
  });
});
