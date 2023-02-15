const findTheOldest = function(people) {

    // create variable to store age of current person and oldest person id
    let currentPersonAge;
    let oldestPersonAge = 0;
    let oldestPersonId;

    // look through each person in array
    for (let i = 0; i < people.length; i++){

        // if person is not dead
        if (people[i].yearOfDeath == undefined){

            currentPersonAge = new Date().getFullYear() - people[i].yearOfBirth;
        }

        // else they are dead
        else {
            currentPersonAge = people[i].yearOfDeath - people[i].yearOfBirth
        }

        // if older than oldest person logged so far, update oldest age person and id variables
        if (currentPersonAge > oldestPersonAge){

            oldestPersonAge = currentPersonAge;
            oldestPersonId = i;
        }
    }

    return people[oldestPersonId];

};

// Do not edit below this line
module.exports = findTheOldest;
