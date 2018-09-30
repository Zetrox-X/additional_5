module.exports = function check(str, bracketsConfig) {
 
  let ram = [];
  let sk = {
    '(' : ')',
    '[' : ']',
    '{' : '}',
    '|' : '|',
    '1' : '2',
    '3' : '4',
    '5' : '6',
    '7' : '7',
    '8' : '8'
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '[' || str[i] === '{'|| str[i] === '1' || str[i] === '3' || str[i] === '5') { 
      ram.push(str[i]);
    }
    else {     
      if (str[i] === '|' || str[i] === '7' || str[i] === '8') { 
        if (ram.length == 0) ram.push(str[i]);
        else {
          let last = ram.pop();
          if (last !== str[i]) {
            ram.push(last);       
            ram.push(str[i]);
          }
        }
      }
      else
        if (str[i] !== sk[ram.pop()]) return false;
    }
  }
  if (ram.length > 0) {return false};
  return true;
}