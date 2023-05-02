const video = document.querySelector('video');
video.addEventListener('loadedmetadata', function() {
    video.play();
    video.requestFullscreen();
});
