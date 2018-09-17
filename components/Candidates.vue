<template>
  <div v-if="race" class="sml-push-y2">
    <h3 class="text-center">{{ title }}</h3>
    <ul class="flex-row sml-push-y2">
      <li v-for="candidate in race.candidates" :key="candidate.id">
        <div class="sml-pad-1 is-rounded"
             :class="{
                'fill-success': candidate.supporter,
                'fill-warn': !candidate.supporter
             }">
          <div class="sml-pad-1 is-rounded fill-brand-darkest">
            <!-- TODO: better styling -->
            <span :class="{
                'text-success': candidate.supporter,
                'text-warn': !candidate.supporter
             }">
              {{ candidate.name }}
            </span><br>
            {{ candidate.party }}<br>
            <span v-if="candidate.incumbent">(Incumbent)</span>
          </div> <!-- .pad -->
        </div> <!-- .pad -->
      </li>
    </ul>
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
