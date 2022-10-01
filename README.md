# Web Floating Dialog
[![HitCount](http://hits.dwyl.com/RoboMx/web-dialog-alert.svg)](http://hits.dwyl.com/RoboMx/web-dialog-alert)

A dialog plugin to alert your website users about any important information.

## Motivation
Inspired from paper dialog seen on YouTube during COVID-19 outbreak.

## How to integrate?

#### Using NPM:
* Install package.

    `npm i robomx-webdialogalert`

* Add import.

    `import 'robomx-webdialogalert/dist/webdialogalert';`

### Using JS script:
* Add following line to bottom of your body tag.

    `<script type="text/javascript" src="https://unpkg.com/robomx-webdialogalert@latest/dist/webdialogalert.min.js"></script>`

* Add `robomx-webdialogalert` tag before script file.
    Example:

        <robomx-webdialogalert
            title="Dialog title"
            description="Dialog description"
            imgSrc="sample.png"
            position="bottom-left"
            link="example.com"
            txtColor="red"
        ></robomx-webdialogalert>



## Variables

| Attribute | Default | Accepts | Note|
| --------- | ------- | --------|------- |
| `title`     | `Dialog title` | `string content`  | Specify title of the dialog |
| `description` | `Dialog description ` |  `string content` | Give brief information about the dialog.  |
| `imgSrc`  | `null` | `Image path` | Specify image source url or relative path. |
| `position`        | `bottom-left`  | `top-left, top-right, bottom-left, bottom-right, center`     | Specify position of the dialog box.       |
| `darkMode`        | `false`  | `boolean`     | Dark mode setup.       |
| `bgColor`        | `Hex Code, RGB`  | `#fff`     | Backgroung color of dialog box.       |
| `txtColor`        | `Hex Code, RGB`  | `#373737`     | Text color of dialog content. |


