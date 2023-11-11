import { ImageSlider } from "./ImageSlider";
import car1 from "./assets/img-1.jpg";
import car2 from "./assets/img-2.jpg";
import car3 from "./assets/img-3.jpg";
import car4 from "./assets/img-4.jpg";
import car5 from "./assets/img-5.jpg";

const IMAGES = [
  { url: car1, alt: "Car one" },
  { url: car2, alt: "Car two" },
  { url: car3, alt: "Car three" },
  { url: car4, alt: "Car four" },
  { url: car5, alt: "Car five" },
];

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "500px",
        margin: "0 auto",
        aspectRatio: "16 / 9",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "3rem" }}>
        Link
      </a>
    </div>
  );
}

export default App;
