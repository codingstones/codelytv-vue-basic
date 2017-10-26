<template>
  <div v-if="gig" class="full-width">
      <h1>{{gig.title}}</h1>
      <div class="block place" v-if="gig.place">
        <strong>{{gig.place}}</strong><br />
        {{gig.address}}<br />
        <FormButton :onClick="openMap"><q-icon name="directions"/>¿Cómo llegar?</FormButton>

      </div>
      <div class="block price" v-if="gig.price">
        Precio: {{gig.price}}
      </div>
      <div class="block date">
        <div v-for="schedule in gig.schedule">
          <strong>{{schedule.day}}</strong> a las <strong>{{schedule.hour}} h.</strong>
        </div>
        <FormButton :onClick="downloadICS"><q-icon name="event"/>  Añádelo a tu calendario</FormButton>
      </div>
      <div class="block description" v-if="gig.description">
        {{gig.description}}
      </div>
      <div class="photo" v-if="gig.image_url">
        <img :src="gig.image_url" />
      </div>
      <div class="block share ticket">
        <FormButton :onClick="share"><q-icon name="share"/> Compártelo con tus amigos</FormButton>
      </div>
    </div>
</template>

<script>
  import { gigService } from '../services/mosica-instances'
  import { openMap } from '../services/MapService';

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

<style>
</style>
