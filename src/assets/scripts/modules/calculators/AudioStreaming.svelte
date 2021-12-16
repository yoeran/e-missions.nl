<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import MapView from "../views/MapView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 5;
  const energyIntensity = 0.62;
  const multiplier = 488000000;

  $: data = kwhToInfo(serviceUsed * energyIntensity * 0.365);
</script>

<Wrap {...data} {multiplier} multiplierLabel="Spotify globally">
  <div slot="input">
    <RangeInput
      question="How many hours do you stream audio per day?"
      unit={["hour", "hours"]}
      min={1}
      max={24}
      bind:value={serviceUsed}
    />

    <p class="todo">
      I now added a multiplier of 488.000.000, found in the Excel. Please let me
      know if this should be adjusted.
    </p>
  </div>

  <MapView slot="output" trees={data.trees} {multiplier} />
</Wrap>
