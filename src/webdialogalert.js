
class RoboMxWebDialogAlert extends HTMLElement {
    constructor() {
        super();
        var dlg = document.createElement("DIV");
        var shadow = this.attachShadow({mode: 'open'});

        var t = this.getAttribute('title') || 'Dialog title';
        var d = this.getAttribute('description') || 'Dialog description';
        var i = this.getAttribute('imgSrc') || null;
        var width = this.getAttribute('imgWidth')
        var height = this.getAttribute('imgHeight')
        var position = this.getAttribute('position');
        var dark = this.getAttribute('darkMode') || false;
        var link = this.getAttribute('link') || 'https://example.com';

        dlg.innerHTML = `
<div class="robomx-wda">
    <div class="robomx-wda-columns">
        <div class="robomx-wda-column-one">
            <img class="robomx-wda-img" src=` + i + ` alt="" width="` + width + `" height="`+ height + `">
        </div>
        <div class="robomx-wda-column-two">
            <div>
                <p class="robomx-wda-title">` + t + `</p>
                <p class="robomx-wda-subtitle">` + d + `</p>
                <div class="robomx-wda-buttons">
                    <button class="robomx-wda-button-later" onclick="roboMxDialogDismiss()">Later</button>
                    <button class="robomx-wda-button-more"><a class="robomx-wba-href" target="_blank" href="` + link + `">Learn More</a></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

        // define css for main element
        this.style.position = 'fixed';

        // align element on sheet
        switch(position) {
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
        
        var style =  document.createElement('STYLE');

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

*, ::before, ::after {
    box-sizing: inherit;
}
.robomx-wda {
    background: ` + bgClr + `;
    border-radius: 5px;
    box-shadow: 0 0px 4px #d3d3d3;
    height: 210px;
    width: 511px;
    position: absolute;
    bottom: 0;
    margin: 10px;
    animation: pop 1s linear;
    margin-inline-start: 20px;
    margin-bottom: 20px;
}
.robomx-wda-columns {
    display: flex;
    height: 100%;
}
.robomx-wda-column-one {
    display: flex;
    flex-basis: 0;
    flex-grow: 2;
    flex-shrink: 1;
}
.robomx-wda-column-two {
    display: flex;
    flex-basis: 0;
    flex-grow: 3;
    flex-shrink: 1;
    padding: 0.75rem;
}
.robomx-wda-title{
    font-size: 20px;
    font-family: 'Roboto';
}
.robomx-wda-subtitle {
    text-align: justify;
    font-size: 16px;
    font-family: 'Roboto';
    height: 5em;
    overflow: hidden;
    color: ` + txtClr + `;
    font-weight: lighter;
    line-height: 20px;
}
.robomx-wda-img {
    max-width: 100%;
    height: 100%;
}
.robomx-wda-buttons {
    display: flex;
    justify-content: flex-end;
    height: 30px;
    width: 293px;
}
.robomx-wda-button-later {
    margin-right: 17px;
    background: transparent;
    border: none;
    font-family: 'Roboto';
    letter-spacing: 1px;
    font-size: 16px;
    cursor: pointer;
}
.robomx-wda-button-more {
    background: transparent;
    border: none;
    font-family: 'Roboto';
    letter-spacing: 1px;
    font-size: 16px;
    cursor: pointer;
}
@keyframes pop {
    0% {
        transform: translate(-1000px);
    }
    100% {
        transform: none;
    }
}

.robomx-wba-href {
    text-decoration: none;
    color: #000;
}

@media only screen and (max-width: 600px){
    .robomx-wda {
        background: ` + bgClr + `;
        border-radius: 5px;
        box-shadow: 0 0px 4px #d3d3d3;
        position: fixed;
        width: unset;
        height: 231px;
        bottom: 0;
        margin: 10px;
        animation: pop 1s linear;
    }
    .robomx-wda-title{
        font-size: 20px;
        font-family: 'Roboto';
    }
    .robomx-wda-subtitle {
        text-align: justify;
        font-size: 15px;
        font-family: 'Roboto';
        height: 5em;
        overflow: hidden;
        color: ` + txtClr + `;
        font-weight: lighter;
        line-height: 20px;
    }
    .robomx-wda-buttons {
        display: flex;
        justify-content: flex-end;
        height: unset;
        position: static;
        height: 50px;
        align-items: flex-end;
        width: 238px;

    }
    .robomx-wda-img {
        max-width: 100%;
        height: 180px;
        padding: 9px;
        margin: auto;
    }
    .robomx-wda-button-later {
        margin-right: 17px;
        background: transparent;
        border: none;
        font-family: 'Roboto';
        letter-spacing: 1px;
        font-size: 12px;
        cursor: pointer;
    }
    .robomx-wda-button-more {
        background: transparent;
        border: none;
        font-family: 'Roboto';
        letter-spacing: 1px;
        font-size: 12px;
        cursor: pointer;
    }
}
@media only screen and (max-width: 400px) {
    .robomx-wda {
        background: ` + bgClr + `;
        border-radius: 5px;
        box-shadow: 0 0px 4px #d3d3d3;
        position: fixed;
        width: unset;
        height: unset;
        bottom: 0;
        margin: 10px;
        animation: pop 1s linear;
    }
    .robomx-wda-title{
        font-size: 18px;
        font-family: 'Roboto';
    }
    .robomx-wda-subtitle {
        text-align: justify;
        font-size: 14px;
        font-family: 'Roboto';
        height: 5em;
        overflow: hidden;
        color: ` + txtClr + `;
        font-weight: lighter;
        line-height: 20px;
    }
    .robomx-wda-img {
        max-width: 100%;
        height: 162px;
        margin: auto;
        padding: 9px;
    }
    .robomx-wda-buttons {
        display: flex;
        justify-content: flex-end;
        height: unset;
        width: 190px;
    
    }
    .robomx-wda-button-later {
        margin-right: 17px;
        background: transparent;
        border: none;
        font-family: 'Roboto';
        letter-spacing: 1px;
        font-size: 12px;
        cursor: pointer;
    }
    .robomx-wda-button-more {
        background: transparent;
        border: none;
        font-family: 'Roboto';
        letter-spacing: 1px;
        font-size: 12px;
        cursor: pointer;
    }
}`;

            // set keyframe
            if (position.includes('right')) {
                style.innerHTML = style.innerHTML.replace('translate(-1000px)', 'translate(1000px)');
            }
        // render the dialog inside the main element
        if(!sessionStorage.getItem('roboMxWebDialog') ){
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