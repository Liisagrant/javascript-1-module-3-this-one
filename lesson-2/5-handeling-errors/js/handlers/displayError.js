//  i want a function which takes some message/
// and it returns a html tag with this message in it.

function display (message = "some error happened. so sorry") {
    return `<div class="error">${message}</div>`;
}