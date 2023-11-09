export const globalMixin = {
    mounted() {
        this.changeItemsOneByOne();
    },
    methods: {
      async changeItemsOneByOne() {
        for (let i = 0; i < this.items?.length; i++) {
          await this.delayedShow(i);
        }
      },
      async delayedShow(index) {
        await new Promise((resolve) => setTimeout(resolve, 250));
        this.items[index] = true;
      },
    },
  };