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
  $modalForm.reset();
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

  // split if its editing verus not editing
  // if editing, preload contents, reassign to the data object
  // else if not editing etc
  // then either way you rerender the whole dom

  if (data.editing) {
    console.log(data.editing);
    // below for loop not registering, need to figure out how to find the object
    for (var i = 0; i < data.events.length; i++) {
      if (String(data.events[i].entryID) === data.currentID) {
        data.events[i].day = $modalForm.elements['add-day'].value;
        data.events[i].time = $modalForm.elements['add-time'].value;
        data.events[i].description = $modalForm.elements.description.value;
      }
    }
  } else {
    // this is in add entry mode
    var newObject = {
      day: $modalForm.elements['add-day'].value,
      time: $modalForm.elements['add-time'].value,
      description: $modalForm.elements.description.value,
      entryID: data.nextEntryID
    };
    data.nextEntryID++;
    data.events.push(newObject);
  }

  renderEntryTableDOM();
  data.editing = false;
});

let $eventRowContainer = document.querySelector('.event-row-container');

$eventRowContainer.addEventListener('click', function (event) {
  if (event.target.className.includes('entryid')) {
    if (event.target.className.includes('update')) {
      data.editing = true;
      data.currentID = event.target.className.split('-')[2];
      console.log('entryid clicked update functionality');
      $modalBackground.classList.toggle('hidden');
      $modalAdd.classList.toggle('hidden');

      // this is the entryid as a  string. need to get this into an object.
      // event.target.className.split('-')[2];

      for (const iteratedevent of data.events) {
        if (iteratedevent.entryID + '' === event.target.className.split('-')[2]) {
          $modalForm.elements['add-day'].value = iteratedevent.day;
          $modalForm.elements['add-time'].value = iteratedevent.time;
          $modalForm.elements.description.value = iteratedevent.description;
        }
      }

      // the vars we want to assign to prefill the edit page
      // $modalForm.elements['add-day'].value;
      // $modalForm.elements['add-time'].value;
      // $modalForm.elements.description.value;

    } else if (event.target.className.includes('delete')) {
      console.log('entryid clicked delete functionality');
    }
  }
});

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
  // <tr>
  //   <td>10:00</td>
  //   <td class="flex-space-between">
  //     <span>Hop on Zoom</span>
  //     <span><button>Update</button><button>Delete</button></span>
  //   </td>
  // </tr>

  const $tr = document.createElement('tr');
  const $tdTime = document.createElement('td');
  $tdTime.textContent = object.time;
  const $tdDescription = document.createElement('td');
  $tdDescription.className = 'flex-space-between';
  const $descriptionspan = document.createElement('span');
  $descriptionspan.textContent = object.description;
  $tdDescription.appendChild($descriptionspan);

  const $updateButton = document.createElement('button');
  $updateButton.classList.add('entryid-update-' + object.entryID);
  const $deleteButton = document.createElement('button');
  $deleteButton.classList.add('entryid-delete-' + object.entryID);

  const $buttonspan = document.createElement('span');
  $updateButton.textContent = 'Update';
  $deleteButton.textContent = 'Delete';
  $buttonspan.appendChild($updateButton);
  $buttonspan.appendChild($deleteButton);
  $tdDescription.appendChild($buttonspan);

  $tr.appendChild($tdTime);
  $tr.appendChild($tdDescription);

  $eventRowContainer.appendChild($tr);
}

// delete button below//
