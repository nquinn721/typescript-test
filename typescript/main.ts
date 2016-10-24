interface User{
    name : string;
    age : number;

}
interface  Point{
    readonly x : number;
    readonly y : number;
}

class Cool {
    constructor(public user:User){

    }
}

class Users extends Cool{
    constructor(public user:User){
        super(user);
    }
}

var users:Users = new Users({name : 'bob', age : 20});
