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


class H_휴먼 {
    name = "성민";
    age = 0;
    address = "대전 서구 배재로";
}
// console.log("Human Data : ", new H_휴먼());

class N_닝겐스 {
    title = "otaku";
    age = 35;
    job = "자택경비원";
}
const callNingens = new N_닝겐스();
// console.log("NIngens job : ", callNingens.job);
