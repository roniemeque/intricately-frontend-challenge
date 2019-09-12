<template>
  <div class="company-page">
    <div class="company-page__top">
      <div class="company-logo">
        <img :src="company.logo" alt class="company-logo__pic" />
      </div>
      <div class="company-info">
        <h2 class="company-info__title">{{company.title}}</h2>
        <div class="company-info__location">
          <img src="/assets/images/location@2x.png" alt class="company-info__location-icon" />
          <span class="company-info__location-text">{{company.location}}</span>
        </div>
      </div>
    </div>
    <div class="company-page__desc">
      <p>
        {{company.desc.length > 200 ? `${company.desc.slice(0, 200)}...` : company.desc}}
        <a
          href="#"
          v-if="company.desc.length > 200"
        >View more</a>
      </p>
    </div>
    <div class="company-page__content">
      <div class="company-page__activities-wrapper">
        <company-activities v-bind:company="company"></company-activities>
      </div>
      <div class="company-page__secondary-boxes-wrapper">
        <company-similar></company-similar>
        <company-history-graph></company-history-graph>
        <company-history-items></company-history-items>
      </div>
    </div>
  </div>
</template>

<script>
import CompanyActivities from "../../components/CompanyActivities.vue";
import CompanySimilar from "../../components/CompanySimilar.vue";
import CompanySpendHistoryGraph from "../../components/CompanySpendHistoryGraph.vue";
import CompanySpendHistoryItems from "../../components/CompanySpendHistoryItems.vue";

export default {
  components: {
    "company-activities": CompanyActivities,
    "company-similar": CompanySimilar,
    "company-history-graph": CompanySpendHistoryGraph,
    "company-history-items": CompanySpendHistoryItems
  },
  computed: {
    company() {
      return this.$store.state.companies.find(
        ({ id }) => id === this.$route.params.company
      );
    }
  }
};
</script>
