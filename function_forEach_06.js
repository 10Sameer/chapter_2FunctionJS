// Used to create a loop...forEach is used fot that

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