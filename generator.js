const coursesDB = {
    courses: []
};

// id: string;
// title: string;
// price: number;
// description: string;
// lecturer: string;

const faker = require('faker');
function getRandomCourses() {
const course = {};
    course.id = faker.random.number({min:1, max:100});
    course.title = faker.random.arrayElement(['Theory', 'Practic','Tasks']);
    course.price = faker.random.number({min: 9000, max: 15000, precision: 1400, symbol:'ILS'});
    // course.price({min: 1000, max:5000, dec?: true, symbol?: 'LS'});
    course.description = faker.random.arrayElement(['C++', 'Java','C#','Python','Ruby','JS']);
    course.lecturer = faker.name.findName();
return course;
}

const N_COURSES = 50;
for(let i=0; i<=N_COURSES; i++){
    coursesDB.courses.push(getRandomCourses());
}

console.log(JSON.stringify(coursesDB));
