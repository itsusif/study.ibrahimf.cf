const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const Database = require("@replit/database");
const db = new Database();
const nodemailer = require('nodemailer');
var fs = require('fs');
var serv = require('http').Server(app);
const http = require("https");
// delete database
// db.empty();

// get device name

// token gen

const {
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');
// serber started
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cookieParser());
app.use(bodyParser.urlencoded({
  extended: true
}));

/////////////////////////////////////////////////////
// HOME PAGE APP////////////////////////////////////
app.get("/", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  username = req.cookies.username;
  token = req.cookies.token;
  if (loggedIn == "true") {
    db.list().then(keys => {
      if (keys.includes(token)) {
        res.render("home/loggedin.html", {
          username: username
        })
      } else {
        res.redirect("/logout");
      }
    });
  } else {
    res.render("loginsignup/notloggedin.html");
  }
});
app.get("/home/loggedin.html", (req, res) => {
  res.redirect("/");
});
/////////////////////////////////////////////////////
// QUIZ WORDS M3 UNIT 1 APP//////////////////////////
app.get("/m3/unit1/quiz/words", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  username = req.cookies.username;
  token = req.cookies.token;
  if (loggedIn == "true") {
    db.list().then(keys => {
      if (keys.includes(token)) {
        res.render("m3/unit1/wordsquiz.html", {
          username: username
        })
      } else {
        res.redirect("/logout");
      }
    });
  } else {
    res.render("loginsignup/notloggedin.html");
  }
});
app.get("/m3/unit1/wordsquiz.html", (req, res) => {
  res.redirect("/m3/unit1/wordsquiz.html");
});
////////////////////////////////////////////////
// WORDS M3 UNIT 1 APP//////////////////////////
app.get("/m3/unit1/words", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  username = req.cookies.username;
  token = req.cookies.token;
  if (loggedIn == "true") {
    db.list().then(keys => {
      if (keys.includes(token)) {
        res.render("m3/unit1/words.html", {
          username: username
        })
      } else {
        res.redirect("/logout");
      }
    });
  } else {
    res.render("loginsignup/notloggedin.html");
  }
});
app.get("/m3/unit1/words.html", (req, res) => {
  res.redirect("/m3/unit1/words");
});


// chat system !
app.get("/chat", (req, res) => {
  res.render("chat/chat.html");
})
app.get("/chat/chat.html", (req, res) => {
  res.redirect("/chat")
})
////////////////////////////////////////////////
// SYSTEM APP////////////////////////////
app.get("/login", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  if (loggedIn == "true") {
    res.redirect("/");
  } else {
    res.render("loginsignup/login.html");
  }
})
app.get("/loginsignup/login.html", (req, res) => {
  res.redirect("/login");
})

