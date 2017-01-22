module.exports=function(){
	var faker=require("faker");
	var _=require("lodash");
	return {
		people:_.times(10,function(n){
			return {
			id:n,
			name:faker.name.findName()
			
			}
		})
	}
}

/*var faker=require("faker");
faker.locale = "zh_CN";
var name=faker.name.findName();
var avatar=faker.internet.avatar();
var email=faker.internet.email();
console.log(name);
console.log(avatar);
console.log(email);*/