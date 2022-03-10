import React from "react";

export default class EmployeeTable extends React.Component{
    constructor(props){
      super(props);
    
     this.state = {emp:this.props.emp,
      showEmp:this.props.emp
                  }
         
    }


     deleteEmp =(ind)=>{
       const emp= [...this.state.emp];
       emp.splice(ind,1)
       this.setState({showEmp:emp});
   
     }
   
   
     salaryMoreThan =()=>{
       const emp= [...this.state.emp];
       const filteredEmp = emp.filter((e) => 
           e.employee_salary>200000);
       this.setState({showEmp: filteredEmp})
       
     }
   
     salaryLessThan =()=>{
       const emp= [...this.state.emp];
       const filteredEmp = emp.filter((e) => 
           e.employee_salary<200000);
       this.setState({showEmp: filteredEmp})
     
       }
       
   
     
     hideEmp(id) {
       const emp = this.state.emp.map((e) => {
         if (e.id !== id) {
           return e;
         }
   
         return { ...e, isHidden: true };
       });
   
       this.setState({ showEmp:emp , style:{backgroundColor :'gray'} });
     }
   
   
     resetAll =()=>{
       this.setState({emp:this.props.emp})
   
     }
   
     showHiddenEmp=()=>{
   
       const emp = this.state.emp.map((e) => {
         if (!e.isHidden) {
           return e;
         }
          return { ...e, isHidden: false };
       });
   
       this.setState({ showEmp:emp });
     }

     addEmp=(event)=>{
         event.preventDefault();
         const emp = [...this.state.emp]
         const e={
             id:this.state.emp.length+1,
             employee_name:this.state.newEmp_name,
             employee_salary: this.state.newEmp_salary,
             employee_age:this.state.newEmp_age
         }

         emp.push(e);
        // emp.push(this.state.newEmp_name);
         this.setState({showEmp:emp,
            newEmp_name:'',
            newEmp_salary:'',
            newEmp_age:''})

            console.log(emp)
     }
     
     updateEmpName=(event)=>{
            this.setState({newEmp_name:event.target.value})
              //  console.log(event.target.value)
                            
     }

     updateEmpSalary=(event)=>{
        this.setState({newEmp_salary:event.target.value})
 }
        updateEmpAge=(event)=>{
    this.setState({newEmp_age:event.target.value})
}
   
     render(){
      
       return(<div>

           <button onClick={this.showHiddenEmp}>Show All Hidden</button>
           <button onClick={this.salaryMoreThan}>Employees Make More than 200k</button>
           <button onClick={this.salaryLessThan}>Employees Make Less than 200k</button>
           <button onClick={this.resetAll}>Reset</button>
        <form>
           <input type='text' placeholder='name'
                    value={this.state.newEmp_name}
                    onChange={this.updateEmpName}/>
           <input type= 'number' placeholder= 'salary'
                 value={this.state.newEmp_salary}
                    onChange={this.updateEmpSalary}/>
           <input type='number'placeholder='age' 
                value={this.state.newEmp_age}
                    onChange={this.updateEmpAge}/>
           <button onClick={this.addEmp}>Add</button>
        </form>
       <table>
       <thead>
       <tr>
           <th>ID</th>
           <th>Name</th>
           <th>Salary</th>
          <th>Age</th>
       </tr>
       </thead>
       <tbody>{
         this.state.showEmp.map((emp,ind)=>{
           //console.log({emp})
           const { id, employee_name, employee_salary, employee_age, isHidden } = emp;
           if (isHidden === true) {
             return null;
           }
           return(
           <tr key={id}> 
                  <td>{id} </td>
                  <td> {employee_name}</td>
                  <td> {employee_salary}</td>
                  <td>{employee_age}</td>
                  <td><button onClick={()=>{this.hideEmp(id)}}>Hide</button>
                      <button onClick={()=>{this.deleteEmp(ind)}}>Delete</button> </td>
              </tr>
   
          )
       
       })
       
       }</tbody>
    </table>
    </div>)
     }
   };
   
   