app.post("/loginsubmit", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var data = fs.readFileSync('2FA.json');
  var acc = JSON.parse(data)

  var ass = acc.token
  for (var i = 0; i < ass.length; i++) {
    var token = JSON.stringify(ass[i][username]);
    if (token != undefined) {
      var tokendat = JSON.parse(token)
    }
  }

  var assem = acc.email
  for (var i = 0; i < assem.length; i++) {
    var email = JSON.stringify(assem[i][username]);
    if (email != undefined) {
      var emaildat = JSON.parse(email)
    }
  }
  var assauth = acc.auth
  for (var i = 0; i < assauth.length; i++) {
    var auth = JSON.stringify(assauth[i][username]);
    if (auth != undefined) {
      var authdat = JSON.parse(auth)
    }
  }

  db.list().then(keys => {
    if (keys.includes(tokendat)) {
      db.get(tokendat).then(value => {
        if (password == value) {
          res.cookie("loggedIn", "true");
          res.cookie("username", username);
          res.cookie("token", tokendat);
          if (authdat != null) {
            var indexauth = assauth.findIndex(obj => obj[username] == authdat);
          }
          fs.readFile("./2FA.json", (err, data) => {
            let json = JSON.parse(data);

            if (indexauth != null) {
              json.auth.splice(indexauth, 1);
              json.auth.push({
                [username]: Math.floor(100000 + Math.random() * 900000)
              })
            }

            fs.writeFile("./2FA.json", JSON.stringify(json, null, 2), function(err) {
              if (err) {
                return res.render("error/error.html");
              }
            });
          });
          if (emaildat != undefined) {
            res.cookie("email", emaildat);
          }
          res.redirect("/");
        } else {
          res.send(`<!DOCTYPE html><html><head><link rel=stylesheet href=https://study.ibrahimf.cf/loginsignup/styles.css><title>Signup Page</title><link rel=icon href=https://cdn.ibrahimf.cf/images/887ca8ba93cd4370862629eb13b7c260.png type=image/x-icon><meta name=viewport content="width=device-width, initial-scale=1"></head><body><div class=loading><div class=spinner></div></div><h2>Login Form</h2><form action=/loginsubmit method=post><div class=imgcontainer><img src=https://www.w3schools.com/howto/img_avatar2.png alt=Avatar class=avatar></div><div class=alert><span class=closebtn>&times;</span><strong>Error !</strong> | Account not found or password incorrect.</div><div class=container><label for=uname><b>Username</b></label><input type=text placeholder="Enter Username" name=username required><label for=psw><b>Password</b></label><input type=password placeholder="Enter Password" name=password id=pass required><input type=checkbox onclick=myFunction()>Show Password<script>function myFunction(){var x=document.getElementById("pass");if(x.type==="password"){x.type="text";}else{x.type="password";}}</script><input type=submit value=Login class=but></div><div class=container style=background-color:#f1f1f1><input type=button value=Back onclick=history.back() class=cancelbtn><a href=https://study.ibrahimf.cf/signup class=cancelbtn>Signup ?</a></div></form></body><script>const fadeOut=()=>{const loading=document.querySelector(".loading");loading.classList.add("fade");}
window.addEventListener("load",fadeOut);</script></html>`);
        }
      });
    } else {
      res.send(`<!DOCTYPE html><html><head><link rel=stylesheet href=https://study.ibrahimf.cf/loginsignup/styles.css><title>Signup Page</title><link rel=icon href=https://cdn.ibrahimf.cf/images/887ca8ba93cd4370862629eb13b7c260.png type=image/x-icon><meta name=viewport content="width=device-width, initial-scale=1"></head><body><div class=loading><div class=spinner></div></div><h2>Login Form</h2><form action=/loginsubmit method=post><div class=imgcontainer><img src=https://www.w3schools.com/howto/img_avatar2.png alt=Avatar class=avatar></div><div class=alert><span class=closebtn>&times;</span><strong>Error !</strong> | Account not found or password incorrect.</div><div class=container><label for=uname><b>Username</b></label><input type=text placeholder="Enter Username" name=username required><label for=psw><b>Password</b></label><input type=password placeholder="Enter Password" name=password id=pass required><input type=checkbox onclick=myFunction()>Show Password<script>function myFunction(){var x=document.getElementById("pass");if(x.type==="password"){x.type="text";}else{x.type="password";}}</script><input type=submit value=Login class=but></div><div class=container style=background-color:#f1f1f1><input type=button value=Back onclick=history.back() class=cancelbtn><a href=https://study.ibrahimf.cf/signup class=cancelbtn>Signup ?</a></div></form></body><script>const fadeOut=()=>{const loading=document.querySelector(".loading");loading.classList.add("fade");}
window.addEventListener("load",fadeOut);</script></html>`);
    }
  });
});
////////////////////////////////////////////////
// SIGNUP SYSTEM APP////////////////////////////
app.get("/signup", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  if (loggedIn == "true") {
    res.redirect("/");
  } else {
    res.render("loginsignup/signup.html");
  }
});
app.get("/loginsignup/signup.html", (req, res) => {
  res.redirect("/signup");
});
app.post("/createaccount", (req, res) => {
  var newusername = req.body.newusername;
  newpassword = req.body.newpassword;
  var date = new Date();
  var newtoken = uuidv1();
  var passw = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  cap_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  allchars = letters + cap_letters + numbers + ['_', '-'];
  goodusername = true;
  for (let i of newusername) {
    if (!allchars.includes(i)) {
      goodusername = false;
    }
  }

  if (goodusername) {
    db.list().then(keys => {
      if (keys.includes(newusername)) {
        res.send(`<!DOCTYPE html><html><head><link rel=stylesheet href=https://study.ibrahimf.cf/loginsignup/styles.css><title>Signup Page</title><link rel=icon href=https://cdn.ibrahimf.cf/images/887ca8ba93cd4370862629eb13b7c260.png type=image/x-icon><meta name=viewport content="width=device-width, initial-scale=1"></head><body><div class=loading><div class=spinner></div></div><input type=hidden id=g-recaptcha-response name=g-recaptcha-response><input type="hidden"name=action value=validate_captcha><h2>Signup Form</h2><form action=/createaccount method=post><div class=imgcontainer><img src=https://www.w3schools.com/howto/img_avatar2.png alt=Avatar class=avatar></div><div class=alert><span class=closebtn>&times;</span><strong>Error !</strong> | Username is already taken. Please choose another one.</div><div class=container><label for=uname><b>Username</b></label><input type=text placeholder="Enter New Username" name=newusername class=nospaces required><label for=psw><b>Password</b></label><input value="${newpassword}"type=password placeholder="Enter Password" name=newpassword class=nospaces1 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id=psw title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><input type=password placeholder="Confirm Password" class=nospaces2 id=psw2 required><input type=checkbox onclick=myFunction()>Show Password<div id=message><h3>Password must contain the following:</h3><p id=letter class=invalid>A <b>lowercase</b> letter</p><p id=capital class=invalid>A <b>capital (uppercase)</b> letter</p><p id=number class=invalid>A <b>number</b></p><p id=length class=invalid>Minimum <b>8 characters</b></p></div><div id=conmes><h3>Confirm Password :</h3><p id=confirm class=invalid><b>Confirm Password</b></p></div><input type=submit value="Sign Up" class=but></div><div class=container style=background-color:#f1f1f1><input type=button value=Back onclick=history.back() class=cancelbtn><a href=https://study.ibrahimf.cf/login class=cancelbtn>Login ?</a></div></form></body><script src=https://study.ibrahimf.cf/loginsignup/app.js></script><script src="https://www.google.com/recaptcha/api.js?render=6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu"></script><script>grecaptcha.ready(function(){grecaptcha.execute('6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu',{action:'validate_captcha'}).then(function(token){document.getElementById('g-recaptcha-response').value=token;});});</script></html>`);
      } else if (newusername == null || newusername == undefined || newusername == "") {
        res.send(`<!DOCTYPE html><html><head><link rel=stylesheet href=https://study.ibrahimf.cf/loginsignup/styles.css><title>Signup Page</title><link rel=icon href=https://cdn.ibrahimf.cf/images/887ca8ba93cd4370862629eb13b7c260.png type=image/x-icon><meta name=viewport content="width=device-width, initial-scale=1"></head><body><div class=loading><div class=spinner></div></div><input type=hidden id=g-recaptcha-response name=g-recaptcha-response><input type="hidden"name=action value=validate_captcha><h2>Signup Form</h2><form action=/createaccount method=post><div class=imgcontainer><img src=https://www.w3schools.com/howto/img_avatar2.png alt=Avatar class=avatar></div><div class=alert><span class=closebtn>&times;</span><strong>Error !</strong> | Please enter a username.</div><div class=container><label for=uname><b>Username</b></label><input type=text placeholder="Enter New Username" name=newusername class=nospaces required><label for=psw><b>Password</b></label><input value="${newpassword}" type=password placeholder="Enter Password" name=newpassword class=nospaces1 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id=psw title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><input type=password placeholder="Confirm Password" class=nospaces2 id=psw2 required><input type=checkbox onclick=myFunction()>Show Password<div id=message><h3>Password must contain the following:</h3><p id=letter class=invalid>A <b>lowercase</b> letter</p><p id=capital class=invalid>A <b>capital (uppercase)</b> letter</p><p id=number class=invalid>A <b>number</b></p><p id=length class=invalid>Minimum <b>8 characters</b></p></div><div id=conmes><h3>Confirm Password :</h3><p id=confirm class=invalid><b>Confirm Password</b></p></div><input type=submit value="Sign Up" class=but></div><div class=container style=background-color:#f1f1f1><input type=button value=Back onclick=history.back() class=cancelbtn><a href=https://study.ibrahimf.cf/login class=cancelbtn>Login ?</a></div></form></body><script src=https://study.ibrahimf.cf/loginsignup/app.js></script><script src="https://www.google.com/recaptcha/api.js?render=6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu"></script><script>grecaptcha.ready(function(){grecaptcha.execute('6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu',{action:'validate_captcha'}).then(function(token){document.getElementById('g-recaptcha-response').value=token;});});</script></html>`);
      } else if (newpassword == null || newpassword == undefined || newpassword == "") {
        res.send(`<!DOCTYPE html><html><head><link rel=stylesheet href=https://study.ibrahimf.cf/loginsignup/styles.css><title>Signup Page</title><link rel=icon href=https://cdn.ibrahimf.cf/images/887ca8ba93cd4370862629eb13b7c260.png type=image/x-icon><meta name=viewport content="width=device-width, initial-scale=1"></head><body><div class=loading><div class=spinner></div></div><input type=hidden id=g-recaptcha-response name=g-recaptcha-response><input type="hidden"name=action value=validate_captcha><h2>Signup Form</h2><form action=/createaccount method=post><div class=imgcontainer><img src=https://www.w3schools.com/howto/img_avatar2.png alt=Avatar class=avatar></div><div class=alert><span class=closebtn>&times;</span><strong>Error !</strong> | Please enter a password.</div><div class=container><label for=uname><b>Username</b></label><input type=text placeholder="Enter New Username" value="${newusername}" name=newusername class=nospaces required><label for=psw><b>Password</b></label><input type=password placeholder="Enter Password" name=newpassword class=nospaces1 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id=psw title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><input type=password placeholder="Confirm Password" class=nospaces2 id=psw2 required><input type=checkbox onclick=myFunction()>Show Password<div id=message><h3>Password must contain the following:</h3><p id=letter class=invalid>A <b>lowercase</b> letter</p><p id=capital class=invalid>A <b>capital (uppercase)</b> letter</p><p id=number class=invalid>A <b>number</b></p><p id=length class=invalid>Minimum <b>8 characters</b></p></div><div id=conmes><h3>Confirm Password :</h3><p id=confirm class=invalid><b>Confirm Password</b></p></div><input type=submit value="Sign Up" class=but></div><div class=container style=background-color:#f1f1f1><input type=button value=Back onclick=history.back() class=cancelbtn><a href=https://study.ibrahimf.cf/login class=cancelbtn>Login ?</a></div></form></body><script src=https://study.ibrahimf.cf/loginsignup/app.js></script><script src="https://www.google.com/recaptcha/api.js?render=6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu"></script><script>grecaptcha.ready(function(){grecaptcha.execute('6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu',{action:'validate_captcha'}).then(function(token){document.getElementById('g-recaptcha-response').value=token;});});</script></html>`)
      } else if (newpassword.split(' ').join('') != newpassword) {
        res.send(`<!DOCTYPE html><html><head><link rel=stylesheet href=https://study.ibrahimf.cf/loginsignup/styles.css><title>Signup Page</title><link rel=icon href=https://cdn.ibrahimf.cf/images/887ca8ba93cd4370862629eb13b7c260.png type=image/x-icon><meta name=viewport content="width=device-width, initial-scale=1"></head><body><div class=loading><div class=spinner></div></div><input type=hidden id=g-recaptcha-response name=g-recaptcha-response><input type="hidden"name=action value=validate_captcha><h2>Signup Form</h2><form action=/createaccount method=post><div class=imgcontainer><img src=https://www.w3schools.com/howto/img_avatar2.png alt=Avatar class=avatar></div><div class=alert><span class=closebtn>&times;</span><strong>Error !</strong> | Please don't add space in password.</div><div class=container><label for=uname><b>Username</b></label><input type=text placeholder="Enter New Username" value="${newusername}" name=newusername class=nospaces required><label for=psw><b>Password</b></label><input type=password placeholder="Enter Password" name=newpassword class=nospaces1 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id=psw title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><input type=password placeholder="Confirm Password" class=nospaces2 id=psw2 required><input type=checkbox onclick=myFunction()>Show Password<div id=message><h3>Password must contain the following:</h3><p id=letter class=invalid>A <b>lowercase</b> letter</p><p id=capital class=invalid>A <b>capital (uppercase)</b> letter</p><p id=number class=invalid>A <b>number</b></p><p id=length class=invalid>Minimum <b>8 characters</b></p></div><div id=conmes><h3>Confirm Password :</h3><p id=confirm class=invalid><b>Confirm Password</b></p></div><input type=submit value="Sign Up" class=but></div><div class=container style=background-color:#f1f1f1><input type=button value=Back onclick=history.back() class=cancelbtn><a href=https://study.ibrahimf.cf/login class=cancelbtn>Login ?</a></div></form></body><script src=https://study.ibrahimf.cf/loginsignup/app.js></script><script src="https://www.google.com/recaptcha/api.js?render=6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu"></script><script>grecaptcha.ready(function(){grecaptcha.execute('6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu',{action:'validate_captcha'}).then(function(token){document.getElementById('g-recaptcha-response').value=token;});});</script></html>`)
      } else if (newusername.split(' ').join('') != newusername) {
        res.send(`<!DOCTYPE html><html><head><link rel=stylesheet href=https://study.ibrahimf.cf/loginsignup/styles.css><title>Signup Page</title><link rel=icon href=https://cdn.ibrahimf.cf/images/887ca8ba93cd4370862629eb13b7c260.png type=image/x-icon><meta name=viewport content="width=device-width, initial-scale=1"></head><body><div class=loading><div class=spinner></div></div><input type=hidden id=g-recaptcha-response name=g-recaptcha-response><input type="hidden"name=action value=validate_captcha><h2>Signup Form</h2><form action=/createaccount method=post><div class=imgcontainer><img src=https://www.w3schools.com/howto/img_avatar2.png alt=Avatar class=avatar></div><div class=alert><span class=closebtn>&times;</span><strong>Error !</strong> | Please don't add space in username.</div><div class=container><label for=uname><b>Username</b></label><input type=text placeholder="Enter New Username" name=newusername class=nospaces required><label for=psw><b>Password</b></label><input type=password  value="${newpassword}" placeholder="Enter Password" name=newpassword class=nospaces1 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id=psw title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><input type=password placeholder="Confirm Password" class=nospaces2 id=psw2 required><input type=checkbox onclick=myFunction()>Show Password<div id=message><h3>Password must contain the following:</h3><p id=letter class=invalid>A <b>lowercase</b> letter</p><p id=capital class=invalid>A <b>capital (uppercase)</b> letter</p><p id=number class=invalid>A <b>number</b></p><p id=length class=invalid>Minimum <b>8 characters</b></p></div><div id=conmes><h3>Confirm Password :</h3><p id=confirm class=invalid><b>Confirm Password</b></p></div><input type=submit value="Sign Up" class=but></div><div class=container style=background-color:#f1f1f1><input type=button value=Back onclick=history.back() class=cancelbtn><a href=https://study.ibrahimf.cf/login class=cancelbtn>Login ?</a></div></form></body><script src=https://study.ibrahimf.cf/loginsignup/app.js></script><script src="https://www.google.com/recaptcha/api.js?render=6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu"></script><script>grecaptcha.ready(function(){grecaptcha.execute('6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu',{action:'validate_captcha'}).then(function(token){document.getElementById('g-recaptcha-response').value=token;});});</script></html>`)
      } else if (newpassword.length <= 8 || newpassword.match(passw)) {
        res.send(`<!DOCTYPE html><html><head><link rel=stylesheet href=https://study.ibrahimf.cf/loginsignup/styles.css><title>Signup Page</title><link rel=icon href=https://cdn.ibrahimf.cf/images/887ca8ba93cd4370862629eb13b7c260.png type=image/x-icon><meta name=viewport content="width=device-width, initial-scale=1"></head><body><div class=loading><div class=spinner></div></div><input type=hidden id=g-recaptcha-response name=g-recaptcha-response><input type="hidden"name=action value=validate_captcha><h2>Signup Form</h2><form action=/createaccount method=post><div class=imgcontainer><img src=https://www.w3schools.com/howto/img_avatar2.png alt=Avatar class=avatar></div><div class=alert><span class=closebtn>&times;</span><strong>Error !</strong> | Must password at least one number and one uppercase and lowercase letter, and at least 8 or more characters.</div><div class=container><label for=uname><b>Username</b></label><input type=text placeholder="Enter New Username" value="${newusername}" name=newusername class=nospaces required><label for=psw><b>Password</b></label><input type=password placeholder="Enter Password" name=newpassword class=nospaces1 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id=psw title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><input type=password placeholder="Confirm Password" class=nospaces2 id=psw2 required><input type=checkbox onclick=myFunction()>Show Password<div id=message><h3>Password must contain the following:</h3><p id=letter class=invalid>A <b>lowercase</b> letter</p><p id=capital class=invalid>A <b>capital (uppercase)</b> letter</p><p id=number class=invalid>A <b>number</b></p><p id=length class=invalid>Minimum <b>8 characters</b></p></div><div id=conmes><h3>Confirm Password :</h3><p id=confirm class=invalid><b>Confirm Password</b></p></div><input type=submit value="Sign Up" class=but></div><div class=container style=background-color:#f1f1f1><input type=button value=Back onclick=history.back() class=cancelbtn><a href=https://study.ibrahimf.cf/login class=cancelbtn>Login ?</a></div></form></body><script src=https://study.ibrahimf.cf/loginsignup/app.js></script><script src="https://www.google.com/recaptcha/api.js?render=6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu"></script><script>grecaptcha.ready(function(){grecaptcha.execute('6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu',{action:'validate_captcha'}).then(function(token){document.getElementById('g-recaptcha-response').value=token;});});</script></html>`)
      } else {
        db.set(newusername, newpassword);
        db.set(newtoken, newpassword);
        var npip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
        var usac = JSON.stringify({
          username: newusername,
          password: newpassword,
          ip_address: npip,
          token: newtoken,
          date: date
        }, null, 2)
        fs.appendFile('account.json', usac, fin)
        var data = fs.readFileSync('2FA.json');
        var acc = JSON.parse(data)
        var ass = acc.token
        for (var i = 0; i < ass.length; i++) {
          var token = JSON.stringify(ass[i][username]);
          if (token != undefined) {
            var tokendat = JSON.parse(token)
          }
        }
        var asss = acc.password
        for (var i = 0; i < asss.length; i++) {
          var password = JSON.stringify(asss[i][username]);
          if (password != undefined) {
            var passworddat = JSON.parse(password)
          }
        }
        var assss = acc.auth
        for (var i = 0; i < assss.length; i++) {
          var auth = JSON.stringify(asss[i][username]);
          if (auth != undefined) {
            var authdat = JSON.parse(auth)
          }
        }
        if (tokendat == undefined || authdat == undefined || passworddat == undefined) {
          fs.readFile('./2FA.json', 'utf-8', function(err, data) {
            if (err) throw err
            var arrayOfObjectss = JSON.parse(data)
            arrayOfObjectss.password.push({
              [newusername]: newpassword
            })
            arrayOfObjectss.token.push({
              [newusername]: newtoken
            })
            arrayOfObjectss.auth.push({
              [newusername]: Math.floor(100000 + Math.random() * 900000)
            })

            fs.writeFile('./2FA.json', JSON.stringify(arrayOfObjectss, null, 2), 'utf-8', function(err) {
              if (err) throw err
            })
          })
        } else {
          res.redirect('/')
        }
        function fin(err) {
          return
        }
        res.cookie("loggedIn", "true")
        res.cookie("username", newusername);
        res.cookie("token", newtoken);
        res.redirect("/");


      }
    });
  } else {
    res.send(`<!DOCTYPE html><html><head><link rel=stylesheet href=https://study.ibrahimf.cf/loginsignup/styles.css><title>Signup Page</title><link rel=icon href=https://cdn.ibrahimf.cf/images/887ca8ba93cd4370862629eb13b7c260.png type=image/x-icon><meta name=viewport content="width=device-width, initial-scale=1"></head><body><div class=loading><div class=spinner></div></div><input type=hidden id=g-recaptcha-response name=g-recaptcha-response><input type="hidden"name=action value=validate_captcha><h2>Signup Form</h2><form action=/createaccount method=post><div class=imgcontainer><img src=https://www.w3schools.com/howto/img_avatar2.png alt=Avatar class=avatar></div><div class=alert><span class=closebtn>&times;</span><strong>Error !</strong> | Username can only contain alphanumeric characters and underscores.</div><div class=container><label for=uname><b>Username</b></label><input type=text placeholder="Enter New Username" name=newusername class=nospaces required><label for=psw><b>Password</b></label><input value="${newpassword}" type=password placeholder="Enter Password" name=newpassword class=nospaces1 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id=psw title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required><input type=password placeholder="Confirm Password" class=nospaces2 id=psw2 required><input type=checkbox onclick=myFunction()>Show Password<div id=message><h3>Password must contain the following:</h3><p id=letter class=invalid>A <b>lowercase</b> letter</p><p id=capital class=invalid>A <b>capital (uppercase)</b> letter</p><p id=number class=invalid>A <b>number</b></p><p id=length class=invalid>Minimum <b>8 characters</b></p></div><div id=conmes><h3>Confirm Password :</h3><p id=confirm class=invalid><b>Confirm Password</b></p></div><input type=submit value="Sign Up" class=but></div><div class=container style=background-color:#f1f1f1><input type=button value=Back onclick=history.back() class=cancelbtn><a href=https://study.ibrahimf.cf/login class=cancelbtn>Login ?</a></div></form></body><script src=https://study.ibrahimf.cf/loginsignup/app.js></script><script src="https://www.google.com/recaptcha/api.js?render=6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu"></script><script>grecaptcha.ready(function(){grecaptcha.execute('6LeJ5dQiAAAAAF335hN1UZjZBFYE2CSsAgVCBbAu',{action:'validate_captcha'}).then(function(token){document.getElementById('g-recaptcha-response').value=token;});});</script></html>`)
  }
});
////////////////////////////////////////////////
// LOGOUT SYSTEM APP////////////////////////////

