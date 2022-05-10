const Intern = require("../lib/Intern");


describe("Intern", () => {
    describe("Intialization", () => {
    
        it("should set school via constructor arguments", () => {
            //Arrange
            const school = "test";
            //Act
            const intern = new Intern("Alice",1,"test@test.com", school);
            //Assert
            expect(intern.school).toBe(school);
        });
    });

    describe("Getter methods", ()=> {
        it("should get school via getSchool()", ()=> {
            const school = "test";
            const intern=new Intern("Alice",1,"test@test.com", school);
            const internSchool = intern.getSchool();
            expect(internSchool).toBe(school);
            
        })
       
        it("should get role via getRole()", ()=> {
            const role = "Intern";
            const intern=new Intern("Alice",100,"test@test.com","daeun");
            const internRole = intern.getRole();
            expect(internRole).toBe(role);
            
        })
    })
});