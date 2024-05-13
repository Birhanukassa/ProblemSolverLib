

/*

Write a function that takes a string and returns an array of the repeated characters (curChars, numbers, whitespace) in the string.

If a charater is repeated more than once, only show it once in the result array.

Characters should be shown by the order of their first repetition. Note that this may be different from the order of first appearance of the character.

Characters are case sensitive.

For F# return a "char list"

given a string, return the repeated char of curChars, numbers, and whitespace.

rules/req
  - explicit
    - output: array
    - the searching char can accept repeated chars and return a single char
  - the chars are case sensitive 

  - implicit 
    - //

1. set a new result array and initialize it with empty array
2. loop the string and save it in the array with each frequency
3. check the frq object if any value is greater than or equal to 2 
  4. push the value to the result array
5. return result array

*/

function remember(str) {
  let fre = {};
  let res = [];

  for (let char = 0; char < str.length; char++) {
    let curChar = str[char];
    fre[curChar] ? fre[curChar]++ : fre[curChar] = 1;

    if (fre[curChar] === 2) {
       res.push(curChar);
    }
  }
  return res;
}


console.log(remember("apple")); // returns ["p"]
console.log(remember("apPle")); // => returns []          
console.log(remember("pippi")); // => returns ["p","i"] // show "p" only once
console.log(remember('Pippi')); // => returns ["p","i"] // "p" is repeated first
console.log(remember("limbojackassin the garden"));




