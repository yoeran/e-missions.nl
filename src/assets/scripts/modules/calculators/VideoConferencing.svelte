<script>
  import RangeInput from "../components/RangeInput.svelte";
  import Wrap from "../components/Wrap.svelte";
  import ParkView from "../views/ParkView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 4;
  let employees = 1;

  $: data = kwhToInfo(serviceUsed * 6.2 * 0.365);
</script>

<Wrap
  {...data}
  multiplier={employees}
  multiplierLabel="Your company's results:"
>
  <div slot="input">
    <RangeInput
      question="How many hours do you video conference per day?"
      unit={["hour", "hours"]}
      min={1}
      max={12}
      bind:value={serviceUsed}
    />

    <RangeInput
      question="How big is the company you are working for?"
      unit={["employee", "employees"]}
      min={1}
      max={5000}
      bind:value={employees}
    />
  </div>

  <ParkView slot="output" trees={data.trees} />
</Wrap>
