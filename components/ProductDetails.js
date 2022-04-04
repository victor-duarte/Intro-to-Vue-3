app.component("product-details", {
  props: {
    details: {
      require: true,
      type: Array,
    },
  },
  template:
    /* html */
    `<ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>`,
});
