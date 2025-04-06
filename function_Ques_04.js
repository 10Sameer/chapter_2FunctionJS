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