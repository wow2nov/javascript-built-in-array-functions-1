const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  const totalscore = students.reduce((acc,students) => acc+students.score,0);
  return totalscore/students.length
  // return students.reduce((acc,students) => acc + students.score,0)/students.length
}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students));