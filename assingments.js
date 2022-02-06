

// Problems1:
function anaToVori(ana){
    var vori = ana/16;
    return vori;
}

/* console.log(anaToVori(14)) */



// Problems 2: 
function pandaCost(singara, samucha, jilapi){
    var singaraPrice = 7;
    var samuchaPrice = 10;
    var jilapiPrice = 15;

    var singaraTotal = singaraPrice * singara;
    var samuchaTotal = samuchaPrice * samucha;
    var jilapiTotal = jilapiPrice * jilapi;

    var totalPrice = singaraTotal + samuchaTotal + jilapiTotal;
    return totalPrice;

}






// Problems 3:

function picnicBudget(persons) {
    const firstHundredFee = 5000;
    const secondHundredFee = 4000;
    const thirdHundredFee = 3000;

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


/* console.log(picnicBudget(400)); */







//Problems 4: 
// oddFriend

function oddFriend(array) {
    var friends = [];

    for (var i = 0, length = array.length; i < length; i++) {
        if (i % 2 !== 0) {
            friends.push(array[i]);    
        }         
    }
    return friends;
}

/* var result = ["even Friend1","odd  friend #1", "even friend #2", "odd friend  #2", "even friend #3"];
console.log(oddFriend(result)); */




