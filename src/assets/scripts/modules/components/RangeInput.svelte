<script>
  export let question;
  export let unit;
  export let min;
  export let max;
  export let value;

  import { format } from "./utils";
</script>

<label class="calculator-label" for="num">{question}</label>
<div class="calculator-range">
  <input id="num" type="range" bind:value {min} {max} />
  <span>{format(value)} {value === 1 ? unit[0] : unit[1]}</span>
</div>
