<template>
  <div v-if="gig" class="full-width">
    <q-card>
      <q-card-title>
        <h3>{{gig.title}}</h3>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="block" v-if="gig.place">
          <h4>{{gig.place}}</h4>
          <span v-html="gig.address"/>
          <br />
        </div>
        <FormButton :onClick="openMap"><q-icon name="directions"/> How to get there? </FormButton>
        <div class="block" v-if="gig.price">
          <h5> Price: {{gig.price}}</h5>
        </div>
        <div class="block">
          <div v-for="schedule in gig.schedule">
            <strong>{{schedule.day}}</strong> a las <strong>{{schedule.hour}} h.</strong>
          </div>
        </div>
        <FormButton :onClick="downloadICS"><q-icon name="event"/>  Add it to youir calendar </FormButton>
        <div class="block" v-if="gig.description">
          {{gig.description}}
        </div>
        <FormButton :onClick="share"><q-icon name="share"/> Share it with your friends </FormButton>
      </q-card-main>
      <q-card-media v-if="gig.image_url">
        <img :src="gig.image_url"/>
      </q-card-media>
    </q-card>
  </div>

</template>

<script>
  import { gigService } from '../services/jota-instances'
  import { openMap } from '../services/MapService'

  export default {
    data () {
      return {
        gig: null
      }
    },
    async created() {
      // We could mapState this route param with vuex-sync-router
      // We need to load the gigs if we reload:
      // this.gigsByDay = await this.gigService.retrieveNextGigs()
      this.gig = await gigService.retrieveAGig(this.$router.currentRoute.params.id)
    },
    methods: {
      downloadICS() {
        console.log('Downloading ICS')
        // const BASE_URL = 'http://jotajs.es'
        // const downloadUrl = `${BASE_URL}gigs/${this.gig.slug}.ics`
        // window.open(downloadUrl, '_system')
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

<style lang="stylus" type="text/stylus" scoped>
  @import '~variables'

  img {
    max-width: 100%;
    max-height: 100%;
  }
  .block {
    margin: 0.5rem;
    font-size: 1.1rem;
  }
  FormButton {
    margin: 0.5rem;
  }
</style>
