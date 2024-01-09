const fs = require("fs");

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
      "https://res.palxp.cn/static/template/gd-101135401/f6b8fbf9-68ec-4b24-9611-9e1c7d632c4512467983.png",
    opacity: 1,
    tag: 0,
    setting: [],
    record: {},
  },
  widgets: [
    {
      name: "文本",
      type: "w-text",
      uuid: "a209fd088db7",
      editable: false,
      left: 62.33333333333323,
      top: 97.21420053387484,
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 0,
      fontSize: 35,
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
      color: "#94572cff",
      textAlign: "center",
      text: "YOUR LOGO",
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
      width: 265.5563047656946,
      height: 43,
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
      uuid: "83c6cd89ea18",
      editable: false,
      left: 65.70914286703541,
      top: 133.7857994661251,
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 15,
      fontSize: 18.2,
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
      color: "#94572cff",
      textAlign: "center",
      text: "design.palxp.cn",
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
      width: 264.91,
      height: 23,
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
      name: "矢量图形",
      type: "w-svg",
      uuid: "26857c32b1ee",
      width: 114.61433124542236,
      height: 68.07064056396484,
      colors: ["#6d3005ff"],
      left: 90,
      top: 1318.2299453906685,
      transform: "",
      radius: 0,
      opacity: 1,
      parent: "-1",
      svgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/8868bedc-f5e3-4809-a6da-741c54623e6e12467948.svg",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10 },
      text: "",
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/8868bedc-f5e3-4809-a6da-741c54623e6e12467948.svg",
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
      name: "矢量图形",
      type: "w-svg",
      uuid: "fe58edd6b04d",
      width: "143.00",
      height: "145.00",
      colors: ["#98562aff"],
      left: "870.19",
      top: "379.26",
      transform: "",
      radius: 0,
      opacity: 1,
      parent: "-1",
      svgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/ea9ce03a-d62f-4a88-85bd-c82daa1a2a2b12469854.svg",
      setting: [],
      record: { width: 143, height: 145, minWidth: 10, minHeight: 10 },
      text: "",
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/ea9ce03a-d62f-4a88-85bd-c82daa1a2a2b12469854.svg",
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
      uuid: "adfbb305d365",
      editable: false,
      left: "767.41",
      top: "181.59",
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 0,
      fontSize: 183.33016627078388,
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
      color: "#94572cff",
      textAlign: "left",
      text: "早安",
      opacity: 1,
      backgroundColor: "",
      parent: "-1",
      record: {
        width: 370,
        height: 220,
        minWidth: 183.33016627078388,
        minHeight: 219.99619952494064,
        dir: "horizontal",
      },
      width: 370,
      height: 220,
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
      uuid: "7a496d05e993",
      editable: false,
      left: 863.3950870752961,
      top: 491.57330648183944,
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 0,
      fontSize: 40,
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
      color: "#94572cff",
      textAlign: "right",
      text: "GOOD<br/>MORNING",
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
      width: 206,
      height: 97,
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
      name: "矢量图形",
      type: "w-svg",
      uuid: "08c31ab6d9e5",
      width: 50.616657853126526,
      height: 46.85821533203125,
      colors: ["#ffffffff"],
      left: 1100.1194096803665,
      top: 2074.127197265625,
      transform: "",
      radius: 0,
      opacity: 1,
      parent: "-1",
      svgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/450b2dfd-6523-4614-96a0-5cc3a9ee669412467949.svg",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10 },
      text: "",
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/450b2dfd-6523-4614-96a0-5cc3a9ee669412467949.svg",
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
      name: "矢量图形",
      type: "w-svg",
      uuid: "b99f1fb0924a",
      width: 50.616657853126526,
      height: 46.85821533203125,
      colors: ["#ffffffff"],
      left: 1100.1194096803665,
      top: 2027.3041706085205,
      transform: "",
      radius: 0,
      opacity: 0.9019607843137255,
      parent: "-1",
      svgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/ffb4048b-234c-474b-a29e-1eba131c49ec12469908.svg",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10 },
      text: "",
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/ffb4048b-234c-474b-a29e-1eba131c49ec12469908.svg",
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
      name: "矢量图形",
      type: "w-svg",
      uuid: "87e8f5ee2692",
      width: 50.616657853126526,
      height: 46.858083724975586,
      colors: ["#ffffffff"],
      left: 1100.1194096803665,
      top: 1981.4173965454102,
      transform: "",
      radius: 0,
      opacity: 0.7019607843137254,
      parent: "-1",
      svgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/3f15b680-7ce8-4bd2-8cc6-5ec421c7530712469899.svg",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10 },
      text: "",
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/3f15b680-7ce8-4bd2-8cc6-5ec421c7530712469899.svg",
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
      name: "矢量图形",
      type: "w-svg",
      uuid: "5cdea3787a5d",
      width: 50.616657853126526,
      height: 46.858083724975586,
      colors: ["#ffffffff"],
      left: 1100.1194096803665,
      top: 1934.5943698883057,
      transform: "",
      radius: 0,
      opacity: 0.5019607843137255,
      parent: "-1",
      svgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/a8149cd3-76f0-4b9d-abad-b04e6518deff12467921.svg",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10 },
      text: "",
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/a8149cd3-76f0-4b9d-abad-b04e6518deff12467921.svg",
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
      name: "矢量图形",
      type: "w-svg",
      uuid: "cd71ead048ff",
      width: 50.616657853126526,
      height: 46.85795211791992,
      colors: ["#ffffffff"],
      left: 1100.1194096803665,
      top: 1887.7712116241455,
      transform: "",
      radius: 0,
      opacity: 0.30196078431372547,
      parent: "-1",
      svgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/707495c4-652d-4582-9dfa-55f289a1944812467920.svg",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10 },
      text: "",
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/707495c4-652d-4582-9dfa-55f289a1944812467920.svg",
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
      uuid: "ab2da0bec5d9",
      width: 71,
      height: 57,
      left: 94,
      top: 334,
      zoom: 1,
      transform: " scale(1)",
      radius: 0,
      opacity: 1,
      parent: "-1",
      imgUrl:
        "https://res.palxp.cn/static/template/gd-101135401/1a0595f6-7601-4929-b7b3-f91cdd7527b312467865.png",
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
      name: "矢量图形",
      type: "w-svg",
      uuid: "807d1c233bb6",
      width: 5.1758928298950195,
      height: 39.17927360534668,
      colors: ["#98562aff"],
      left: 98.8237874507904,
      top: 410.99975395202637,
      transform: "",
      radius: 0,
      opacity: 1,
      parent: "-1",
      svgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/0b7dc9ea-de25-4a9e-a52b-c831eceebc7312469923.svg",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10 },
      text: "",
      letterSpacing: null,
      imgUrl:
        "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/90969/0b7dc9ea-de25-4a9e-a52b-c831eceebc7312469923.svg",
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
      uuid: "55744263e13c",
      editable: false,
      left: 92.15293246952797,
      top: 463.97313027730684,
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 0,
      fontSize: 42,
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
      color: "#94572cff",
      textAlign: "left",
      text: "星期三",
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
      width: 155.78110476354362,
      height: 51,
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
      uuid: "9fea73425fc9",
      editable: false,
      left: 89.28251260964181,
      top: 509.73391029913427,
      transform: "",
      lineHeight: 1.2,
      letterSpacing: 0,
      fontSize: 40,
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
      color: "#94572cff",
      textAlign: "left",
      text: "2022.03.30",
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
      width: 243.1716571453154,
      height: 49,
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
      uuid: "9890ee16d43c",
      editable: false,
      left: 89.99999999999999,
      top: 1407.6912121111473,
      transform: "",
      lineHeight: 1.67,
      letterSpacing: 2.995594713656388,
      fontSize: 45.4,
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
      color: "#6c3005ff",
      textAlign: "left",
      text: "漫漫人生<br/>没有到不了的远方<br/>只有不肯跋涉的人<br/>只有打开心，迈出脚<br/>才能走出去",
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
      width: 867.5623238155671,
      height: 380,
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
      uuid: "e3d30da911af",
      width: 217,
      height: 217,
      left: 90,
      top: 1904,
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
      value: "https://jt.ciccten.com/jv/v2/",
      setting: [],
      record: { width: 0, height: 0, minWidth: 10, minHeight: 10, dir: "all" },
      letterSpacing: null,
      imgUrl:
        "https://jtcospublic.ciccten.com/config-server/1703730310545220869/idcard_qrcode.png",
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
  ],
};

