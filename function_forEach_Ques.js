// Now we are solving some problem to be clear of FOREACH loop

// 1 let fruits = ["apple", "banana", "cherry"]; printing this 
{
    let fruits = ["apple", "banana", "cherry"];
     fruits.forEach((Juicy) => {
     console.log(`The names of the fruits are ${Juicy}`)
     console.log(`The names of the fruits are ${Juicy}`.toUpperCase());
    });
}

// 2. let colors = ["red", "green", "blue"]; Print the index
{
    let colors = ["red", "green", "blue"];
    colors.forEach((color,index) => {
    console.log( "INDEX " + index +": " , "The colors are " , color)
    });
}

// 3. let numbers = [10, 20, 30, 40];
{
    let numbers = [10, 20, 30, 40];
    numbers.forEach((num) => {
    console.log(`The sum of numbers ${num} = ${num + num}`)
    });
}

