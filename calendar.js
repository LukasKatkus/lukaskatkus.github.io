$(document).ready(function(){
  $('#calendar').fullCalendar({
    locale: 'lt',
    editable: true,
    selectable: true,
    select: function(start, end, jsEvent, view) {
      var title = prompt('Įveskite įvykį:');
      if (title) {
          var eventData = {
              title: title,
              start: start,
              end: end,
              allDay: true,
              color: '#05445e' // Set the color for the new event
          };
          $('#calendar').fullCalendar('renderEvent', eventData, true);
      }
      $('#calendar').fullCalendar('unselect');
  },
    eventClick: function(calEvent, jsEvent, view) {
        var action = prompt('Ar norite redaguoti ar ištrinti įvykį? (Rašykite "edit" arba "delete")');
        if (action === 'edit') {
            var newTitle = prompt('Pakeiskite įvykį:', calEvent.title);
            if (newTitle) {
                calEvent.title = newTitle;
                $('#calendar').fullCalendar('updateEvent', calEvent);
            }
        } else if (action === 'delete') {
            var deleteConfirmation = confirm('Ar jūs tikrai norite ištrinti įvykį?');
            if (deleteConfirmation) {
                $('#calendar').fullCalendar('removeEvents', calEvent._id);
            }
        } else {
            alert('Neteisingas prašymas, rašykite "edit" arba "delete".');
        }
    },
    header: {
      left: 'month, agendaWeek, agendaDay, list',
      center: 'title',
      right: 'prev, today, next'
    },
    events:[{
      title: 'Kaledos',
      start: '2023-12-25T08:00',
      end: '2023-12-26T21:00',
      color: '#05445e'
    },
    {
      title: 'Kučinskas',
      start: '2023-12-24T08:00',
      end: '2023-12-24T22:00',
      color: '#05445e'
    }
    ],
    dayRender: function(date,cell)
    {
      var today = $.fullCalendar.moment();
      if (date.isSame(today, 'day')) {
        cell.css("background", "#75e6da");
      }
      if (date.day() === 0 || date.day() === 6) {
        cell.css("background", "#d4f1f4");
      }
    },
  });
});
