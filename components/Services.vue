  <template>
  <div>
    <h1 class="sm:text-2x1 md:text-3xl lg:text-3x1 font-bold text-center pb-4 text-white">Our Services</h1>
    <div class="service">
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
    <div class="service">
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
        <p>Starting at £700</p>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
  },
};
</script>