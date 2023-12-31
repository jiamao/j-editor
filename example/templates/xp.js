const fs = require("fs");
const request = require("request");
const util = require("./util.js");

const id = util.getTemplateId();
const otherTmpl = {
  page: {
    name: "作品名",
    type: "page",
    uuid: "-1",
    left: 0,
    top: 0,
    width: 1242,
    height: 2208,
    backgroundColor: "#000000ff",
    backgroundImage:
      "https://res.palxp.cn/static/template/gd-101124717/03e87489-6c47-49dd-99c0-32c05b25fdeb19349484.png",
    opacity: 1,
    tag: 0,
    setting: [],
    record: {},
  },
  widgets: [
    {
      name: "文本",
      type: "w-text",
      uuid: "18be7193dd91",
      editable: false,
      left: 8.72569238752466,
      top: 1926.5134962592133,
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 0,
      fontSize: 148.1,
      fontClass: {
        alias: "站酷快乐体",
        id: 543,
        value: "zcool-kuaile-regular",
        url: "https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#2c55efff",
      textAlign: "center",
      text: "CHUANG XIN",
      opacity: 0.3686274509803922,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 0,
        height: 0,
        minWidth: 0,
        minHeight: 0,
        dir: "horizontal",
      },
      width: 1062.9205688729876,
      height: 179,
      imgUrl: "",
      rotate: 0,
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "二维码",
      type: "w-qrcode",
      uuid: "79745ea58c0c",
      width: 182,
      height: 182,
      left: 958,
      top: 1892,
      zoom: 1,
      transform: "",
      radius: 0,
      opacity: 1,
      parent: "-1",
      url: "",
      dotType: "classy",
      dotColorType: "single",
      dotRotation: 270,
      dotColor: "#35495E",
      dotColor2: "#35495E",
      value: "https://xp.palxp.cn",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10, dir: "all" },
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/09622/b8aa922c-d1d7-487f-9fbd-f3217443420719335960.png",
      rotate: 0,
      imageTransform: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 },
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
      naturalDuration: 0,
    },
    {
      name: "文本",
      type: "w-text",
      uuid: "3d35a325cd79",
      editable: false,
      left: "459.32",
      top: "280.80",
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 7.503052503052502,
      fontSize: 163.8,
      fontClass: {
        alias: "站酷快乐体",
        id: 543,
        value: "zcool-kuaile-regular",
        url: "https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#ffffffff",
      textAlign: "right",
      text: "着眼未来",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 726,
        height: 197,
        minWidth: 163.8,
        minHeight: 196.56,
        dir: "horizontal",
      },
      width: "726.44",
      height: 197,
      imgUrl: "",
      rotate: 0,
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "文本",
      type: "w-text",
      uuid: "371e6dad7f45",
      editable: false,
      left: 360.8652518134818,
      top: 491.0903142539611,
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 7.503052503052502,
      fontSize: 163.8,
      fontClass: {
        alias: "站酷快乐体",
        id: 543,
        value: "zcool-kuaile-regular",
        url: "https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#f0ceadff",
      textAlign: "right",
      text: "创新发展",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 0,
        height: 0,
        minWidth: 0,
        minHeight: 0,
        dir: "horizontal",
      },
      width: 824.891,
      height: 198,
      imgUrl: "",
      rotate: 0,
      textEffects: [
        {
          filling: {
            enable: true,
            stops: [
              { offset: 0, color: "#f0ceadff" },
              { offset: 1, color: "#e0a770ff" },
            ],
            angle: 0,
            byLine: 0,
            type: 2,
            gradient: {
              enable: true,
              stops: [
                { offset: 0, color: "#f0ceadff" },
                { offset: 1, color: "#e0a770ff" },
              ],
              angle: 0,
              byLine: 0,
            },
            color: null,
            imageContent: {
              repeat: 0,
              scaleX: 1,
              scaleY: 1,
              image: null,
              width: null,
              height: null,
            },
          },
        },
      ],
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "矢量图形",
      type: "w-svg",
      uuid: "634988ee766e",
      width: 67.99999225139618,
      height: 6.0000152587890625,
      colors: ["#e2ac78ff"],
      left: 1069.9999834299088,
      top: 966.9999504089355,
      transform: "",
      radius: 0,
      opacity: 1,
      parent: "-1",
      svgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/09622/fada1925-3fcc-4a3e-82b0-be34e7537b3f19335958.svg",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10 },
      text: "",
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/09622/fada1925-3fcc-4a3e-82b0-be34e7537b3f19335958.svg",
      rotate: 0,
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "文本",
      type: "w-text",
      uuid: "50a4d962cc7f",
      editable: false,
      left: 510.7222797149525,
      top: 772.389892944732,
      transform: "",
      lineHeight: 1.5,
      letterSpacing: 5,
      fontSize: 61.8,
      fontClass: {
        alias: "站酷快乐体",
        id: 543,
        value: "zcool-kuaile-regular",
        url: "https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#ffffffff",
      textAlign: "right",
      text: "人力发展动员大会",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 0,
        height: 0,
        minWidth: 0,
        minHeight: 0,
        dir: "horizontal",
      },
      width: 635.0946502057614,
      height: 94,
      imgUrl: "",
      rotate: 0,
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "文本",
      type: "w-text",
      uuid: "1c613709001f",
      editable: false,
      left: "628.72",
      top: "886.27",
      transform: "",
      lineHeight: 1.5,
      letterSpacing: 0,
      fontSize: 21.9,
      fontClass: {
        id: 537,
        oid: 364016,
        value: "JetBrainsMono-Medium",
        url: "https://res.palxp.cn/static/fonts/20210203-145951-723d.woff",
        alias: "JetBrains Mono Medium",
        preview: "https://res.palxp.cn/static/fonts/20200203-144018-7a34.svg",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#ffffffff",
      textAlign: "right",
      text: "REN LI FA ZHAN DONG YUAN DA HUI",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 514,
        height: 33,
        minWidth: 21.9,
        minHeight: 32.849999999999994,
        dir: "horizontal",
      },
      width: "514.01",
      height: 33,
      imgUrl: "",
      rotate: 0,
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "图片",
      type: "w-image",
      uuid: "86953e0b7152",
      width: 206,
      height: 31,
      left: 104,
      top: 1076,
      zoom: 1,
      transform: " scale(1)",
      radius: 0,
      opacity: 1,
      parent: "-1",
      imgUrl:
        "https://res.palxp.cn/static/template/gd-101124717/90e5fe78-9047-45b7-9f66-4786615090d619349445.png",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10, dir: "all" },
      letterSpacing: null,
      rotate: 0,
      imageTransform: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 },
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
      naturalDuration: 0,
    },
    {
      name: "文本",
      type: "w-text",
      uuid: "ca4ff6bc0ad3",
      editable: false,
      left: "102.82",
      top: "1126.98",
      transform: "",
      lineHeight: 1.5,
      letterSpacing: 7.504990019960079,
      fontSize: 50.1,
      fontClass: {
        alias: "站酷快乐体",
        id: 543,
        value: "zcool-kuaile-regular",
        url: "https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#ffffffff",
      textAlign: "left",
      text: "全体员工",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 443,
        height: 75,
        minWidth: 50.1,
        minHeight: 75.15,
        dir: "horizontal",
      },
      width: "442.87",
      height: 75,
      imgUrl: "",
      rotate: 0,
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "文本",
      type: "w-text",
      uuid: "601f8efa7fdb",
      editable: false,
      left: "103.49",
      top: "1254.75",
      transform: "",
      lineHeight: 1.97,
      letterSpacing: 2.5,
      fontSize: 36,
      fontClass: {
        alias: "站酷快乐体",
        id: 543,
        value: "zcool-kuaile-regular",
        url: "https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#ffffffff",
      textAlign: "justify",
      text: "为抓好引队增员工作，促进公司健康快速发展。公司将召开2022人力发展启动大会，以便更好地部署行动，充实团队力量，促进公司新的一年实现业务突飞猛进发展。",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 930,
        height: 213,
        minWidth: 36,
        minHeight: 70.92,
        dir: "horizontal",
      },
      width: 929.9,
      height: 213,
      imgUrl: "",
      rotate: 0,
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "文本",
      type: "w-text",
      uuid: "c481412f7650",
      editable: false,
      left: 102.75881069566337,
      top: 1513.8893100533917,
      transform: "",
      lineHeight: 1.17,
      letterSpacing: 7.499999999999999,
      fontSize: 37.2,
      fontClass: {
        alias: "站酷快乐体",
        id: 543,
        value: "zcool-kuaile-regular",
        url: "https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#01cef5ff",
      textAlign: "left",
      text: "地点",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 0,
        height: 0,
        minWidth: 0,
        minHeight: 0,
        dir: "horizontal",
      },
      width: 222.90200000000002,
      height: 45,
      imgUrl: "",
      rotate: 0,
      textEffects: [
        {
          filling: {
            enable: true,
            stops: [
              { offset: 0, color: "#f0ceadff" },
              { offset: 1, color: "#e0a770ff" },
            ],
            angle: 0,
            byLine: 0,
            type: 2,
            gradient: {
              enable: true,
              stops: [
                { offset: 0, color: "#f0ceadff" },
                { offset: 1, color: "#e0a770ff" },
              ],
              angle: 0,
              byLine: 0,
            },
            color: null,
            imageContent: {
              repeat: 0,
              scaleX: 1,
              scaleY: 1,
              image: null,
              width: null,
              height: null,
            },
          },
        },
      ],
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "文本",
      type: "w-text",
      uuid: "48362f745058",
      editable: false,
      left: 102.26019563770764,
      top: 1566.5423688313263,
      transform: "",
      lineHeight: 1.42,
      letterSpacing: 7.499999999999999,
      fontSize: 37.2,
      fontClass: {
        alias: "站酷快乐体",
        id: 543,
        value: "zcool-kuaile-regular",
        url: "https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#ffffffff",
      textAlign: "left",
      text: "上海浦东新区酒店三层会议厅",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 0,
        height: 0,
        minWidth: 0,
        minHeight: 0,
        dir: "horizontal",
      },
      width: 820.8518518518518,
      height: 54,
      imgUrl: "",
      rotate: 0,
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
    {
      name: "文本",
      type: "w-text",
      uuid: "16f2520f7de6",
      editable: false,
      left: "929.65",
      top: "129.30",
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 0,
      fontSize: 28.5,
      fontClass: {
        alias: "站酷快乐体",
        id: 543,
        value: "zcool-kuaile-regular",
        url: "https://lib.baomitu.com/fonts/zcool-kuaile/zcool-kuaile-regular.woff2",
      },
      fontWeight: 400,
      fontStyle: "normal",
      writingMode: "horizontal-tb",
      textDecoration: "none",
      color: "#e6b585ff",
      textAlign: "left",
      text: "YOUR LOGO",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 244,
        height: 34,
        minWidth: 28.5,
        minHeight: 34.199999999999996,
        dir: "horizontal",
      },
      width: "243.82",
      height: 34,
      imgUrl: "",
      rotate: 0,
      filter: {
        contrast: 0,
        sharpness: 0,
        hueRotate: 0,
        saturate: 0,
        brightness: 0,
        gaussianBlur: 0,
        temperature: 0,
        tint: 0,
      },
    },
  ],
};
const scale = 0.5;
const tmpl = {
  id: id,
  data: {
    backgroundUrl: otherTmpl.page.backgroundImage || "",
    backgroundColor: util.hexToRGBA(otherTmpl.page.backgroundColor || ""),
    name: otherTmpl.name,
    width: otherTmpl.page.width * scale,
    height: otherTmpl.page.height * scale,
    children: [],
  },
};

