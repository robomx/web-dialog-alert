class RoboMxWebDialogAlert extends HTMLElement {
    constructor() {
        super();
        var dlg = document.createElement("DIV");
        var shadow = this.attachShadow({ mode: 'open' });

        var t = this.getAttribute('title') || 'Dialog title';
        var d = this.getAttribute('description') || 'Dialog description';
        var i = this.getAttribute('imgSrc') || null;
        var width = this.getAttribute('imgWidth') || '200px';
        var height = this.getAttribute('imgHeight') || '200px';
        var position = this.getAttribute('position');
        var dark = this.getAttribute('darkMode') || false;
        var link = this.getAttribute('link') || 'https://example.com';
        var action = this.getAttribute('actionText') || 'Learn More'

        dlg.innerHTML = `
    <div class="rmx-wda-card">
        <img  class="rmx-wda-img" width="` + width + `" height="`+ height + `" src=` + i + ` alt="" >
        <div class="rmx-wda-card-content">
            <h4 class="rmx-wda-title">` + t + `</h4>
            <h4 class="rmx-wda-subtitle">` + d + `</h4>
            <div class="rmx-wda-buttons">
                <button class="rmx-wda-later" onclick="document.getElementsByTagName('robomx-webdialogalert')[0].style.display = 'none';sessionStorage.setItem('roboMxWebDialog', false);">Later</button>
                <button class="rmx-wda-visit"><a class="rmx-wda-wba-href" target="_blank" href="` + link + `">` + action + `</a></button>
            </div>
        </div>

    </div>
`;

        // define css for main element
        this.style.position = 'fixed';

        // align element on sheet
        switch (position) {
            case 'top-left':
                this.style.top = '0';
                this.style.left = '0';
                break;
            case 'top-right':
                this.style.top = '0';
                this.style.right = '0';
                break;
            case 'bottom-right':
                this.style.bottom = '0';
                this.style.right = '0';
                break;
            case 'center':
                this.style.margin = 'auto';
                this.style.display = 'flex';
                this.style.justifyContent = 'center';
                this.style.width = "100%";
                break;
            default:
                // by default align the element bottom-left
                this.style.bottom = '0';
                this.style.left = '0';
        }

        var style = document.createElement('STYLE');

        // set colors
        var bgClr = this.getAttribute('bgColor') || '#fff'
        var txtClr = this.getAttribute('txtColor') || '#373737'
        var btnClr = this.getAttribute('btnColor') || '#6c6b6b'
        if (dark == 'true') {
            bgClr = '#212121';
            txtClr = '#ffffe9';
            btnClr = '#909090';
        }

        style.innerHTML = `
:root {
    font-family: 'Roboto', sans-serif;
}
button {
    cursor: pointer;
}
.rmx-wda-wba-href {
    text-decoration: none;
}
.rmx-wda-card {
    background: ` + bgClr + `;
    width: 515px;
    height: 215px;
    display: flex;
    box-shadow: 0 0px 4px #d3d3d3;
    border-radius: 5px;
    animation: pop 1s linear;
    margin: 10px;
    z-index: 9999;
}
.rmx-wda-img {
    flex: 1;
    padding: 6px;
    max-width: 200px;
    max-height: 200px;  
    margin: auto;
}
.rmx-wda-card-content {
    flex: 2;
    padding: 6px;
}
.rmx-wda-title {
    font-size: 17px;
    width: 261px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.rmx-wda-subtitle {
    max-height: 5.2em;
    overflow: hidden;
    height: 5.2em;
    line-height: 19.2px;
    color:  ` + txtClr + `;
    font-weight: lighter;
    text-align: justify;
}
.rmx-wda-buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 17px;
}
.rmx-wda-later {
    background: none;
    border: none;
    margin-right: 16px;
    font-size: 16px;
    letter-spacing: 1px;
}
.rmx-wda-visit {
    background: none;
    border: none;
    font-size: 16px;
    letter-spacing: 1px;
}
@media only screen and (max-width: 534px) {
    .rmx-wda-card {
        background: ` + bgClr + `;
        width: 98% !important;
        height: 215px;
        display: flex;
        box-shadow: 0 0px 4px #d3d3d3;
        border-radius: 5px;
        animation: pop 1s linear;
        margin: 3px !important;
        z-index: 9999;
}
.rmx-wda-img {
    display:none;
}
.rmx-wda-title {
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 95vw !important;
    word-break: break-word;
}
.rmx-wda-subtitle {
    max-height: 6.8em !important;
    overflow: hidden;
    height: 92px !important;
    line-height: 1.2;
    color: #373737;
    font-weight: lighter;
}
.rmx-wda-buttons {
        display: flex;
        justify-content: flex-end;
        margin-right: 7px;
        margin-top: -6px;
    }
    .rmx-wda-later {
        background: none;
        border: none;
        margin-right: 16px;
        font-size: 18px !important;
        letter-spacing: 0px !important;
    }
    .rmx-wda-visit {
        background: none;
        border: none;
        font-size: 18px !important;
        letter-spacing: 0px !important;
        margin-left: -4px;
    }
}
@keyframes pop {
    0% {
        transform: translate(-1000px);
    }
    100% {
        transform: none;
    }
}
`;

        // set keyframe
        if (position.includes('right')) {
            style.innerHTML = style.innerHTML.replace('translate(-1000px)', 'translate(1000px)');
        }
        // render the dialog inside the main element
        if (!sessionStorage.getItem('roboMxWebDialog')) {
            shadow.appendChild(style);
            shadow.appendChild(dlg);
        }
    }
}

customElements.define('robomx-webdialogalert', RoboMxWebDialogAlert);