document.addEventListener("DOMContentLoaded", function() {
    var audioPlayer = document.getElementById("audio-player");
    var nextButton = document.getElementById("next-button");
    var shuffleButton = document.getElementById("shuffle-button");
    var quitButton = document.getElementById("quit-button");

    nextButton.addEventListener("click", function() {
        // Reload the page to get a new random song
        location.reload();
    });

    shuffleButton.addEventListener("click", function() {
        // Reload the page to reshuffle and get a new random song
        location.reload();
    });

    quitButton.addEventListener("click", function() {
        // Stop the audio and hide the player
        audioPlayer.pause();
        audioPlayer.style.display = "none";
    });
});

