<script>
  // {prodName: "Musik Streaming", icon: "music_video", type: "service", amount: "", bgcolor: "#7E415F", useHours: "", useYears: "", usePower: "0.5", sbPower: "", co2manuf: "", serviceUsed: "5", serviceUnit: "Stunden pro Tag", energyIntensity: "0.62", energyIntUnit: "Wh/h", formulaEnUse:  "(serviceUsed*energyIntensity)*0.365"},

  import { createEventDispatcher, onMount } from "svelte";

  let serviceUsed = 5;
  const energyIntensity = 0.62;

  const dispatch = createEventDispatcher();

  export function setAmount() {
    dispatch("value", serviceUsed * energyIntensity * 0.365);
  }

  onMount(() => {
    setAmount();
  });
</script>

<div>
  <label for="num">How many hours do you stream audio per day?</label>
  <input
    id="num"
    type="number"
    bind:value={serviceUsed}
    on:change={setAmount}
    min="0"
    max="24"
  />
</div>

<style>
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input {
    border: 1px solid #000;
    background: #222;
    padding: 0.5rem 1rem;
    min-width: 10rem;
  }
</style>
