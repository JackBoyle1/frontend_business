<template>
    <Transition>
        <Card v-if="items[0]" class="mb-5" name="Frequently Asked Questions"></Card>
    </Transition>

    <Transition>
        <Card v-if="items[1]" class="mb-5">
            <section>
                <div><span class="font-bold">How long does it take to build a website?</span></div>
                <div>The timeline for website development can vary based on the package you choose, your specific requirements, and our current availability.</div>
                <div>Generally, you can anticipate the following timeframes:</div>
                <ul>
                    <li>Starter Package: About 1 month</li>
                    <li>Business Package: Approximately 1 to 3 months</li>
                </ul>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[2]" class="mb-5">
            <section>
                <div><span class="font-bold">Can I ask for changes while the website is being created?</span></div>
                <div>Absolutely! And the best part is, if it's not an additional feature, making changes won't cost you anything extra!</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[3]" class="mb-5">
            <section>
                <div><span class="font-bold">Can I cancel my project mid-way?</span></div>
                <div>Yes, you can cancel, but unfortunately, we can't provide a full refund. However, we'll assess how much of the project remains and, at our discretion,</div>
                <div>refund you the remaining portion of the cost. We'll also hand over the files for the unfinished work.</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[4]" class="mb-5">
            <section>
                <div><span class="font-bold">Will there be any extra costs?</span></div>
                <div>Here are a couple of things to consider:</div>
                <ul>
                    <li>Domain Name: You'll need to choose a web address (domain name) for your site. We can offer recommendations and provide the prices for your options.</li>
                    <li>Hosting: Hosting fees can vary based on the size and complexity of your project. In some cases, hosting for small websites might even be free! You can either select your own hosting provider or let us make a choice for you – it's your call!</li>
                </ul>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[5]" class="mb-5">
            <section>
                <div><span class="font-bold">What is a domain name?</span></div>
                <div>A domain name is the name of your website, like "boyx.co.uk." Domain names can vary in price for various reasons. If your website is primarily for the UK,</div>
                <div>we suggest using a domain name that ends with ".co.uk."</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[6]" class="mb-5">
            <section>
                <div><span class="font-bold">What is hosting?</span></div>
                <div>When you want to access a website, it needs to be stored on a server that's always online. This server, in a way, "hosts" your website. Many different companies provide and maintain these hosting servers.</div>
            </section>
        </Card>
    </Transition>

    <Transition>
        <Card v-if="items[7]" class="mb-5">
            <section>
                <div><span class="font-bold">Who owns the website once it's finished?</span></div>
                <div>The website is all yours! I'll store the code in a remote repository and can also host the website for you, but if you prefer, I can transfer the code to you completely or in addition.</div>
            </section>
        </Card>
    </Transition>
</template>

<script>
export default {
    data() {
        return {
            items: Array(8).fill(false)
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