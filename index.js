const userName = prompt("What's your name?");
console.log(userName)

if (userName) {
alert(`Hello, ${userName}! How are you?`);
} 

else {
alert("Error: Please enter your name.");
}