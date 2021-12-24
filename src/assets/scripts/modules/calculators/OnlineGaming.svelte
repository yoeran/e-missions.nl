<script>
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import Wrap from "../components/Wrap.svelte";
  import StreetView from "../views/StreetView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 2;

  const pro = kwhToInfo(8 * 210 * 0.365);

  $: data = kwhToInfo(serviceUsed * 210 * 0.365);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="hours"
      question="How many hours do you game online per day?"
      unit={["hour", "hours"]}
      min={1}
      max={10}
      bind:value={serviceUsed}
    />
  </div>

  <div slot="stats">
    <StatBlock label="Your results" kwh={data.kwh} co2kg={data.co2kg} />
    <StatBlock label="eSports Gamer" kwh={pro.kwh} co2kg={pro.co2kg} />
  </div>

  <StreetView slot="visual" trees={data.trees} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label="You" trees={data.trees} />
      <TreeStat label="eSports Gamer" trees={pro.trees} />
    </div>

    <p class="todo">
      Het aantal bomen laat zien, we hebben dit zo en zo berekend. Wist je
      dat...
    </p>
  </div>
</Wrap>
