<script>
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { format } from "../components/utils";
  import Wrap from "../components/Wrap.svelte";
  import StreetView from "../views/StreetView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 5;
  let historicValue = 2;

  $: data = kwhToInfo(serviceUsed * 0.5 * 24 * 0.365);
  $: growth = Math.max(0, (serviceUsed - historicValue) / historicValue);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="devices_history"
      question="How many smart devices did you own 3 years ago?"
      unit={["device", "devices"]}
      min={1}
      max={50}
      bind:value={historicValue}
    />

    <RangeInput
      name="devices"
      question="How many smart devices do you own now?"
      unit={["device", "devices"]}
      min={1}
      max={50}
      bind:value={serviceUsed}
    />
  </div>

  <div slot="stats">
    <StatBlock label="Your results" kwh={data.kwh} co2kg={data.co2kg} />
  </div>

  <StreetView slot="visual" trees={data.trees} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label="You" trees={data.trees} />
      <TreeStat label="You in 3 years?" trees={data.trees * growth} />
    </div>

    <p class="todo">
      Het aantal bomen laat zien, we hebben dit zo en zo berekend. Wist je
      dat...
      <u>{format(growth * 100)}% groei</u>.
    </p>
  </div>
</Wrap>
