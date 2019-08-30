let message = 'Hello JavaScript';
alert(message);
message = 'Nice to see you';
alert(message);

const userAge = parseInt(prompt('Enter your age'));
alert('Your are age is ' + userAge);

const nextAge = addOne(userAge);
alert('Next year your will be ' + nextAge);

if (userAge >= 18 && userAge < 65) {
    alert('You are adult')
} else if ('user age >=65'){
    alert('You are retired')
} else{
    alert('You are kid')
}

fanction addOne(value){
    const newValue = value + 1;
    return newValue;
}