app.get("/logout", (req, res) => {
  res.cookie("loggedIn", "false");
  res.clearCookie("username");
  res.clearCookie("token");
  res.redirect("/");
});

////////////////////////////////////////////////
// ACCOUNT SYSTEM APP////////////////////////////
app.get("/account", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  username = req.cookies.username;
  token = req.cookies.token;

  if (loggedIn == "true") {
    db.list().then(keys => {
      if (keys.includes(token)) {
        randomnum = Math.floor(100000 + Math.random() * 900000);
        var data = fs.readFileSync('2FA.json');
        var acc = JSON.parse(data)
        var assverem = acc.veremail
        for (var i = 0; i < assverem.length; i++) {
          var veremail = JSON.stringify(assverem[i][username]);
          if (veremail != undefined) {
            var veremaildat = JSON.parse(veremail)
          }
        }
        var assauth = acc.auth
        for (var i = 0; i < assauth.length; i++) {
          var auth = JSON.stringify(assauth[i][username]);
          if (auth != undefined) {
            var authdat = JSON.parse(auth)
          }
        }

        if (authdat != null) {
          var indexauth = assauth.findIndex(obj => obj[username] == authdat);
        }
        fs.readFile("./2FA.json", (err, data) => {
          let json = JSON.parse(data);

          if (indexauth != null) {
            json.auth.splice(indexauth, 1);
            json.auth.push({
              [username]: Math.floor(100000 + Math.random() * 900000)
            })
          }

          fs.writeFile("./2FA.json", JSON.stringify(json, null, 2), function(err) {
            if (err) {
              return res.render("error/error.html");
            }
          });
        });
        if (veremaildat == null) {
          res.render("account/settings.html", {
            username: username,
            randomnum: randomnum
          })

        } else {
          res.render("account/versettings.html", {
            username: username,
            randomnum: randomnum,
            email: veremaildat
          })
        }
      } else {
        res.redirect("/logout");
      }
    });
  } else {
    res.render("loginsignup/notloggedin.html");
  }
});
app.get("/account/settings.html", (req, res) => {
  res.redirect("/account");
});
app.get("/account/versettings.html", (req, res) => {
  res.redirect("/account");
});
////////////////////////////////////////////////
// 2FA APP/////////////////////////////////
app.get("/account/2fa", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  username = req.cookies.username;
  token = req.cookies.token;
  if (loggedIn == "true") {
    db.list().then(keys => {
      if (keys.includes(token)) {
        randomnum = Math.floor(100000 + Math.random() * 900000);
        var data = fs.readFileSync('2FA.json');
        var acc = JSON.parse(data)
        var ass = acc.auth
        for (var i = 0; i < ass.length; i++) {
          var auth = JSON.stringify(ass[i][username]);
          if (auth != undefined) {
            var authdat = JSON.parse(auth)
          }
        }

        var assem = acc.email
        for (var i = 0; i < assem.length; i++) {
          var email = JSON.stringify(assem[i][username]);
          if (email != undefined) {
            var emaildat = JSON.parse(email)
          }
        }

        if (emaildat == undefined) {
          res.render("account/2fa.html", {
            username: username,
            auth: authdat,
            randomnum: randomnum
          })
        } else {
          res.redirect("/account/2fa/check");
        }
      } else {
        res.redirect("/logout");
      }
    });
  } else {
    res.render("loginsignup/notloggedin.html");
  }
});
app.get("/account/2fa.html", (req, res) => {
  res.redirect("/account/2fa");
});

