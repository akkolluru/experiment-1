function validate() {
    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Define regular expressions for validation
    const usernameRegex = /^[a-zA-Z0-9]{5,15}$/; // Alphanumeric, 5 to 15 characters
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // At least 1 uppercase, 1 lowercase, 1 number, 8 characters

    // Validate username
    if (username == null || username == "") {
        alert('Username cant be empty');
        return false;
    }
    
    // Validate password
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, and one number.');
        return false;
    }
    
    // If everything is valid
    return true;
}
