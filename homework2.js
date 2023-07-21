// //1. Given a string. Check whether the string is palindrome or not.

function checkPalindrome(str) {
   
    let strLen = str.length
    for (let i = 0; i < strLen / 2; i++) {  
  
        if (str[i] !== str[strLen - 1 - i]) {  
                    return 'No'
                }
            }    
         return 'Yes'
        }
        console.log(checkPalindrome('racecar'))


// 2. Given a string and symbols. Change first symbol by the second one in the string.

function symbolsChange(str, sym1, sym2) {
    let res = ''
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === sym1) {
            res += sym2
        } else {
            res += str.charAt(i)
        }
        
    }
    return res
}

console.log(symbolsChange('does the following code', 'o', '0'))

// 3.Print the following number pattern (write a function)

function pyramid() {
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let k = 1; k <= i; k++) {
    string += k;
  }
  string += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  for (let k = 1; k <= n - i; k++) {
    string += k;
  }
  string += "\n";
}
return string
}
console.log(pyramid())


//6. Print following pattern (write a function)
//* * * * *
//* * * * *
//* * * * *
function pattern(height, width) {
    for (let i = 0; i < height; i++) {
      let row = '';
      for (let j = 0; j < width; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  pattern(3, 5);
