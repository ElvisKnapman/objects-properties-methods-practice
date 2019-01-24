let name = 'Elvis';

// Get character length of string
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method (returns true or false if a certain string is found within a string)
console.log(name.includes('Elvis'));

// Trim method trims all whitespace from the beginning and end of a string
name = '     Elvis    ';  
console.log(name);
console.log(name.trim());

// Function to check password against certain conditions
function isValidPassword(password) {
    // Return true if password is longer than 8 characters and does NOT contain the word 'password'
    if (password.length > 8 && !password.includes('password')) {
        return true;
    }    
    return false;
}

console.log(isValidPassword('elvispassword'));
console.log(isValidPassword('abc123'));
console.log(isValidPassword('elvisknapman'));


