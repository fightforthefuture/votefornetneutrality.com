<template>
  <div v-if="race" class="sml-push-y2">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="candidate in race.candidates" :key="candidate.id">
        {{ candidate.name }}
        <span v-if="candidate.incumbent">(Incumbent)</span>
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
