<template>
  <div class="company-data">
    <p
      class="company-data__top-text"
    >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla saepe, nam sit repellat dicta possimus.</p>

    <div class="company-data__form">
      <form class="form">
        <div class="form-group">
          <label for="company-name" class="form-label">Company Name</label>
          <div class="form-input">
            <input
              type="text"
              class="form-input__input"
              id="company-name"
              v-model="company_name"
              placeholder="e.g. Your Company Name"
              @blur="checkName"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="company-spend" class="form-label">Company Spend</label>
          <div class="form-input">
            <input
              type="text"
              class="form-input__input"
              id="company-spend"
              v-model="company_spend"
              placeholder="e.g. $150,000"
              @blur="() => checkSpend('company_spend', 'Company Spend')"
              @focus="() => clearField('company_spend')"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="company-spend" class="form-label">Company Spend Ability</label>
          <div class="form-input">
            <input
              type="text"
              class="form-input__input"
              id="company-spend-ability-min"
              v-model="company_spend_ability_min"
              placeholder="e.g. $150,000"
              @blur="() => checkSpend('company_spend_ability_min', 'Company Spend Ability Minimum')"
              @focus="() => clearField('company_spend_ability_min')"
            />
            <input
              type="text"
              class="form-input__input"
              id="company-spend-ability-max"
              v-model="company_spend_ability_max"
              placeholder
              @blur="() => checkSpend('company_spend_ability_max', 'Company Spend Ability Maximum')"
              @focus="() => clearField('company_spend_ability_max')"
            />
          </div>
        </div>
      </form>
    </div>
    <div class="form-errors" v-if="errors.length">
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
const formatDollars = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

const convertToValidNumber = value => {
  const withoutComma = value.replace(",", "");
  const number = parseFloat(withoutComma);
  return number > 0 ? number : false;
};

export default {
  data() {
    return {
      errors: [],
      company_name: "",
      company_spend: "",
      company_spend_ability_min: "",
      company_spend_ability_max: ""
    };
  },
  methods: {
    checkName: function(e) {
      this.errors = [];
      if (!this.company_name) {
        this.errors.push("Company Name is required.");
      }
    },
    checkSpend: function(field, fieldName) {
      this.errors = [];
      if (this[field]) {
        const fixedValue = convertToValidNumber(this[field]);
        if (fixedValue) {
          this[field] = formatDollars.format(fixedValue);
        } else {
          this.errors.push(`${fieldName} is invalid.`);
        }
      } else {
        this.errors.push(`${fieldName} is required.`);
      }
    },
    clearField: function(field) {
      this[field] = "";
    }
  }
};
</script>
