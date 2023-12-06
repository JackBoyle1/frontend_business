<template>
  <div class="flex flex-col bg-gray-100 min-h-screen background-section">
    <Navbar />
    <main class="flex-grow container mx-auto p-4">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
import { globalMixin } from "@/assets/js/globalMixin.js";

export default {
  components: {
    Footer,
    Navbar,
  },
  mixins: [globalMixin],
  setup() {
    const route = useRoute();
    useHead({
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: (titleChunk) => {
        switch (route.path) {
          case "/":
            return (
              `${titleChunk} Your Partner in Web Development | Berkshire` ||
              "Your Partner in Web Development | Berkshire"
            );
          case "/services":
            return `${titleChunk} Services` || "Services";
          case "/faq":
            return `${titleChunk} FAQ` || "FAQ";
          case "/portfolio":
            return `${titleChunk} Portfolio` || "Portfolio";
          case "/about":
            return `${titleChunk} About` || "About";
          case "/contact":
            return `${titleChunk} Contact` || "Contact";
          case "/thankyou":
            return `${titleChunk} Contact | Thank You` || "Contact | Thank You";
        }
      },
      meta: [
        {
          name: "description",
          content: () => {
            switch (route.path) {
              case "/":
                return "This is the landing page of boyx.co.uk. Here a brief description of what Boyx offers is listed to the visitor.";
              case "/services":
                return "This page describes the services that we provide. Two packages are offered: Starter and Business.";
              case "/faq":
                return "This page provides answers to frequently asked questions.";
              case "/portfolio":
                return "This page provides an example of previous work. The previous work is a portfolio done for a web developer.";
              case "/about":
                return "This page gives information about Boyx Limited. The target audience of Boyx is listed and the company's purpose is listed.";
              case "/contact":
                return "This page provides a contact form for users to reach out. Once the form is submitted, the user is redirected to the thank you page.";
              case "/thankyou":
                return "This page confirms successful contact and thanks the user. After a brief period of time, the user is redirected to the thank you page.";
            }
          },
        },
      ],
    });
  },
};
</script>

<style>
@import "@/assets/css/global-styles.css";
.background-section {
  background-image: url("@/assets/images/dark-geometric-background-with-copy-space.jpg");
  background-size: cover;
  background-position: center;
}
</style>
