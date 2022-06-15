var str =
  "Javed Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla eos fuga vel numquam, aliquam aut sequi neque magnam rem, esse suscipit ex sunt itaque ducimus architecto, magni pariatur. Nihil, officia, accusamus a accusantium nostrum quibusdam aliquam sed vero aliquid fugit temporibus sit facere est delectus ut quasi animi laborum nobis expedita, repellendus vitae beatae at. Sint, laborum nobis pariatur corporis voluptas minima quis non illo hic dolorem soluta molestiae adipisci reiciendis nemo id cumque ratione repellat. Ea quae, alias vel neque nulla excepturi omnis hic. Laboriosam suscipit vel nihil laudantium adipisci error natus, in eligendi ex quis nostrum numquam at?.";

// this expression is case sensitive so false
var regex = /javed/;
// this expression is not case sensitive so true
var regex1 = /javed/i;
console.log(regex.test(str));
console.log(regex1.test(str));

// to find the word at the begining
var regex2 = /^javed/i;
console.log(regex2.test(str));

// to find the word at the end
var regex3 = /javed$/;
console.log(regex3.test(str));

// to find the '.' in the str
var regex4 = /\.$/;
console.log(regex4.test(str));

// the '.' means any character in an string
var str2 = "this";
var regex5 = /./;
console.log("dot means any char==========>", regex5.test(str2));

var regex6 = /lorem \^Javed/i;
console.log(regex6.test(str));
var nr = new RegExp("Javed");
console.log(nr.test(str));

// an universal regex
var regex7 = /[.*+?^${}()|[\]\\]/g;
console.log(regex7.test(str));

/*
exec() 	Executes a search for a match in a string. It returns an array of information or null on a mismatch.
test() 	Tests for a match in a string. It returns true or false.
match() 	Returns an array containing all of the matches, including capturing groups, or null if no match is found.
matchAll() 	Returns an iterator containing all of the matches, including capturing groups.
search() 	Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
replace() 	Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
replaceAll() 	Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
split() 	Uses a regular expression or a fixed string to break a string into an array of substrings.
*/

/*
When you want to know whether a pattern is found in a string, use the test() or search() methods; for more information (but slower execution) use the exec() or match() methods. If you use exec() or match() and if the match succeeds, these methods return an array and update properties of the associated regular expression object and also of the predefined regular expression object, RegExp. If the match fails, the exec() method returns null (which coerces to false). 
*/

/*
d 	Generate indices for substring matches. 	RegExp.prototype.hasIndices
g 	Global search. 	RegExp.prototype.global
i 	Case-insensitive search. 	RegExp.prototype.ignoreCase
m 	Multi-line search. 	RegExp.prototype.multiline
s 	Allows . to match newline characters. 	RegExp.prototype.dotAll
u 	"unicode"; treat a pattern as a sequence of unicode code points. 	RegExp.prototype.unicode
y 	Perform a "sticky" search that matches starting at the current position in the target string. See sticky. 	RegExp.prototype.sticky
*/

/*
\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline
*/

var arr = "hi i am david, ";
