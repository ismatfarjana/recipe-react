//it will just display a link to the page
//when a user click a link it will creat a nav event which is a object and it will communicat eto the rest of the app that the url has just changed, then the nav event will sent of to all diff route component, when they receive the nav event, they will know that the url has just changed, then they will take a look to the updated url and decide weather or not to show thw respective child components.

//new component link
// build an ancor element inside it , atach a onClick handler , when ever user clicks the element, we will emit navigation object and then we will listen for thatin all our different routes
import React from "react";

//we need three props here: classname, href, children
const Link = ({ className, href, children }) => {
  //do not reload
  //change url without fullpage refresh
  //anytime we change the url by clicking the link on nav bar, all route components needs to detect that change.
  //whenever user clickes on link, we produce and emit a navigation event which tell the different routs that url has just changed
  //for detecting navigation: nav event
  const onClick = event => {
    event.preventDefault(); //preventing default
    window.history.pushState({}, "", href); //change url while user click

    const navEvent = new PopStateEvent("popstate"); // this is going to the routes components and telling themthat url has changed ( qstn: what is popstateevent???)
    window.dispatchEvent(navEvent);
  };

  //return
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
