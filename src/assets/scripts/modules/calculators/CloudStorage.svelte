<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import ParkView from "../views/ParkView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 200;

  $: data = kwhToInfo((serviceUsed * 296) / 1000);
</script>

<Wrap {...data}>
  <div slot="input">
    <RangeInput
      question="How much GB have you stored in the cloud?"
      unit={["Gigabyte", "Gigabytes"]}
      min={1}
      step={10}
      max={5000}
      bind:value={serviceUsed}
    />
  </div>

  <ParkView slot="output" trees={data.trees} />
</Wrap>
