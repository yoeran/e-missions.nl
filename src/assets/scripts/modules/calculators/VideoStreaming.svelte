<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import MapView from "../views/MapView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 5;

  $: data = kwhToInfo(serviceUsed * 6.3 * 0.365);
</script>

<Wrap {...data}>
  <div slot="input">
    <RangeInput
      question="How many hours do you stream video per day?"
      unit={["hour", "hours"]}
      min={1}
      max={24}
      bind:value={serviceUsed}
    />

    <p class="todo">This calculator needs a multiplier</p>
  </div>

  <MapView slot="output" trees={data.trees} multiplier={1} />
</Wrap>
