const app = Vue.createApp({
  data() {
    return {
      brand: "Vue Mastery",
      cart: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      onSale: true,
      product: "Socks",
      selectedVariant: 0,
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
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
    salesMessage() {
      return this.brand + " " + this.product + " is on sale.";
    },
    title() {
      return this.brand + " " + this.product;
    },
  },
});
