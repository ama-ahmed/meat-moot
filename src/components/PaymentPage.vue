<template>
  <h1 class="PaymentPage-title allTitel">Please Add your pyament metode</h1>

  <div class="PaymentPage-body">
    <form action="" class="PaymentPage-form">
      <label for="" class="label">Card Number</label>
      <input type="number" class="PaymentPage-firstInput" />
      <label for="" class="label">Card Holder Name</label>
      <input type="text" />

      <div class="PaymentPage-date-input">
        <div>
          <label for="" class="label">Exp.Month</label>
          <input type="text" />
        </div>
        <div>
          <label for="" class="label">Exp.Year</label>
          <input type="text" />
        </div>
      </div>
      <label for="" class="label">CVV</label>
      <input type="number" />

      <div class="PaymentPage-checkbox-container">
        <input type="checkbox" checked />
        <label for="" class="checkboxLabel">Save card </label>
      </div>

      <p class="PaymentPage-payButton">Pay</p>
    </form>

    <div class="PaymentPage-checkout">
      <p class="PaymentPage-checkout-title">Checkout</p>
      <div class="PaymentPage-checkout-body">
        <p>Date: <span> Wed Apr 27 2022</span></p>
        <p>
          Time: <span>{{ time }}</span>
        </p>
        <p>
          Number of seats: <span>{{ seats }} Seats</span>
        </p>
        <p>
          Branch: <span>{{ branch }}</span>
        </p>
        <p>Items: <span>Neck - Rips</span></p>
        <p>
          Reservation amount:
          <span class="PaymentPage-checkout-price">400 EGP</span>
        </p>
      </div>

      <div class="PaymentPage-checkout-note">
        Kindly note your down payment will be deducted from the check.
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "PaymentPage",
  setup() {
    const store = useStore();
    const seats = computed(() => store.state.seats);
    const time = computed(() => store.state.time);
    const branch = computed(() => store.state.branch);

    return { seats, time, branch };
  },
};
</script>

<style scoped></style>
