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
        <a href="#" v-if="company.desc.length > 200">View more</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    company() {
      return this.$store.state.companies.find(
        ({ id }) => id === this.$route.params.company
      );
    }
  },
  mounted() {
    console.log(this.company);
  }
};
</script>
