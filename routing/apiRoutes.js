const employeeList = require("../app/data/employee.js");

module.exports = (app) => {
 app.get("/api/employees", (req, res) => {
   res.json(employeeList);
 });
  
  app.post("/api/employees", (req, res) => {
    
    
    employees.push(req.body);
    return res.json(req.body);
     
  });

  

 
   
   

   
    
  

   
      
   
   

   
   
 
};