let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const form = document.getElementById("form");

function sendMsg(e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  Email.send({
    SecureToken: "4b457cd1-b0cf-45b4-8dd8-054335990a7b",
    To: "masoom2313189@gmail.com",
    From: email.value,
    Subject: subject.value,
    Body: message.value,
  }).then((message) => alert(message));
}

form.addEventListener("submit", sendMsg);
