const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  const totalScore = students.reduce((acc, student) => {
  return acc + student.score;
  }, 0);

  return totalScore / students.length

}
const avgScore = getAverageStudentScore(students);
console.log(avgScore);


