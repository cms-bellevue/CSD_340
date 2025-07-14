function transform(imgElement) {
  const original = imgElement.getAttribute("data-original");
  const alt = imgElement.getAttribute("data-alt");

  if (imgElement.src.includes(alt)) {
    imgElement.src = original;
  } else {
    imgElement.src = alt;
  }
}