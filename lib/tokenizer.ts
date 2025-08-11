

let input = "Hi there! How are you doing today?";
function intToOct(num: number): string {
  return num.toString(8);
}


function stringToToken(input: string): string {
  const inputArray = input.split(' ');
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    let temp="";
    for(let j = 0; j < inputArray[i].length; j++) {
        let ascii_code = inputArray[i].charCodeAt(j);
        let hex_code = intToOct(ascii_code+64);
        temp += hex_code;
    }
    outputArray.push(temp);
  }
  return outputArray.join(' ');
}

function tokenToString(token: string): string {
  const coding = token.split(' ');
  const decodedArray = [];
  for (let i = 0; i < coding.length; i++) {
      let temp = "";
      for (let j = 0; j < coding[i].length; j += 3) {
          let octal_code = coding[i].substr(j, 3);
          let ascii_code = parseInt(octal_code, 8) - 64;
          temp += String.fromCharCode(ascii_code);
      }
      decodedArray.push(temp);
  }
  return decodedArray.join(' ');
}


export {stringToToken, tokenToString }; 
 



