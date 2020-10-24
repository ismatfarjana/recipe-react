// import React
//maake component fucntion
//export Route
// no jsx in here now so we dont need to import React here. we will import something else

// route will need props for :path and the component for that path
// to receive those i will ad porp called path and child
//with ternery exprestion we will return the expected window view of component
const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
