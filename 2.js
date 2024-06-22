/* The following is an array of 10 students ages:
=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
 Sort the array and find the min and max age`
 Find the median age(one middle item or two middle items divide by two)
 Find the average age(all items divided by number of items)
 Find the range of the ages(max minus min)
 Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log('Sorted ages:', ages);
console.log('Min age:', minAge);
console.log('Max age:', maxAge);

// Find the median age
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}

console.log('Median age:', medianAge);

// Find the average age
const sumAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumAges / ages.length;

console.log('Average age:', averageAge);

// Find the range of the ages
const ageRange = maxAge - minAge;

console.log('Age range:', ageRange);

// Compare the value of (min - average) and (max - average), use abs() method
const minAverageDifference = Math.abs(minAge - averageAge);
const maxAverageDifference = Math.abs(maxAge - averageAge);

console.log('Difference between min age and average age:', minAverageDifference);
console.log('Difference between max age and average age:', maxAverageDifference);

