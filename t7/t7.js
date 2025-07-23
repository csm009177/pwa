const htmlData = {
    tags: ["div", "h1", "p", "span", "button", "input", "img", "a"],
    colors: ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black"],
    sizes: [16, 24, 18, 14, 20, 12, 32, 28],
    positions: ["static", "relative", "absolute", "fixed", "sticky"],
    displays: ["block", "inline", "flex", "grid", "none"],
    borders: ["solid", "dashed", "dotted", "double"],
    fonts: ["Arial", "Georgia", "Times", "Helvetica", "Verdana"],
    weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
};

class Element {
    tag = "div";
    color = "black";
    size = 16;
}

function exampleOne() {
    console.log("기본 엘리먼트:");
    const el1 = new Element();
    console.log(`태그: ${el1.tag}`);
    console.log(`색상: ${el1.color}`);
    console.log(`크기: ${el1.size}px`);
}

class Header {
    tag = "h1";
    text = "제목";
    color = "blue";
    size = 24;
}

function exampleTwo() {
    console.log("헤더 엘리먼트:");
    const header1 = new Header();
    console.log(`태그: ${header1.tag}`);
    console.log(`텍스트: ${header1.text}`);
    console.log(`색상: ${header1.color}`);
    console.log(`크기: ${header1.size}px`);
}

class Button {
    tag = "button";
    text = "클릭하세요";
    color = "white";
    backgroundColor = "blue";
    width = 100;
    height = 40;
}

function exampleThree() {
    console.log("버튼 엘리먼트:");
    const btn1 = new Button();
    console.log(`태그: ${btn1.tag}`);
    console.log(`텍스트: ${btn1.text}`);
    console.log(`글자색: ${btn1.color}`);
    console.log(`배경색: ${btn1.backgroundColor}`);
    console.log(`크기: ${btn1.width} x ${btn1.height}`);
}

class Image {
    tag = "img";
    src = "photo.jpg";
    alt = "사진";
    width = 200;
    height = 150;
}

function exampleFour() {
    console.log("이미지 엘리먼트:");
    const img1 = new Image();
    console.log(`태그: ${img1.tag}`);
    console.log(`파일: ${img1.src}`);
    console.log(`설명: ${img1.alt}`);
    console.log(`크기: ${img1.width} x ${img1.height}`);
}
c

class Input {
    tag = "input";
    type = "text";
    placeholder = "입력하세요";
    width = 200;
    height = 30;
    border = "solid";
}

function exampleFive() {
    console.log("입력 엘리먼트:");
    const input1 = new Input();
    console.log(`태그: ${input1.tag}`);
    console.log(`타입: ${input1.type}`);
    console.log(`힌트: ${input1.placeholder}`);
    console.log(`크기: ${input1.width} x ${input1.height}`);
    console.log(`테두리: ${input1.border}`);
}

class Link {
    tag = "a";
    text = "링크";
    href = "https://example.com";
    color = "blue";
    underline = true;
}

function exampleSix() {
    console.log("링크 엘리먼트:");
    const link1 = new Link();
    console.log(`태그: ${link1.tag}`);
    console.log(`텍스트: ${link1.text}`);
    console.log(`주소: ${link1.href}`);
    console.log(`색상: ${link1.color}`);
    console.log(`밑줄: ${link1.underline}`);
}

class Container {
    tag = "div";
    className = "container";
    width = 100;
    height = 200;
    padding = 20;
    margin = 10;
    backgroundColor = "gray";
}

function exampleSeven() {
    console.log("컨테이너 엘리먼트:");
    const container1 = new Container();
    console.log(`태그: ${container1.tag}`);
    console.log(`클래스: ${container1.className}`);
    console.log(`크기: ${container1.width} x ${container1.height}`);
    console.log(`안쪽 여백: ${container1.padding}px`);
    console.log(`바깥 여백: ${container1.margin}px`);
    console.log(`배경색: ${container1.backgroundColor}`);
}

class Text {
    tag = "p";
    content = "텍스트 내용";
    fontSize = 16;
    fontFamily = "Arial";
    fontWeight = 400;
    color = "black";
    lineHeight = 1.5;
}

function exampleEight() {
    console.log("텍스트 엘리먼트:");
    const text1 = new Text();
    console.log(`태그: ${text1.tag}`);
    console.log(`내용: ${text1.content}`);
    console.log(`글자 크기: ${text1.fontSize}px`);
    console.log(`글꼴: ${text1.fontFamily}`);
    console.log(`글자 두께: ${text1.fontWeight}`);
    console.log(`색상: ${text1.color}`);
    console.log(`줄 간격: ${text1.lineHeight}`);
}

