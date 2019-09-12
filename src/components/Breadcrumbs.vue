<!-- no functionality! only markup and styling - for now -->
<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li class="breadcrumbs__item">Home</li>
      <li class="breadcrumbs__item">{{currentPage}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    currentPage: function() {
      return this.$route.meta.title;
    }
  }
};
</script>
