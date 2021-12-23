<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import StreetView from "../views/StreetView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 2;

  $: data = kwhToInfo(serviceUsed * 210 * 0.365);
</script>

<Wrap {...data}>
  <div slot="input">
    <RangeInput
      question="How many hours do you game online per day?"
      unit={["hour", "hours"]}
      min={1}
      max={24}
      bind:value={serviceUsed}
    />

    <p class="todo">Maybe this calculator should also use ParkView?</p>
  </div>

  <StreetView slot="output" trees={data.trees} />
</Wrap>
