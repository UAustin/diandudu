var log = function() {
    console.log.apply(console, arguments);
}
var e = function(selector) {
    return document.querySelector(selector)
}

var es = function(selector) {
    return document.querySelectorAll(selector)
}

var appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

var bindEvent = function(element, event, callback) {
    element.addEventListener(event, callback)
}
var bindEventAll = function(selector, event, callback) {
    var arr = es(selector)
    for (var i = 0; i < arr.length; i++) {
        var e = arr[i]
        bindEvent(e, event, callback)
    }
}
var containsClass = function(element, className) {
    return element.classList.contains(className)
}

var addClass = function(element, className) {
    element.classList.add(className)
}

var deleteClass = function(element, className) {
    element.classList.remove(className)
}

var toggleClass = function(element, className) {
    if (element != null) {
        if (containsClass(element, className)) {
            deleteClass(element, className)
        } else {
            addClass(element, className)
        }
    }
}

var removeClassAll = function(elements, className) {
    for (var i = 0; i < elements.length; i++) {
        var e = elements[i]
        deleteClass(e, className)
    }
}
