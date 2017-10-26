<template>
  <div v-if="gig" class="full-width">
    <q-card color="secondary">
      <q-card-title>
        <h2>{{gig.title}}</h2>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="block" v-if="gig.place">
          <h4>{{gig.place}}</h4>
          {{gig.address}}<br />
        </div>
        <FormButton :onClick="openMap"><q-icon name="directions"/>¿Cómo llegar?</FormButton>
        <div class="block" v-if="gig.price">
          Precio: {{gig.price}}
        </div>
        <div class="block">
          <div v-for="schedule in gig.schedule">
            <strong>{{schedule.day}}</strong> a las <strong>{{schedule.hour}} h.</strong>
          </div>
        </div>
        <FormButton :onClick="downloadICS"><q-icon name="event"/>  Añádelo a tu calendario</FormButton>
        <div class="block" v-if="gig.description">
          {{gig.description}}
        </div>
        <FormButton :onClick="share"><q-icon name="share"/> Compártelo con tus amigos</FormButton>
      </q-card-main>
      <q-card-media v-if="gig.image_url">
        <img :src="gig.image_url"/>
      </q-card-media>
    </q-card>
  </div>

</template>

<script>
  import { gigService } from '../services/mosica-instances'
  import { openMap } from '../services/MapService'

  export default {
    data () {
      return {
        gigService,
        gig: null
      }
    },
    async created() {
      // We could mapState this route param with vuex-sync-router
      console.log('SHOWING DETAIL OF GIG WITH id: ', this.$router.currentRoute.params.id)
      this.gig = await gigService.retrieveAGig(this.$router.currentRoute.params.id)
    },
    methods: {
      downloadICS() {
        const BASE_URL = 'http://www.mosica.es/'
        const downloadUrl = `${BASE_URL}conciertos/${this.gig.slug}.ics`
        window.open(downloadUrl, '_system')
      },
      openMap() {
        openMap(`https://www.google.es/maps/place/${this.gig.lat_lng}`)
      },
      share() {
        console.log('Sharing gig')
      }
    }
  }
</script>

<style scoped>
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .block {
    margin: 0.5rem;
  }
  FormButton {
    margin: 0.5rem;
  }
</style>
