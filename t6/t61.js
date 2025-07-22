const htmlElements = {
  tags: ["div", "h1", "p", "span", "button", "input", "img", "a"],
  ids: [
    "header",
    "content",
    "sidebar",
    "footer",
    "nav",
    "form",
    "banner",
    "main",
  ],
  classes: [
    "container",
    "active",
    "hidden",
    "primary",
    "secondary",
    "btn",
    "text",
    "link",
  ],
  types: [
    "block",
    "inline",
    "inline-block",
    "block",
    "inline",
    "inline",
    "inline",
    "inline",
  ],
  widths: [300, 150, 200, 100, 120, 180, 250, 160],
  heights: [50, 80, 40, 25, 35, 30, 200, 45],
  colors: [
    "blue",
    "red",
    "green",
    "black",
    "gray",
    "white",
    "yellow",
    "purple",
  ],
  zIndexes: [1, 10, 5, 2, 3, 1, 15, 8],
};

function 모든것을출력하기() {
  console.log(htmlElements);
}
// 모든것을출력하기()

function 태그의모든요소출력하기() {
  for (let i = 0; i < htmlElements.tags.length; i++) {
    console.log(htmlElements.tags[i]);
  }
}
// 태그의모든요소출력하기()

function 태그의모든요소중에a태그출력하기() {
  for (let i = 0; i < htmlElements.tags.length; i++) {
    if (htmlElements.tags[i] === "a") {
      console.log(htmlElements.tags[i]);
    }
  }
}
// 태그의모든요소중에a태그출력하기()

function 태그의모든요소의인덱스를출력하기() {
  for (let i = 0; i < htmlElements.tags.length; i++) {
    console.log("인덱스" + i + "번 : " + htmlElements.tags[i]);
  }
}
// 태그의모든요소의인덱스를출력하기()

function 태그와인덱스가같은넓이출력하기() {
  for (let i = 0; i < htmlElements.tags.length; i++) {
    console.log(htmlElements.tags[i] + "와 인덱스가 같은 넓이 :");
    console.log(htmlElements.widths[i]);
  }
}
// 태그와인덱스가같은넓이출력하기()

function 객체안의모든리스트명을출력하기() {
  for (let key in htmlElements) {
    console.log(key);
  }
}
// 객체안의모든리스트명을출력하기()

function 객체안의모든리스트에서태그와인덱스가같은모든것출력하기() {
  for (let i = 0; i < htmlElements.tags.length; i++) {
    console.log(htmlElements.tags[i] + `는 ${i}번째 : `);
    for (let key in htmlElements) {
      console.log(htmlElements[key][i]);
    }
  }
}
// 객체안의모든리스트에서태그와인덱스가같은모든것출력하기();

function 넓이가200이상인넓이를출력하기() {
  for (let i = 0; i < htmlElements.widths.length; i++) {
    if (htmlElements.widths[i] >= 200) {
      console.log(htmlElements.widths[i]);
    }
  }
}
// 넓이가200이상인넓이를출력하기()

function 넓이가200이상인요소와인덱스번호가같은태그의요소출력하기() {
  for (let i = 0; i < htmlElements.widths.length; i++) {
    if (htmlElements.widths[i] <= 200) {
      console.log(htmlElements.widths[i]+'인 태그');
      console.log('=>' + htmlElements.tags[i])
    }
  }
}
// 넓이가200이상인요소와인덱스번호가같은태그의요소출력하기()

function 넓이가200이상인요소와인덱스번호를확인하고각키마다인덱스를비교하여같은것을출력(){
    for(let i=0; i<htmlElements.widths.length; i++){
        if(htmlElements.widths[i] <=200){
            console.log('길이가' +htmlElements.widths[i] + '인')
        }
    }
}
넓이가200이상인요소와인덱스번호를확인하고각키마다인덱스를비교하여같은것을출력()