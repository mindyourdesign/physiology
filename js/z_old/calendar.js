/* Loads the Google data JavaScript client library */
google.load("gdata", "2.x");

function init() {
  // init the Google data JS client library with an error handler
  google.gdata.client.init(handleGDError);
  // load the code.google.com developer calendar
  loadDeveloperCalendar();
}

/**
 * Loads the Google Developers Event Calendar
 */
function loadDeveloperCalendar() {
  var calendarUrl = 'https://www.google.com/calendar/feeds/upennphysiology%40gmail.com/public/full';
  loadCalendar(calendarUrl);
}

/**
 * Adds a leading zero to a single-digit number.  Used for displaying dates.
 */
function padNumber(num) {
  if (num <= 9) {
    return "0" + num;
  }
  return num;
}

/**
 * Determines the full calendarUrl based upon the calendarAddress
 * argument and calls loadCalendar with the calendarUrl value.
 *
 * @param {string} calendarAddress is the email-style address for the calendar
 */ 


/**
 * Uses Google data JS client library to retrieve a calendar feed from the specified
 * URL.  The feed is controlled by several query parameters and a callback 
 * function is called to process the feed results.
 *
 * @param {string} calendarUrl is the URL for a public calendar feed
 */  
function loadCalendar(calendarUrl) {
  var service = new 
      google.gdata.calendar.CalendarService('gdata-js-client-samples-simple');
  var query = new google.gdata.calendar.CalendarEventQuery(calendarUrl);
  query.setOrderBy('starttime');
  query.setSortOrder('ascending');
  query.setFutureEvents(true);
  query.setSingleEvents(true);
  query.setMaxResults(10);

  service.getEventsFeed(query, listEvents, handleGDError);

}

/**
 * Callback function for the Google data JS client library to call when an error
 * occurs during the retrieval of the feed.  Details available depend partly
 * on the web browser, but this shows a few basic examples. In the case of
 * a privileged environment using ClientLogin authentication, there may also
 * be an e.type attribute in some cases.
 *
 * @param {Error} e is an instance of an Error 
 */
function handleGDError(e) {
  document.getElementById('jsSourceFinal').setAttribute('style', 
      'display:none');
  if (e instanceof Error) {
    /* alert with the error line number, file and message */
    alert('Error at line ' + e.lineNumber +
          ' in ' + e.fileName + '\n' +
          'Message: ' + e.message);
    /* if available, output HTTP error code and status text */
    if (e.cause) {
      var status = e.cause.status;
      var statusText = e.cause.statusText;
      alert('Root cause: HTTP error ' + status + ' with status text of: ' + 
            statusText);
    }
  } else {
    alert(e.toString());
  }
}

/**
 * Callback function for the Google data JS client library to call with a feed 
 * of events retrieved.
 *
 * Creates an unordered list of events in a human-readable form.  This list of
 * events is added into a div called 'events'.  The title for the calendar is
 * placed in a div called 'calendarTitle'
 *
 * @param {json} feedRoot is the root of the feed, containing all entries 
 */ 
function listEvents(feedRoot) {
  console.log(feedRoot);
  var entries = feedRoot.feed.getEntries();
  console.log(entries);
  var eventDiv = document.getElementById('calendar');
  if (eventDiv.childNodes.length > 0) {
    eventDiv.removeChild(eventDiv.childNodes[0]);
  }	  
  /* create a new unordered list */
  var ul = document.createElement('ul');
  
  /* loop through each event in the feed */
  var len = entries.length;
  for (var i = 0; i < len; i++) {
    var entry = entries[i];
    var title = entry.getTitle().getText();
    var loc = entry.getLocations()[0].getValueString();
    var startDateTime = null;
    var startJSDate = null;
    var times = entry.getTimes();
    if (times.length > 0) {
      startDateTime = times[0].getStartTime();
      startJSDate = startDateTime.getDate();
    }
    var entryLinkHref = null;
    if (entry.getHtmlLink() != null) {
      entryLinkHref = entry.getHtmlLink().getHref();
    }
    var x = startJSDate.getYear();
    var x = x.toString();
    var year = x.substr(1,2);
    var dateString = (startJSDate.getMonth() + 1) + "/" + startJSDate.getDate() + "/" + year + " - " + loc;
    if (!startDateTime.isDateOnly()) {
/*
      dateString += " - " + startJSDate.getHours() + ":" + 
          padNumber(startJSDate.getMinutes());
*/
    }
    var li = document.createElement('li');

    /* if we have a link to the event, create an 'a' element */
    if (entryLinkHref != null) {
      entryLink = document.createElement('a');
      entryLink.setAttribute('href', entryLinkHref);
      entryLink.setAttribute('target', '_blank');
      entryLink.appendChild(document.createTextNode(title));
      li.appendChild(entryLink);
      li.appendChild(document.createTextNode(dateString));
    } else {
      li.appendChild(document.createTextNode(title + dateString));
    }	    

    /* append the list item onto the unordered list */
    ul.appendChild(li);
  }
  eventDiv.appendChild(ul);
  /* append full calendar link */
  $('#events').append('<br class="clear"><div id="view-month"><a href="events.html">View Full Calendar</div>');

}

google.setOnLoadCallback(init);
//-->