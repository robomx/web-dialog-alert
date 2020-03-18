
var element = document.getElementsByTagName('robomx-webdialogalert')
var dialog = document.createElement("DIALOG");


var title = element[0].getAttribute('title') || 'Dialog title';
var description = element[0].getAttribute('description') || 'Dialog description';
var image = element[0].getAttribute('imgSrc') || null;
var width = element[0].getAttribute('imgWidth') || "200px";
var height = element[0].getAttribute('imgHeight') || "200px";
var position = element[0].getAttribute('position');

dialog.setAttribute('open', 'open')

dialog.innerHTML = '<img width="200px" src=' + image +'></img<h2>' + title + '</h2><br/>' + description;
dialog.style.position = 'relative';
dialog.style.width = '300px';
dialog.style.height = '200px';
dialog.style.display = 'flex';

// define css for main element
element[0].style.position = 'fixed';
element[0].style.margin = '10px';

// align element on sheet
switch(position) {
    case 'top-left':
        element[0].style.top = '0';
        element[0].style.left = '0';
        break;
    case 'top-right':
        element[0].style.top = '0';
        element[0].style.right = '0';
        break;
    case 'bottom-right':
        element[0].style.bottom = '0';
        element[0].style.right = '0';
        break;
    case 'center':
        element[0].style.width = '100%';
        element[0].style.height = '100%';
        element[0].style.left = '0';
        element[0].style.top = '0';
        element[0].style.display = 'flex';
        break;
    default:
        // by default align the element bottom-left
        element[0].style.bottom = '0';
        element[0].style.left = '0';
}

// render the dialog inside the main element
element[0].appendChild(dialog);