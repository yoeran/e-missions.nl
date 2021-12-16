<script>
  export let co2kg;
  export let kwh;
  export let trees;

  export let multiplier;
  export let multiplierLabel;

  const format = (n, d = 1) =>
    n.toLocaleString(undefined, { maximumFractionDigits: d });
</script>

<div class="calculator__wrap">
  <div class="calculator__input">
    <slot name="input" />

    <a
      class="calculator__disclaimer-link"
      href="/en/about-e-missions/#disclaimer">Disclaimer</a
    >
  </div>

  <div class="calculator__output">
    <div class="calculator__output__content">
      <slot name="output" />

      {#if multiplier !== undefined}
        <div class="calculator-output-set">
          <h6 class="heading heading--small">Your results:</h6>
          <svg
            class="calculator-output-set__icon"
            role="img"
            aria-hidden="true"
          >
            <use xlink:href="#svg-individual" />
          </svg>
          <dl class="calculator-output-set__list">
            <dt>Energy Usage p/y:</dt>
            <dd>{format(kwh)} <small>kWh</small></dd>

            <dt>Emissions p/y:</dt>
            <dd>{format(co2kg)} <small>kg CO<sub>2</sub></small></dd>

            <dt>Trees needed p/y:</dt>
            <dd>{format(trees, 0)}</dd>
          </dl>
        </div>
        <div class="calculator-output-set">
          <h6 class="heading heading--small">{multiplierLabel}:</h6>
          <svg
            class="calculator-output-set__icon"
            role="img"
            aria-hidden="true"
          >
            <use xlink:href="#svg-multiplier" />
          </svg>
          <dl class="calculator-output-set__list">
            <dt>Energy Usage p/y:</dt>
            <dd>{format(kwh * multiplier)} <small>kWh</small></dd>

            <dt>Emissions p/y:</dt>
            <dd>
              {format(co2kg * multiplier)} <small>kg CO<sub>2</sub></small>
            </dd>

            <dt>Trees needed p/y:</dt>
            <dd>{format(trees * multiplier, 0)}</dd>
          </dl>
        </div>
      {:else}
        <dl class="calculator__output__list">
          <dt>Energy Usage p/y:</dt>
          <dd>{format(kwh)} <small>kWh</small></dd>

          <dt>Emissions p/y:</dt>
          <dd>{format(co2kg)} <small>kg CO<sub>2</sub></small></dd>

          <dt>Trees needed p/y:</dt>
          <dd>{format(trees, 0)}</dd>
        </dl>
      {/if}
    </div>
  </div>
</div>
