# Web Floating Dialog

A dialog plugin to alert your website users about any important information.

## Motivation
Inspired from paper dialog seen on YouTube during COVID-19 outbreak.

## How to integrate?

* Add following line to bottom of your body tag.

    `<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/RoboMx/Web-Floating-Dialog@master/webdialogalert.js">`

    or

    `<script type="text/javascript" src="webdialogalert.js"></script>`

* Add `robomx-webdialogalert` tag before script file.
    Example:

        <robomx-webdialogalert
            title="Dialog title"
            description="Dialog description"
            imgSrc="sample.png"
            imgWidth="300px"
            imgHeight="200px"
            position="bottom-left"
        ></robomx-webdialogalert>



## Variables

| Attribute | Default | Accepts | Note|
| --------- | ------- | --------|------- |
| `title`     | `Dialog title` | `string content`  | Specify title of the dialog |
| `description` | `Dialog description ` |  `string content` | Give brief information about the dialog.  |
| `imgSrc`  | `null` | `Image path` | Specify image source url or relative path. |
| `imgWidth`     | `300px` |    `px, em, %`     | Specify width of the image. |
| `imgHeight`    | `200px` | `px, em, %` | Specify height of the image. |
| `position`        | `bottom-left`  | `top-left, top-right, bottom-left, bottom-right, center`     | Specify position of the dialog box.       |
