<script>
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import Wrap from "../components/Wrap.svelte";
  import ParkView from "../views/ParkView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 200;

  $: data = kwhToInfo((serviceUsed * 296) / 1000);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="gigabytes"
      question="How much GB have you stored in the cloud?"
      unit={["Gigabyte", "Gigabytes"]}
      min={1}
      step={10}
      max={5000}
      bind:value={serviceUsed}
    />
  </div>

  <div slot="stats">
    <StatBlock label="Your results" kwh={data.kwh} co2kg={data.co2kg} />
  </div>

  <ParkView slot="visual" trees={data.trees} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label="You" trees={data.trees} />
    </div>

    <p class="todo">
      Het aantal bomen laat zien, we hebben dit zo en zo berekend. Wist je
      dat...
    </p>
  </div>
</Wrap>
