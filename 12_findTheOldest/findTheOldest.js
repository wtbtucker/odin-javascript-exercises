const findTheOldest = function(people) {
    let group_by_age = people.reduce((storage, obj) => {
        let death = (obj.yearOfDeath) ? obj.yearOfDeath : new Date().getFullYear();
        let age = death - Number(obj.yearOfBirth);
        storage[age] = storage[age] || [];
        storage[age].push(obj);
        return storage;
    }, {});
    return group_by_age[Object.keys(group_by_age).pop()].pop();
};

module.exports = findTheOldest;
