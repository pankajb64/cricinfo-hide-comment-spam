$('#live_iframe').load(function(){
   $(this).contents().find('.commsTable').contents().find('td[colspan=2]').not('.commsname').not('.endofover').each (function () {
	   var text = $('p', this).text();
	   if(text.indexOf(': "') >= 0)
		$(this).css('background-color', 'black');
   });
});
