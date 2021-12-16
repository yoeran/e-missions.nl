<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import StreetView from "../views/StreetView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 20;

  $: data = kwhToInfo(serviceUsed * 3 * 0.365);
</script>

<Wrap {...data} multiplier={15} multiplierLabel="If you have autocomplete on">
  <div slot="input">
    <RangeInput
      question="How many search queries do you do per day?"
      unit={["search", "searches"]}
      min={1}
      max={230}
      bind:value={serviceUsed}
    />

    <p class="todo">
      I added a multiplier of 15 to show the impact of having autocomplete on
      (15 is just a random selected number). Worth showing if there is a
      relevant number to be found?
    </p>
  </div>

  <StreetView slot="output" trees={data.trees} />
</Wrap>
