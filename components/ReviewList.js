app.component("review-list", {
  props: {
    reviews: {
      required: true,
      type: Array,
    },
  },
  template:
    /* html */
    `<div class="review-container" v-if="reviews.length > 0">
    <ul>
      <li v-for="review of reviews">
        <p>{{ review.name }}</p>
        <p>{{ review.review }}</p>
        <p>{{ review.rating }}</p>
        <p>Recommended: {{ review.recommend }}</p>
      </li>
    </ul>
  </div>`,
});
