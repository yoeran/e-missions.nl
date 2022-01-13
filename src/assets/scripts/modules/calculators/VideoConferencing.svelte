<script>
  import NumberInput from "../components/NumberInput.svelte";
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { translate } from "../components/utils";
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
      question={translate("videoconferencingHours")}
      unit={["hour", "hours"]}
      min={1}
      max={12}
      bind:value={serviceUsed}
    />

    <NumberInput
      name="employees"
      question={translate("peopleInYourCompany")}
      unit={["employee", "employees"]}
      min={1}
      max={5000}
      bind:value={employees}
    />

    <small class="calculator-avg-text">
      {translate("videoconferencingAverage")}
    </small>
  </div>

  <div slot="stats">
    <StatBlock
      label={translate("yourResults")}
      kwh={data.kwh}
      co2kg={data.co2kg}
    />
    <StatBlock
      label={translate("yourCompany")}
      kwh={data.kwh * employees}
      co2kg={data.co2kg * employees}
      icon="multiplier"
    />
  </div>

  <ParkView slot="visual" trees={data.trees * employees} />

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label={translate("you")} trees={data.trees} />
      <TreeStat
        label={translate("yourCompany")}
        trees={data.trees * employees}
      />
    </div>
  </div>
</Wrap>
