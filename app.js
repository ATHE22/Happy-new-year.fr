var num = Math.floor(Math.random() * 4) + 1;
$("#card").wScratchPad({
  size: 150, // The size of the brush/scratch.
  bg: `CARD${num}.jpg`, // Background (image path or hex color).
  fg: `FRONT.jpg`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});