// ==================================================
// ==================================================
// ==================================================
/**
 * ---
created: 2022-09-27T20:50:50 (UTC -05:00)
tags: [codewars,code kata,kata,code gym,coding,code practice,ruby,javascript,coffeescript,web development,software development,dojo]
source: https://www.codewars.com/kata/55a243393fb3e87021000198/solutions/javascript
author: 
---

# JavaScript Solutions for Remember | Codewars

> ## Excerpt
> Codewars is where developers achieve code mastery through challenge. Train on kata in the dojo and reach your highest potential.

---
###### [Vidmas](https://www.codewars.com/users/Vidmas)

```
function remember(str) {  
    return str.split('')
    .filter((item,i,allItems) => i !== allItems.indexOf(item))
    .filter((item,i,allItems) => i === allItems.indexOf(item));
}
```

###### [chris\_w](https://www.codewars.com/users/chris_w)

```
function remember(str) {
  var result = [];
  var counts = {};
  
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    counts[c] = (counts.hasOwnProperty(c) ? counts[c] : 0) + 1;
    
    if (counts[c] === 2) {
      result.push(c);
    }
  }
  
  return result;
}
```

###### [colbydauph](https://www.codewars.com/users/colbydauph)

```
function remember(str){
  return str.split('').reduce(function(a, v, i){
    return (str.slice(0, i).search(v) > -1 && a.indexOf(v) == -1) ? a.concat(v) : a;
  }, []);
}
```

###### [JohanWiltink](https://www.codewars.com/users/JohanWiltink)

```
const remember = s => [ ... new Set( [ ... s ].filter( (v,i) => s.slice(0,i).includes(v) ) ) ] ;
```

###### [a.vadim](https://www.codewars.com/users/a.vadim)

```
const remember = str => {
  let set = new Set(),
      res = new Set();
  for (const char of str) {
    set.has(char) ? res.add(char) : set.add(char);
  }
  return [...res];
}
```

###### [khlivnyuk](https://www.codewars.com/users/khlivnyuk)

```
const remember = text => {
  let seen = new Set();
  let answer = [];
  [...text].forEach(ch => {
    if (seen.has(ch) && !answer.includes(ch)) {
      answer.push(ch);
    }
    seen.add(ch);
  });
  return answer;
};
```

###### [YOSYA](https://www.codewars.com/users/YOSYA)

```
function remember(str) {
  var ans=[];
  for (var i=0; i<str.length; ++i)
  {
    var count=0;
    for (var j=0; j<i; ++j)
      if (str[i]==str[j])
        count++;
    if (count!=0 && ans.indexOf(str[i])==-1)
      ans.push(str[i])
  }
  return ans;
}
```

###### [ooflorent](https://www.codewars.com/users/ooflorent)

```
function remember(str) {
  const seen = new Set()
  const repeats = new Set()
  for (const c of str) {
    if (seen.has(c)) {
      repeats.add(c)
    } else {
      seen.add(c)
    }
  }
  return Array.from(repeats)
}
```

###### [dcieslak](https://www.codewars.com/users/dcieslak)

```
const remember = str => str.split('')
      .reduce((s,n,i)=>
            s.concat( str.indexOf(n) != i && 
                      !s.includes(n)  ? [n] : [] ),
              [])
```

###### [arhigod](https://www.codewars.com/users/arhigod)

```
function remember(s) {
  let a=[];
  [...s].forEach((x,i,z)=>!a.includes(x)&&z.indexOf(x)!=i?a.push(x):null)
  return a;
}
```

###### [thecygnus](https://www.codewars.com/users/thecygnus)

```
function remember(str) {
  let clones = new Set();
  let letters = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(`[${letters}]`)) {
      clones.add(str[i]);
    }
    letters += str[i];
  }
  return [...clones];
}
```

###### [keune](https://www.codewars.com/users/keune)

```
function remember(str) {
  var res = [], stack = [];
  str.split('').map(function(el) {
    if(stack.indexOf(el) > -1 && res.indexOf(el) === -1) res.push(el);
    stack.push(el);
  });
  return res;
}
```

###### [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

```
function remember(str) {
  var seen=[],res=[];
  for (var i=0;i<str.length;i++){
    if (seen.indexOf(str[i])==-1) seen.push(str[i]);
    else if (res.indexOf(str[i])==-1) res.push(str[i]);
  }
  return res;
}
```

###### [VovaCodes](https://www.codewars.com/users/VovaCodes)

```
const remember = (str) => {
  const map = {};
  const added = {};
  const repeated = [];
  for (let char of str) {
    map[char] ? map[char]++ : (map[char] = 1);
    if (map[char] > 1 && !(char in added)) {
      repeated.push(char);
      added[char] = true;
    }
  }

  return repeated;
};
```

###### [smile67](https://www.codewars.com/users/smile67)

```
function remember(s) {r=[]; t=[]; for(i=0;i<s.length;i++) if (r.indexOf(s[i])>=0) {if(t.indexOf(s[i])<0) t.push(s[i]);} else r.push(s[i]); return t}
```

###### [CrazyMerlyn](https://www.codewars.com/users/CrazyMerlyn)

```
function remember(str) {
  str = str.split("").filter((x, i) => str.indexOf(x) != i);
  return str.filter((x,i) => str.indexOf(x) == i);
}
```

###### [stevepri87](https://www.codewars.com/users/stevepri87)

```
function remember(str) {
 var r = str.split('').filter((a,i)=>{if(i != str.indexOf(a)) return true;});
 return r.filter((a,i)=>{if(i == r.indexOf(a)) return true;});
}
```

###### [dnolan](https://www.codewars.com/users/dnolan)

```
function remember(str) {
  let removed = new Set(),
      remembered = new Set();
  for(c of str) {
    if(removed.has(c)) {
      remembered.add(c);
    }
    removed.add(c);
  } 
  return Array.from(remembered);
}
```

###### [goroboto](https://www.codewars.com/users/goroboto)

```
function remember(str) {
  var answer = [], store = [];
  str.split("").map(function(val){
    if(answer.indexOf(val)===-1 && store.indexOf(val)>-1){
      answer.push(val);
    }
    store.push(val);
  });
  return answer;
}
```

###### [joh\_pot](https://www.codewars.com/users/joh_pot)

```
function remember(str) {
    var cache = {}, used = {}, res = [];
    for (var i = 0; i < str.length; i++) {
        if (cache[str[i]] && !used[str[i]]) {
            res.push(str[i]);
            used[str[i]] = str[i];
        }
        else
            cache[str[i]] = str[i];
    }
    return res;
}
```

###### [Abbe](https://www.codewars.com/users/Abbe)

```
function remember(str) {
  return str.split('').filter(function(ch, pos) {
    var firstPos = str.indexOf(ch);
    return firstPos !== pos && str.indexOf(ch, firstPos+1) === pos;
  });
}
```

###### [colbydauph](https://www.codewars.com/users/colbydauph)

```
let remember = str => str.split('').reduce((a, v, i) => str.slice(0, i).search(v) > -1 && a.indexOf(v) == -1 ? a.concat(v) : a, []);
```

###### [Birhanu](https://www.codewars.com/users/Birhanu)

```
function remember(str) {
  let fre = {};
  let res = [];

  for (let char = 0; char < str.length; char++) {
    let curChar = str[char];
    fre[curChar] ? fre[curChar]++ : fre[curChar] = 1;

    if (fre[curChar] > 1 && !res.includes(curChar)) {
       res.push(curChar);
    }
  }
  return res;
}
```

###### [Pavel1890](https://www.codewars.com/users/Pavel1890)

```
function remember(str) {
    const current = []
    const res = []

    for (let i = 0; i < str.length; i++) {
        if (!current.includes(str.charAt(i))) {
            current.push(str.charAt(i))
        } else {
            if (!res.includes(str.charAt(i))) {
                res.push(str.charAt(i))
            }
        }
    }

    return res
}
```

###### [FerPC92](https://www.codewars.com/users/FerPC92)

```
const remember = str => {
  let map = {}
  let tracker = {}
  let res = []
  for (let i = 0; i < str.length; i++) {
      let curr = str[i]
      map[curr] = (map[curr] || 0) +1
      if(map[curr] > 1 && !tracker[curr] ) res.push(curr)
      if(map[curr] > 1) tracker[curr] = true
  }
 return  res
}
```

###### [Ihor Daniuk](https://www.codewars.com/users/Ihor%20Daniuk)

```
function remember(str) {
     const double  = new Set();
     const result = new Set();

     for(character of str ){
        double.has(character)? result.add(character) : double.add(character)
      }
      return [...result]
}
```

###### [Nicko229](https://www.codewars.com/users/Nicko229)

```
const remember = (str) => {
  return Array.from(str).filter((x, i) => {
    const matches = str.slice(0, i).match(new RegExp(x, 'g'));
    return matches && matches.length === 1;
  });
};
```

###### [AbdulxaqDev](https://www.codewars.com/users/AbdulxaqDev)

```
function remember(str) {
  let arrStr = str.split("");
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (!arr.includes(arrStr[i])) {
      arr.push(arrStr[i])
    } else { 
      arr2.push(arrStr[i])
    }
  }
  return [...new Set(arr2)]
}
```

###### [laziz\_dev](https://www.codewars.com/users/laziz_dev)

```
function remember(str) {
    let result = str.split("").filter((item, index) => str.split("").indexOf(item) !== index)
    return [...new Set(result)]
}
```

###### [yusuf\_dev](https://www.codewars.com/users/yusuf_dev)

```
function remember(str) {
  const arr = str.split("");
  let storage = [];
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(!storage.includes(arr[i])){
      storage.push(arr[i]);
    }else {
      result.push(arr[i])
    }
  }
  return  [...new Set(result)]
}
```

###### [Charly46](https://www.codewars.com/users/Charly46)

```
function remember(str) {
  console.log('---', str);
  const oDic = str.split('').reduce((a,b,i) => {
    if(a[b] === undefined){
      a[b] = {index: null, times: 1};
    } else {
      a[b]['times'] ++;
    }
    if(a[b]['times'] === 2){
      a[b]['index'] = i;
    }
    return a;
  },{});
  return Object.entries(oDic).filter(x => x[1].times >= 2).sort((a,b) => a[1].index - b[1].index).map(x =>x[0]);
}
```

###### [devdinho](https://www.codewars.com/users/devdinho)

```
function remember(str) {
  const repeats = [...str].reduce((a, b, i) => {
    if (a[b]) a[b][0] += 1;
    else a[b] = [1];
    a[b][0] === 2 && a[b].push(i);
    return a;
  }, {});

  return Object.entries(repeats)
    .filter(([_, a]) => a[0] > 1)
    .sort((a, b) => a[1][1] - b[1][1])
    .map(([w]) => w);
}
```

###### [rsschool\_3045045eb74aaf6b](https://www.codewars.com/users/rsschool_3045045eb74aaf6b)

```
function remember(str) {
  const res = [];
  let test = '';
  for (let i = 0; i < str.length; i++) {
    if (test.includes(str[i]) && !res.includes(str[i])) res.push(str[i]);
    test += str[i];
  }
  return res;
}
```

###### [hehexdtaco](https://www.codewars.com/users/hehexdtaco)

```
function remember(str) {
let values = {};
let returnDuplicates = [];
  
for (let i = 0; i < str.length; i++){
 
  
 values[str[i]] = (values.hasOwnProperty(str[i]) ? values[str[i]] : 0) + 1
  
 if (values[str[i]] == 2){
   returnDuplicates.push(str[i])
 }
}
  
  return returnDuplicates
  
  
 
  
  }
```

###### [hapster100](https://www.codewars.com/users/hapster100)

```
function remember(str) {
  const c = {}
  const res = []
  for(const ch of str) {
    c[ch] = (c[ch] || 0) + 1
    if(c[ch] === 2) res.push(ch)
  }
  return res
}
```

###### [ttse23](https://www.codewars.com/users/ttse23)

```
function remember(str) {
    let arr = []
    let chars = str.split('')
    chars.forEach((el, ind) => {
        if (chars.indexOf(el) !== ind && !arr.includes(el)) {
            arr.push(el)
        }
    })
    return arr
}
```

###### [\_\_SARDORBEK\_\_](https://www.codewars.com/users/__SARDORBEK__)

```
function remember(str) {
let temp = []

let res = []

for(let i in str) {
  if(!temp.includes(str[i])) {
    temp.push(str[i])
  } else if(res.includes(str[i])) {
    continue
  } 
 else res.push(str[i])
}
  return res
}
```

###### [Monkious](https://www.codewars.com/users/Monkious)

```
function remember(str) {
  const register = {};
  const result = [];
  [...str].forEach(letter => {
    register[letter] = register[letter] + 1 || 1;
    if(register[letter] === 2){
      result.push(letter);
    }
  })
  return result;
}
```

###### [dfhwze](https://www.codewars.com/users/dfhwze)

```
function remember(s,r=[],h={}) {
  [...s].forEach(c=>{h[c]=(h[c]||0)+1; if (h[c]==2) r.push(c)})
  return r;
}
```

###### [thanhle289](https://www.codewars.com/users/thanhle289)

```
function remember(str) {
  const seen = {};
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(!seen[str[i]]) seen[str[i]] = [1, count];
    else if(seen[str[i]][0] === 1){
      count += 1;
      seen[str[i]] = [seen[str[i]][0] + 1, count]
    }
  }
  
  return Object.entries(seen).filter(item => item[1][0] > 1)
      .sort((a,b) => a[1][1] - b[1][1]).map(item => item[0])
}
```

##### Loading more solutions...

 */