import {Librarian} from './interfaces'

export class UiversityLibrarian implements Librarian {
    _name: string;
    email:string;
    department:string;
    constructor(name: string, email:string, department:string)
    {
        this.name = name;
        this.email = email;
        this.department = department;

        console.log(`${this.name} has email ${this.email} and department ${this.department}`);
    }

    get name() :string{
        return this._name;
      }
    set name(value: string){
        this._name = value;
    }
}