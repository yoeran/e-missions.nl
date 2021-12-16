<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 1;
  $: data = kwhToInfo(serviceUsed * 1955);
</script>

<Wrap {...data}>
  <div slot="input">
    <RangeInput
      question="How many Bitcoin transactions have you made?"
      unit={["transaction", "transactions"]}
      min={1}
      max={100}
      bind:value={serviceUsed}
    />
  </div>
</Wrap>
