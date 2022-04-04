const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      product: "Socks",
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      if (this.cart <= 0) {
        return;
      }

      this.cart -= 1;
    },
    updateImage(variatImage) {
      this.image = variatImage;
    },
  },
});
