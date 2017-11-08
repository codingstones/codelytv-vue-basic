<template>
  <div>
    <LoadSpinner :isLoading="!gig.title"></LoadSpinner>
    <q-transition leave="fadeOut"
                  enter="fadeIn">
      <div v-show="gig.title" class="full-width">
        <q-card>
          <q-card-title>
            <h3>{{gig.title}}</h3>
          </q-card-title>
          <q-card-main>
            <div class="block" v-if="gig.price">
              <h5> {{gig.price}}</h5>
            </div>
            <div class="block">
              <strong>{{localized(gig.day)}}</strong> a las <strong>{{gig.hour}} h.</strong>
            </div>
            <FormButton :onClick="downloadICS"><q-icon name="event"/>  Add it to your calendar </FormButton>
            <div class="block" v-if="gig.place">
              <h4>{{gig.place}}</h4>
              <span v-html="gig.address"/>
            </div>
            <FormButton :onClick="openMap"><q-icon name="directions"/> How to get there? </FormButton>
            <br/><br/>
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
    </q-transition>
  </div>
</template>

<script>
  import { openMap } from '../../services/MapService'
  import { localizedFromIso } from '../../services/date-utils'
  import { retrieveAGig } from '../../services/jota-api'

  export default {
    props: {
      // We just use this prop as part of TestingWithBackendAsProp.spec.js demonstration
      retrieveAGig: {
        default: () => retrieveAGig
      }
    },
    data () {
      return {
        gig: {}
      }
    },
    async created() {
      this.gig = await this.retrieveAGig(this.jotaRouter.getParam('id'))
    },
    methods: {
      downloadICS() {
        console.log('Downloading ICS')
      },
      openMap() {
        openMap(`https://www.google.es/maps/place/${this.gig.lat_lng}`)
      },
      share() {
        console.log('Sharing gig')
      },
      localized(day) {
        return localizedFromIso(day)
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
