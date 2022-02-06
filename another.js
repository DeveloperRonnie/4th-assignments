


/* 
function oddFriend(array) {
    var only_odds = array.filter(function(value, index){
    
    return index % 2;

    });
    return only_odds;
}

console.log(oddFriend(['rohim', 'korim', 'jorim', 'sorim']));


 */

/* 
function oddFriend(array) {
    var  frieends = [];

    for (var i = 0, length = array.length; i < length; i++) {
        if (i % 2 !== 0) {
            frieends.push(array[i]);    
        }         
    }
    return frieends;
}

var result = ["even#1","odd #1", "even#2", "odd #2", "even#3"];
console.log(oddFriend(result));


 */


function picnicBudget(persons) {
    const firstHundredFee = 5;
    const secondHundredFee = 4;
    const thirdHundredFee = 3;

    if(persons <= 100){

        const firstTotalCost = firstHundredFee * persons;
        return firstTotalCost;

    }

    else if(persons <=200){

        const firstTotalCost = firstHundredFee * 100;

        const secondPerson = persons - 100;

        const secondCost = secondPerson * secondHundredFee;
        const secontTotalCost = secondCost + firstTotalCost;
        return secontTotalCost;
        
    }
    else{

        const firstTotalCost = firstHundredFee * 100;
        const secondTotalCost = secondHundredFee * 100;

        const thirdPerson = persons - 200;

        const thirdCost = thirdPerson * thirdHundredFee;
        const thirdTotalCost = firstTotalCost + secondTotalCost + thirdCost;
        return  thirdTotalCost ;
    }
    
}


console.log(picnicBudget(1));
















