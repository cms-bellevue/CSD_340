function transform(imgElement) {
  const original = imgElement.getAttribute("data-original");
  const alt = imgElement.getAttribute("data-alt");
  const isBanner = original.includes("banner.jpg"); // Check if it's the Banner/Hulk image

  if (imgElement.src.includes(alt)) {
    imgElement.src = original;
    if (isBanner) {
      imgElement.title = "Click to transform into the Hulk!";
    } else {
      imgElement.title = "Click to transform into Devastator!";
    }
  } else {
    imgElement.src = alt;
    if (isBanner) {
      imgElement.title = "Click to transform back into Dr. Bruce Banner!";
    } else {
      imgElement.title = "Click to transform back into the Constructicons!";
    }
  }
}