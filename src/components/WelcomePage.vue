<template>
  <h1 class="welcomePage-title allTitel">Welcome</h1>
  <div class="welcomePage-body">
    <div class="welcomePage-body-paragraph">
      <p class="welcomePage-question">
        <span>Why</span>
        <span>Meat Moot</span>
        <span>?</span>
      </p>
      <p class="welcomePage-ans">
        <span>Meat Moot </span>
        Restaurant specializes in reflecting the culture of cooking various
        types of meat in traditional cooking methods with modern and innovative
        seasonings. It has gained wide fame due to the quality of its dishes, as
        grilled and smoked meats such as ribs and brisket, in addition to rice
        dishes that accompany different meals, salads and distinctive appetizers
      </p>
    </div>
    <form action="" class="welcomePage-form">
      <label for="Choose branch" class="label">Choose branch</label>
      <select name="" id="" v-model="branch">
        <option value="Zayed">Zayed</option>
        <option value="Cairo">Cairo</option>
      </select>

      <label for="Number of seat" class="label">Number of seats</label>
      <select name="" id="" v-model="seats">
        <option :value="2">2 Seats</option>
        <option :value="3">3 Seats</option>
      </select>

      <div class="welcomePage-checkbox-container">
        <input type="checkbox" checked v-model="ourTerms" />
        <label for="" class="checkboxLabel"
          >I Accept <span>Our Terms and Conditions</span>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "WelcomePage",
  setup() {
    const welcomePageState = reactive({
      branch: "Zayed",
      seats: 2,
      ourTerms: true,
    });

    const store = useStore();
    const fun = () => store.commit("setState", { ...welcomePageState });

    watch(
      welcomePageState,
      function () {
        fun();
      },
      {
        immediate: true,
      }
    );

    return { ...toRefs(welcomePageState) };
  },
};
</script>

<style scoped></style>
