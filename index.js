// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a)); //False
console.log(Array.isArray(b)); //True


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
a[0] = a[0] * 2;
a[1] = a[1] * 2;
a[2] = a[2] * 2;
a[3] = a[3] * 2;
a[4] = a[4] * 2;
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors[0] + " " + colors[1] + " " + colors[2] + " " + colors[3]);
// case 2 output: 'Red+Green+White+Black'
console.log(colors[0] + "+" + colors[1] + "+" + colors[2] + "+" + colors[3]);
// case 3 output: 'Red,Green,White,Black'
console.log(colors[0] + "," + colors[1] + "," + colors[2] + "," + colors[3]);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
sorted = a.sort( 
			function (a,b) {
			return b - a;
			}
		);

console.log(sorted);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var max_occurance = 1;
var occured = 0;
var value;

for (var i = 0; i < a.length; i++) {

	for(var j = i; j < a.length; j++) {

		if (a[i] == a[j]) {
			occured++;
		}

		if (max_occurance < occured) {
			max_occurance = occured;
			value = a[i];
		}

	}

 occured= 0;

}

console.log(value);