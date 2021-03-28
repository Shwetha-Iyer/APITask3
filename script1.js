console.log("Annonymous function and IIFE");
console.log("Print odd numbers in an array");
//print odd numbers in an array
(function (data){
    var result = data.filter((values) => {
        if(values%2===1)
        return values;
    })
    console.log(result.join(" "));// 1,3,5,7,9
})([1,2,3,4,5,6,7,8,9,10]);

console.log("==========================");

console.log("Convert all strings to title caps");
//convert all strings to Upper Case
(function (data){
    var result = data.map((values) => {
        var out="";
        out=values.charAt(0).toUpperCase()+values.substring(1,values.length);
        return out;
    })
    console.log(result.join(" ")); 
})(["abc","bcd","cde","def"]);

console.log("==========================");

console.log("Sum of all numbers in an array");
//print sum of all numbers
var arr = [4,7,2,8,4,35,5];
(function (data){
    var result = data.reduce((accum,values) => accum+values);
    console.log(result); //65
})([4,7,2,8,4,35,5]);

console.log("==========================");

console.log("Return all prime numbers in an array");
//print prime numbers in an array
(function (data){
    var result = data.filter((values) => {
        if(values < 2) return false;
        if(values%2===0) return false;
        if(values === 2) return true;
        for(let num =3; num*num<=values; num+=2){
            if(values%num===0) return false;
        }
        return true;
    });
    console.log(result.join(" ")); // 7,11,31
})([4,7,2,8,4,35,5,11,20,31]);

console.log("==========================");

console.log("Return all Palindromes in an array");
console.log("Number palindrome");
//print all palindrome numbers
(function (data){
    var result = data.filter((num) => {
        var a=num;
        var rem=0,sum=0;
        while (parseInt(num) > 0){
            rem = parseInt(num%10);
            sum = parseInt(sum*10+rem);
            num = parseInt(num/10);
        }
        if(a===sum)
        return a;
    });
    console.log(result.join(" ")); // 121,888,6556
})([121,56,534,888,6556,43,743,64]);

console.log("String Palindrome");
//print all palindrome strings
(function (data){
    var result = data.filter((value) => {
        var check="";
        for(var i=value.length-1; i>=0;i--){
            check+=value.charAt(i);
        }
        if(check===value)
        return value;
    });
    console.log(result.join(" ")); // anna,malayalam,hahahah
})(["hello", "anna", "malayalam", "bow", "hahahah"]);

console.log("==========================");

console.log("Return median of 2 sorted array of same size");
//print median of 2 sorted array
(function (data1,data2){
    var result = [];
    for(var i=0;i<data1.length;i++){
        result.push(data1[i]);
        result.push(data2[i]);
    }
    result = result.sort(function(a,b){return a-b;});       console.log(((parseInt(result[result.length/2]))+(parseInt(result[(result.length/2)-1])))/2);
})([45,24,14,6,2,64,234],[653,35,76,453,97,23,5]); //40

console.log("==========================");

console.log("Remove the duplicates from an array");
//remove duplicate elements
(function (data){
    var result = arr.filter((value, index) => arr.indexOf(value)===index);
    console.log(result.join(" ")); // 1, 4, 2, 5, 6, 7, 8, 3
})([1,4,2,4,2,5,6,2,7,8,5,3,7,6,2,6,8,1]);

console.log("==========================");

console.log("Rotate an array by k times and return the rotate array");

// rotate array k times

(function (data, k){
    var result = [];
    result.push(...data.splice(0+k,data.length));
    result.push(...data.splice(0,k));
    console.log(result.join(" ")); //5, 6, 7, 8, 9, 10, 1, 2, 3, 4
})([1,2,3,4,5,6,7,8,9,10],4);
