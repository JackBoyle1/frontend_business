export const globalMixin = {
  methods: {
    async changeItemsOneByOne(customDelay) {
      for (let i = 0; i < this.items?.length; i++) {
        await this.delayedShow(i, customDelay);
      }
    },
    async delayedShow(index, customDelay) {
      await new Promise((resolve) => setTimeout(resolve, customDelay || 250));
      this.items[index] = true;
    },
  },
};
