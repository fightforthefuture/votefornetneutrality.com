<template>
  <div v-if="race" class="sml-push-y2 med-push-y4">
    <h3 class="section-title text-center"><span>{{ race.title }}</span></h3>
    <div class="row">
      <div v-for="candidate in race.candidates" :key="candidate.id"
           class="sml-c12 lrg-c6 sml-push-y2 med-push-y3">
        <div class="sml-pad-1 is-rounded candidate fill-brand-dark"
             :class="{
                'fill-success': candidate.supporter === true,
                'fill-warn': candidate.supporter === false
             }">
          <div class="candidate-photo"
               :class="{
                  'vote-yes': candidate.supporter === true,
                  'vote-no': candidate.supporter === false
               }">
            <img :src="candidate.photo" :alt="`${candidate.name} photo`"/>
          </div> <!-- .candidate-photo -->
          <div class="sml-pad-1 is-rounded fill-black candidate-content">
            <h4 :class="{
                    'text-success': candidate.supporter === true,
                    'text-warn': candidate.supporter === false
                 }">
              {{ candidate.name }}
            </h4>
            <h6 :class="{ 'text-brand-light': candidate.supporter === null }">
              {{ candidate.party }}
            </h6>
            <h6 v-if="candidate.incumbent" class="tag">Incumbent</h6>
          </div> <!-- .candidate-content -->
          <div class="vote-tag fill-brand-dark"
               :class="{
                  'fill-success': candidate.supporter === true,
                  'fill-warn': candidate.supporter === false
               }">
            <h6>
              <span v-if="candidate.supporter === true">Supports</span>
              <span v-else-if="candidate.supporter === false">Opposes</span>
              <span v-else>No Stance</span>
            </h6>
          </div> <!-- .vote-tag -->
        </div> <!-- .candidate -->
      </div> <!-- .c -->
    </div> <!-- .row -->
  </div>
</template>

<script>
export default {
  props: {
    race: {
      type: Object,
      required: true
    }
  }
}
</script>
