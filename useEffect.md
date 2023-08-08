what is useEffect, what is useEffect used for?

useEffect is one of the react hooks. It lets you synchronize a component with an external system.

It has two arguments, the setup and the dependency.
useEffect(setup, dependencies);

The setup function in the argument will run if there is a changes in the dependency list argument.

The dependency list in the argument of useEffect is a list of variables, state and props. UseEffect watches this dependencies and run the setup function in the useEffect arugument if it changes.(Optional)

If the use effect dont have list of dependencies, It will run the setup function everytime that there is a change in the DOM.
