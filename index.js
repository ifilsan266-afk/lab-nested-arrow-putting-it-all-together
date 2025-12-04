function createLoginTracker(userInfo) {
    let attemptCount = 0;
    const maxAttempts = 3;

    return (passwordAttempt) => {

  
        if (attemptCount >= maxAttempts) {
            return "Account locked due to too many failed login attempts";
        }

        
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        
        attemptCount++;

        
        if (attemptCount >= maxAttempts) {
            return "Account locked due to too many failed login attempts";
        }

        return' Attempt ${attemptCount}: Login failed';
    };
}


const user = { username: "testUser", password: "password123" };
const login = createLoginTracker(user);

console.log(login("wrongpassword"));   // Attempt 1
console.log(login("anotherwrong"));    // Attempt 2
console.log(login("password123"));     // Login successful (correct logic)
console.log(login("wrongagain"));      // Attempt 3
console.log(login("password123"));     // Account locked
