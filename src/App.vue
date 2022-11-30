<template>
  <main :class="[stepCounter === 3 ? 'stepThreeParent' : 'parent']">
    <div class="backdrop-filter-container">
      <div class="container">
        <img alt="meat moot logo" src="./assets/logo.png" class="logo" />

        <keep-alive>
          <WelcomePage v-if="stepCounter === 1" />
        </keep-alive>

        <keep-alive>
          <SelectDatePage v-if="stepCounter === 2" />
        </keep-alive>

        <OrderPage v-if="stepCounter === 3" />

        <PaymentPage v-if="stepCounter === 4" />

        <CangPage v-if="stepCounter === 5" />

        <div class="navigationSection">
          <ArrowIcon
            @click="incrementCounter"
            :unActiveRightArrow="stepCounter === 5"
          />
          <div>
            <p :class="stepCounter === 1 && 'activePoint'"></p>
            <p :class="stepCounter === 2 && 'activePoint'"></p>
            <p :class="stepCounter === 3 && 'activePoint'"></p>
            <p :class="stepCounter === 4 && 'activePoint'"></p>
            <p :class="stepCounter === 5 && 'activePoint'"></p>
          </div>
          <ArrowIcon
            @click="decrementCounter"
            :unActiveLeftArrow="stepCounter === 1"
            arrowDirection="leftArrow"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import WelcomePage from "./components/WelcomePage.vue";
import ArrowIcon from "./components/arrowIcon.vue";
import SelectDatePage from "./components/SelectDatePage.vue";
import OrderPage from "./components/OrderPage.vue";
import PaymentPage from "./components/PaymentPage.vue";
import CangPage from "./components/CangPage.vue";
import { ref, reactive, toRefs } from "vue";
export default {
  name: "App",
  components: {
    WelcomePage,
    ArrowIcon,
    SelectDatePage,
    OrderPage,
    PaymentPage,
    CangPage,
  },
  setup() {
    const stepCounter = ref(1);
    let userBooking = reactive({
      branch: "",
      seats: "",
      ourTerms: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      time: "",
    });

    function incrementCounter() {
      if (stepCounter.value < 5) stepCounter.value++;
    }

    function decrementCounter() {
      if (stepCounter.value > 1) stepCounter.value--;
    }

    // function welcomePageStateHandler(welcomePageState) {
    //   userBooking = { ...userBooking, ...welcomePageState };
    //   console.log(userBooking);
    // }

    // function SelectDatePageStateHandler(welcomePageState) {
    //   userBooking = { ...userBooking, ...welcomePageState };
    //   console.log(userBooking);
    // }
    // provide("userBooking", userBooking);
    return {
      stepCounter,
      incrementCounter,
      decrementCounter,
      ...toRefs(userBooking),
    };
  },
};
</script>

<style></style>
