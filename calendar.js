$(document).ready(function() {
    $('#calendar').fullCalendar({
	defaultView: 'month',
	events: [
      {
        title: 'My Birthday',
        start: '2024-01-10' // change with current date
      }
      ] 
	});
});
