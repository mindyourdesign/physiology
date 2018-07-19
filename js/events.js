$(document).ready(function() {
	$('#journalclub').hide();
	$('#eventsrowhold').hide();
	$('#departmental').hide();
	$('#eventscal').addClass('eventscalfixedheight');
	$('#th1').addClass('tabheadactive');

   $('#th1').on('click', function() {
   	$('#seminars').show();
   	$('#journalclub').hide();
	$('#eventsrowhold').hide();
	$('#departmental').hide();
	$('#eventscal').addClass('eventscalfixedheight');
	$('#th1').addClass('tabheadactive');
	$('#th2').removeClass('tabheadactive');
	$('#th3').removeClass('tabheadactive');
	$('#th4').removeClass('tabheadactive');
   });

   $('#th2').on('click', function() {
   	$('#seminars').hide();
   	$('#journalclub').show();
	$('#eventsrowhold').hide();
	$('#departmental').hide();
	$('#eventscal').addClass('eventscalfixedheight');
	$('#th1').removeClass('tabheadactive');
	$('#th2').addClass('tabheadactive');
	$('#th3').removeClass('tabheadactive');
	$('#th4').removeClass('tabheadactive');
   });

   $('#th3').on('click', function() {
   	$('#seminars').hide();
   	$('#journalclub').hide();
	$('#eventsrowhold').show();
	$('#departmental').hide();
	$('#eventscal').addClass('eventscalfixedheight');
	$('#th1').removeClass('tabheadactive');
	$('#th2').removeClass('tabheadactive');
	$('#th3').addClass('tabheadactive');
	$('#th4').removeClass('tabheadactive');
   });

   $('#th4').on('click', function() {
   	$('#seminars').hide();
   	$('#journalclub').hide();
	$('#eventsrowhold').hide();
	$('#departmental').show();
	$('#eventscal').removeClass('eventscalfixedheight');
	$('#th1').removeClass('tabheadactive');
	$('#th2').removeClass('tabheadactive');
	$('#th3').removeClass('tabheadactive');
	$('#th4').addClass('tabheadactive');
   });

});