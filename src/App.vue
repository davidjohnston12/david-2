<template>
  <div id="app">
    <div class="logo">
      <img src="./assets/logo.jpeg" alt="Logo" />
    </div>
    <div class="slideshow">
      <div
        v-for="(media, index) in mediaItems"
        :key="index"
        :class="['slide', { active: index === activeIndex }]"
      >
        <img
          v-if="media.type === 'image'"
          :src="media.src"
          :alt="'Slide ' + (index + 1)"
        />
        <video v-if="media.type === 'video'" autoplay muted loop>
          <source :src="media.src" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <p class="text">Mersvo</p>
  </div>
</template>

<script>
import img1 from "./assets/retro.jpeg";
import img2 from "./assets/joker.jpeg";
import img3 from "./assets/fortnite.jpeg";
import video1 from "./assets/videoearth.mp4"; // Import your video file

export default {
  name: "App",
  data() {
    return {
      mediaItems: [
        { type: "video", src: video1 }, // Add the video to the array
        { type: "image", src: img1 },
        { type: "image", src: img2 },
        { type: "image", src: img3 },
      ],
      activeIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      this.changeSlide(); // Start the slideshow
    },
    changeSlide() {
      clearInterval(this.intervalId);

      const currentMedia = this.mediaItems[this.activeIndex];
      const duration = currentMedia.type === "video" ? 30000 : 10000; // 30 seconds for video, 10 seconds for images

      this.intervalId = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.mediaItems.length;
        this.changeSlide(); // Set the next slide's interval
      }, duration);
    },
  },
  beforeUnmount() {
    clearInterval(this.intervalId); // Clear the interval on component destroy
  },
};
</script>

<style>
#app {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}
.logo img {
  width: 200px; /* Adjust the size of the logo as needed */
  height: auto;
}

@media (max-width: 599.99px) {
  .logo img {
    width: 100px; /* Adjust the size of the logo as needed */
    height: auto;
  }
}

.slideshow {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.slide {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: absolute; /* Position absolute to overlap slides */
}

.slide img,
.slide video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the entire container while maintaining aspect ratio */
}

.slide.active {
  opacity: 1;
}

.text {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: red;
  font-size: 5vw; /* Use vw for responsive font size */
  z-index: 10;
}
</style>
