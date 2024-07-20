const quotes = [
  {
    quotee: "White Mask Varre",
    quote: "Unfortunately for you, however, you are maidenless."
  },
  {
    quotee: "Sir Gideon Ofnir, the All-Knowing",
    quote: "Find the Albinauric woman.",
  },
  {
    quotee: "Godrick the Grafted",
    quote: "Forefathers, one and all… Bear witness!",
  },
  {
    quotee: "Blackguard Big Boggart",
    quote: "Marika's tits, you must be 'ungry.",
  },
  {
    quotee: "Miriel, Pastor of Vows",
    quote: "Heresy is not native to the world; it is but a contrivance. All things can be conjoined.",
  },
  {
    quotee: "Diallos",
    quote: "The tale of House Hoslow is told in blood.",
  },
  {
    quotee: "Smithing Master Hewg",
    quote: "Well, where've you been hiding? I took you for dead. No matter. It's all the same. Lay out your arms, then.",
  },
  {
    quotee: "Melina",
    quote: "Greetings, traveler, from beyond the fog. I am Melina. I offer you an accord.",
  },
  {
    quotee: "Godfrey, First Elden Lord",
    quote: "I have given thee courtesy enough. Now I fight as Hoarah Loux, Warrior!",
  },
  {
    quotee: "Margit, the Fell Omen",
    quote: "Put these foolish ambitions to rest.",
  },
  {
    quotee: "Malenia, Blade of Miquella",
    quote: "I am Malenia, Blade of Miquella. And I have never known defeat.",
  },
  {
    quotee: "Rykard, Lord of Blasphemy",
    quote: "Join the Serpent King as family. Together, we shall devour the very gods.",
  },
  {
    quotee: "D, Hunter of the Dead",
    quote: "Those who live in death should be well left alone.",
  },
  {
    quotee: "Rennala, Queen of the Full Moon",
    quote: "Come, sweetings, time to be born, anew.",
  },
  {
    quotee: "Shabriri",
    quote: "Ahhh, may chaos take the world! May chaos take the world!",
  },
  {
    quotee: "Witch-Hunter Jerren",
    quote: "A celebration of war! The Radahn Festival!",
  },
  {
    quotee: "Sorceress Sellen",
    quote: "Anticipate grievances, young apprentice.",
  },
  {
    quotee: "Finger Reader Enia",
    quote: "Now, go forth. Let the words of the Fingers guide you",
  }
];

function initQuoteUpdate() {
  updateQuote();
  // change displayed quote every 10s
  setInterval(updateQuote, 10000);
}

function updateQuote() {
  const quoteCanvas = document.getElementById("quote-canvas");
  const canvasContext = quoteCanvas.getContext("2d");

  // fix canvas dimensions and resolution
  // get the DPR and size of the canvas
  const dpr = window.devicePixelRatio;
  const rect = quoteCanvas.getBoundingClientRect();

  // set the "actual" size of the canvas
  quoteCanvas.width = rect.width * dpr;
  quoteCanvas.height = rect.height * dpr;

  // scale the context to ensure correct drawing operations
  canvasContext.scale(dpr, dpr);

  // set the "drawn" size of the canvas
  quoteCanvas.style.width = `$(rect.width)px`;
  quoteCanvas.style.height = `$(rect.height)px`;


  // reset before rendering new quote
  canvasContext.reset();

  canvasContext.fillStyle = "#e0e0e0";
  canvasContext.font = "italic 1rem Georgia"
  quoteObject = quotes[Math.floor(Math.random() * quotes.length)];
  canvasContext.fillText(quoteObject.quote, 50, 50);
}