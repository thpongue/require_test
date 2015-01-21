// showing that we don't need a wrapper object
define(["subDependency"], function(subDependency) {
	 return "dependency2.my_method returns this string + this string from its subdependency - " + subDependency;
});
