let string1 = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-------!@£$%^&*()    _+? /, .;' \[]`;
let animals = 'cat dog lion';
	
// console.log('match all characters a through z', string1.match(/[a-z]/g));  // match all characters a through z 
// console.log('match all characters a through z as one match', string1.match(/[a-z]*/g));  // match all characters a through z 
// console.log('match all numbers 0 through 9 as one match zero or more times', string1.match(/[0-9]*/g));  
// console.log('match all numbers 0 through 9 as one match one or more times', string1.match(/[0-9]+/g));  + 
// console.log('match with OR ', animals.match(/bird|cat|dog|lion/g));  // match all digits 
// console.log('match all digits ', string1.match(/\d/g));  // match all digits 
// console.log('match everything except digits', string1.match(/\D/g));  // match everything except digits 
// console.log('match everything except special characters', string1.match(/\w/g));  // match everything except digits 

let string3 = 'hello how are you?' 
// console.log('match and replace ', string3.replace(/ /g, "_"));  // match the spaces in the string and replace with _

let html_element = `<p>Paragraph 1</p><p>Paragraph 2</p><p>Paragraph 3</p><p>Paragraph 4</p>`;
// console.log('Match everything between EACH Paragraph tag ', html_element.match(/<p>.*?<\/p>/g));  // returns array of matches with help form ?
// console.log('Match Everything between Paragraph tag', html_element.match(/<p>.*<\/p>/g));  // returns one long match 

let websites = 'http://website.com https://website2.com';
// console.log('match with both http https websites ', websites.match(/^https?:\/\/(.*)/g));  // match the spaces in the string and replace with _

// var re = new RegExp("^(http|https)://", "i");
// var str = "My String";
// var match = re.test(str); // false
// var match = re.test("http://website.com"); // true

// console.log('match with https and http website domains ', websites.match(/^https?:\/\/(.*)/g));  // match the spaces in the string and replace with _
// console.log('match with https and http website domains ', websites.match(/https?:\/\/.*/g));  // match the spaces in the string and replace with _


let numbersFive = "555555555555555";

// console.log('Match 5 five times', numbersFive.match(/5{5}/g)); // returns [ '55555', '55555', '55555' ]
console.log('Match 5 five times', numbersFive.match(/5{2,5}?/g)); // returns [ '55555', '55555', '55555' ]
console.log('Match 5 two times each', numbersFive.match(/5{2,5}?/g)); // returns [ '55', '55', '55', '55', '55', '55', '55' ]

let hello = "Hello";
hello.match(/\w{3}/g) // ['hel']
hello.match(/\w{5}/g) // ['hello']
"hi there".match(/\w/g) // [ 'h', 'i', 't', 'h', 'e', 'r', 'e' ]
"hi there".match(/\w{2}/g) // [ 'hi', 'th', 'er' ]
"hi there".match(/\w{5}/g) // [ 'there' ]
"hi there".match(/\w{6}/g) // null // cant match 6 as each word is less then 6 characters