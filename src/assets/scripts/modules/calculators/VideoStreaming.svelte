<script>
  import RadioGroupInput from "../components/RadioGroupInput.svelte";
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { format } from "../components/utils";
  import Wrap from "../components/Wrap.svelte";
  import MapView from "../views/MapView.svelte";
  import { kwhToInfo } from "./index";

  const REGIONS = {
    Netherlands: 2760000,
    Europe: 68700000,
    World: 209180000,
  };

  let region = "World";

  let serviceUsed = 5;

  $: data = kwhToInfo(serviceUsed * 6.3 * 0.365);
  $: multiplier = REGIONS[region];
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="hours"
      question="How many hours do you stream video per day?"
      unit={["hour", "hours"]}
      min={1}
      max={12}
      bind:value={serviceUsed}
    />

    <p class="todo">This calculator needs a multiplier: Use Netflix users?</p>

    <RadioGroupInput
      name="region"
      question="Select a region"
      options={["Netherlands", "Europe", "World"]}
      bind:value={region}
    />
  </div>

  <div slot="stats">
    <StatBlock
      label="Netflix (?) {region}"
      kwh={data.kwh * multiplier}
      co2kg={data.co2kg * multiplier}
      icon="multiplier"
    />
  </div>

  <MapView slot="visual" trees={data.trees * multiplier} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label="Netflix (?) {region}" trees={data.trees * multiplier} />
    </div>

    <p class="todo">
      Het aantal bomen laat zien, we hebben dit zo en zo berekend. Wist je
      dat... {region} heeft {format(multiplier, 0)} gebruikers
    </p>
  </div>
</Wrap>
