const employeeList = require("../app/data/employee.js");

module.exports = (app) => {
 app.get("/api/employees", (req, res) => {
   res.json(employeeList);
 });
  
  app.post("/api/employees", (req, res) => {
    if (employeeList.length < 6) {
      employeeList.push(req.body)
    }
    
    employees.push(req.body);
    return res.json(req.body);
     
  });
  // GET route suppose to show the survey page
  // POST route suppose to handle incomming survey results
};