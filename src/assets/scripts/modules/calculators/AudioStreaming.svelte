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
    Europe: 70000000,
    World: 488000000,
  };

  let serviceUsed = 5;
  let region = "World";
  const energyIntensity = 0.62;

  $: data = kwhToInfo(serviceUsed * energyIntensity * 0.365);
  $: multiplier = REGIONS[region];
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="hours"
      question="How many hours do you stream audio per day?"
      unit={["hour", "hours"]}
      min={1}
      max={12}
      bind:value={serviceUsed}
    />

    <p class="todo">
      I now added a multiplier of 488.000.000, found in the Excel. Please let me
      know if this should be adjusted.
    </p>

    <RadioGroupInput
      name="region"
      question="Select a region"
      options={["Europe", "World"]}
      bind:value={region}
    />
  </div>

  <div slot="stats">
    <StatBlock
      label="Spotify {region}"
      kwh={data.kwh * multiplier}
      co2kg={data.co2kg * multiplier}
      icon="multiplier"
    />
  </div>

  <MapView slot="visual" trees={data.trees * multiplier} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label="Spotify {region}" trees={data.trees * multiplier} />
    </div>

    <p class="todo">
      Het aantal bomen laat zien, we hebben dit zo en zo berekend. Wist je
      dat... {region} heeft {format(multiplier, 0)} gebruikers
    </p>
  </div>
</Wrap>
