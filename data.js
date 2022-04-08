const data = {
  events: [],
  view: null,
  editing: null,
  nextEntryID: 1
};

// data.event = [
//   time, description, order
// ]

window.addEventListener('beforeunload', recordInputs);

function recordInputs(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('JS-local-storage', dataJSON);
}
