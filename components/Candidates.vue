<template>
  <div v-if="race" class="sml-push-y2">
    <h3 class="text-center">{{ title }}</h3>
    <div class="row">
      <div v-for="candidate in race.candidates" :key="candidate.id"
           class="sml-c12 med-c6 sml-push-y2">
        <div class="sml-pad-1 is-rounded candidate fill-brand-med"
             :class="{
                'fill-success': candidate.supporter === true,
                'fill-warn': candidate.supporter === false
             }">
          <div class="sml-pad-1 is-rounded fill-brand-darkest candidate-content">
            <h4 :class="{
                    'text-success': candidate.supporter === true,
                    'text-warn': candidate.supporter === false
                 }">
              {{ candidate.name }}
            </h4>
            <h6 :class="{ 'text-brand-med': candidate.supporter === null }">
              {{ candidate.party }}
            </h6>
            <h6 v-if="candidate.incumbent" class="tag">Incumbent</h6>
          </div> <!-- .candidate-content -->
          <div class="vote-tag fill-brand-med"
               :class="{
                  'fill-success': candidate.supporter === true,
                  'fill-warn': candidate.supporter === false
               }">
            <h6 class="text-brand-darkest">
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
    title: {
      type: String,
      required: true
    },
    race: {
      type: Object,
      required: true
    }
  }
}
</script>
