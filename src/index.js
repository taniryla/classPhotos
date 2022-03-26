function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  // start by determining which row will have blue shirts versus red shirts
  // create a for loop that will find the largestNumber in the redShirtHeights array
  const shirtColorInFirstRow =
    redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
  for (let idx = 0; idx < redShirtHeights.length; idx++) {
    // create a 2nd for loop that iterates through the sub-arrays for redShirts
    const redShirtHeight = redShirtHeights[idx];
    const blueShirtHeight = blueShirtHeights[idx];

    if (shirtColorInFirstRow === "RED") {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }
  return true;
}
