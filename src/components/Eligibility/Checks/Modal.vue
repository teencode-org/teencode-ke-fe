<template>
  <div class="eligibilitychecks">
    <div class="eligibilitychecks-header">
      <img
        :src="require('../../../assets/images/logo-colored.png')"
        class="eligibilitychecks-header__logo"
      />
      <router-link to="/">
        <i class="material-icons eligibilitychecks-header__close">close</i>
      </router-link>

      <h4 class="eligibilitychecks-header__text">
        Eligibility Check
        <p>For schools</p>
      </h4>
    </div>

    <div class="eligibilitychecks-body">
      <div class="eligibilitychecks-body__progress">
        <div class="progress">
          <div class="determinate" style="width: 70%"></div>
        </div>
      </div>

      <div class="eligibilitychecks-body__responses">
        <EligibilityQuestions />
      </div>
    </div>
  </div>
</template>

<script>
import EligibilityQuestions from './Questions.vue';

export default {
  name: 'EligibilityModal',
  components: {
    EligibilityQuestions,
  },
};
</script>

<style lang="scss">
  @import "../../../assets/scss/components/eligibility.scss";
</style>
