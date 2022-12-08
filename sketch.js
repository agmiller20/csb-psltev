/* eslint-disable no-undef, no-unused-vars */

let row1;
let row2;
let row3;
let row4;
let sel;

const multiplayer = new Tone.Players({
  option1: "media/30Hz-0dB.wav",
  option2: "media/30Hz-3dB.wav",
  option3: "media/30Hz-6dB.wav",
  option4: "media/30Hz-9dB.wav",
  option5: "media/30Hz-12dB.wav",
  option6: "media/30Hz-15dB.wav",
  option7: "media/30Hz-18dB.wav",
  option8: "media/30Hz-21dB.wav",
  option9: "media/30Hz-24dB.wav",
  option10: "media/30Hz-27dB.wav",
  option11: "media/30Hz-30dB.wav",
  option12: "media/45Hz-0dB.wav",
  option13: "media/45Hz-3dB.wav",
  option14: "media/45Hz-6dB.wav",
  option15: "media/45Hz-9dB.wav",
  option16: "media/45Hz-12dB.wav",
  option17: "media/45Hz-15dB.wav",
  option18: "media/45Hz-18dB.wav",
  option19: "media/45Hz-21dB.wav",
  option20: "media/45Hz-24dB.wav",
  option21: "media/45Hz-27dB.wav",
  option22: "media/45Hz-30dB.wav",
  option23: "media/60Hz-0dB.wav",
  option24: "media/60Hz-3dB.wav",
  option25: "media/60Hz-6dB.wav",
  option26: "media/60Hz-9dB.wav",
  option27: "media/60Hz-12dB.wav",
  option28: "media/60Hz-15dB.wav",
  option29: "media/60Hz-18dB.wav",
  option30: "media/60Hz-21dB.wav",
  option31: "media/60Hz-24dB.wav",
  option32: "media/60Hz-27dB.wav",
  option33: "media/60Hz-30dB.wav",
  option34: "media/90Hz-0dB.wav",
  option35: "media/90Hz-3dB.wav",
  option36: "media/90Hz-6dB.wav",
  option37: "media/90Hz-9dB.wav",
  option38: "media/90Hz-12dB.wav",
  option39: "media/90Hz-15dB.wav",
  option40: "media/90Hz-18dB.wav",
  option41: "media/90Hz-21dB.wav",
  option42: "media/90Hz-24dB.wav",
  option43: "media/90Hz-27dB.wav",
  option44: "media/90Hz-30dB.wav"
}).toDestination();

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);

  textSize(16);
  text("Name:", 70, 41);

  textSize(13);
  text("30Hz", 50, 90);
  text("45Hz", 115, 90);
  text("60Hz", 175, 90);
  text("90Hz", 232, 90);

  textSize(14);
  text("gB", 20, 200);

  row1 = createRadio();
  row1.option(" 0");
  row1.option("-3");
  row1.option("-6");
  row1.option("-9");
  row1.option("-12");
  row1.option("-15");
  row1.option("-18");
  row1.option("-21");
  row1.option("-24");
  row1.option("-27");
  row1.option("-30");
  row1.position(50, 100);
  row1.style("width", "50px");
  row1.mouseClicked(mouseClicked1);

  row2 = createRadio();
  row2.option(" 0");
  row2.option("-3");
  row2.option("-6");
  row2.option("-9");
  row2.option("-12");
  row2.option("-15");
  row2.option("-18");
  row2.option("-21");
  row2.option("-24");
  row2.option("-27");
  row2.option("-30");
  row2.position(110, 100);
  row2.style("width", "50px");
  row2.mouseClicked(mouseClicked2);

  row3 = createRadio();
  row3.option(" 0");
  row3.option("-3");
  row3.option("-6");
  row3.option("-9");
  row3.option("-12");
  row3.option("-15");
  row3.option("-18");
  row3.option("-21");
  row3.option("-24");
  row3.option("-27");
  row3.option("-30");
  row3.position(170, 100);
  row3.style("width", "50px");
  row3.mouseClicked(mouseClicked3);

  row4 = createRadio();
  row4.option(" 0");
  row4.option("-3");
  row4.option("-6");
  row4.option("-9");
  row4.option("-12");
  row4.option("-15");
  row4.option("-18");
  row4.option("-21");
  row4.option("-24");
  row4.option("-27");
  row4.option("-30");
  row4.position(230, 100);
  row4.style("width", "50px");
  row4.mouseClicked(mouseClicked4);

  let inp = createInput("");
  inp.position(125, 25);
  inp.size(150);

  textSize(14);
  text("Earbud Type:", 320, 41);

  sel = createSelect("");
  sel.position(410, 27);
  sel.option("None");
  sel.option("JBL");
  sel.option("Beats");
  sel.option("Soundcore");

  button = createButton("Save");
  button.position(380, 300);
  button.mousePressed(saveCanvas);
}