const scale = 0.5;
const tmpl = {
  id: 1,
  data: {
    backgroundUrl: otherTmpl.page.backgroundImage || "",
    backgroundColor: otherTmpl.page.backgroundColor || "",
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
        backgroundColor: w.backgroundColor || "",
        fontFamily: 'Zcool Kuaile Regular',//w.fontClass ? w.fontClass.value : "",
        fontSize: w.fontSize * scale,
        fontWeight: w.fontWeight || 'normal',
        align: w.textAlign || 'left',
        strokeThickness: w.strokeWidth || 1,
        lineJoin: w.strokeLineJoin||'',
        lineCap: w.strokeLineCap||'',
        lineHeight: w.lineHeight || 1,
        miterLimit: w.strokeMiterLimit || 0,
        dropShadowAlpha: 0,
        dropShadowAngle: 0,
        dropShadowBlur: 0,
        dropShadowColor: 'transparent',
        dropShadowDistance: 0,
      },
    };

    obj.x += obj.width / 2;
    obj.y += obj.height / 2;

    if (w.type === "w-image" || w.type === 'w-qrcode' || w.type === 'w-svg') {
      obj.type = "image";
      obj.url = w.imgUrl || "";
      obj.style.fill = w.colors || '',
      obj.style.stroke = w.color || "";
    } else if (w.type === "w-text") {
      obj.type = "text";
      obj.style.fill = w.color || "";
      const txt = (w.text || "").split('<br/>');

      //delete obj.width;
      //delete obj.height;

      if(txt.length > 1) {

            obj.style.wordWrap = true;
            obj.style.breakWords = true;
            //obj.style.strokeThickness = 5;
            obj.style.whiteSpace = 'pre';
            obj.style.wordWrapWidth = obj.width;
            obj.style.breakWords = true;
            
            /*for(let i=0;i<txt.length;i++) {
                const c = Object.assign({}, obj);

                c.text = txt[i];
                c.height = c.style.fontSize * c.style.lineHeight;
                c.y += c.height * i;

                if (c.type) tmpl.data.children.push(c);
            }
            continue;*/
        }
            
        obj.text = txt.join(' ');
        
    }
    if (obj.type) tmpl.data.children.push(obj);
  }
}

fs.writeFileSync(`${__dirname}/${tmpl.id}.json`, JSON.stringify(tmpl));
