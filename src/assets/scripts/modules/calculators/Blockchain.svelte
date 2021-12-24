<script>
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import Wrap from "../components/Wrap.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 1;
  $: data = kwhToInfo(serviceUsed * 1955);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="transactions"
      question="How many Bitcoin transactions have you made?"
      unit={["transaction", "transactions"]}
      min={1}
      max={100}
      bind:value={serviceUsed}
    />
  </div>

  <div slot="stats">
    <StatBlock label="Your results" kwh={data.kwh} co2kg={data.co2kg} />
  </div>

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
