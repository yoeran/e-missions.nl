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
    netherlands: 2760000,
    europe: 68700000,
    world: 209180000,
  };

  let region = "world";

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

    <p class="todo">This calculator needs a correct multiplier</p>

    <RadioGroupInput
      name="region"
      question={translate("selectARegion")}
      options={["netherlands", "europe", "world"]}
      bind:value={region}
    />

    <small class="calculator-avg-text"
      >{translate("videostreamingAverage")}</small
    >
  </div>

  <div slot="stats">
    <StatBlock
      label="Netflix {translate(region)}"
      kwh={data.kwh * multiplier}
      co2kg={data.co2kg * multiplier}
      icon="multiplier"
    />
  </div>

  <MapView slot="visual" trees={data.trees * multiplier} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat
        label="Netflix {translate(region)}"
        trees={data.trees * multiplier}
      />
    </div>
  </div>
</Wrap>
