







function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){  
            return false
        }
        if( frequencyCounter1[key] !== frequencyCounter2[key ** 2]){
       // values are not equal but why ?? 
            return false 
    }
  }
  return true

}


console.log(same([1, 3, 3], [1, 1, 9]))  


/*
if the key of the first o is in the second o 

*/