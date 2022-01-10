<script>
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import Wrap from "../components/Wrap.svelte";
  import StreetView from "../views/StreetView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 20;
  const multiplier = 15;

  $: data = kwhToInfo(serviceUsed * 3 * 0.365);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="searches"
      question="How many search queries do you do per day?"
      unit={["search", "searches"]}
      min={1}
      max={230}
      bind:value={serviceUsed}
    />
  </div>

  <div slot="stats">
    <StatBlock label="Your results" kwh={data.kwh} co2kg={data.co2kg} />
    <StatBlock
      label="With autocomplete enabled"
      kwh={data.kwh * multiplier}
      co2kg={data.co2kg * multiplier}
      icon=""
    />
  </div>

  <StreetView slot="visual" trees={data.trees} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label="You" trees={data.trees} />
      <TreeStat
        label="With autocomplete enabled"
        trees={data.trees * multiplier}
      />
    </div>

    <p class="todo">
      Het aantal bomen laat zien, we hebben dit zo en zo berekend. Wist je
      dat...
    </p>
  </div>
</Wrap>
