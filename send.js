const form = document.getElementById('form');
const userName = document.getElementById('username');
const userEmail = document.getElementById('useremail');
const userPhone = document.getElementById('userphone');
const userCheck = document.getElementById('userCheck');
const submit = document.getElementById('btn-submit');

let verificationSuccess = false;




submit.addEventListener('click', (e) => {

  checkInputs();

  verificationSuccess && sendData();

});


function checkInputs() {

  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const userPhoneValue = userPhone.value.trim();
  const userCheckValue = userCheck.checked;


  // console.log(userCheckValue);


  if (userNameValue === '' || userNameValue == null) {
    document.getElementById('small1').style.cssText = "display: block;";
    document.getElementById("username").classList.add("error");
    document.getElementById("username").classList.remove("success");
    verificationSuccess = false;

  } else {
    document.getElementById("username").classList.add("success");
    document.getElementById("username").classList.remove("error");
    document.getElementById('small1').style.cssText = "display: none;";
    verificationSuccess = true;
  }


  if (userEmailValue === '' || userEmailValue == null) {
    document.getElementById("useremail").classList.add("error");
    document.getElementById("useremail").classList.remove("success");
    document.getElementById('small2').style.cssText = "display: block;";
    verificationSuccess = false;

  } else if (!isEmail(userEmailValue)) {
    document.getElementById("useremail").classList.add("error");
    document.getElementById("useremail").classList.remove("success");
    document.getElementById('small2').style.cssText = "display: block;";
    verificationSuccess = false;


  } else {
    document.getElementById("useremail").classList.add("success");
    document.getElementById("useremail").classList.remove("error");
    document.getElementById('small2').style.cssText = "display: none;";
    verificationSuccess = true;

  }


  if (userPhoneValue === '' || userPhoneValue == null) {
    console.log('все плохо');
    document.getElementById("userphone").classList.add("error");
    document.getElementById("userphone").classList.remove("success");
    document.getElementById('small3').style.cssText = "display: block;";
    verificationSuccess = false;

  } else if (!isPhone(userPhoneValue)) {

    document.getElementById("userphone").classList.add("error");
    document.getElementById("userphone").classList.remove("success");
    document.getElementById('small3').style.cssText = "display: block;";
    verificationSuccess = false;

  } else {
    document.getElementById("userphone").classList.add("success");
    document.getElementById("userphone").classList.remove("error");
    document.getElementById('small3').style.cssText = "display: none;";
    verificationSuccess = true;

  }


  if (userCheckValue === false) {
    document.getElementById('cheking').style.cssText = "color:red;";
    verificationSuccess = false;

  } else {
    document.getElementById('cheking').style.cssText = "color:#A9A9A9;";
  }

  // console.log(verificationSuccess)
}


function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone);
}

function sendData() {
  var DateTime = new Date().toLocaleString();
  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const userPhoneValue = userPhone.value.trim();

  let data = {
      userName: userNameValue,
      userEmail: userEmailValue,
      userPhone: userPhoneValue,
      userWebinarId: 123,
      userWebinarReferrer: "https://rebrainme.com/webinars/....",
      userWebinarFirstReferrer: "https://yandex.ru/?....",
      userDate: DateTime,
      userMessageTitle: "Webinar Signup Form Kubernetes",
  }
  console.log(JSON.stringify(data));


  fetch("https://rebrainme.com/webinar-universal-signup", {
  method: "POST",
  body: JSON.stringify(data),
  mode: 'cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    "Accept": 'application/json',
  }

  }).then(response => {
    console.log(response, 'response');

    document.getElementById('container_request').style.cssText = "display:flex;";
    document.getElementById('wrapp').style.cssText = "display:none;";
  });
}

function locationHref() {
  window.location = "https://rebrainme.com"
}
