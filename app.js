/* 1. Given a year, report if it is a leap year */
    
const isLeapYear = (year) => year % 4 === 0;

/*console.log(isLeapYear(2010));
console.log(isLeapYear(2011));
console.log(isLeapYear(2012));*/

/* 2. Write a JavaScript programme to compare two objects to determine if the first one contains 
   the same properties as the second one. (Which may also have additional properties.)  */

   const compareProperties = (obj1, obj2) => {
   
    const keysArr1 = Object.keys(obj1);
    const keysArr2 = Object.keys(obj2);
    
    for (i = 0; i < keysArr1.length; i ++){
        if(!keysArr2.includes(keysArr1[i])){
            return false;
        }
    }
    return true;
}

    /*const objA = {a:"a", b: "b", c:"c"};
    const objB = {a:"b", b: "c", c:"d"};
    const objC = {b:"a", c: "b", d:"c"};

    console.log(compareProperties(objA, objB));
    console.log(compareProperties(objB, objC));*/

/* 3. Write a JavaScript programme to convert a comma-seperated values string (CSV) into a 2D array.
      A new line indicates a new row in the array. 
      
      Example:
    abc, def, ghi
    jkl, mno, pqr
    stu, vwx, yza
       */

    const str = `abc, def, ghi
    jkl, mno, pqr
    stu, vwx, yza`;

    const make2DArr = (CSV) => CSV.split('\n').map(element => element.split(','));
        
    //console.log(make2DArr(str));

/* 4. Write a JavaScript programme to generate a random hexadecimal color code */

    //function to get random number
     const getRandomNumber = () => Math.floor(Math.random() * hex.length);

     const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    const randomHex = () => {
        let hexCode = '#';

        for (i = 0; i < 6; i++){
            hexCode += hex[getRandomNumber()];
        }

        return hexCode;
    }

    console.log(randomHex());

   

