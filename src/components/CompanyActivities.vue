<template>
  <div class="box">
    <div class="box__top">
      <span>Activities</span>
    </div>
    <div class="box__content">
      <ul>
        <li
          class="box__item--bordered activity"
          v-for="activity in company.activities"
          :key="activity.id"
        >
          <span class="activity__date">{{dateSince(activity.date)}}</span>
          <img :src="activity.image" alt class="activity__company-logo" />
          <p class="activity__text">
            <span class="replacing">{{activity.companyName}}</span> replaced
            <span class="replaced">{{company.title}}</span> on 1 property
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["company"],
  methods: {
    dateSince: function(date) {
      return moment(date).fromNow();
    }
  }
};
</script>
