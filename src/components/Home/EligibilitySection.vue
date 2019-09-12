<template>
  <div class="eligibility">
    <div class="eligibility-box">
      <h5 class="eligibility-box__text">High schools in Nairobi can apply to partner with us</h5>
      <router-link to="/check-eligibility">
        Check if your school is eligible >>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EligibilityBox',
};
</script>

<style lang="scss">
  @import "../../assets/scss/components/eligibility.scss";
</style>
