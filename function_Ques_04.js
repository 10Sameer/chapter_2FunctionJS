// Question

// 1. Create a function greetUser(name) that prints "Hello, [name]!".
{
    function greetUser(name){
        console.log("Hello, " + name);
    }

    greetUser("Sameer Bhandari");
    greetUser(); // undefined To solve we will run into Ques 2
}


// 2. Modified form of 1 
{
    function greet(name="Hello", lastName="User"){
        console.log(`Welcome!!! ${name} ${lastName}`);
    }

    greet("Sameer","Bhandari");
    greet();
}

// 3. Finding odd or even
{
    function EvenOdd(n){
       if(n%2==0){
        console.log(`${n} is Even Number`)
       } else{
        console.log(`${n} is Odd Number`)
       }
      
    }

    EvenOdd(5);
    EvenOdd(2);
    EvenOdd(68767676876786876767867676);
    EvenOdd(5757575);
}

// 4. Write a function square(num) that returns the square of the number.
{
    function square(num){
        console.log(`The Square of ${num} is ${num*num}`)
    }

    square(2);
    square(10)
}

// 4. Write a function square(num) that returns the square of the number.
{
    function Cube(num){
        console.log(`The Cube of ${num} is ${num*num*num}`)
    }

   Cube(2);
    Cube(10)
}

// 5.Create a function factorial(n) that returns the factorial of a number (e.g., factorial(5) returns 120).
{
    function fac(n){
        let res = 1;
        for(let i = 1 ; i <= n ; i ++){
             res *= i;
            }
        console.log(`The fac is ${n} is ${res}`) ;
        return res ;
    }
    
    fac(5);

}