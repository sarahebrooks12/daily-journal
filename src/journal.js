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
  entry: "nothing really makes sense but Jordan and Tommy keep saying to trust the process. That isn't easy for me but I'm going to keep chugging.",
  mood: "stressed"
}
const journalEntry2 = {
  date: "04/17/2020",
  concept: "Printing to the DOM",
  entry: "I'm trying to get all of the separate things I know to combine in my head but it just isn't happening. I can feel that the click is close but it is so frustrating to not be excelling at this.",
  mood: "stressed"
}
const journalEntry3 = {
  date: "04/18/2020",
  concept: "manipulating the DOM",
  entry: "I definitely am having such severe imposter syndrome. I feel like an absolute failure and like I will never understand any of this. I have had trouble with the whole program, but I didn't expect to succeed overnight. These last two days have been so tough. Even Tommy said that when he went through this with the first cohort, he really struggled.",
  mood: "stressed"
}
const completeEntry = []
push(journalEntry)
push(journalEntry2)
push(journalEntry3)

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (completeEntry) => {
  return `
  <section>${completeEntry}</section>
  `
}

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
  document.querySelector("#entryLog").innerHTML += completeEntry

}

// Invoke the render function
renderJournalEntries(completeEntry)