function createlogintracker(userinfo) {
  let attemptcount =0;
  const maxAttempts=3
  
  
  return function (passwordAttempt)  {
    attemptcount++;

    if (passwordAttempt === userinfo.password && attemptcount <= maxAttempts){
      return  "login successful"
    }
    if (passwordAttempt >= maxAttempts){
        return "account blocked due to incorrect password attempts";
    }
  
    return "login failed"
    
  };
   
}
const user ={username:"user",   password:"234"}
const login =createlogintracker(user);

console.log(login("wrong"));//attempt 1
console.log(login("wrong"));//attempt 2
console.log(login("234"));//attempt3
console.log(login("234"));//account blocked due to inncorrect password attepmt





module.exports = {
  ...(typeof createlogintracker!== 'undefined'&& {createlogintracker})
};