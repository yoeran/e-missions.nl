<script>
  import RadioGroupInput from "../components/RadioGroupInput.svelte";
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { translate } from "../components/utils";
  import Wrap from "../components/Wrap.svelte";
  import MapView from "../views/MapView.svelte";
  import { kwhToInfo } from "./index";

  const REGIONS = {
    europe: 70000000,
    world: 488000000,
  };

  let serviceUsed = 2;
  let region = "world";
  const energyIntensity = 0.62;

  $: data = kwhToInfo(serviceUsed * energyIntensity * 0.365);
  $: multiplier = REGIONS[region];
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="hours"
      question={translate("audiostreamHours")}
      unit={["hour", "hours"]}
      min={1}
      max={12}
      bind:value={serviceUsed}
    />

    <RadioGroupInput
      name="region"
      question={translate("selectARegion")}
      options={["europe", "world"]}
      bind:value={region}
    />

    <small class="calculator-avg-text">
      {translate("audiostreamAverage")}
    </small>
  </div>

  <div slot="stats">
    <StatBlock
      label="{translate('subscribers')} {translate(region)}"
      kwh={data.kwh * multiplier}
      co2kg={data.co2kg * multiplier}
      icon="multiplier"
    />
  </div>

  <MapView slot="visual" trees={data.trees * multiplier} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat
        label="{translate('subscribers')} {translate(region)}"
        trees={data.trees * multiplier}
      />
    </div>
  </div>
</Wrap>
