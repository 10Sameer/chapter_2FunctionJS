// now we will be using functions to add multiply number
{
    function Sum(a,b) {
        console.log(`The sum of ${a} and ${b} = ` + `${a + b}`);
    }
    Sum(10,4);
    Sum(10,10);
}


// Ex 2 
{
    function Sum(a,b,c){
        console.log("The sum of " + a + " and " +b + " and " + c + " = " , a + b + c )
        // The best method is to used Template string to print
        console.log(`The sum of ${b} + ${c} + ${a} = ` + `${b+c+a}`)
    }

    Sum(1,1,1);
    Sum(40,10,10);
}

// ex 3
{
    function multiply(a,b,c){
        console.log("a * b * c =" , a*b*c)
    }
    multiply(2,2,2);
}