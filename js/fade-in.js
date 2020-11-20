const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 400px 0px"

};

const appearOnSroll = new IntersectionObserver
(function(
entires,
appearOnSroll
) {
entires.forEach(entry => {
if (!entry.isIntersecting) {
return;
} else {
entry.target.classList.add("appear");
appearOnSroll.unobserve(entry.target);
}
});
},
appearOptions);

faders.forEach(fader => {
    appearOnSroll.observe(fader);

});