<template>
  <div>
    <div class="eligibilitychecks-body__question">
      <h5>Is your school a high school?</h5>
    </div>
    <EligibilityAnswers />
  </div>
</template>

<script>
import EligibilityAnswers from './Answers.vue';

export default {
  name: 'EligibilityQuestions',
  components: {
    EligibilityAnswers,
  },
};
</script>

<style lang="scss">
  @import "../../../assets/scss/components/eligibility.scss";
</style>
