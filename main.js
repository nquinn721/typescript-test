var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Cool = (function () {
    function Cool(user) {
        this.user = user;
    }
    return Cool;
}());
var Users = (function (_super) {
    __extends(Users, _super);
    function Users(user) {
        _super.call(this, user);
        this.user = user;
    }
    return Users;
}(Cool));
var users = new Users({ name: 'bob', age: 20 });
//# sourceMappingURL=main.js.map