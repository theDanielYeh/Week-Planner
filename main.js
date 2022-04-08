/* global data */
/* exported data */
/* eslint-disable no-unused-vars */

const $dayOfWeekList = document.querySelectorAll('.day-of-week');
const $scheduleEventsHeader = document.querySelector('.schedule-events-header');
const $modalAdd = document.querySelector('#add-entry-modal');
const $modalEdit = document.querySelector('.edit-entry-modal');
const $modalDelete = document.querySelector('.delete-entry-modal');
const $modalBackground = document.querySelector('.modal-background');
const $modalSubmit = document.querySelector('.modal-submit');
const $modalForm = document.querySelector('.modal-form');

const $addEvent = document.querySelector('.add-entry');

$addEvent.addEventListener('click', function (event) {
  // reveal modal
  $modalBackground.classList.toggle('hidden');
  $modalAdd.classList.toggle('hidden');

  // put form data from modal into data.events
  // hide modal
  // rerender eventDOM
});

// $modalSubmit.addEventListener('click', function (event) {
//   console.log('event', event);
//   console.log('event.target', event.target);
//   $modalBackground.classList.toggle('hidden');
//   $modalAdd.classList.toggle('hidden');
// });

$modalForm.addEventListener('submit', function (event) {
  event.preventDefault();

  $modalBackground.classList.toggle('hidden');
  $modalAdd.classList.toggle('hidden');

  var newObject = {
    day: $modalForm.elements['add-day'].value,
    time: $modalForm.elements['add-time'].value,
    description: $modalForm.elements.description.value,
    entryID: data.nextEntryID
  };
  data.nextEntryID++;
  data.events.push(newObject);
  renderEntryTableDOM();
});

let $eventRowContainer = document.querySelector('.event-row-container');

function renderEntryTableDOM() {
  resetEntryTableDOM();
  for (const eventobject of data.events) {
    entryObjectToDOM(eventobject);
  }
}

function resetEntryTableDOM() {
  $eventRowContainer = document.querySelector('.event-row-container');
  const length = $eventRowContainer.children.length;
  for (let i = 0; i < length; i++) {
    $eventRowContainer.children[0].remove();
  }
}

function entryObjectToDOM(object) {
  // <tr class="entry">
  //   <td>10:00</td>
  //   <td>Hop on Zoom</td>
  // </tr>

  const $tr = document.createElement('tr');
  const $tdTime = document.createElement('td');
  $tdTime.textContent = object.time;
  const $tdDescription = document.createElement('td');
  $tdDescription.textContent = object.description;

  $tr.appendChild($tdTime);
  $tr.appendChild($tdDescription);

  $eventRowContainer.appendChild($tr);
}
