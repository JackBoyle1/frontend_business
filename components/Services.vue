  <template>
  <div>
    <Transition>
    <h1 v-if="items[0]" class="sm:text-2x1 md:text-3xl lg:text-3x1 font-bold text-center pb-4 text-white">Our Services</h1>
  </Transition>
  
  <Transition>
    <div v-if="items[1]" class="service">
      <Card name="Starter Package" class="mb-3">
        <br/>
        <p>Perfect for personal websites and blogs.</p>
        <p>Includes:</p>
        <ul>
          <li>Responsive Design</li>
          <li>Up to 5 Pages</li>
          <li>Contact Form</li>
        </ul>
        <p>Starting at £300</p>
      </Card>
    </div>
  </Transition>

  <Transition>
    <div v-if="items[2]" class="service">
      <Card name="Business Package">
        <br/>
        <p>Ideal for small businesses.</p>
        <p>Includes:</p>
        <ul>
          <li>Custom Design</li>
          <li>Up to 30 Pages</li>
          <li>Contact Form</li>
          <li>Basic SEO</li>
        </ul>
        <p>Starting at £1000</p>
      </Card>
    </div>
  </Transition>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
      items: [false, false, false],
    }
  },
  components: {
    Card,
  },
  mounted() {
    this.show = true;
    this.changeItemsOneByOne();
  },
  methods: {
    items0() {
      this.items[0] = true;
    },
    items1() {
      this.items[1] = true;
    },
    items2() {
      this.items[2] = true;
    },
    async changeItemsOneByOne() {
      const delay = 250; // 0.5 seconds in milliseconds
      // let index = 0;
      // setTimeout(this.items0(), delay);
      // setTimeout(this.items1(), delay);
      // setTimeout(this.items2(), delay);
      await this.delayedShow(0, delay);
      await this.delayedShow(1, delay);
      await this.delayedShow(2, delay);

      // const changeItem = () => {
      //   this.items[index] = false; // Change the value to false
      //   index++;

      //   if (index < this.items.length) {
      //     setTimeout(changeItem, delay);
      //   }
      // };
    },
    async delayedShow(index, delay) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      this.items[index] = true;
    },
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
.landing {
  text-align: center;
  padding: 40px;
}
</style>