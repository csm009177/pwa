const htmlElements = {
    tags: ["div", "h1", "p", "span", "button", "input", "img", "a"],
    ids: ["header", "content", "sidebar", "footer", "nav", "form", "banner", "main"],
    classes: ["container", "active", "hidden", "primary", "secondary", "btn", "text", "link"],
    types: ["block", "inline", "inline-block", "block", "inline", "inline", "inline", "inline"],
    widths: [300, 150, 200, 100, 120, 180, 250, 160],
    heights: [50, 80, 40, 25, 35, 30, 200, 45],
    colors: ["blue", "red", "green", "black", "gray", "white", "yellow", "purple"],
    zIndexes: [1, 10, 5, 2, 3, 1, 15, 8]
};
function 객체안의배열을반복문으로출력하기(){
    for(let key in htmlElements){
        console.log(key, ' => ');
        for(let i=0; i<htmlElements[key].length; i++){
            console.log(htmlElements[key][i]);
        }
    }

}


function exampleNine() {
    console.log("첫 번째 input 태그의 인덱스:");
    let foundIndex = -1;
    for(let i = 0; i < htmlElements.tags.length; i++) {
        if(htmlElements.tags[i] === "input") {
            foundIndex = i;
            break;
        }
    }
    console.log(foundIndex);
}
exampleNine()