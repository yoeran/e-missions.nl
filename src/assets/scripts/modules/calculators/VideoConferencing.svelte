<script>
  import NumberInput from "../components/NumberInput.svelte";
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import Wrap from "../components/Wrap.svelte";
  import ParkView from "../views/ParkView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 4;
  let employees = 1;

  $: data = kwhToInfo(serviceUsed * 6.2 * 0.365);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="hours"
      question="How many hours do you video conference per day?"
      unit={["hour", "hours"]}
      min={1}
      max={12}
      bind:value={serviceUsed}
    />

    <NumberInput
      name="employees"
      question="How big is the company you are working for?"
      unit={["employee", "employees"]}
      min={1}
      max={5000}
      bind:value={employees}
    />
  </div>

  <div slot="stats">
    <StatBlock label="Your results" kwh={data.kwh} co2kg={data.co2kg} />
    <StatBlock
      label="Your company"
      kwh={data.kwh * employees}
      co2kg={data.co2kg * employees}
      icon="multiplier"
    />
  </div>

  <ParkView slot="visual" trees={data.trees * employees} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label="You" trees={data.trees} />
      <TreeStat label="Your company" trees={data.trees * employees} />
    </div>

    <p class="todo">
      Het aantal bomen laat zien, we hebben dit zo en zo berekend. Wist je
      dat...
    </p>
  </div>
</Wrap>
