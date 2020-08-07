var instance = new vidbg('.video', {
    mp4: 'assets/video/world.webm', // URL or relative path to MP4 video
    webm: 'assets/video/world.webm', // URL or relative path to webm video
    poster: 'assets/img/poster.jpg', // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
})
var rellax = new Rellax('.rocket');

AOS.init();