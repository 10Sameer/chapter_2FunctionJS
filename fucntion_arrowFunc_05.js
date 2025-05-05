// Arrow function is the same way of wrtting Function but using arrow method 

// Syntax 
const newFunction = (a,b) => {
    // perform some function 
    console.log(`The sum of ${a} and ${b} = ${a+b} `) ;
}
 
 newFunction(5,5);
 newFunction(5,5);

 
 // Multiplication
 {
    const multiply = (a,b,c) => {
        console.log(`The multiplication ${a} * ${b} * ${c} = ${a*b*c} `)
    };
    
    multiply(2,2,2);
 }

 // Create a function using a function keyword that takes a string as an arguments and returns the number of vowels in the string

 {
    function countVowels(str){
        let count = 0 ;
        for (const char of str)

        if(char==="a","A" ||
           char==="e","E" || 
           char==="i","I" ||
           char==="o","O" ||
           char==="u","U"){
            count ++ ;
        }

        console.log(`The numbers of vowels in ${str} are ${count}`)
       
    }
    countVowels("Sameer");
    countVowels("Aa");
    countVowels("AEIOU");
    
 }
 

 // if (char != "a")