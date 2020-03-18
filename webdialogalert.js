
var elm = document.getElementsByTagName('robomx-webdialogalert')[0]
var dlg = document.createElement("DIALOG");

const attr = element[0].getAttribute;
var title = attr('title') || 'Dialog title';
var description = attr('description') || 'Dialog description';
var image = attr('imgSrc') || null;
var width = attr('imgWidth') || "200px";
var height = attr('imgHeight') || "200px";
var position = attr('position');

dlg.setAttribute('open', 'open')

dlg.innerHTML = '<img width="200px" src=' + image +'></img<h2>' + title + '</h2><br/>' + description;
dlg.style.position = 'relative';
dlg.style.width = '300px';
dlg.style.height = '200px';
dlg.style.display = 'flex';

// define css for main element
const elmStl = elm.style;
elmStl.position = 'fixed';
elmStl.margin = '10px';

// align element on sheet
switch(position) {
    case 'top-left':
        elmStl.top = '0';
        elmStl.left = '0';
        break;
    case 'top-right':
        elmStl.top = '0';
        elmStl.right = '0';
        break;
    case 'bottom-right':
        elmStl.bottom = '0';
        elmStl.right = '0';
        break;
    case 'center':
        elmStl.width = '100%';
        elmStl.height = '100%';
        elmStl.left = '0';
        elmStl.top = '0';
        elmStl.display = 'flex';
        break;
    default:
        // by default align the element bottom-left
        elmStl.bottom = '0';
        elmStl.left = '0';
}

// render the dialog inside the main element
elm.appendChild(dialog);