class Navigation {
    tag = "nav";
    className = "navbar";
    backgroundColor = "dark";
    height = 60;
    position = "fixed";
    zIndex = 100;
}

function exampleNine() {
    console.log("내비게이션 엘리먼트:");
    const nav1 = new Navigation();
    console.log(`태그: ${nav1.tag}`);
    console.log(`클래스: ${nav1.className}`);
    console.log(`배경색: ${nav1.backgroundColor}`);
    console.log(`높이: ${nav1.height}px`);
    console.log(`위치: ${nav1.position}`);
    console.log(`층위: ${nav1.zIndex}`);
}

class Card {
    tag = "div";
    className = "card";
    width = 300;
    height = 400;
    borderRadius = 10;
    boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    backgroundColor = "white";
    padding = 20;
}

function exampleTen() {
    console.log("카드 엘리먼트:");
    const card1 = new Card();
    console.log(`태그: ${card1.tag}`);
    console.log(`클래스: ${card1.className}`);
    console.log(`크기: ${card1.width} x ${card1.height}`);
    console.log(`모서리: ${card1.borderRadius}px`);
    console.log(`그림자: ${card1.boxShadow}`);
    console.log(`배경색: ${card1.backgroundColor}`);
    console.log(`안쪽 여백: ${card1.padding}px`);
}

class Form {
    tag = "form";
    method = "POST";
    action = "/submit";
    width = 400;
    padding = 30;
    border = "1px solid gray";
    backgroundColor = "lightgray";
}

function exampleEleven() {
    console.log("폼 엘리먼트:");
    const form1 = new Form();
    console.log(`태그: ${form1.tag}`);
    console.log(`방식: ${form1.method}`);
    console.log(`주소: ${form1.action}`);
    console.log(`너비: ${form1.width}px`);
    console.log(`안쪽 여백: ${form1.padding}px`);
    console.log(`테두리: ${form1.border}`);
    console.log(`배경색: ${form1.backgroundColor}`);
}

class Table {
    tag = "table";
    width = 100;
    border = "1px solid black";
    borderCollapse = "collapse";
    backgroundColor = "white";
    cellPadding = 10;
    cellSpacing = 0;
}

function exampleTwelve() {
    console.log("테이블 엘리먼트:");
    const table1 = new Table();
    console.log(`태그: ${table1.tag}`);
    console.log(`너비: ${table1.width}%`);
    console.log(`테두리: ${table1.border}`);
    console.log(`테두리 합치기: ${table1.borderCollapse}`);
    console.log(`배경색: ${table1.backgroundColor}`);
    console.log(`셀 여백: ${table1.cellPadding}px`);
    console.log(`셀 간격: ${table1.cellSpacing}px`);
}

class Icon {
    tag = "i";
    className = "icon";
    size = 24;
    color = "gray";
    fontFamily = "FontAwesome";
    symbol = "★";
}

function exampleThirteen() {
    console.log("아이콘 엘리먼트:");
    const icon1 = new Icon();
    console.log(`태그: ${icon1.tag}`);
    console.log(`클래스: ${icon1.className}`);
    console.log(`크기: ${icon1.size}px`);
    console.log(`색상: ${icon1.color}`);
    console.log(`글꼴: ${icon1.fontFamily}`);
    console.log(`기호: ${icon1.symbol}`);
}

class Layout {
    tag = "div";
    className = "layout";
    display = "flex";
    flexDirection = "row";
    justifyContent = "center";
    alignItems = "center";
    gap = 20;
    padding = 40;
}

function exampleFourteen() {
    console.log("레이아웃 엘리먼트:");
    const layout1 = new Layout();
    console.log(`태그: ${layout1.tag}`);
    console.log(`클래스: ${layout1.className}`);
    console.log(`배치: ${layout1.display}`);
    console.log(`방향: ${layout1.flexDirection}`);
    console.log(`가로 정렬: ${layout1.justifyContent}`);
    console.log(`세로 정렬: ${layout1.alignItems}`);
    console.log(`간격: ${layout1.gap}px`);
    console.log(`안쪽 여백: ${layout1.padding}px`);
}

class Modal {
    tag = "div";
    className = "modal";
    width = 500;
    height = 300;
    backgroundColor = "white";
    position = "fixed";
    zIndex = 1000;
    borderRadius = 8;
    boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    display = "none";
}

function exampleFifteen() {
    console.log("모달 엘리먼트:");
    const modal1 = new Modal();
    console.log(`태그: ${modal1.tag}`);
    console.log(`클래스: ${modal1.className}`);
    console.log(`크기: ${modal1.width} x ${modal1.height}`);
    console.log(`배경색: ${modal1.backgroundColor}`);
    console.log(`위치: ${modal1.position}`);
    console.log(`층위: ${modal1.zIndex}`);
    console.log(`모서리: ${modal1.borderRadius}px`);
    console.log(`그림자: ${modal1.boxShadow}`);
    console.log(`표시: ${modal1.display}`);
}



