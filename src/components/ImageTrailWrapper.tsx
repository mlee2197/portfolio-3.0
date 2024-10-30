import { useEffect, useState, useRef } from "react";
import useMousePosition from "../hooks/useMousePosition";
import styled from "styled-components";
import { cloudinary } from "../services/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

const IMAGE_WIDTH = 124;
const IMAGE_HEIGHT = 200;
const IMAGE_RADIUS = 16;
const trail1 = cloudinary
  .image("portfolio/trail1")
  .resize(fill(IMAGE_WIDTH, IMAGE_HEIGHT))
  .roundCorners(byRadius(IMAGE_RADIUS))
  .quality("auto:best")
  .format("png")
  .toURL();

const trail2 = cloudinary
  .image("portfolio/trail2")
  .resize(fill(IMAGE_WIDTH, IMAGE_HEIGHT))
  .roundCorners(byRadius(IMAGE_RADIUS))
  .quality("auto:best")
  .format("png")
  .toURL();

const trail3 = cloudinary
  .image("portfolio/trail3")
  .resize(fill(IMAGE_WIDTH, IMAGE_HEIGHT))
  .roundCorners(byRadius(IMAGE_RADIUS))
  .quality("auto:best")
  .format("png")
  .toURL();

const trail4 = cloudinary
  .image("portfolio/trail4")
  .resize(fill(IMAGE_WIDTH, IMAGE_HEIGHT))
  .roundCorners(byRadius(IMAGE_RADIUS))
  .quality("auto:best")
  .format("png")
  .toURL();

const trail5 = cloudinary
  .image("portfolio/trail5")
  .resize(fill(IMAGE_WIDTH, IMAGE_HEIGHT))
  .roundCorners(byRadius(IMAGE_RADIUS))
  .quality("auto:best")
  .format("png")
  .toURL();

const trail6 = cloudinary
  .image("portfolio/trail6")
  .resize(fill(IMAGE_WIDTH, IMAGE_HEIGHT))
  .roundCorners(byRadius(IMAGE_RADIUS))
  .quality("auto:best")
  .format("png")
  .toURL();

const IMAGE_URLS = [trail1, trail2, trail3, trail4, trail5, trail6];

const ImageTrail = () => {
  const { ref, mouseX, mouseY } = useMousePosition();
  const [imageIndex, setImageIndex] = useState(0);
  const [lastImagePosition, setLastImagePosition] = useState({ x: 0, y: 0 });
  const imageCache = useRef<Map<string, string>>(new Map());

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % IMAGE_URLS.length);
  };

  const updateImagePosition = () => {
    setLastImagePosition({ x: mouseX, y: mouseY });
  }

  const renderImageOnScreen = (imageUrl: string) => {
    if (!ref.current) return;
    const imgElement = document.createElement('img');

    if (imageCache.current.has(imageUrl)) {
      imgElement.src = imageCache.current.get(imageUrl)!;
    } else {
      imgElement.src = imageUrl;
      // Cache the image URL
      fetch(imageUrl)
        .then(response => response.blob())
        .then(blob => {
          const objectURL = URL.createObjectURL(blob);
          imageCache.current.set(imageUrl, objectURL);
        });
    }

    imgElement.style.position = "absolute";
    imgElement.style.left = `${mouseX - (IMAGE_WIDTH / 2)}px`;
    imgElement.style.top = `${mouseY - (IMAGE_HEIGHT / 2)}px`;
    imgElement.style.opacity = "1";
    imgElement.style.transition = "opacity 1s ease-out";
    imgElement.classList.add("trail-image");

    ref.current.appendChild(imgElement);
    nextImage();
    updateImagePosition();

    setTimeout(() => {
      imgElement.style.opacity = "0";
    }, 10);

    // Remove the element after the fade-out animation completes
    imgElement.addEventListener('transitionend', () => {
      if (ref.current && ref.current.contains(imgElement)) {
        ref.current.removeChild(imgElement);
      }
    });
  }

  useEffect(() => {
    const url = IMAGE_URLS[imageIndex];
    const distance = Math.sqrt(Math.pow(mouseX - lastImagePosition.x, 2) + Math.pow(mouseY - lastImagePosition.y, 2));
    if (url && distance >= IMAGE_WIDTH * 1) {
      renderImageOnScreen(url);
    }
  }, [mouseX, mouseY, imageIndex, lastImagePosition]);

  return (
    <Wrapper ref={ref}>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export default ImageTrail;
