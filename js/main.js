// the string (actually strings - this is an array of N strings) must be the dependency filename minus the .js
// the params passed into the function are the corresponding objects which require loads in
// require(["dependency1", "dependency2"],function(dependency1, dependency2){
 require(["dependency1", "dependency2"],function(dependency1, dependency2){
	 console.log(dependency1.my_method());
	 console.log(dependency2);
});
