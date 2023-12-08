$(document).ready(function(){
  $('#calendar').fullCalendar({
    locale: 'lt',
    selectable: true,
    selectHelper: true,
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
    dayClick: function(date, jsEvent, view) {
      const modal = document.querySelector('#modal');
      openModal(modal);
      
      document.querySelector('[data-add-button]').addEventListener('click', () => {
        const input = document.querySelector('.modal-body input');
        const title = input.value.trim();
        
        if (title) {
          const eventData = {
            title: title,
            start: date.format(), // Format date as FullCalendar requires
            allDay: true // Assuming events are all-day events
          };
          $('#calendar').fullCalendar('renderEvent', eventData, true);
          closeModal(document.getElementById('modal'));
        }
      });
    },
  });
  
  document.addEventListener('click', function (event) {
    if (event.target.dataset.closeButton !== undefined) {
      const modal = event.target.closest('.modal');
      closeModal(modal);
    }
  });

  openModalButtons.forEach(button =>{
    button.addEventListener('click', ()=> {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal);
    })
  });

  function openModal(modal){
    if(modal == null) return;
    modal.classList.add('active');
  }

  function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('active');
  }
});
