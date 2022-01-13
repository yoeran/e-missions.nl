<script>
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { translate } from "../components/utils";
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
      question={translate("onlineGamingHours")}
      unit={["hour", "hours"]}
      min={1}
      max={10}
      bind:value={serviceUsed}
    />

    <small class="calculator-avg-text">{translate("onlineGamingAverage")}</small
    >
  </div>

  <div slot="stats">
    <StatBlock
      label={translate("yourResults")}
      kwh={data.kwh}
      co2kg={data.co2kg}
    />
    <StatBlock label="eSports Gamer" kwh={pro.kwh} co2kg={pro.co2kg} />
  </div>

  <StreetView slot="visual" trees={data.trees} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label={translate("you")} trees={data.trees} />
      <TreeStat label="eSports Gamer" trees={pro.trees} />
    </div>
  </div>
</Wrap>
