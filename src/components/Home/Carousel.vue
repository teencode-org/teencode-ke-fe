<template>
  <div>
    <div class="carousel carousel-slider center intro">
      <div class="carousel-fixed-item intro-area">
        <h2 class="intro-area__text">
          <a
            href="http://www.investopedia.com/articles/personal-finance/072715/10-richest-most-successful-tech-geniuses.asp"
            target="_blank"
          >6 out of 10</a> most successful tech leaders started coding before the age of 15.</h2>
      </div>
      <div class="carousel-item white-text" href="#one!">
        <img class="intro-image" src="../../assets/images/header-bg.jpg">
      </div>
      <div class="carousel-item amber white-text" href="#two!">
        <img src="../../assets/images/IMG_8010.jpg">
      </div>
      <div class="carousel-item green white-text" href="#three!">
        <img src="../../assets/images/teencode_maryleaks.jpg">
      </div>
      <div class="carousel-item blue white-text" href="#four!">
        <img src="../../assets/images/teencode-group-pic-small.jpg">
      </div>

      <div class="intro-navigation">
        <i id="prev"
          class="material-icons intro-navigation__left"
          @click="navigation('prev')">chevron_left
        </i>
        <i id="next"
          class="material-icons intro-navigation__right"
          @click="navigation('next')">chevron_right
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css';

export default {
  name: 'Carousel',
  mounted() {
    const el = document.querySelector('.carousel.carousel-slider');
    const instance = {
      fullWidth: true,
      indicators: true,
    };

    M.Carousel.init(el, instance);
  },

  methods: {
    navigation(move) {
      const el = document.querySelector('.carousel.carousel-slider');
      const instance = M.Carousel.getInstance(el);
      if (move === 'next') {
        return instance.next();
      }
      return instance.prev();
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/components/carousel.scss";
</style>
