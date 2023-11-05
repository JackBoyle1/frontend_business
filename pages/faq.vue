<template>
    <Transition>
        <Card v-if="items[0]" class="mb-5" name="Frequently Asked Questions"></Card>
    </Transition>

    <Transition>
        <Card v-if="items[1]" class="mb-5">
            <section>
                <div><span class="font-bold">How long will a website take to develop?</span></div>
                <div>This varies on the package, on the various needs of the customer, and our availability.</div>
                <div>Typically, you can expect it to take up to 1 month for the Starter Package and 1-3 months for the Business Package.</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[2]" class="mb-5">
            <section>
                <div><span class="font-bold">Can I request changes as it's being built?</span></div>
                <div>Yes and, as long as it's not an extra, the change will be free of charge too!</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[3]" class="mb-5">
            <section>
                <div><span class="font-bold">Can I cancellation during the project?</span></div>
                <div>Yes, but you won't be entitled to a refund. Despite that, we'd estimate how much of the project was left to do and at our discretion</div>
                <div> we'd refund you the leftover percentage cost of the project. We'd also transfer to you the files for the uncompleted project.</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[4]" class="mb-5">
            <section>
                <div><span class="font-bold">How long will a website take to develop?</span></div>
                <div>This varies on the package, on the various needs of the customer, and our availability.</div>
                <div>Typically, you can expect it to take up to 1 month for the Starter Package and 1-3 months for the Business Package.</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[5]" class="mb-5">
            <section>
                <div><span class="font-bold">Are there any additional charges?</span></div>
                <div>You will need to pick a domain name for your website. We will be able to give you some recommendations, as well as the price of each of them.</div>
                <div>You will also need to get your website hosted. Hosting fees are dependent on the size of the project and can vary. For small websites they can sometimes be free!.</div>
                <div>You can choose your hosting provider yourself or you can elect for us to choose one for you. The decision is yours!</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[6]" class="mb-5">
            <section>
                <div><span class="font-bold">What is a domain name?</span></div>
                <div>The domain name is the name of your website. For example for this website the domain name is boylesolutions.com. For a variety of reasons, </div>
                <div>different domain names come at different costs. If your website is UK specific we recommend you use a domain name that ends in .co.uk</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[7]" class="mb-5">
            <section>
                <div><span class="font-bold">What is hosting?</span></div>
                <div>In order to visit a website, a server must be running that website. In that instance, a server is "hosting" your website. There are a variety of providers that run these hosting servers</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[8]" class="mb-5">
            <section>
                <div><span class="font-bold">Who has ownership of the website when it's completed?</span></div>
                <div>You do. I'll keep the code in a remote repository and host the website for you but, if you want, I can transfer the code to you instead/as well.</div>
            </section>
        </Card>
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            items: Array(9).fill(false)
        }
    },
    mounted() {
        this.changeItemsOneByOne();
    },
    methods: {
    async changeItemsOneByOne() {
      for (let i = 0; i < this.items.length; i++) {
        await this.delayedShow(i);
      }
    },
    async delayedShow(index) {
      await new Promise((resolve) => setTimeout(resolve, 250));
      this.items[index] = true;
    },
  },
}
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
</style>