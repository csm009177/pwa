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

function exampleOne() { 
    console.log("모든 HTML 태그:");
    for(let i = 0; i < htmlElements.tags.length; i++) {
        console.log(htmlElements.tags[i]);
    }
}
// exampleOne()

function exampleTwo() {
    console.log("요소 번호 목록:");
    for(let i = 0; i < htmlElements.tags.length; i++) {
        console.log(`${i + 1}번째: ${htmlElements.tags[i]}`);
    } // 인덱스번호에 1을 더하면?
}
// exampleTwo()

function exampleThree() {
    console.log("태그와 크기:");
    for(let i = 0; i < htmlElements.tags.length; i++) {
        console.log(`${htmlElements.tags[i]} - ${htmlElements.widths[i]}px`);
    } // 태그에서 인덱스와 같은 인덱스를 크기에서 찾는다
}
// exampleThree()

function exampleFour() {
    console.log("첫 4개 요소들:");
    for(let i = 0; i < 4; i++) {
        console.log(htmlElements.tags[i]);
    }
}
// exampleFour()

function exampleFive() {
    console.log("나머지 요소들:");
    for(let i = 4; i < htmlElements.tags.length; i++) {
        console.log(htmlElements.tags[i]);
    }
}
// exampleFive()

function exampleSix() {
    console.log("역순 태그:");
		// 반대로 세아리려면 시작점과 끝점을 반대로 바꾸어야함
    for(let i = htmlElements.tags.length - 1; i >= 0; i--) {
        console.log(htmlElements.tags[i]);
    }
}
// exampleSix()

function exampleSeven() {
    console.log("너비가 150px 이상인 요소들:");
    const largeElements = [];
    for(let i = 0; i < htmlElements.tags.length; i++) {
        if(htmlElements.widths[i] >= 150) {
            largeElements[largeElements.length] = htmlElements.tags[i];
        }
    }
    for(let i = 0; i < largeElements.length; i++) {
        console.log(`${largeElements[i]} (${htmlElements.widths[i]}px)`);
    }
}
/** 해석 
 * 새로운 비어있는 리스트를 만들고
 * 150보다 큰 크기를 가지는 요소의 순서를 찾고
 * 같은 순서를 가지는 요소를 태그에서 찾아서
 * 새로운 리스트에 넣는다
 * 완성된 리스트의 모든 요소를 반복문을 통해서
 * 완성된 리스트의 길이 미만으로 출력한다
 * **/
// exampleSeven()

function exampleEight() {
    console.log("첫 번째 block 요소:");
    let found = null;
    console.log(found);
    for(let i = 0; i < htmlElements.types.length; i++) {
        if(htmlElements.types[i] === "block") {
            found = htmlElements.tags[i];
            console.log(found);
            break;
        }
    }
    console.log(found);
}
/**
 * found라는 공간을 만들고 null을 넣어놓는다
 * found는 다른 것을 넣지 않으면 null이 있을것이다
 * htmlElements의 타입의 길이 직전까지 {}안이 실행된다
 * htmlElements의 타입의 요소중에 인덱스+1번째가 "block"이면
 * {}가 실행된다
 * break를 만나면 if조건을 만족하는 최초의 인덱스에서 멈춘다
 * found에는 htmlElements의 타입의 인덱스+1번째 것을 출력
 */
// exampleEight()

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

function exampleTen() {
    console.log("z-index 10 이상이 있나요?");
    let hasHighZIndex = false;
    for(let i = 0; i < htmlElements.zIndexes.length; i++) {
        if(htmlElements.zIndexes[i] >= 10) {
            hasHighZIndex = true;
            break;
        }
    }
    console.log(hasHighZIndex ? "있습니다" : "없습니다");
}

function exampleEleven() {
    console.log("모든 요소가 높이 20px 이상인가요?");
    let allHighEnough = true;
    for(let i = 0; i < htmlElements.heights.length; i++) {
        if(htmlElements.heights[i] < 20) {
            allHighEnough = false;
            break;
        }
    }
    console.log(allHighEnough ? "네, 모두 20px 이상입니다" : "아니요, 일부가 20px 미만입니다");
}

function exampleTwelve() {
    console.log("red 색상 요소가 있나요?");
    let hasRedElement = false;
    for(let i = 0; i < htmlElements.colors.length; i++) {
        if(htmlElements.colors[i] === "red") {
            hasRedElement = true;
            break;
        }
    }
    console.log(hasRedElement ? "있습니다" : "없습니다");
}

function exampleThirteen() {
    console.log("전체 너비 합계:");
    let sum = 0;
    for(let i = 0; i < htmlElements.widths.length; i++) {
        sum = sum + htmlElements.widths[i];
    }
    console.log(`${sum}px`);
}

