interface User{
    name : string;
    age : number;

}
interface  Point{
    readonly x : number;
    readonly y : number;
}

class Cool {
    private names: ['nate', 'jeff', 'walter'];

    constructor(){

    }
    getName(i){
        return this.names[i];
    }
}

class Users extends Cool{
    constructor(public user:User){
        super();
        var name = this.getName(1);
        console.log(name);
    }
}

var users:Users = new Users({name : 'bob', age : 20});
