const Developer = require('./data/developers.json');
const Game = require('./data/games.json');
const Editor = require('./data/editors.json');
const Gender = require('./data/Gender.json');
const Platform = require('./data/Platform.json');

const init = function () {
  const iut2 = new Catalogue();

  ['CJ', 'INFO', 'STID'].forEach((name, i) => {
    const nb = [14, 23, 22, 9, 26, 24, 12, 22, 21, 20];
    const department = new Department({
      name: name
    });

    for (let k = 0; k < nb.length; k++) {
      nb[k] = nb[k] + i;
    }
    for (let k = 0; k < nb.reduce((acc, curr) => acc + curr, 0); k++) {
      const student = new Student(Object.values(file)[k]);
      department.students.push(student);
      student.department = department;
    }
    const academicYear = new AcademicYear({
      label: '2022-2023'
    });
    department.years.push(academicYear);
    academicYear.department = department;
    let index = 0;
    ['1a', '1b', '1c', '1d', '1e'].forEach((j, p) => {
      const gr = new Group({
        label: department.name.toLowerCase() + j
      });
      academicYear.groups.push(gr);
      gr.year = academicYear;
      for (let o = 0; o < nb[p]; o++) {
        const st = department.students[index++];
        gr.enrolled.push(st);
        st.group = gr;
      }
    });
    ['2a', '2b', '2c', '2d', '2e'].forEach((j, p) => {
      const gr = new Group({
        label: department.name.toLowerCase() + j
      });
      academicYear.groups.push(gr);
      gr.year = academicYear;
      for (let o = 0; o < nb[p + 5]; o++) {
        const st = department.students[index++];
        gr.enrolled.push(st);
        st.group = gr;
      }
    });
    iut2.departments.push(department);
  });
  return iut2;
};

module.exports = init;

