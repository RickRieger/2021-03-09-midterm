// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘



//==========ageToAbilities==========



function ageToAbilities(age){
    if(age<16){
        return "You can't drive."  
    }
    else if(age === 16 || age === 17){
        return 'You can drive but not vote.'
    }
    else if(age >= 18 && age <= 24){
        return 'You can vote but not rent a car.'
    }
    else if(age > 24){
        return 'You can do pretty much anything.'
    }
    return "Please provide a valid integer!"
}



//==========oddIndices==========



function oddIndices(nums){
    let oddIndex= []
    for (i=0;i<nums.length;i++){
        if(i%2 !== 0){
            oddIndex.push(nums[i])
        }
    }
    return oddIndex
}


//==========numOddValues==========


function numOddValues(nums){
    let count = 0
    for (const num of nums){
        if (num %2 !== 0){
            count++
        }
    }
    return count
}



//==========averageStringLength==========

function averageStringLength(arrayOfStrings){
    
    let grandNewStr = ''
    let strCount = 0
    let totalCharCount = 0
    let averageCharCount = 0
    
    for (i=0;i<arrayOfStrings.length;i++){
        strCount ++ 
        grandNewStr += arrayOfStrings[i]
        
    }
    if (strCount === 0){
        return 0
    }
    
    totalCharCount = grandNewStr.length
    averageCharCount = totalCharCount / strCount
    return averageCharCount
}

let b = averageStringLength([])
b



//==========firstPunctuationIndex==========


function firstPunctuationIndex(str){
    for (i=0;i<str.length;i++){
        if (str[i] === '.'|| 
        str[i] === '!'    || 
        str[i] === '?'
        ){
            return i
        }
    }
    return -1
}




//==========getPlace==========

function getPlace(sortedListOfScores, newScore){
    let place = 0
    let string = ''
    sortedListOfScores.push(newScore)
    sortedListOfScores.sort(function(a, b){return b-a});
    place = sortedListOfScores.indexOf(newScore)+1
    if (place === 1 || 
      place === 21 ||
      place === 31 || 
      place === 41 ||
      place === 51 || 
      place === 61 ||
      place === 71 || 
      place === 81 ||
      place === 91 ||
      place === 101 
      ){
          string = 'st'
      }
      
      else if(place === 2 || 
          place === 22 ||
          place === 32 || 
          place === 42 ||
          place === 52 || 
          place === 62 ||
          place === 72 || 
          place === 82 ||
          place === 92 ||
          place === 102 
          ){
              string = 'nd'
          }
          
          else if(place === 3 || 
              place === 23 ||
              place === 33 || 
              place === 43 ||
              place === 53 || 
              place === 63 ||
              place === 73 || 
              place === 83 ||
              place === 93 ||
              place === 103 
              ){
                  string = 'rd'
              }
              
              else{
                  string = 'th'
  }
              
  return `${place}${string} place`   
  }
















// function getPlace(sortedListOfScores, newScore){
//     let place = 0
//     let string = ''
    
//     for (i=0;i<sortedListOfScores.length;i++){
//         if (newScore > sortedListOfScores[0]){
            
//             place = 1
            
//         }
        
//         else if (sortedListOfScores[i] > newScore
//             && newScore  > sortedListOfScores[i+1]){
                
//                 place = i+2
                
//             }
//         }
        
//         if (place === 1 || 
//             place === 21 ||
//             place === 31 || 
//             place === 41 ||
//             place === 51 || 
//             place === 61 ||
//             place === 71 || 
//             place === 81 ||
//             place === 91 ||
//             place === 101 
//             ){
//                 string = 'st'
//             }
            
//             else if(place === 2 || 
//                 place === 22 ||
//                 place === 32 || 
//                 place === 42 ||
//                 place === 52 || 
//                 place === 62 ||
//                 place === 72 || 
//                 place === 82 ||
//                 place === 92 ||
//                 place === 102 
//                 ){
//                     string = 'nd'
//                 }
                
//                 else if(place === 3 || 
//                     place === 23 ||
//                     place === 33 || 
//                     place === 43 ||
//                     place === 53 || 
//                     place === 63 ||
//                     place === 73 || 
//                     place === 83 ||
//                     place === 93 ||
//                     place === 103 
//                     ){
//                         string = 'rd'
//                     }
                    
//                     else{
//                         string = 'th'
//         }
                    
//         return `${place}${string} place`          
                    
//  }

//  let x = getPlace([60, 30, 10], 15)
//  x
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                // ┌─────────────────────────────────────┐
                // │ Do not modify code below this line. │
                // └─────────────────────────────────────┘
                
                if (typeof ageToAbilities === 'undefined') {
                    ageToAbilities = undefined;
                }
                if (typeof oddIndices === 'undefined') {
                    oddIndices = undefined;
                }
                if (typeof numOddValues === 'undefined') {
                    numOddValues = undefined;
                }
                if (typeof averageStringLength === 'undefined') {
                    averageStringLength = undefined;
                }
                if (typeof firstPunctuationIndex === 'undefined') {
                    firstPunctuationIndex = undefined;
                }
                if (typeof getPlace === 'undefined') {
                    getPlace = undefined;
                }
                
                module.exports = {
                    ageToAbilities,
                    oddIndices,
                    numOddValues,
                    averageStringLength,
                    firstPunctuationIndex,
                    getPlace
                };
                