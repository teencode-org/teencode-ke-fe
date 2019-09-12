<template>
  <div class="home">
    <Navbar />
    <Carousel />
    <Eligibility />
  </div>
</template>

<script>
import Navbar from '../components/Home/Navbar.vue';
import Carousel from '../components/Home/Carousel.vue';
import Eligibility from '../components/Home/EligibilitySection.vue';

export default {
  name: 'home',
  components: {
    Carousel,
    Eligibility,
    Navbar,
  },
};
</script>
