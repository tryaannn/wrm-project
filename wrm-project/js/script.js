// animation
AOS.init();

// scroll
let scrollSpeed = 0.5; // Ubah nilai ini untuk mempercepat/memperlambat
let scrollPosition = 0;

document.addEventListener("wheel", (e) => {
    e.preventDefault(); // Mencegah default scrolling
    scrollPosition += e.deltaY * scrollSpeed; // Memperlambat pergerakan
    window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
    });
}, { passive: false });

// hitung mundur
simplyCountdown(".simply-countdown", {
  year: 2025, // required
  month: 4, // required
  day: 2, // required
  hours: 8, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: {
    //words displayed into the countdown
    days: { singular: "Hari", plural: "Hari" },
    hours: { singular: "Jam", plural: "Jam" },
    minutes: { singular: "Menit", plural: "Menit" },
    seconds: { singular: "Detik", plural: "Detik" },
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: "simply-countdown-inline", //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: false,
  onEnd: function () {
    // your code
    return;
  },
  refresh: 1000, //default refresh every 1s
  sectionClass: "simply-section", //section css class
  amountClass: "simply-amount", // amount css class
  wordClass: "simply-word", // word css class
  zeroPad: false,
  countUp: false, // enable count up if set to true
});
