chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      //var firstHref = $("a[href^='http']").eq(0).attr("href");

      //console.log(firstHref);

      var product = $(".qa-product-title").text()
      alert('You are trying to buy '+product+'.  Put that thing down!!!');
    }
  }
);