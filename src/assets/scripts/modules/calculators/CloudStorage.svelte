<script>
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { translate } from "../components/utils";
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
      question={translate("cloudStorageGigabytes")}
      unit={["gigabyte", "gigabytes"]}
      min={1}
      step={10}
      max={5000}
      bind:value={serviceUsed}
    />

    <small class="calculator-avg-text">
      {translate("cloudStorageAverage")}
    </small>
  </div>

  <div slot="stats">
    <StatBlock
      label={translate("yourResults")}
      kwh={data.kwh}
      co2kg={data.co2kg}
    />
  </div>

  <ParkView slot="visual" trees={data.trees} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label={translate("you")} trees={data.trees} />
    </div>
  </div>
</Wrap>
