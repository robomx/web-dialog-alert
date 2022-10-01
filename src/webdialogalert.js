class RoboMxWebDialogAlert extends HTMLElement {
  constructor() {
    super();
    var div = document.createElement("DIV");
    var shadow = this.attachShadow({ mode: "open" });
    var title = this.getAttribute("title") || "Dialog title";
    var desc = this.getAttribute("description") || "Dialog description";
    var imgSrc = this.getAttribute("imgSrc") || null;
    var position = this.getAttribute("position");
    var dark = this.getAttribute("darkMode") || false;
    var link = this.getAttribute("link") || "https://example.com";

    div.innerHTML =
      `
    <div class="robomx-card">
        <img  class="robomx-card-img"  src=` +
      imgSrc +
      ` alt="" >
        <div class="robomx-card-content">
            <h3 class="robomx-title">` +
      title +
      `</h3>
            <p class="robomx-subtitle">` +
      desc +
      `</p>
      <div class="robomx-buttons">
      <button class="robomx-later" onclick="roboMxDialogDismiss()">Later</button>
      <button class="robomx-visit"><a class="robomx-wba-href" target="_blank" href="` +
      link +
      `">Learn More</a></button>
      </div> 
        </div>
       

    </div>
    `;
    // define css for main element
    this.style.position = "fixed";

    // align element on sheet
    switch (position) {
      case "top-left":
        this.style.top = "0";
        this.style.left = "0";
        break;
      case "top-right":
        this.style.top = "0";
        this.style.right = "0";
        break;
      case "bottom-right":
        this.style.bottom = "0";
        this.style.right = "0";
        break;
      case "center":
        this.style.margin = "auto";
        this.style.display = "flex";
        this.style.justifyContent = "center";
        this.style.width = "100%";
        break;
      default:
        // by default align the element bottom-left
        this.style.bottom = "0";
        this.style.left = "0";
    }

    var style = document.createElement("STYLE");

    // set colors
    var bgClr = this.getAttribute("bgColor") || "#fff";
    var txtClr = this.getAttribute("txtColor") || "#494848";
    if (dark == "true") {
      bgClr = "#202124";
      txtClr = "#ffffe9";
      btnClr = "#909090";
    }

    style.innerHTML =
      `

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
    background: ` +
      bgClr +
      `;
    width: 515px;
    height: 200px;
    display: flex;
    box-shadow: 0 0px 4px #d3d3d3;
    border-radius: 5px;
    animation: pop 1s linear;
    margin: 10px;
    z-index: 9999;
}

.robomx-card-img {
    flex: 1;
    padding: 6px;
    width: 200px;
    border-radius: 8px
}

.robomx-card-content {
    flex: auto;
    padding: 6px;
}

.robomx-title {
    margin-top: 10px;
    margin-bottom: 0;
    color: ${txtClr}
}

.robomx-subtitle {
    overflow: hidden;
    height: calc(140px - 20px);
    line-height: 20.2px;
    word-break: break-word;
    color:  ` +
      txtClr +
      `;
    font-weight: lighter;
    margin-top: 12px;
    margin-bottom: 10px;
}

.robomx-buttons {
    position: absolute;
    bottom: 16px;
    right: 20px;
    
}

.robomx-later {
    background: none;
    border: none;
    margin-right: 16px;
    font-size: 14px;
    letter-spacing: 1px;
    color:${txtClr}
}

.robomx-visit{
    background: none;
    border: none;
    font-size: 14px;
    letter-spacing: 1px;
}
.robomx-wba-href {
  color:${txtClr}
}
@media only screen and (max-width: 354px) {
    .robomx-card {
        background: ` +
      bgClr +
      `;
        width: 515px;
        height: 215px;
        display: flex;
        box-shadow: 0 0px 4px #d3d3d3;
        border-radius: 5px;
        animation: pop 1s linear;
        margin: 3px !important;
        z-index: 9999;
}
.robomx-buttons {
        display: flex;
        justify-content: flex-end;
        margin-right: 7px;
        margin-top: -6px;
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
// @media screen and (-webkit-min-device-pixel-ratio:0){
//   .robomx-card-img {
//     flex: 1;
//     padding: 6px;
//     height: 200px;
//     width: 200px;
// } 
}
@-moz-document url-prefix() {
  .robomx-card-img {
    flex: 1;
    padding: 6px;
    height: unset;
    width: unset;
} 
}
@media only screen and (max-width: 368px) {
    .robomx-buttons {
    display: flex;
    justify-content: flex-end;
    margin-right: 7px;
    margin-top: -13px;
}
}
@media only screen and (max-width: 600px) {
    .robomx-card {
        background: ` +
      bgClr +
      `;
        width: 100%;
        height: 200px;
        display: flex;
        box-shadow: 0 0px 4px #d3d3d3;
        animation: pop 1s linear;
        margin: 3px !important;
        z-index: 9999;
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
        color:  ` +
      txtClr +
      `;
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
        font-size: 14px;
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
    if (position.includes("right")) {
      style.innerHTML = style.innerHTML.replace(
        "translate(-1000px)",
        "translate(1000px)"
      );
    }
    // render the dialog inside the main element
    if (!sessionStorage.getItem("roboMxWebDialog")) {
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
}

function roboMxWebDialogInit() {}

function roboMxDialogDismiss() {
  document.getElementsByTagName("robomx-webdialogalert")[0].style.display =
    "none";
  sessionStorage.setItem("roboMxWebDialog", false);
}

customElements.define("robomx-webdialogalert", RoboMxWebDialogAlert);
