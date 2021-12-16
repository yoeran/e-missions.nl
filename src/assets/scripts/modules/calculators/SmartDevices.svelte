<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import StreetView from "../views/StreetView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 5;
  let historicValue = 2;

  $: data = kwhToInfo(serviceUsed * 0.5 * 24 * 0.365);
</script>

<Wrap
  {...data}
  multiplier={historicValue / serviceUsed}
  multiplierLabel="Your results 5 years ago"
>
  <div slot="input">
    <RangeInput
      question="How many smart devices do you own?"
      unit={["device", "devices"]}
      min={1}
      max={50}
      bind:value={serviceUsed}
    />

    <RangeInput
      question="How many smart devices did you own 5 years ago?"
      unit={["device", "devices"]}
      min={1}
      max={50}
      bind:value={historicValue}
    />
  </div>

  <StreetView slot="output" trees={data.trees} />
</Wrap>
