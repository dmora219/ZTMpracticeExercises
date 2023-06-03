let myObject = [
   {
      username: "dmora14633",
      password: "dmora101",
   },
   {
      username: "emo",
      password: "ra101",
   },
   {
      username: "joga",
      password: "dmora1",
   }
]
let newsFeed = [
   {
      username: "dmora14633",
      newsfeed: "hello yall",
   },
   {
      username: "emo",
      newsfeed: "fuck you",
   },
   {
      username: "joga",
      newsfeed: "fuck emo",
   }
]

let pass = prompt("enter password");
let user = prompt("enter username");




function validUser(username, password) {
   for (let i = 0; i < myObject.length; i++){
      if (myObject[i].username === username && myObject[i].password === password) {
         return true
      }
   }
   return false;
}

function signIn(username, password) {
   if (validUser(username, password)) {
      console.log(newsFeed)
   } else {
      alert('wrong password')
   }
}
signIn(user, pass);