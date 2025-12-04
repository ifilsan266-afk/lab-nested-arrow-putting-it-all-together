function createLoginTracker(userInfo) {
    let passwordAttempts = 0;
    const maxAttempts = 3;
    
    return (passwordInput) => {
        passwordAttempts++;
        
        if (passwordAttempts > maxAttempts) {
            return "Account locked due to too many incorrect password attempts";
        }
        
        if (passwordInput === userInfo.password) {
            return "Login successful";
        } else {
            const remaining = maxAttempts - passwordAttempts;
            return 'login failed.${remaining} attempt(s) remaining.';
        }
    };
}

// Test
const user = { username: "john", password: "password123" };
const login = createLoginTracker(user);

console.log(login("wrong")); // Login failed. 2 attempt(s) remaining.
console.log(login("wrong")); // Login failed. 1 attempt(s) remaining.
console.log(login("wrong")); // Account locked due to too many incorrect password attempts
console.log(login("password123")); // Account locked due to too many incorrect password attempts




