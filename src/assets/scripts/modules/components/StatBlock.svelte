<script>
  export let kwh;
  export let co2kg;
  export let label;
  export let icon = "individual";

  import { format, translate } from "./utils";
</script>

<div class="stat-block">
  <h6 class="heading heading--small">
    {#if icon}
      <svg class="stat-block__icon" role="img" aria-hidden="true">
        <use xlink:href="#svg-{icon}" />
      </svg>
    {/if}
    {label}
  </h6>
  <dl class="stat-block__list">
    <dt>{translate("energyUsagePy")}</dt>
    <dd>{format(kwh)} <small>kWh</small></dd>

    <dt>{translate("emissionsPy")}</dt>
    <dd>{format(co2kg)} <small>kg CO<sub>2</sub></small></dd>
  </dl>
</div>
