$(document).ready(function() {
	$('#journalclub').hide();
	$('#eventsrowhold').hide();
	$('#departmental').hide();
	$('#eventscal').addClass('eventscalfixedheight');

   $('#th1').on('click', function() {
   	$('#seminars').show();
   	$('#journalclub').hide();
	$('#eventsrowhold').hide();
	$('#departmental').hide();
	$('#eventscal').addClass('eventscalfixedheight');
   });

   $('#th2').on('click', function() {
   	$('#seminars').hide();
   	$('#journalclub').show();
	$('#eventsrowhold').hide();
	$('#departmental').hide();
	$('#eventscal').removeClass('eventscalfixedheight');
   });

   $('#th3').on('click', function() {
   	$('#seminars').hide();
   	$('#journalclub').hide();
	$('#eventsrowhold').show();
	$('#departmental').hide();
	$('#eventscal').removeClass('eventscalfixedheight');
   });

   $('#th4').on('click', function() {
   	$('#seminars').hide();
   	$('#journalclub').hide();
	$('#eventsrowhold').hide();
	$('#departmental').show();
	$('#eventscal').removeClass('eventscalfixedheight');
   });

});