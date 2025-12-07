function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const attemptLogin = (passwordAttempt) => {
    attemptCount++;
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }
    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }
    return `Attempt ${attemptCount}: Login failed`;
  };
  return attemptLogin;
}

//example use
const login = createLoginTracker({
  username: "user1",
  password: "pass123"
});

console.log(login("wrong"));  
console.log(login("wrong")); 
console.log(login("pass123"));
console.log(login("wrong")); 
console.log(login("pass123"));



module.exports = {...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};