class Sidebar {
    tag = "aside";
    className = "sidebar";
    width = 250;
    height = 100;
    backgroundColor = "lightblue";
    position = "fixed";
    top = 0;
    left = 0;
    borderRight = "1px solid gray";
}

function exampleSixteen() {
    console.log("사이드바 엘리먼트:");
    const sidebar1 = new Sidebar();
    console.log(`태그: ${sidebar1.tag}`);
    console.log(`클래스: ${sidebar1.className}`);
    console.log(`크기: ${sidebar1.width} x ${sidebar1.height}%`);
    console.log(`배경색: ${sidebar1.backgroundColor}`);
    console.log(`위치: ${sidebar1.position}`);
    console.log(`상단: ${sidebar1.top}px`);
    console.log(`좌측: ${sidebar1.left}px`);
    console.log(`오른쪽 테두리: ${sidebar1.borderRight}`);
}

class Badge {
    tag = "span";
    className = "badge";
    text = "새로움";
    backgroundColor = "red";
    color = "white";
    fontSize = 12;
    padding = 5;
    borderRadius = 50;
}

function exampleSeventeen() {
    console.log("배지 엘리먼트:");
    const badge1 = new Badge();
    console.log(`태그: ${badge1.tag}`);
    console.log(`클래스: ${badge1.className}`);
    console.log(`텍스트: ${badge1.text}`);
    console.log(`배경색: ${badge1.backgroundColor}`);
    console.log(`글자색: ${badge1.color}`);
    console.log(`글자 크기: ${badge1.fontSize}px`);
    console.log(`안쪽 여백: ${badge1.padding}px`);
    console.log(`모서리: ${badge1.borderRadius}%`);
}

class Progress {
    tag = "div";
    className = "progress";
    width = 300;
    height = 20;
    backgroundColor = "lightgray";
    borderRadius = 10;
    value = 60;
    maxValue = 100;
    color = "green";
}

function exampleEighteen() {
    console.log("진행바 엘리먼트:");
    const progress1 = new Progress();
    console.log(`태그: ${progress1.tag}`);
    console.log(`클래스: ${progress1.className}`);
    console.log(`크기: ${progress1.width} x ${progress1.height}`);
    console.log(`배경색: ${progress1.backgroundColor}`);
    console.log(`모서리: ${progress1.borderRadius}px`);
    console.log(`현재값: ${progress1.value}`);
    console.log(`최대값: ${progress1.maxValue}`);
    console.log(`진행색: ${progress1.color}`);
}

class Tooltip {
    tag = "div";
    className = "tooltip";
    text = "도움말";
    backgroundColor = "black";
    color = "white";
    fontSize = 14;
    padding = 8;
    borderRadius = 4;
    position = "absolute";
    zIndex = 999;
}

function exampleNineteen() {
    console.log("툴팁 엘리먼트:");
    const tooltip1 = new Tooltip();
    console.log(`태그: ${tooltip1.tag}`);
    console.log(`클래스: ${tooltip1.className}`);
    console.log(`텍스트: ${tooltip1.text}`);
    console.log(`배경색: ${tooltip1.backgroundColor}`);
    console.log(`글자색: ${tooltip1.color}`);
    console.log(`글자 크기: ${tooltip1.fontSize}px`);
    console.log(`안쪽 여백: ${tooltip1.padding}px`);
    console.log(`모서리: ${tooltip1.borderRadius}px`);
    console.log(`위치: ${tooltip1.position}`);
    console.log(`층위: ${tooltip1.zIndex}`);
}

class Grid {
    tag = "div";
    className = "grid";
    display = "grid";
    gridTemplateColumns = "1fr 1fr 1fr";
    gridTemplateRows = "auto";
    gap = 15;
    padding = 20;
    backgroundColor = "lightgray";
}

function exampleTwenty() {
    console.log("그리드 엘리먼트:");
    const grid1 = new Grid();
    console.log(`태그: ${grid1.tag}`);
    console.log(`클래스: ${grid1.className}`);
    console.log(`배치: ${grid1.display}`);
    console.log(`열 템플릿: ${grid1.gridTemplateColumns}`);
    console.log(`행 템플릿: ${grid1.gridTemplateRows}`);
    console.log(`간격: ${grid1.gap}px`);
    console.log(`안쪽 여백: ${grid1.padding}px`);
    console.log(`배경색: ${grid1.backgroundColor}`);
}
