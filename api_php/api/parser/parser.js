/*
This script is the clone for the existing API.
Used PhantomJs on http://itsthisforthat.com to crawl this+that values
*/
var page = require("webpage").create();
page.settings.userAgent =
  "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36";
var url = "http://itsthisforthat.com";
page.open(url, function(status) {
  var this_value = page.evaluate(function() {
    //retrieving 'this' value for 'this+that' combination
    return document.getElementById("this").innerHTML;
  });
  var that_value = page.evaluate(function() {
    //retrieving 'that' value for 'this+that' combination
    return document.getElementById("that").innerHTML;
  });
  //logging crawled data to console
  console.log('{"this":"' + this_value + '",' + '"that":"' + that_value + '"}');
  phantom.exit();
});
