const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const shift = (object, key, value) => {
  object[key] = value;
  return object;
}

shift(lesson2, 'turno', 'noite')

const listKeys = object => {
  return Object.keys(object);
}

const lenObject = object => {
  return listKeys(object).length;
}

const allLessons = Object.assign({lesson1}, {lesson2}, {lesson3});

const allStudents = (object) => {
  const keys = listKeys(object);
  let totalStudents = 0;
  for (const key of keys) {
    totalStudents += object[key].numeroEstudantes;
  }
  return totalStudents;
}

const totalStudents = allStudents(allLessons);
