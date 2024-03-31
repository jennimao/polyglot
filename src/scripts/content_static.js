// Define styles as an object
const subtitleStyles = {
    webkitFontSmoothing: "antialiased",
    color: "#fff",
    lineHeight: "1.2",
    userSelect: "none",
    fontSize: "1em",
    fontFamily: "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif",
    cursor: "none",
    pointerEvents: "auto",
    direction: "ltr",
    letterSpacing: "0",
    display: "block",
    whiteSpace: "nowrap",
    textAlign: "center",
    position: "absolute",
    left: "30.4912%",
    bottom: "5%",
    fontSize: "27px",
    lineHeight: "normal",
    fontStyle: "italic",
    color: "#ffffff",
    textShadow: "#000000 0px 0px 7px",
    fontWeight: "bolder"
};

// Function to add a subtitle if the subtitle container exists
function addSubtitleIfContainerExists(text, duration) {
    const subtitleContainer = document.querySelector(".player-timedtext");
    if (subtitleContainer) {
        const subtitleElt = document.createElement("div");
        subtitleElt.classList.add("custom-subtitle");
        subtitleElt.textContent = text;

        // Apply styles to the subtitle element
        Object.assign(subtitleElt.style, subtitleStyles);

        subtitleContainer.insertAdjacentElement('beforeend', subtitleElt);

        // Show the subtitle
        subtitleElt.style.display = "block";

        // Hide the subtitle after the specified duration
        setTimeout(() => {
            subtitleElt.style.display = "none";
        }, duration * 1000); // Convert duration from seconds to milliseconds
    } else {
        console.error("Subtitle container not found.")
    }
}

// Function to check for the existence of the subtitle container and add a subtitle if it exists
function checkAndAddSubtitle(text, duration) {
    addSubtitleIfContainerExists(text, duration);
}

// Call checkAndAddSubtitle every second
setInterval(() => {
    checkAndAddSubtitle("MY SUBTITLES!!!!!", 1); // Subtitle appears for 1 second
}, 1000);