if (otherTmpl.widgets) {
  for (const w of otherTmpl.widgets) {
    const obj = {
      width: w.width * scale,
      height: w.height * scale,
      x: (w.left / otherTmpl.page.width) * tmpl.data.width,
      y: (w.top / otherTmpl.page.height) * tmpl.data.height,
      rotation: w.rotate || 0,
      name: w.name,
      style: {
        backgroundColor: util.hexToRGBA(w.backgroundColor || ""),
        fontFamily: "Zcool Kuaile Regular", //w.fontClass ? w.fontClass.value : "",
        fontSize: w.fontSize * scale,
        fontWeight: w.fontWeight || "normal",
        align: w.textAlign || "left",
        strokeThickness: w.strokeWidth || 1,
        lineJoin: w.strokeLineJoin || "",
        lineCap: w.strokeLineCap || "",
        lineHeight: w.lineHeight || 1,
        miterLimit: w.strokeMiterLimit || 0,
        dropShadowAlpha: 0,
        dropShadowAngle: 0,
        dropShadowBlur: 0,
        dropShadowColor: "transparent",
        dropShadowDistance: 0,
      },
    };

    obj.x += obj.width / 2;
    obj.y += obj.height / 2;

    if (w.type === "w-image" || w.type === "w-qrcode" || w.type === "w-svg") {
      obj.type = "image";
      obj.fileType = w.type === "w-svg" ? "svg" : "png";
      obj.url = w.imgUrl || "";
      obj.style.fill = w.colors || "";
    } else if (w.type === "w-text") {
      obj.type = "text";
      obj.style.fill = util.hexToRGBA(w.color || "");
      const txt = (w.text || "").split("<br/>");

      //delete obj.width;
      //delete obj.height;

      if (txt.length > 1|| w.text.length > 20) {
        obj.style.wordWrap = true;
        //obj.style.breakWords = true;
        //obj.style.strokeThickness = 5;
        obj.style.lineHeight *= obj.style.fontSize;
        //obj.style.whiteSpace = 'pre';
        //obj.style.wordWrapWidth = obj.width;
        //obj.style.breakWords = true;

        /*for(let i=0;i<txt.length;i++) {
                const c = Object.assign({}, obj);

                c.text = txt[i];
                c.height = c.style.fontSize * c.style.lineHeight;
                c.y += c.height * i;

                if (c.type) tmpl.data.children.push(c);
            }
            continue;*/
      }

      obj.text = txt.join(" ");
    }
    if (obj.type) tmpl.data.children.push(obj);
  }
}

util.saveToTemplate(tmpl);
