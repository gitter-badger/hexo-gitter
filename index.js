'use strict';

hexo.extend.helper.register("gitter", function (room) {

    return "<script>((window.gitter = {}).chat = {}).options = {" + room + "};</script>"
        + "<script src=\"https://sidecar.gitter.im/dist/sidecar.v1.js\" async defer></script>";
});