function exampleFourteen() {
    console.log("평균 높이:");
    let sum = 0;
    for(let i = 0; i < htmlElements.heights.length; i++) {
        sum = sum + htmlElements.heights[i];
    }
    const average = sum / htmlElements.heights.length;
    console.log(`${average}px`);
}

function exampleFifteen() {
    console.log("너비 200px 이상 요소들:");
    const wideElements = [];
    for(let i = 0; i < htmlElements.widths.length; i++) {
        if(htmlElements.widths[i] >= 200) {
            wideElements[wideElements.length] = `${htmlElements.tags[i]} (${htmlElements.widths[i]}px)`;
        }
    }
    for(let i = 0; i < wideElements.length; i++) {
        console.log(wideElements[i]);
    }
}

function exampleSixteen() {
    console.log("display 타입별 요소 수:");
    let blockCount = 0;
    let inlineCount = 0;
    let inlineBlockCount = 0;

    for(let i = 0; i < htmlElements.types.length; i++) {
        if(htmlElements.types[i] === "block") {
            blockCount = blockCount + 1;
        } else if(htmlElements.types[i] === "inline") {
            inlineCount = inlineCount + 1;
        } else if(htmlElements.types[i] === "inline-block") {
            inlineBlockCount = inlineBlockCount + 1;
        }
    }

    console.log(`block: ${blockCount}개`);
    console.log(`inline: ${inlineCount}개`);
    console.log(`inline-block: ${inlineBlockCount}개`);
}

function exampleSeventeen() {
    console.log("span 태그의 인덱스:");
    let index = -1;
    for(let i = 0; i < htmlElements.tags.length; i++) {
        if(htmlElements.tags[i] === "span") {
            index = i;
            break;
        }
    }
    console.log(index);
}

function exampleEighteen() {
    console.log("마지막 inline 요소의 인덱스:");
    let lastIndex = -1;
    for(let i = 0; i < htmlElements.types.length; i++) {
        if(htmlElements.types[i] === "inline") {
            lastIndex = i;
        }
    }
    console.log(lastIndex);
}

function exampleNineteen() {
    console.log("block 타입이면서 파란색 요소:");
    for(let i = 0; i < htmlElements.tags.length; i++) {
        if(htmlElements.types[i] === "block" && htmlElements.colors[i] === "blue") {
            console.log(`${htmlElements.tags[i]} - ${htmlElements.colors[i]}`);
        }
    }
}

function exampleTwenty() {
    console.log("태그 이름 역순:");
    for(let i = htmlElements.tags.length - 1; i >= 0; i--) {
        console.log(htmlElements.tags[i]);
    }
}

function exampleTwentyOne() {
    console.log("최대 너비와 요소:");
    let maxWidth = htmlElements.widths[0];
    let maxIndex = 0;

    for(let i = 1; i < htmlElements.widths.length; i++) {
        if(htmlElements.widths[i] > maxWidth) {
            maxWidth = htmlElements.widths[i];
            maxIndex = i;
        }
    }

    console.log(`${htmlElements.tags[maxIndex]} - ${maxWidth}px`);
}

function exampleTwentyTwo() {
    console.log("최소 z-index와 요소:");
    let minZIndex = htmlElements.zIndexes[0];
    let minIndex = 0;

    for(let i = 1; i < htmlElements.zIndexes.length; i++) {
        if(htmlElements.zIndexes[i] < minZIndex) {
            minZIndex = htmlElements.zIndexes[i];
            minIndex = i;
        }
    }

    console.log(`${htmlElements.tags[minIndex]} - ${minZIndex}`);
}

function exampleTwentyThree() {
    console.log("색상별 요소 분류:");
    const groups = {};

    for(let i = 0; i < htmlElements.colors.length; i++) {
        const color = htmlElements.colors[i];
        if(groups[color] === undefined) {
            groups[color] = [];
        }
    }

    for(let i = 0; i < htmlElements.tags.length; i++) {
        const color = htmlElements.colors[i];
        const tag = htmlElements.tags[i];
        groups[color][groups[color].length] = tag;
    }

    const colorNames = Object.keys(groups);
    for(let i = 0; i < colorNames.length; i++) {
        const color = colorNames[i];
        console.log(`${color}:`);
        for(let j = 0; j < groups[color].length; j++) {
            console.log(`  ${groups[color][j]}`);
        }
    }
}

function exampleTwentyFour() {
    console.log("모든 태그 이름 (쉼표 구분):");
    let result = "";
    for(let i = 0; i < htmlElements.tags.length; i++) {
        result = result + htmlElements.tags[i];
        if(i < htmlElements.tags.length - 1) {
            result = result + ", ";
        }
    }
    console.log(result);
}