console.log("Question-1:--");
// Write a program where you need to extract the middle part of the string and converted it to upperacse
var s1="Flowers";
console.log("String is:-",s1);
var s2=s1.slice(1,length-1);
console.log("middle part of the string is:-",s2);
console.log("converted middle part to upperacse:--", s2.toUpperCase());

console.log("Question-2:--");
// Write a program that converts a string to uppercase and then calculates the length of the resulting string.
var a1="beetroot";
console.log("String is:--",a1);
console.log("converting a string to uppercase:-", a1.toUpperCase());
console.log("length of the resulting string is:--", a1.length);

console.log("Question-3:--");
// Write a program that retrieves the character at a specific position in a string, and then finds the ASCII value (character code) of that character.
var a2="divya"
console.log("String is:-",a2);
var b=a2.charAt(3); 
console.log("retriving the character at a specific position in a string:-" , b);
console.log("ASCII value of c harAt(3):--", b.charCodeAt());

console.log("Question-4:--");
// Write a program that removes extra spaces from the start and end of a string, and then slices a portion of the string starting from the second character to the fourth character.
 var a3="  butterfly  ";
console.log("String is:-",a3);
let c=a3.trim();
console.log("removing extra spaces from the start and end of a string:--", c);
console.log("slicing a portion of the string starting from the second character to the fourth character:-", c.slice(1,4));

console.log("Question-5:--");
// Write a program that concatenates two strings where the first string is in its original case and the second string is converted to lowercase before concatenation.
var x1="There"
var x2=" are FLOWERS"
console.log("String1:--",x1);
console.log("String2:--",x2);
let x3=x2.toLowerCase()
console.log("coverting string2 to lowerCase:-",x3);
console.log("concating the string1 and string2:-",x1.concat(x3));

console.log("Question-6:--");
// Write a program that removes leading spaces from a string, and then slices the string starting from the second character to the end.
var h1="   Flower "
console.log("string:--",h1);
let h2=h1.trimStart();
console.log("removed leading spaces from string:-",h2);
console.log("slicing starting from the second character to the end:-",h2.slice(1));

console.log("Question-7:--");
// Write a program that retrieves a specific character from a string and converts it to uppercase.
var p="parrot";
console.log("string:-",p);
let p2=p.charAt(1);
console.log("reteriving a character from a string:-",p2);
console.log("converting char to uppercase:-",p2.toUpperCase());

console.log("Question-8:--");
// Write a program that removes trailing spaces from a string and then concatenates it with another string.
var v1="There     ";
var v2=" are friends";
console.log("string1:-",v1);
console.log("string2:-",v2);
let v3=v1.trimEnd();
console.log("removed trailing spaces from string1:-",v3);
console.log("concatinating the string1 to string2:-",v3.concat(v2));

console.log("Question-9:--");
// Write a program that:
// Trims extra spaces from the start and end of a string.
// Converts the trimmed string to uppercase.
// Extracts a substring from the second character to the fifth character from the uppercase string.
// Example Input:
// let input = "   HelloWorld   ";
let i = "   HelloWorld   ";
console.log("String:--",i);
let j=i.trim();
console.log("Trimed the extra spaces of string:-",j);
let k=j.toUpperCase();
console.log("Converted the trimmed string to uppercase",k);
let l=k.slice(1,5);
console.log("Extracted a substring from the second character to the fifth character from the uppercase string:--",l);

console.log("Question-10:--");
// Write a program that:
// Converts two strings to lowercase.
// Concatenates the two lowercase strings with a space in between.
// Retrieves the first character of the concatenated result.
// Example Input:
// javascript
// Copy code
// let string1 = "HELLO";
// let string2 = "WORLD";

let string1 = "HELLO";
let string2 = "WORLD";
console.log("string1:-",string1);
console.log("string2:-",string2);
let d1=string1.toLowerCase();
let d2=string2.toLowerCase();
console.log("converted string1 to lowercase:-",d1);
console.log("converted string2 to lowercase:-",d2);
let d3=d1.concat(" ",d2);
console.log("concating the 2 lowercase strings:-",d3);
console.log("Retrieves the first character of the concatenated result.",d3.charAt(0));