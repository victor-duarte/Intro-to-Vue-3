const app = Vue.createApp({
  data() {
    return {
      details: ["50% cotton", "30% wool", "20% polyester"],
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      product: "Socks",
      sizes: ["6-12", "12-14"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
    };
  },
});
