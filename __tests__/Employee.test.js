const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("Intialization", () => {
        it("should instantiate an employee instance", ()=> {
            //Arrange
            const employee = new Employee();
            //Act

            //Assert
            expect(typeof employee).toBe("object");
        });

        it("should set name via constructor arguments", () => {
            //Arrange
            const name = "Alice";
            //Act
            const employee = new Employee(name);
            //Assert
            expect(employee.name).toBe(name);
        });

        it("should set id via constructor arguments", () => {
            //Arrange
            const id = 100;
            //Act
            const employee = new Employee("Alice", id);
            //Assert
            expect(employee.id).toBe(id);
        });

        it("should set email via constructor arguments", () => {
            //Arrange
            const email = "test@test.com";
            //Act
            const employee = new Employee("Alice", 100, email);
            //Assert
            expect(employee.email).toBe(email);
        });
    });

    describe("Getter methods", ()=> {
        it("should get name via getName()", ()=> {
            const name = "Alice";
            const employee=new Employee(name,100,"test@test.com");
            const employeeName = employee.getName();
            expect(employeeName).toBe(name);
            
        })
        it("should get name via getId()", ()=> {
            const id = 100;
            const employee=new Employee("Alice",id,"test@test.com");
            const employeeId = employee.getId();
            expect(employeeId).toBe(id);
            
        })
        it("should get name via getEmail()", ()=> {
            const email = "test@test.com";
            const employee=new Employee("Alice",100,email);
            const employeeEmail = employee.getEmail();
            expect(employeeEmail).toBe(email);
            
        })
        it("should get role via getRole()", ()=> {
            const role = "Employee";
            const employee=new Employee("Alice",100,"test@test.com");
            const employeeRole = employee.getRole();
            expect(employeeRole).toBe(role);
            
        })
    })
});