function draw() {}

function mouseClicked1() {
  if (row1.value() === " 0") {
    multiplayer.player("option1").start();
  }
  if (row1.value() === "-3") {
    multiplayer.player("option2").start();
  }
  if (row1.value() === "-6") {
    multiplayer.player("option3").start();
  }
  if (row1.value() === "-9") {
    multiplayer.player("option4").start();
  }
  if (row1.value() === "-12") {
    multiplayer.player("option5").start();
  }
  if (row1.value() === "-15") {
    multiplayer.player("option6").start();
  }
  if (row1.value() === "-18") {
    multiplayer.player("option7").start();
  }
  if (row1.value() === "-21") {
    multiplayer.player("option8").start();
  }
  if (row1.value() === "-24") {
    multiplayer.player("option9").start();
  }
  if (row1.value() === "-27") {
    multiplayer.player("option10").start();
  }
  if (row1.value() === "-30") {
    multiplayer.player("option11").start();
  }
}

function mouseClicked2() {
  if (row2.value() === " 0") {
    multiplayer.player("option12").start();
  }
  if (row2.value() === "-3") {
    multiplayer.player("option13").start();
  }
  if (row2.value() === "-6") {
    multiplayer.player("option14").start();
  }
  if (row2.value() === "-9") {
    multiplayer.player("option15").start();
  }
  if (row2.value() === "-12") {
    multiplayer.player("option16").start();
  }
  if (row2.value() === "-15") {
    multiplayer.player("option17").start();
  }
  if (row2.value() === "-18") {
    multiplayer.player("option18").start();
  }
  if (row2.value() === "-21") {
    multiplayer.player("option19").start();
  }
  if (row2.value() === "-24") {
    multiplayer.player("option20").start();
  }
  if (row2.value() === "-27") {
    multiplayer.player("option21").start();
  }
  if (row2.value() === "-30") {
    multiplayer.player("option22").start();
  }
}

function mouseClicked3() {
  if (row3.value() === " 0") {
    multiplayer.player("option23").start();
  }
  if (row3.value() === "-3") {
    multiplayer.player("option24").start();
  }
  if (row3.value() === "-6") {
    multiplayer.player("option25").start();
  }
  if (row3.value() === "-9") {
    multiplayer.player("option26").start();
  }
  if (row3.value() === "-12") {
    multiplayer.player("option27").start();
  }
  if (row3.value() === "-15") {
    multiplayer.player("option28").start();
  }
  if (row3.value() === "-18") {
    multiplayer.player("option29").start();
  }
  if (row3.value() === "-21") {
    multiplayer.player("option30").start();
  }
  if (row3.value() === "-24") {
    multiplayer.player("option31").start();
  }
  if (row3.value() === "-27") {
    multiplayer.player("option32").start();
  }
  if (row3.value() === "-30") {
    multiplayer.player("option33").start();
  }
}

function mouseClicked4() {
  if (row4.value() === " 0") {
    multiplayer.player("option34").start();
  }
  if (row4.value() === "-3") {
    multiplayer.player("option35").start();
  }
  if (row4.value() === "-6") {
    multiplayer.player("option36").start();
  }
  if (row4.value() === "-9") {
    multiplayer.player("option37").start();
  }
  if (row4.value() === "-12") {
    multiplayer.player("option38").start();
  }
  if (row4.value() === "-15") {
    multiplayer.player("option39").start();
  }
  if (row4.value() === "-18") {
    multiplayer.player("option40").start();
  }
  if (row4.value() === "-21") {
    multiplayer.player("option41").start();
  }
  if (row4.value() === "-24") {
    multiplayer.player("option42").start();
  }
  if (row4.value() === "-27") {
    multiplayer.player("option43").start();
  }
  if (row4.value() === "-30") {
    multiplayer.player("option44").start();
  }
}

function saveCanvas() {
  saveCanvas(cnv);
}