app.post("/email", (req, res) => {
  var username = req.cookies.username;
  var token = req.cookies.token;
  var password = req.body.password;
  var email = req.body.email;
  if (email == undefined || email == null || password == null || password == undefined) {
    res.redirect("/account/2fa")
  }
  db.list().then(keys => {
    if (keys.includes(token)) {
      db.get(token).then(value => {
        if (password == value) {

          var data = fs.readFileSync('2FA.json');
          var acc = JSON.parse(data)
          var ass = acc.auth
          var npip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null;
          for (var i = 0; i < ass.length; i++) {
            var auth = JSON.stringify(ass[i][username]);
            if (auth != undefined) {
              var authdat = JSON.parse(auth)
            }
          }

          var assem = acc.email
          for (var i = 0; i < assem.length; i++) {
            var emails = JSON.stringify(assem[i][username]);
            if (emails != undefined) {
              var emaildat = JSON.parse(emails)
            }
          }

          if (emaildat == undefined) {
            authtex = "back to website";
            let authtext = authtex.link("https://study.ibrahimf.cf/account/2fa/check");
            const msg = {
              from: '"Ibrahim Website"study.ibrahimf.cf@gmail.com',
              to: `${email}`,
              subject: `Auth Check ${username} !`,
              html: `hey ${username} We check now if this email it's your email or not<br>The code is ${authdat}<br>don't share this code with any person<br>${authtext}`
            };
            nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: 'study.ibrahimf.cf@gmail.com',
                pass: 'nmjwsvrakmyfphsj',
              },
              port: 587,
              host: 'smtp.gmail.com',
            }).sendMail(msg, (err) => {
              if (err) {
                return res.render("error/error.html");
              } else {
                fs.readFile('./2FA.json', 'utf-8', function(err, data) {
                  if (err) throw err
                  var arrayOfObjects = JSON.parse(data)
                  arrayOfObjects.email.push({
                    [username]: email
                  })
                  arrayOfObjects.ip.push({
                    [username]: npip
                  })
                  fs.writeFile('./2FA.json', JSON.stringify(arrayOfObjects, null, 2), 'utf-8', function(err) {
                    if (err) throw err
                  })
                })
                res.redirect("/account/2fa/check");
              }
            })
          } else {
            res.render("error/error.html");
          }

        } else {
          res.render("error/error.html");
        }
      });
    } else {
      res.redirect("/");
    }
  });
});
////////////////////////////////////////////////
// 2FA CHECK APP/////////////////////////////////
app.get("/account/2fa/check", (req, res) => {
  loggedIn = req.cookies.loggedIn;
  username = req.cookies.username;
  token = req.cookies.token;
  if (loggedIn == "true") {
    db.list().then(keys => {
      if (keys.includes(token)) {
        randomnum = Math.floor(100000 + Math.random() * 900000);
        var data = fs.readFileSync('2FA.json');
        var acc = JSON.parse(data)
        var ass = acc.auth
        for (var i = 0; i < ass.length; i++) {
          var auth = JSON.stringify(ass[i][username]);
          if (auth != undefined) {
            var authdat = JSON.parse(auth)
          }
        }
        var assverem = acc.veremail
        for (var i = 0; i < assverem.length; i++) {
          var vermails = JSON.stringify(assverem[i][username]);
          if (vermails != undefined) {
            var veremaildat = JSON.parse(vermails)
          }
        }
        var assem = acc.email
        for (var i = 0; i < assem.length; i++) {
          var email = JSON.stringify(assem[i][username]);
          if (email != undefined) {
            var emaildat = JSON.parse(email)
          }
        }
        if (veremaildat != undefined) {
          res.redirect("/account");
        } else {
          if (emaildat !== undefined) {
            res.render("account/2facheck.html", {
              username: username,
              auth: authdat,
              randomnum: randomnum,
              email: emaildat
            })
          } else {
            res.redirect("/account/2fa");
          }
        }
      } else {
        res.redirect("/logout");
      }
    });
  } else {
    res.render("loginsignup/notloggedin.html");
  }
});
app.get("/account/2facheck.html", (req, res) => {
  res.redirect("/account/2fa/check");
});

