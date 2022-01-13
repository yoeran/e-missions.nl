<script>
  import RadioGroupInput from "../components/RadioGroupInput.svelte";
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { translate } from "../components/utils";
  import Wrap from "../components/Wrap.svelte";
  import ParkView from "../views/ParkView.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 20;
  let autocomplete = "enabled";

  $: data = kwhToInfo(serviceUsed * 3 * 0.365 * multiplier);
  $: multiplier = autocomplete === "enabled" ? 15 : 1;
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="searches"
      question={translate("searchingQueries")}
      unit={["query", "queries"]}
      min={1}
      max={230}
      bind:value={serviceUsed}
    />

    <RadioGroupInput
      name="autocomplete"
      question={translate("searchingAutocomplete")}
      options={["enabled", "disabled"]}
      bind:value={autocomplete}
    />

    <small class="calculator-avg-text">
      {translate("searchingAverage")}
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
      <TreeStat
        label={translate(
          autocomplete === "enabled" ? "youWithAutocomplete" : "you"
        )}
        trees={data.trees}
      />
    </div>
  </div>
</Wrap>
