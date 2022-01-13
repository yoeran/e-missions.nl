<script>
  import RangeInput from "../components/RangeInput.svelte";
  import StatBlock from "../components/StatBlock.svelte";
  import TreeStat from "../components/TreeStat.svelte";
  import { translate } from "../components/utils";
  import Wrap from "../components/Wrap.svelte";
  import { kwhToInfo } from "./index";

  let serviceUsed = 1;
  $: data = kwhToInfo(serviceUsed * 1955);
</script>

<Wrap>
  <div slot="input">
    <RangeInput
      name="transactions"
      question={translate("blockchainTransactions")}
      unit={["transaction", "transactions"]}
      min={1}
      max={100}
      bind:value={serviceUsed}
    />
  </div>

  <div slot="stats">
    <StatBlock
      label={translate("yourResults")}
      kwh={data.kwh}
      co2kg={data.co2kg}
    />
  </div>

  <div class="result-text" slot="visual-text">
    <div class="result-text__stats">
      <TreeStat label={translate("you")} trees={data.trees} />
    </div>
  </div>
</Wrap>
