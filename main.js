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
  // console.log(event.target.elements.time);
  // console.log(event.target);
  console.log($modalForm.elements);
  // console.log(event.target.value['add-name']);
  // console.log(event.target);
  $modalBackground.classList.toggle('hidden');
  $modalAdd.classList.toggle('hidden');
});
