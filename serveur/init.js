const DeveloperData = require('./data/developers.json');
const GameData = require('./data/games.json');
const EditorData = require('./data/editors.json');
const GenderData = require('./data/Gender.json');
const PlatformData = require('./data/Platform.json');

const Developer = require('./src/Developer.js');
const Game = require('./src/Developer.js');
const Editor = require('./src/Developer.js');
const Gender = require('./src/Developer.js');
const Platform = require('./src/Developer.js');

const init = function () {
  const iut2 = new Catalogue();

  // Load Platform

  // Load Editor

  // Load Gender

  // Load Developer

  // Load Game

  // ['CJ', 'INFO', 'STID'].forEach((name, i) => {
  //   const nb = [14, 23, 22, 9, 26, 24, 12, 22, 21, 20];
  //   const department = new Department({
  //     name: name
  //   });

  //   for (let k = 0; k < nb.length; k++) {
  //     nb[k] = nb[k] + i;
  //   }
  //   for (let k = 0; k < nb.reduce((acc, curr) => acc + curr, 0); k++) {
  //     const student = new Student(Object.values(file)[k]);
  //     department.students.push(student);
  //     student.department = department;
  //   }
  //   const academicYear = new AcademicYear({
  //     label: '2022-2023'
  //   });
  //   department.years.push(academicYear);
  //   academicYear.department = department;
  //   let index = 0;
  //   ['1a', '1b', '1c', '1d', '1e'].forEach((j, p) => {
  //     const gr = new Group({
  //       label: department.name.toLowerCase() + j
  //     });
  //     academicYear.groups.push(gr);
  //     gr.year = academicYear;
  //     for (let o = 0; o < nb[p]; o++) {
  //       const st = department.students[index++];
  //       gr.enrolled.push(st);
  //       st.group = gr;
  //     }
  //   });
  //   ['2a', '2b', '2c', '2d', '2e'].forEach((j, p) => {
  //     const gr = new Group({
  //       label: department.name.toLowerCase() + j
  //     });
  //     academicYear.groups.push(gr);
  //     gr.year = academicYear;
  //     for (let o = 0; o < nb[p + 5]; o++) {
  //       const st = department.students[index++];
  //       gr.enrolled.push(st);
  //       st.group = gr;
  //     }
  //   });
  //   iut2.departments.push(department);
  // });
  return iut2;
};

module.exports = init;

