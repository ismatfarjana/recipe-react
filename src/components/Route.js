import { useState, useEffect } from "react";
//maake component fucntion
//export Route
// no jsx in here now so we dont need to import React here. we will import something else

// route will need props for :path and the component for that path
// to receive those i will ad porp called path and child
//with ternery exprestion we will return the expected window view of component

//set up a rout handler to listen for the evet when user clicks on navigation links
const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname); //qs: whta is this? ans:  declaring the state , default is to current path, tracking where is the pathname now

  useEffect(() => {
    //nav event
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname); // qs: wht is thi? ans: it updates the current path according to the current path name
    };

    window.addEventListener("popstate", onLocationChange); //qs: why the onLocationChange callback function is a seperate variable?? ans: to stop showing rout component to the screen we need to add this addenentlistener so we can delete it with the cleanup function, the callback is seperate so we can remove it

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null; //decideing weather to show or not show the component on screen here currentpth == window.location.pathname and it updates each time differnt link clicked
};

export default Route;