app.post("/editemail", (req, res) => {
  var username = req.cookies.username;
  var data = fs.readFileSync('2FA.json');
  var acc = JSON.parse(data)
  var assem = acc.email
  for (var i = 0; i < assem.length; i++) {
    var emails = JSON.stringify(assem[i][username]);
    if (emails != undefined) {
      var emaildat = JSON.parse(emails)
    }
  }
  var ass = acc.auth
  for (var i = 0; i < ass.length; i++) {
    var auth = JSON.stringify(ass[i][username]);
    if (auth != undefined) {
      var authdat = JSON.parse(auth)
    }
  }
  if (emaildat != null) {
    var index = assem.findIndex(obj => obj[username] == emaildat);
  }
  if (authdat != null) {
    var indexauth = ass.findIndex(obj => obj[username] == authdat);
  }
  fs.readFile("./2FA.json", (err, data) => {
    let json = JSON.parse(data);

    if (index != null) {
      json.email.splice(index, 1);
    }
    if (indexauth != null) {
      json.auth.splice(indexauth, 1);
      json.auth.push({
        [username]: Math.floor(100000 + Math.random() * 900000)
      })
    }
    fs.writeFile("./2FA.json", JSON.stringify(json, null, 2), function(err) {
      if (err) {
        return res.render("error/error.html");
      }

    });
  });
  res.redirect("/account/2fa");
});
app.post("/editemailhome", (req, res) => {
  var username = req.cookies.username;
  var con_pass = req.body.confirm_password;
  var data = fs.readFileSync('2FA.json');
  var acc = JSON.parse(data)


  var asspas = acc.password
  for (var i = 0; i < asspas.length; i++) {
    var passworddat = JSON.stringify(asspas[i][username]);
    if (passworddat != undefined) {
      var password = JSON.parse(passworddat)
    }
  }
  var ass = acc.auth
  for (var i = 0; i < ass.length; i++) {
    var auth = JSON.stringify(ass[i][username]);
    if (auth != undefined) {
      var authdat = JSON.parse(auth)
    }
  }
  var assem = acc.email
  for (var i = 0; i < assem.length; i++) {
    var emails = JSON.stringify(assem[i][username]);
    if (emails != undefined) {
      var emaildat = JSON.parse(emails)
    }
  }
  var assverem = acc.veremail
  for (var i = 0; i < assverem.length; i++) {
    var veremails = JSON.stringify(assverem[i][username]);
    if (veremails != undefined) {
      var veremaildat = JSON.parse(veremails)
    }
  }
  if (con_pass == password) {
    if (emaildat != null) {
      var index = assem.findIndex(obj => obj[username] == emaildat);
    }
    if (authdat != null) {
      var indexauth = ass.findIndex(obj => obj[username] == authdat);
    }
    if (veremaildat != null) {
      var indexveremail = assverem.findIndex(obj => obj[username] == veremaildat);
    }
    fs.readFile("./2FA.json", (err, data) => {
      let json = JSON.parse(data);

      if (index != null) {
        json.email.splice(index, 1);
      }
      if (indexveremail != null) {
        json.veremail.splice(indexveremail, 1);
      }
      if (indexauth != null) {
        json.auth.splice(indexauth, 1);
        json.auth.push({
          [username]: Math.floor(100000 + Math.random() * 900000)
        })
      }

      fs.writeFile("./2FA.json", JSON.stringify(json, null, 2), function(err) {
        if (err) {
          return res.render("error/error.html");
        }

      });
    });
    res.redirect("/account/2fa");
  } else {
    res.render("error/error-password-in-email.html", {
      username,
      email: emaildat,
      system: "alert-danger",
      name_system: "Error !",
      error: `Password incorrect!`

    });
  }
});
app.post("/resendagain", (req, res) => {
  var username = req.cookies.username;
  var data = fs.readFileSync('2FA.json');
  var acc = JSON.parse(data)
  var ass = acc.auth
  for (var i = 0; i < ass.length; i++) {
    var auth = JSON.stringify(ass[i][username]);
    if (auth != undefined) {
      var authdat = JSON.parse(auth)
    }
  }
  var assem = acc.email
  for (var i = 0; i < assem.length; i++) {
    var emails = JSON.stringify(assem[i][username]);
    if (emails != undefined) {
      var emaildat = JSON.parse(emails)
    }
  }

  if (emaildat != undefined) {
    authtex = "back to website";
    let authtext = authtex.link("https://study.ibrahimf.cf/account/2fa/check");
    const msg = {
      from: '"Ibrahim Website"study.ibrahimf.cf@gmail.com',
      to: `${emaildat}`,
      subject: `Resend Auth Check again ${username} !`,
      html: `hey ${username} We check now if this email it's your email or not<br>The code is ${authdat}<br>don't share this code with any person<br>${authtext}`
    };
    nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'study.ibrahimf.cf@gmail.com',
        pass: 'nmjwsvrakmyfphsj',
      },
      port: 587,
      host: 'smtp.gmail.com',
    }).sendMail(msg, (err) => {
      if (err) {
        res.render("error/error.html")

      } else {
        res.redirect("/account/2fa/check");

      }
    })
  } else {
    res.render("error/error.html");
  }

}
);
app.post("/emailcheck", (req, res) => {
  username = req.cookies.username;
  var butauth = req.body.butauth;
  var data = fs.readFileSync('2FA.json');
  var acc = JSON.parse(data)
  var ass = acc.auth
  var assem = acc.email

  for (var i = 0; i < assem.length; i++) {
    var email = JSON.stringify(assem[i][username]);
    if (email != undefined) {
      var emaildat = JSON.parse(email)
    }
  }

  for (var i = 0; i < ass.length; i++) {
    var auth = JSON.stringify(ass[i][username]);
    if (auth != undefined) {
      var authdat = JSON.parse(auth)
    }
  }
  var assverem = acc.veremail
  for (var i = 0; i < assverem.length; i++) {
    var vermails = JSON.stringify(assverem[i][username]);
    if (vermails != undefined) {
      var veremaildat = JSON.parse(vermails)
    }
  }
  if (butauth == authdat) {
    if (veremaildat == undefined) {
      const msgg = {
        from: '"Ibrahim Website"study.ibrahimf.cf@gmail.com',
        to: `${emaildat}`,
        subject: `Done Auth Check ${username} !`,
        text: `hey ${username} We Done check now if this email it's your email or not \nTerms and conditions apply`
      };
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: 'study.ibrahimf.cf@gmail.com',
          pass: 'nmjwsvrakmyfphsj',
        },
        port: 587,
        host: 'smtp.gmail.com',
      }).sendMail(msgg, (err) => {
        if (err) {

          res.render(`error/error.html`)
        } else {
          if (veremaildat == undefined) {
            res.redirect("/account");
            if (authdat != null) {
              var indexauth = ass.findIndex(obj => obj[username] == authdat);
            }
            fs.readFile('./2FA.json', 'utf-8', function(err, data) {
              if (err) throw err
              var arrayOfObjectss = JSON.parse(data)
              arrayOfObjectss.veremail.push({
                [username]: emaildat
              })
              if (indexauth != null) {
                arrayOfObjectss.auth.splice(indexauth, 1);
                arrayOfObjectss.auth.push({
                  [username]: Math.floor(100000 + Math.random() * 900000)
                })
              }
              fs.writeFile('./2FA.json', JSON.stringify(arrayOfObjectss, null, 2), 'utf-8', function(err) {
                if (err) throw err
              })
            })
            res.cookie("email", emaildat);
          }
        }
      }
      )
    } else {
      res.redirect("/account/2fa");
    }
  } else {
    res.render("error/error.html")
  }

});

