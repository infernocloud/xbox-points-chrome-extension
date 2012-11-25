function getElementsByClassName(classname,node) {
  if (node.getElementsByClassName) { // use native implementation if available
    return node.getElementsByClassName(classname);
  } else {
    return (function getElementsByClass(searchClass,node) {
        if ( node == null )
          node = document;
        var classElements = [],
            els = node.getElementsByTagName("*"),
            elsLen = els.length,
            pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;

        for (i = 0, j = 0; i < elsLen; i++) {
          if ( pattern.test(els[i].className) ) {
              classElements[j] = els[i];
              j++;
          }
        }
        return classElements;
    })(classname, node);
  }
}

function updatePoints() {
	var elements = getElementsByClassName("ProductPrice",document),
		n = elements.length;
	
	for (var i = 0; i < n; i++) {
		var e = elements[i];
		var text = e.innerHTML.replace(",", "");
		var value = parseFloat(text);
		
		if (value > 0) {
			e.innerHTML = "$" + value/80.0;
			e.title = "Microsoft Points: " + text;
		}
	}
}

updatePoints();