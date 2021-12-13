<script>
  export let key;

  // TODO: Add translations
  // TODO: Add number formatting according to locale

  import { EMISSIONS_FACTOR, Type } from "./calculators";
  import AudioStreaming from "./calculators/AudioStreaming.svelte";

  let co2kg = 0;

  function setCo2(event) {
    let co2usephase = event.detail * EMISSIONS_FACTOR;
    co2kg = co2usephase.toLocaleString(undefined, {
      maximumFractionDigits: 2,
    });
  }
</script>

<div class="wrap">
  <div class="input">
    {#if key === Type.AudioStreaming}
      <AudioStreaming on:value={setCo2} />
    {/if}

    <a class="disclaimer-link" href="/en/about-e-missions/#disclaimer"
      >Disclaimer</a
    >
  </div>

  <div class="output">
    <span>Visualisation for {co2kg} kg CO<sub>2</sub> emissions per year</span>
  </div>
</div>

<style>
  .wrap {
    padding: 1rem;
    background: #333;
    border-radius: 5px;

    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    align-items: center;
  }

  @media (min-width: 45rem) {
    .wrap {
      grid-template-columns: 2fr 1fr;
    }

    .input {
      padding: 2rem;
    }
  }

  .output {
    background: #111;
    border-radius: 5px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .disclaimer-link {
    display: block;
    margin-top: 1rem;
    opacity: 0.75;
    font-size: 0.8rem;
  }

  .disclaimer-link:hover {
    opacity: 1;
  }
</style>