// edit password home
app.post('/change-password-account', function(req, res) {
  var username = req.cookies.username;
  var token = req.cookies.token;
  var edit_password = req.body.new_password;
  var passw = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"


  var data = fs.readFileSync('2FA.json');
  var acc = JSON.parse(data)
  var ass = acc.password
  for (var i = 0; i < ass.length; i++) {
    var passworddat = JSON.stringify(ass[i][username]);
    if (passworddat != undefined) {
      var password = JSON.parse(passworddat)
    }
  }


  var assverem = acc.veremail
  for (var i = 0; i < assverem.length; i++) {
    var veremail = JSON.stringify(assverem[i][username]);
    if (veremail != undefined) {
      var veremaildat = JSON.parse(veremail)
    }
  }
  if (password != null) {
    var passwordin = ass.findIndex(obj => obj[username] == password);
  }


  db.list().then(keys => {
    if (keys.includes(token)) {
      db.get(token).then(value => {
        if (password == value) {
          if (edit_password == null || edit_password == undefined || edit_password == '') {
            res.render("error/error-password.html", {
              username: username,
              email: veremaildat,
              system: "alert-danger",
              name_system: "Error !",
              error: "Newpassword is Empty !"
            })
          } else {
            if (edit_password == password) {
              res.render("error/error-password.html", {
                username: username,
                email: veremaildat,
                system: "alert-danger",
                name_system: "Error !",
                error: "Newpassword is equal lastpassword !"
              })
            } else {
              if (edit_password.split(' ').join('') != edit_password) {
                res.render("error/error-password.html", {
                  username: username,
                  email: veremaildat,
                  system: "alert-danger",
                  name_system: "Error !",
                  error: "Must Newpassword didn't have a spaces."
                })
              } else {
                if (edit_password.length <= 8 || edit_password.match(passw)) {
                  res.render("error/error-password.html", {
                    username: username,
                    email: veremaildat,
                    system: "alert-danger",
                    name_system: "Error !",
                    error: "Must Newpassword at least one number and one uppercase and lowercase letter, and at least 8 or more characters."
                  })
                } else {

                  fs.readFile("./2FA.json", (err, data) => {
                    let json = JSON.parse(data);
                    if (passwordin != null) {
                      json.password.splice(passwordin, 1);
                      json.password.push({
                        [username]: edit_password
                      })
                    }
                    fs.writeFile("./2FA.json", JSON.stringify(json, null, 2), function(err) {
                      if (err) {
                        return res.render("error/error.html");
                      }
                    });
                  })

                  res.render("error/error-password.html", {
                    username: username,
                    email: veremaildat,
                    system: "alert-success",
                    name_system: "Done !",
                    error: `Change Password From **${password}** to **${edit_password}** !`
                  })

                  db.delete(token, password)
                  db.delete(username, password)

                  db.set(username, edit_password)
                  db.set(token, edit_password)

                }
              }
            }
          }
        } else {
          res.render("error/error.html")

        }
      })
    } else {
      res.render("error/error.html")

    }
  })

})
// redirect errors to home page
app.get('/error/error.html', function(req, res) {
  res.redirect('/')
})

