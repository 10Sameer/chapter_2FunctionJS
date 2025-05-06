// Used to create a loop...forEach is used for that

//IMPORTANT IN INTERVIEW
// ForEach method is called higher order method or higher order method
// higher order func in js is func that either takes another func as parameters inside them or return another function as a output

//{ arr.forEach(CallBackFunction)}

// Call function is a function passed as an argument to another Function

//There are 3 parameters in ForEach (return type, index, array);

// Example of ForEach Function

{
let array = [1,2,3,4,5];
array.forEach((value) =>{
    console.log(value);
});
}

// For string data
{
    let name = ['Sameer','sam','hero','zero','piro'];
    name.forEach((names) => {
        console.log(names);
    });
}

// For Changing to upper and lower case
{
    let bike = ['Fz','nx200','duke','ns','bullet','java','honda'];
    bike.forEach((bikes) => {
        console.log(bikes.toUpperCase());

    });
}

// Now giving index to the printed items 
{
    let city =['ktm','Pokhara','dharan','sailung','lalitpur','pharping','kirtipur'];
    city.forEach((name,index) => {
       console.log(name.toUpperCase(),index)
    });
}


// Ques for given array of numbers print the square of each value uisng the forEach method
{
    let array = [1,2,3,4,5];
    let arr = [11,22,33,44,55];
    array.forEach((square,index) => {
        console.log(`The square is ${square *square}`, index)
    });

    console.log("NEW");

    arr.forEach((arr,index) => {
        console.log(`The square is ${arr *arr}`, index)
    });
}