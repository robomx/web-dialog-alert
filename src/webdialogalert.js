class RoboMxWebDialogAlert extends HTMLElement {
    constructor() {
        super();
        var dlg = document.createElement("DIV");
        var shadow = this.attachShadow({ mode: 'open' });

        var t = this.getAttribute('title') || 'Dialog title';
        var d = this.getAttribute('description') || 'Dialog description';
        var i = this.getAttribute('imgSrc') || null;
        var width = this.getAttribute('imgWidth')
        var height = this.getAttribute('imgHeight')
        var position = this.getAttribute('position');
        var dark = this.getAttribute('darkMode') || false;
        var link = this.getAttribute('link') || 'https://example.com';

        dlg.innerHTML = `
    <div class="robomx-card">
        <img  class="robomx-card-img"  src=` + i + ` alt="" >
        <div class="robomx-card-content">
            <h4 class="robomx-title">` + t + `</h4>
            <h4 class="robomx-subtitle">` + d + `</h4>
            <div class="robomx-buttons">
                <button class="robomx-later"><a class="robomx-wba-href" target="_blank" href="` + link + `">Later</a></button>
                <button class="robomx-visit"><a class="robomx-wba-href" target="_blank" href="` + link + `">Learn More</a></button>
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
.robomx-wba-href {
    text-decoration: none;
}
.robomx-card {
    background: ` + bgClr + `;
    width: 515px;
    height: 215px;
    display: flex;
    box-shadow: 0 0px 4px #d3d3d3;
    border-radius: 5px;
    animation: pop 1s linear;
    margin: 10px;
}

.robomx-card-img {
    flex: 1;
    padding: 6px;
}

.robomx-card-content {
    flex: 2;
    padding: 6px;
}

.robomx-title {
    font-size: 17px;
}

.robomx-subtitle {
    max-height: 5.2em;
    overflow: hidden;
    height: 5.2em;
    line-height: 20.2px;
    color:  ` + txtClr + `;
    font-weight: lighter;
}

.robomx-buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 17px;
}

.robomx-later {
    background: none;
    border: none;
    margin-right: 16px;
    font-size: 16px;
    letter-spacing: 1px;
}

.robomx-visit {
    background: none;
    border: none;
    font-size: 16px;
    letter-spacing: 1px;
}

@media only screen and (max-width: 354px) {
    .robomx-card {
        background: ` + bgClr + `;
        width: 515px;
        height: 215px;
        display: flex;
        box-shadow: 0 0px 4px #d3d3d3;
        border-radius: 5px;
        animation: pop 1s linear;
        margin: 3px !important;
}
    .robomx-later {
        background: none;
        border: none;
        margin-right: 16px;
        font-size: 10px !important;
        letter-spacing: 1px;
    }
    .robomx-visit {
        background: none;
        border: none;
        font-size: 10px !important;
        letter-spacing: 1px;
        margin-left: -4px;
    }
}

@media only screen and (max-width: 600px) {
    .robomx-card {
        background: ` + bgClr + `;
        width: 100%;
        height: 200px;
        display: flex;
        box-shadow: 0 0px 4px #d3d3d3;
        animation: pop 1s linear;
        margin: 3px !important;
    }
    .robomx-card-img {
        flex: 1;
        padding: 4px;
        max-width: 150px;
        height: 150px;
        margin: auto;
    }
    .robomx-subtitle {
        max-height: 4.8em;
        overflow: hidden;
        height: 4.8em;
        line-height: 1.2;
        color:  ` + txtClr + `;
        font-weight: lighter;
    }
    .robomx-buttons {
        display: flex;
        justify-content: flex-end;
        margin-right: 7px;
    }
    .robomx-later {
        background: none;
        border: none;
        margin-right: 16px;
        font-size: 15px;
        letter-spacing: 1px;
    }
    .robomx-visit {
        background: none;
        border: none;
        font-size: 15px;
        letter-spacing: 1px;
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

function roboMxDialogDismiss() {
    document.getElementsByTagName('robomx-webdialogalert')[0].style.display = "none";
    sessionStorage.setItem('roboMxWebDialog', false);
}

customElements.define('robomx-webdialogalert', RoboMxWebDialogAlert);