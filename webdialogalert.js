var elm = document.getElementsByTagName('robomx-webdialogalert')[0];
var dlg = document.createElement("DIV");

// const attr = elm.getAttribute;
var title = elm.getAttribute('title') || 'Dialog title';
var description = elm.getAttribute('description') || 'Dialog description';
var image = elm.getAttribute('imgSrc') || null;
var width = elm.getAttribute('imgWidth') || "200px";
var height = elm.getAttribute('imgHeight') || "200px";
var position = elm.getAttribute('position');


dlg.innerHTML = `<div class="roboMxPopContainer" draggable="true">
        <div class="popHeader">
            <h3 class="headerText">` + title + `</h3>
        </div>
        <div class="popContentContainer">
            <div class="popContent">
                <div class="roboMxImage"></div>
                <h4 class='contentText'>` + description + `</h4>
            </div>
            <div class="popButtons">
                <button class="NotKnow">Not Know</button>
                <button class="LearnMore">Learn More</button>
            </div>
        </div>
    </div>`;


// define css for main element
const elmStl = elm.style;
elmStl.position = 'fixed';

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
        elmStl.margin = 'auto';
        elmStl.display = 'flex';
        elmStl.justifyContent = 'center';
        elmStl.width = "100%";
        break;
    default:
        // by default align the element bottom-left
        elmStl.bottom = '0';
        elmStl.left = '0';
}

var style =  document.createElement('STYLE');
style.innerHTML = `.roboMxPopContainer {
    background: #302B2B;
    height: 250px;
    width: 500px;
    border-radius: 5px;
    box-shadow: 0 0 6px;
    position: relative;
    animation: pop 1s linear;
    margin: 10px;
}

.popHeader {
    background: #393636;
    height: 55px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 4px 4px #000000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.headerText {
    color: white;
    font-family: 'Roboto';
}

.popContent {
    display: flex;
    flex-direction: row;
}


.contentText {
    color: white;
    display: flex;
    font-family: 'Roboto';
    font-weight: lighter;
}
.LearnMore {
    height: 43px;
    width: 128px;
    border: none;
    margin: 8px;
    background-color: #fff0;
    font-size: 15px;
    color: white;
    font-weight: bold;
}
.NotKnow {
    height: 43px;
    width: 128px;
    border: none;
    margin: 8px;
    background-color: #fff0;
    font-size: 15px;
    color: #c6c5c5;
    font-weight: bold;
}

.popButtons {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -63px;
    font-family: 'Roboto';
}
.roboMxImageCover {
       height: 176px;
    width: 176px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 11px;
}

@keyframes pop {
    0% {
        transform: translate(-1000px);
    }
    100% {
        transform: none;
    }
}`

// render the dialog inside the main element
elm.appendChild(dlg);
elm.appendChild(style);


if (image) {
    var img = document.createElement('IMG');
    img.setAttribute('height', height);
    img.setAttribute('width', width);
    img.setAttribute('class', 'roboMxImageCover')
    img.setAttribute('src', image);
    document.getElementsByClassName('roboMxImage')[0].appendChild(img);
}