// function averageStringLength(str){
//   let totalCount = 0
//   let strCount = 0
//   let newStr = ''
//   let averageCharCount = 0
//   for (i=0;i<str.length;i++){
//       strCount ++ 
//       newStr += str[i]
//   }
// totalCount = newStr.length
// averageCharCount = totalCount / strCount
// return averageCharCount
// }

// let x = averageStringLength(['oh', 'hello'])
// console.log(x); 

function getPlace(sortedListOfScores, newScore){
  let place = 0
  let string = ''
  sortedListOfScores.push(newScore)
  sortedListOfScores.sort(function(a, b){return b-a});
  place = sortedListOfScores.indexOf(newScore) +1
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

let x = getPlace([50,40,30,10], 35)
x