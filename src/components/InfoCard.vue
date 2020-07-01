<template>
    <div id="InfoCard" class="info-card">
      <div class="info-icon">
        <span class="info-content" v-on:mouseover="openCard">
          <i class="fas fa-info-circle" ></i>
          <div v-show="active" class="display-card" v-on:mouseover="openCard">
            <div class="card">
              <div class="card-content">
                <div class="card-boxes">
                  <div class="spacing">
                    <div class="box info-box top-box">
                      <div class="box-images">
                        <div class="top-left-image">
                          <img src="../assets/images/factory.png" />
                        </div>
                        <div class="top-right-image">
                          <img src="../assets/images/truck.png" />
                        </div>
                      </div>
                      <p class="top-text">
                        All greenhosue emissions from the
                        <i><strong>manufacturing</strong></i> and <i><strong>shipping</strong></i>
                        of your purchase is calculated.
                      </p>
                    </div>
                  </div>
                  <div class="card-boxes">
                    <div class="box info-box">
                      <div class="box-images">
                        <div class="bottom-left-image">
                          <img src="../assets/images/renewable.png" />
                        </div>
                      </div>
                      <div class="box-text">
                        <p>
                          CO₂ok prevents the same amount
                          of greenhosue emissions, making
                          your purchase carbon neutral!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bottom-text">
                  <p>Learn how CO₂ offsetting <a @click="openTab()">works.</a></p>
                </div>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'InfoCard',
  data() {
    return {
      active: false
    }
  },
  methods: {
    openCard() {
      this.active = !this.active;
    },
    openTab() {
      window.open("https://www.co2ok.eco/co2-compensatie");
    }
  }
}
</script>
