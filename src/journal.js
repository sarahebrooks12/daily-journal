let journalEntry = {
  date: "",
  concept: "",
  entry: "",
  mood: "",
} 



let completeEntry = [];

// completeEntry.push(journalEntry);

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = () => {
  return `
<div id="journalEntry">
<h1 id="concept">${journalEntry.concept}</h1>
<p id="entry">${journalEntry.entry}</p>
<h3 id="emotion"><strong>Mood: ${journalEntry.mood}</strong></h3>
<p id="todayDate">${journalEntry.date}</p>
<span>* * * * * * * * * * * * * * * * * * </span>
</div>
  `
};

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = () => {
  console.log(makeJournalEntryComponent)
  document.querySelector(".entryLog").innerHTML += makeJournalEntryComponent();
};

// Invoke the render function
renderJournalEntries(completeEntry);

// So far, you've build a form in your journal that doesn't do anything. You've also built a function that prints an array of journal objects to the DOM. Now it's time to put the two together.

// In your Daily Journal form, add an event listener to the submit/ save button. The callback function for your event listener should do the following things:
document.querySelector("#save").addEventListener("click", function () {
  if (event.target.id === "save") {
    let jConcept = document.querySelector("#concept").value
    let jEntry = document.querySelector("#entry").value
    let jMood = document.querySelector("#emotion").value
    let jDate = document.querySelector("#todayDate").value
console.log("WHAT IS THIS", jConcept)
    // document.querySelector("#entryLog").innerHTML += makeJournalEntryComponent(jConcept, jEntry, jMood, jDate)

  
    // const personAddress = document.querySelector("#address").value
  }
})


// Capture the values the user entered into your form fields.
// Once you have the values of the text inputs in your JavaScript, build them into an object that looks like this:



// {
//   date: dateValue,
//   concept: conceptValue,
//   entry: entryValue,
//   mood: moodValue
// }

// Once you've build the object representing a single journal entry, use the .push() method to add it to your array of journal entries.
// If you already have a function that prints the entire array of object to the DOM, call it inside your submit button event listener to reprint all of your journal entries. If you don't, revisit Daily Journal - Part 3