app.get('/error/error-password.html', function(req, res) {
  res.redirect('/')
})
////////////////////////////////////////////////
// chat APP/////////////////////////////////

var chats = [];
var socketList = {};
var guests = 0;
var io = require('socket.io')(serv, {});
var d = new Date();

io.sockets.on('connection', socket => {
  if (!chats.length)
    getChats();
  emitChats();
  socket.color = getRandomColor();

  socket.on('name', name => {
    refreshTime();
    name = encode(name);
    socketList[socket.id] = socket;
    if (name == 'Guest') {
      socket.name = name + ' ' + guests;
      guests++;
    } else socket.name = name;
    chats.push({
      message:
        '<span class="name" style="color:' +
        socket.color +
        '">' +
        socket.name +
        '</span><span class="green"> joined.</span>',
      time: d.getTime()
    });
    emitChats();
    emitWho();
    saveChats();
  });

  socket.on('message', message => {
    refreshTime();
    if (message.length > 100) return;
    message = encode(message);
    chats.push({
      message:
        '<span class="name" style="color:' +
        socket.color +
        '">' +
        socket.name +
        '</span>: <span class="message-content">' +
        message + '</span>',
      time: d.getTime(),
      socketId: socket.id,
      id: Math.random()
    });
    emitChats();
    saveChats();
  });
  socket.on('delete', id => {
    for (var i in chats) {
      if (chats[i].id == id) {
        chats.splice(i, 1);
        break;
      }
    }
    emitChats();
  });
  socket.on('disconnect', () => {
    refreshTime();
    if (socketList[socket.id]) {
      chats.push({
        message:
          '<span class="name" style="color:' +
          socket.color +
          '">' +
          socket.name +
          '</span> <span class="red"> left.</span>',
        time: d.getTime()
      });
      emitChats();
      delete socketList[socket.id];
    }
    saveChats();
    emitWho();
  });
});
setInterval(() => {
  refreshTime();
  emitChats();
}, 10000);
function refreshTime() {
  d = new Date();
  io.sockets.emit('time', d.getTime());
}
function emitWho() {
  for (var j in socketList) {
    var pack = [];
    for (var i in socketList) {
      if (j == i) {
        pack.push({
          name: socketList[i].name + ' (You)',
          color: socketList[i].color
        });
      } else {
        pack.push({ name: socketList[i].name, color: socketList[i].color });
      }
    }
    socketList[j].emit('who', pack);
  }
}
function emitChats() {
  for (var i in socketList) {
    var pack = chats.map(c => {
      if (c.socketId != i) {
        return { message: c.message, time: c.time };
      }
      else {
        return c;
      }
    });
    socketList[i].emit('chats', pack);
  }
}
function saveChats() {
  var chatsStr = chats.map(e => e.message + "\n" + e.time).join("\n\n");
  fs.writeFile('chats.txt', chatsStr, function(err) {
    if (err) {
      return res.render("error/error.html");
    }
  });
}

function getChats() {
  fs.readFile('chats.txt', 'utf8', function(err, data) {
    if (err) {
      return res.render("error/error.html");
    }
    if (data.length)
      chats = data.split('\n\n').map(e =>
        ({ message: e.split("\n")[0], time: e.split("\n")[1] })
      );
  });
}
function encode(txt) {
  return txt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 14)];
  }
  return color;
}

////////////////////////////////////////////////
// ANOTHOR APP/////////////////////////////////
app.use(express.static(__dirname + "/views"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/404.html")
});

serv.listen(3000, () => {
  // console.log("Website_Online");
});
