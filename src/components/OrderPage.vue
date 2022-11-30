<template>
  <h1 class="OrderPage-title allTitel">
    Please select your order
    <span>
      <img src="../assets/orderPageIcon.png" alt="" />
    </span>
  </h1>
  <div class="orderPageIcon"></div>
  <div class="OrderPage-body">
    <div class="orderPage-orderImg-container">
      <div class="orderPage-orderImg">
        <ArrowMeal arrowDirection="leftArrowMeal" />
        <img src="../assets/meal.png" alt="" />
        <ArrowMeal />
      </div>
      <div class="orderPage-addButton">Add</div>
    </div>

    <div class="orderPage-orderDetalisAndCart-container">
      <div class="orderPage-orderDetalis-container">
        <div class="orderPage-orderName">
          <p class="orderPage-arOrderName">كتف</p>
          <p class="orderPage-enOrderName">Shoulder</p>
        </div>
        <div class="orderPage-orderDetalis">
          <div class="orderPage-arOrderDetalis">
            <div class="value">&#1633; كيلو</div>
            <div class="att">الوزن</div>
            <div class="value">ضأن</div>
            <div class="att">السعر</div>
            <div class="price">&#1633;&#1633;&#1637;&#1632; ج.م</div>
          </div>
          <div class="orderPage-enOrderDetalis">
            <div class="att">Weight</div>
            <div class="value">1 kg</div>
            <div class="att">Price</div>
            <div class="value">Lamp</div>
            <div class="price">1150 EGP</div>
          </div>
        </div>
        <div class="orderPage-moreDetalis">
          <p class="orderPage-moreDetalis-ar">تقدم مع الأرز، السلطة ومشروب</p>
          <p class="orderPage-moreDetalis-en">
            Served with rice, salad & beverage
          </p>
        </div>
        <div class="orderPage-tax">
          <p class="orderPage-tax-en">
            Prices Subject to 12% service and 14% VAT
          </p>
          <p class="orderPage-tax-ar">
            يضاف ١٢٪ خدمة و ١٤٪ ضربية القيمة المضافة
          </p>
        </div>
      </div>

      <div class="orderPage-orderCart-container">
        <p class="orderPage-orderCart-seatsNumber">
          {{seats}} Seats <span>(minum 1 piece)</span>
        </p>
        <div class="orderPage-orderCart-mealsList-container">
          <ul class="orderPage-orderCart-mealsList">
            <li class="orderPage-orderCart-mealList">
              <span></span>
              <img src="../assets/meal.png" alt="" />
              <div>
                <p class="mealName">Neck</p>
                <p class="mealPrice">1150 Egp</p>
              </div>
              <img src="../assets/basket.png" alt="" class="basket" />
            </li>

            <li class="orderPage-orderCart-mealList">
              <span></span>
              <img src="../assets/meal.png" alt="" />
              <div>
                <p class="mealName">Rips</p>
                <p class="mealPrice">1150 Egp</p>
              </div>
              <img src="../assets/basket.png" alt="" class="basket" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowMeal from "./arrowMeal.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "OrderPage",
  components: {
    ArrowMeal,
  },
  setup() {
    const store = useStore();
    const seats = computed(() => store.state.seats);

    return { seats };
  },
};
</script>

<style scoped></style>
