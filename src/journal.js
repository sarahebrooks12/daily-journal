/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
    date
    concept
    entry
    mood
*/
const journalEntry = {
  date: "04/15/2020",
  concept: "JavaScript objects",
  entry:
    "nothing really makes sense but Jordan and Tommy keep saying to trust the process. That isn't easy for me but I'm going to keep chugging.",
  mood: "stressed",
};
const journalEntry2 = {
  date: "04/17/2020",
  concept: "Printing to the DOM",
  entry:
    "I'm trying to get all of the separate things I know to combine in my head but it just isn't happening. I can feel that the click is close but it is so frustrating to not be excelling at this.",
  mood: "stressed",
};
const journalEntry3 = {
  date: "04/18/2020",
  concept: "manipulating the DOM",
  entry:
    "I definitely am having such severe imposter syndrome. I feel like an absolute failure and like I will never understand any of this. I have had trouble with the whole program, but I didn't expect to succeed overnight. These last two days have been so tough. Even Tommy said that when he went through this with the first cohort, he really struggled.",
  mood: "stressed",
};
let completeEntry = [];

completeEntry.push(journalEntry);
completeEntry.push(journalEntry2);
completeEntry.push(journalEntry3);

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = () => {
  return `
<div id="journalEntry">
<h1>${journalEntry.concept}</h1>
<p>${journalEntry.entry}</p>
<h3><strong>Mood: ${journalEntry.mood}</strong></h3>
<p>${journalEntry.date}</p>
<span>* * * * * * * * * * * * * * * * * * </span>
</div>
  `;
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
  if (event.target.id === save) {
console.log("CLICK")  }
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