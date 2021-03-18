// helper functions
function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
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
            animal.ageYear = ageYear;
            animal.ageMonth = ageMonth;
            animal.ageLabel = getAgeLabel(animal.ageYear);
            return animal })
        return animalsWithAge
    }
}

module.exports = animalService;