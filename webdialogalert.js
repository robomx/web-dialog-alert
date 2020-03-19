var elm = document.getElementsByTagName('robomx-webdialogalert')[0];
var dlg = document.createElement("DIV");

// const attr = elm.getAttribute;
var title = elm.getAttribute('title') || 'Dialog title';
var description = elm.getAttribute('description') || 'Dialog description';
var image = elm.getAttribute('imgSrc') || null;
var width = elm.getAttribute('imgWidth') || "200px";
var height = elm.getAttribute('imgHeight') || "200px";
var position = elm.getAttribute('position');
var dark = elm.getAttribute('darkMode') || false;

dlg.innerHTML = `<div class="roboMxPopContainer">
        <div class="roboMxPopHeader">
            <h3 class="roboMxHeaderText">` + title + `</h3>
        </div>
        <div class="roboMxPopContentContainer">
            <div class="roboMxPopContent">
                <div class="roboMxImage"></div>
                <h4 class='roboMxContentText'>` + description + `</h4>
            </div>
          
            </div>
            <div class="roboMxGroupButtons">
            <p class="roboMxLater" onclick= "roboMxDialogDismiss()">Later</p>
            <p class="roboMxLearnMore">Learn More</p>
            </div>
        </div>
    </div>`;

function roboMxDialogDismiss() {
    elm.style.display = "none";
    sessionStorage.setItem('roboMxWebDialog', false);
}

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

// set colors
var bgClr = elm.getAttribute('bgColor') || '#fff'
var txtClr = elm.getAttribute('txtColor') || '#373737'
var btnClr = elm.getAttribute('btnColor') || '#6c6b6b'
if (dark == 'true') {
    bgClr = '#212121';
    txtClr = '#ffffe9';
    btnClr = '#909090';
}

style.innerHTML = `
.roboMxPopContainer {
    background: ` + bgClr + `;
    height: 279px;
    width: 500px;
    border-radius: 5px;
    position: relative;
    animation: pop 1s linear;
    margin: 10px;
    border: 1px solid #cacaca;
    box-shadow: 0 0px 13px #d0cbcb  
}
.roboMxPopHeader {
    background: ` + bgClr + `;
    height: 55px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.roboMxHeaderText {
    color: ` + txtClr + `;
}
.roboMxPopContent {
    display: flex;
    flex-direction: row;
}
.roboMxPopContentContainer {
    height: 194px;
    display: flex;
    align-items: flex-end;
}
.roboMxContentText {
    color: ` + txtClr + `;
    display: flex;
    padding: 5px;
    word-wrap: anywhere;
    width: 279px;
    line-height: 22px;
    font-weight: lighter;
}
.roboMxGroupButtons {
    display: flex;
    justify-content: flex-end;
    align-items: start;
    position: relative;
    top: -16px;
}
.roboMxLater {
    position: relative;
    left: -44px;
    color: ` + btnClr + `;
    cursor: pointer;
}
.roboMxLearnMore {
    position: relative;
    left: -18px;
    display: flex;
    color: ` + txtClr + `;
    cursor: pointer;
    width: 103px;
    justify-content: flex-end;
    
}
.roboMxImage {
    position: relative;
    top: 3px;
}
.roboMxImageCover {
    height: 176px;
    width: 176px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 11px;
    border-radius: 6px;
}
@keyframes pop {
    0% {
        transform: translate(-1000px);
    }
    100% {
        transform: none;
    }
}`

// set keyframe 
if (position.includes('right')) {
    style.innerHTML = style.innerHTML.replace('translate(-1000px)', 'translate(1000px)')
}

// render the dialog inside the main element
if(sessionStorage.getItem('roboMxWebDialog') ){
    
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
}