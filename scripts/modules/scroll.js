export default function initScroll() {
  const svg = document.querySelector(".rewind");
  const path = svg.querySelector("path");

  const scroll = () => {
    const distance = window.scrollY;
    const totalDistance = document.body.clientHeight - window.innerHeight;

    const percentage = distance / totalDistance;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength}`;
    path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
}

  scroll(); 
  window.addEventListener("scroll", scroll);
}