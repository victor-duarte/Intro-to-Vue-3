app.component("product-display", {
  props: {
    cartLength: {
      required: true,
      type: Number,
    },
    premium: {
      required: true,
      type: Boolean,
    },
  },
  template:
    /* html */
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" alt="">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div
          :key="variant.id"
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateVariant(index)"
          class="color-circle"
          v-for="(variant, index) in variants"
        ></div>
        
        <button
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          class="button"
          v-on:click="addToCart"
        >
          Add to Cart
        </button>
        <button
          :class="{ disabledButton: cartLength <= 0 }"
          :disabled="cartLength <= 0"
          @click="removeFromCart"
          class="button"
        >
          Remove Item
        </button>
      </div>
    </div>
  </div>`,
  data() {
    return {
      brand: "Vue Mastery",
      details: ["50% cotton", "30% wool", "20% polyester"],
      product: "Socks",
      selectedVariant: 0,
      variants: [
        {
          color: "green",
          id: 2234,
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          color: "blue",
          id: 2235,
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
    title() {
      return this.brand + " " + this.product;
    },
  },
});
