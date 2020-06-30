<template>
  <section class="section header-section">
    <div class="container">
      <div class="header-content">
        <div class="header-text">
          <div class="box centered">
            <h1 class="header">
              A whole new world
            </h1>
            <h3>
              and a whole new card
            </h3>
            <div class="information-card">
              <InfoCard />
            </div>
          </div>
        </div>
        <div class="image-background"></div>
      </div>
      <div class="footer">
        <div class="footer-content">
          <p>
            Powered by Jessica's imagination
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InfoCard from '../infoCard_component/InfoCard.vue'

export default {
  components: {
    InfoCard
  }
}
</script>
