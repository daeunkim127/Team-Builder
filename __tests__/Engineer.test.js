const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    describe("Intialization", () => {
    
        it("should set github via constructor arguments", () => {
            //Arrange
            const github = "daeun";
            //Act
            const engineer = new Engineer("Alice",1,"test@test.com", github);
            //Assert
            expect(engineer.github).toBe(github);
        });
    });

    describe("Getter methods", ()=> {
        it("should get Github via getGithub()", ()=> {
            const github = "daeun";
            const engineer=new Engineer("Alice",1,"test@test.com", github);
            const engineerGithub = engineer.getGithub();
            expect(engineerGithub).toBe(github);
            
        })
       
        it("should get role via getRole()", ()=> {
            const role = "Engineer";
            const engineer=new Engineer("Alice",100,"test@test.com","daeun");
            const engineerRole = engineer.getRole();
            expect(engineerRole).toBe(role);
            
        })
    })
});