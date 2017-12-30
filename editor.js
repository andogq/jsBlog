$(document).ready(function () {
  var title = $("#title");
  var date = $("#date");
  var link = $("#link");
  var content = $("#content");
  var submit = $("#formSubmit");
  var editor = new SimpleMDE();
  function getToday() {
    var today = new Date();
    return today.getDate() + '/' + (today.getMonth() + 1)  + '/' + today.getFullYear().toString().substr(2);
  }
  submit.on("click", function (event) {
    event.preventDefault();
    let post = {
      title: title.val(),
      date: date.val() || getToday(),
      link: (link.val() || title.val().toLowerCase().replace(/\W+/g, "-")) + ".md"
    }
    $("#postOutput").text(JSON.stringify(post, null, 4));
    $("#linkOutput").text(post.link);
    $("#contentOutput").text(editor.value());
  });
});
