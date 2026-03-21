  // 1. Register the plugin
gsap.registerPlugin(ScrollTrigger);

        // 2. Create a Timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills",
                start: "top top",      // Start when the top of the section hits the top of the screen
                end: "+=2000",         // Duration of the "pause" (scrolling distance)
                scrub: 1,              // Animation speed matches scroll speed
                pin: true,             // This keeps the section fixed on screen
                anticipatePin: 1
            }
        });

        // 3. Define the Animation Steps
        tl.from("#one", { 
            scale: 0.6, 
            duration: 1,
            ease: "power1.inOut"
        })
        .to("#two", { opacity: 1, scale: 1, y: 20, duration: 0.5 }, "-=0.7")
        .to("#three", { opacity: 1, scale: 1, y: 20, duration: 0.5 }, "-=0.4")
        .to("#skill-main", { opacity: 1, scale: 1, duration: 0.5 }, "-=0.3")
        .to("#four", { opacity: 1, scale: 1, x: -20, duration: 0.5 }, "-=0.2")
        .to("#five", { opacity: 1, scale: 1, x: 20, duration: 0.5 }, "-=0.1")
        .to("#skill-head", { opacity: 1, scale: 1, duration: 0.5 }, "-=0.5")
        .to("#six", { opacity: 1, scale: 1, x: 20, duration: 0.5 }, "-=0.1")
        .to("#seven", { opacity: 1, scale: 1, x: -20, duration: 0.5 }, "-=0.1")
        .to("#skill-end", { opacity: 1, scale: 1, y: -20, duration: 0.5 }, "-=0.1");

  const textElement = document.getElementById("text");

  // EXACT sequence from video
  const finalText = "Vardhan M.\nChougale";

  let index = 0;

setTimeout(() => {
  function type() {
    if (index <= finalText.length) {
      textElement.textContent = finalText.slice(0, index);
      index++;
      setTimeout(type, 110); // typing speed similar to video
    }
  }

  // Start animation
  type();

}, 700); 

const sta = document.getElementById("sta");

sta.onclick = function() {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")) {
    moon.style.display = "none";
    sun.style.display = "flex";
  } else {
    moon.style.display = "flex";
    sun.style.display = "none";
  }
}

const cm = document.getElementById("cm");

setTimeout(() => {
cm.style.display = "flex";
}, 3450);

const srBottom = ScrollReveal({
origin: 'bottom',
distance: '20px',
distance: '80px',
duration: 2000,
})

srBottom.reveal('.bottom',{delay: 2600});




