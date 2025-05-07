// MAP Method is similar method to forEach Method ...It is used to access to all the elements of an array 

// The main diff between MAP and ForEAch is that MAP creates a new array with the results of some operation ....The value its callback returns are used to form a new array

// Three parameters can be used (value,index,Array)

// Example 
{
    let num = [10,20,30];
    let newArr = num.map((mul) => {
        return mul * mul ;
    });

    console.log(newArr);
    console.log(num);
}


// Another Method FILTER METHOD 

// used to filter Elements as per conditions 
{
    let num = [2,5,4,9,8];
    let newArr = num.filter((even) => {
        return even % 2 == 0 ;
    });
    console.log(`The original number is ${num}`);
    console.log(`The even numbers are ${newArr}`);
  
}
// used to filter Elements as per conditions 
{
    let num = [2,5,4,9,8];
    let newArr = num.filter((odd) => {
        return odd % 2 !== 0 ;
    });
    console.log(`The original number is ${num} `);
    console.log(`The odd numbers are ${newArr}` );
  
}