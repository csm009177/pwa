export default function NowWether() {
  return (
    <>
      <img
        src={require("../img/nowWether_img.png")}
        alt="현재날씨"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </>
  );
}
