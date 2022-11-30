<template>
  <h1 class="SelectDatePage-title allTitel">Please select date and time</h1>
  <div class="SelectDatePage-body">
    <div class="SelectDatePage-dateForm">
      <img src="../assets/calender.jpg" class="calender-img" alt="" />
      <select name="" id="" v-model="time">
        <option value="7 pm">7pm to 8pm</option>
        <option value="8 pm">8pm to 9pm</option>
      </select>
    </div>
    <form action="" class="SelectDatePage-form">
      <div class="SelectDatePage-name-input">
        <div>
          <label for="" class="label">First Name</label>
          <input type="text" v-model.lazy.trim="firstName" />
        </div>
        <div>
          <label for="" class="label">Last Name</label>
          <input type="text" v-model.lazy.trim="lastName" />
        </div>
      </div>
      <label for="" class="label">Phone Number</label>
      <input type="number" v-model.lazy.trim="phoneNumber" />
      <label for="" class="label SelectDatePage-lastLabel">Email Address</label>
      <input type="text" v-model.lazy.trim="email" />
    </form>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { useStore } from "vuex";
export default {
  name: "SelectDatePage",
  setup() {
    const SelectDatePageState = reactive({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      time: "7 pm",
    });

    const store = useStore();
    const fun = () => store.commit("setStateDate", { ...SelectDatePageState });

    watch(
      SelectDatePageState,
      function () {
        fun();
      },
      {
        immediate: true,
      }
    );

    return toRefs(SelectDatePageState);
  },
};
</script>

<style scoped></style>
