// this is a self invoking annonymous function
// it is also called a module ( my variation of the mobile pattern)
// it encapulates all of your custom code and makes it private)


(() => {

  // make associations  (select) with elements in the html markup using CSS Selectors
  let theHeading  = document.querySelector(".main-heading"),
      theIcons = document.querySelectorAll(".icon");

  //debugger; // this is like a breakpoint / pause point in your code


// script your behaviour with functions

function logElement() {
  // the " this " keyword refers to the thing that trigger the function.
  // so the " thing" that you can click on, mouse over, interact with on the page
  console.log('clicked on an element:', this.id);
}

//add event handling here (user "triggers")- this is one to one relationship
// assign the event you want to listen for, and the function that should  be run
  theHeading.addEventListener("click", logElement);

  // loop through all the icons nd add event listener

  // one to many relationship ( selecting a group of subject ) - you have to process this collection and work with each element sequence sequentially.
  theIcons.forEach(icon =>icon.addEventListener("click", logElement));
})();
