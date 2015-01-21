// the string (actually strings - this is an array of N strings) must be the dependency filename minus the .js
// the params passed into the function are the corresponding objects which require loads in
// require(["dependency1", "dependency2"],function(dependency1, dependency2){
require(["dependency1", "dependency2"],function(dependency1_but_this_can_be_called_anything_really, dependency2){
	 console.log("this won't be executed until the full dependency chain has been loaded");
	 console.log(dependency1_but_this_can_be_called_anything_really.my_method());
	 console.log(dependency2);
	// once a dependency has been loading you can refer to it as follows
	console.log("calling for a second time; " + require("dependency1").my_method());
});

// this won't work because at the point we've not yet had our callback
// console.log(require("dependency1").my_method());
