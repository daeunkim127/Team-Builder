const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");
const fs = require("fs");
const { isRegExp } = require("util/types");
const render = require('./src/page-template')

const teamMembers={
    manager:null,
    engineer:[],
    intern:[]
};


function buildTeam() {
    fs.writeFile("dist/team.html", render(teamMembers), (err)=>{
        if(err) {
            console.log(err)
        }
    })
}

buildTeam()