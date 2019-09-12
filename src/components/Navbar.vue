<!-- no functionality! only markup and styling -->
<template>
  <nav class="nav">
    <img src="/assets/images/logo-pink@2x.png" alt class="logo" />
    <div class="search">
      <div class="search-box">
        <img src="/assets/images/search@2x.png" alt class="search-box__search-icon" />
        <input type="text" placeholder="Search Companies" class="search-box__input" />
      </div>
      <span class="search__or">or</span>
      <button class="search__new-list">New Smartlist</button>
    </div>
    <div class="dropdowns">
      <div class="dropdown">
        <div class="dropdown__top">
          <span class="dropdown__title">Prospect</span>
          <img src="/assets/images/arrow-down@2x.png" alt class="dropdown__icon" />
        </div>
      </div>
      <div class="dropdown">
        <div class="dropdown__top">
          <span class="dropdown__title">Alert</span>
          <img src="/assets/images/arrow-down@2x.png" alt class="dropdown__icon" />
        </div>
      </div>
      <div class="dropdown">
        <div class="dropdown__top">
          <span class="dropdown__title">Learn</span>
          <img src="/assets/images/arrow-down@2x.png" alt class="dropdown__icon" />
        </div>
      </div>
    </div>
    <div class="profile">
      <img src="/assets/images/default@2x.png" alt class="profile__chrome" />
      <img src="/assets/images/group@2x.png" alt class="profile__pic" />
      <img src="/assets/images/arrow-down@2x.png" alt class="profile__down" />
    </div>
  </nav>
</template>

<script>
export default {};
</script>
