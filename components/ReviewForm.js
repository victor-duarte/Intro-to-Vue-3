app.component("review-form", {
  template:
    /* html */
    `<form @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="name">
      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <label for="recommend">Would you recommend this product?</label>
        <select id="recommend" v-model="recommend">
          <option>Yes</option>
          <option>No</option>
        </select>
        <button class="button">Submit</button>
    </form>`,
  data() {
    return {
      name: "",
      rating: null,
      review: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null || recommend === null) {
        alert('Review is incomplete. PLease fill out every field.')
        return;
      }

      const productReview = {
        name: this.name,
        rating: this.rating,
        recommend: this.recommend,
        review: this.review,
      };

      this.$emit('review-submitted', productReview);

      this.name = '';
      this.rating = null;
      this.recommend = null;
      this.review = '';
    },
  },
});
