<script>
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { translate } from "../components/utils";
  import Wrap from "../components/Wrap.svelte";
  import StreetView from "../views/StreetView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 5;
  let historicValue = 2;

  $: data = kwhToInfo(serviceUsed * 0.5 * 24 * 0.365);
  $: growth = Math.max(0, (serviceUsed - historicValue) / historicValue);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="devices_history"
      question={translate("smartDevices3y")}
      unit={["device", "devices"]}
      min={1}
      max={50}
      bind:value={historicValue}
    />

    <RangeInput
      name="devices"
      question={translate("smartDevicesNow")}
      unit={["device", "devices"]}
      min={1}
      max={50}
      bind:value={serviceUsed}
    />

    <small class="calculator-avg-text">
      {translate("smartDevicesAverage")}
    </small>
  </div>

  <div slot="stats">
    <StatBlock
      label={translate("yourResults")}
      kwh={data.kwh}
      co2kg={data.co2kg}
    />
  </div>

  <StreetView slot="visual" trees={data.trees} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label={translate("yourImpactNow")} trees={data.trees} />
      <TreeStat
        label={translate("yourImpactFuture")}
        trees={data.trees * growth}
      />
    </div>
  </div>
</Wrap>
