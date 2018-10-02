<template>
  <div>
    <h1>How Candidates can Support Net Neutrality</h1>
    <p>
      About 1154 candidates are running for election in 470 Congressional races
      during the 2018 midterm elections … and we&rsquo;re doing our best to
      keep track of all of them!
    </p>
    <p>
      When a candidate has publicly expressed support for restoring strong net
      neutrality protections, we consider that candidate to
      <strong class="text-loud">support</strong> net neutrality. If a candidate
      has failed to publicly state a position on net neutrality, we consider
      that candidate to have <strong class="text-loud">no stance</strong>. When
      a candidate opposes using the CRA to restore net neutrality, we consider
      that candidate to <strong class="text-loud">oppose</strong> net neutrality.
    </p>
    <p>
      For sitting members of Congress, it&rsquo;s important to remember that
      incumbent Senators have already voted on the CRA, while members of the
      House of Representatives have had the opportunity to bring the CRA to a
      vote, but have failed to do so.  Some of these lawmakers are running for
      re-election and have stated that they support net neutrality. But without
      strong actions to back up their stated position, we have no choice but to
      judge them on their resistance to protecting net neutrality.
    </p>
    <p>
      If you are a candidate (or represent a candidate), you can submit a
      request to update their stance on scorecard by  filling out the form below.
      Make sure to include a URL showing proof of the candidate&rsquo;s position
      on the CRA to restore net neutrality or we will be unable to make the
      change. For example this could be a tweet, statement on the
      candidate&rsquo;s website, or an article with a quote.
    </p>

    <form action="#TODO" class="sml-push-y4">
      <input type="text"
             v-model="candidateName"
             placeholder="Candidate Name"
             required />
      <input type="text"
             v-model="email"
             class="sml-push-y2"
             placeholder="Your Email"
             required />
      <input type="text"
             v-model="phone"
             class="sml-push-y2"
             placeholder="Your Phone Number"
             required />
      <input type="text"
             v-model="district"
             class="sml-push-y2"
             placeholder="State/District"
             required />
      <input type="text"
             v-model="status"
             class="sml-push-y2"
             placeholder="Status of Support"
             required />
      <input type="text"
             v-model="url"
             class="sml-push-y2"
             placeholder="URL"
             required />
      <div class="checkbox sml-push-y2">
        <input type="checkbox" id="authorized" v-model="authorized" required>
        <label for="authorized">I am authorized to make this correction on behalf of the candidate.</label>
      </div> <!-- .checkbox -->
      <button class="btn sml-push-y2" :disabled="isLoading">
        <span v-if="isLoading">Loading...</span>
        <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'article',

  data () {
    return {
      isLoading: false,
      candidateName: null,
      email: null,
      phone: null,
      district: null,
      status: null,
      url: null,
      authorized: null
    }
  }
}
</script>
