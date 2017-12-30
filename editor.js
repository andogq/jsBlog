$(document).ready(function () {
  var title = $("#title");
  var date = $("#date");
  var link = $("#link");
  var content = $("#content");
  var submit = $("#formSubmit");
  var editor = new SimpleMDE();
  var regexUpperCase = /[A-Z]/;
  var regexNonAlphanum = /(\s+|[!@#\$%^&*()+=`~{}\][\\'":;?/\.,<>]+)/; // - and _ are allowed
  var regexDate = /(\d{2}\/){2}\d{2}/;
  function getToday() {
    var today = new Date();
    return today.getDate() + '/' + ((today.getMonth() + 1).toString().padStart(2, '0')) + '/' + today.getFullYear().toString().substr(2);
  }
  submit.on("click", function (event) {
    event.preventDefault();
    if (!title.val()) {
      alert("A title is required!");
      return;
    }
    if (link.val() && (regexNonAlphanum.test(link.val()) || regexUpperCase.test(link.val()))) {
      alert("Link must not contain uppercase characters, non alpha-numeric characters and/or any whitespace!");
      return;
    }
    if (date.val() && !regexDate.test(date.val)) {
      alert("Date must be in the format dd/mm/yy!");
      return;
    }
    if (!editor.value()) {
      if (!confirm("Create an empty post?")) return;
    }
    let post = {
      title: title.val(),
      date: date.val() || getToday(),
      link: (link.val() || title.val().toLowerCase().replace(/\W+/g, "-")) + ".md"
    }
    $("#postOutput").text(JSON.stringify(post, null, 4));
    $("#linkOutput").text(post.link);
    $("#contentOutput").text(editor.value());
    $("#output").modal();
  });
});
