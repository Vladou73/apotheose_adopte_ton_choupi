// helper functions
function getAge(dateString) {
    //we need to parse the date string because its not the right format (DD-MM-YYYY instead of YYYY-MM-DD)
    const parts = dateString.split('-');
    let today = new Date();
    // let birthDate = new Date(dateString);
    let birthDate = new Date(parts[2],parts[1]-1,parts[0]);
    let ageYear = today.getFullYear() - birthDate.getFullYear();
    let ageMonth = null;
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        ageYear--;
    }
    //gives months if age=0
    if (ageYear <= 0) {ageMonth = m}
    return {ageYear, ageMonth};
}
function getAgeLabel(age) {
    // console.log(age)
    if(age<=3){
        return 'junior';
    }else if (age <= 7){
        return 'adulte';
    }else{
        return 'senior';
    }
}

animalService = {
    addAgeLabels : function(animals) {
        const animalsWithAge = animals.map(animal=> {
            const {ageYear, ageMonth} = getAge(animal.birthdate);
            // console.log(animal);
            // console.log('animal.birthdate',animal.birthdate );
            // console.log(ageYear, ageMonth);
            animal.ageYear = ageYear;
            animal.ageMonth = ageMonth;
            animal.ageLabel = getAgeLabel(animal.ageYear);
            return animal })
        return animalsWithAge
    }
}

module.exports = animalService;