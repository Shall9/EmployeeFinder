const employeeList = require("../app/data/employees");

module.exports = (app) => {
 app.get("/api/employees", (req, res) => {
   res.json(employeeList);
 });

 app.post("/api/employees", (req, res) => {

   const sum = (a, b) => Number(a) + Number(b);
   const sumsArray = employeeList.map(({ scores }) => scores.reduce(sum));

   let newArray = sumsArray.map( (value) => {
       return Math.abs(value - sumsArray[sumsArray.length -1]);
   } );

   const firstMatchIndex = newArray.slice(0, newArray.length - 1).findIndex((value, i, array) => {
       return value === Math.min(...array);
   });
   const firstMatch = employeeList[firstMatchIndex];

   employeeList.push(req.body);
   return res.json(firstMatch);

 });
};