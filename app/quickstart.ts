/// <reference path="Utility.ts" />
import util = Utility;

import {UiversityLibrarian} from './classes';

function greeter(person){
    return "hello," + person;
}

var user = "Jane User";

console.log(greeter(user));

let universityLibrarian : UiversityLibrarian = new UiversityLibrarian("rajnikant", "patelrt@hotmail.com", "geography");
util.Calculate(100);