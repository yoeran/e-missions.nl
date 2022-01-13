<script>
  export let question;
  export let unit;
  export let min;
  export let max;
  export let value;
  export let name;

  import { format, translate } from "./utils";
</script>

<label class="calculator-label" for={name}>{question}</label>
<div class="calculator-range">
  <input id={name} type="range" bind:value {min} {max} />
  <span
    >{format(value)}
    {translate(value === 1 ? unit[0] : unit[1]).toLowerCase()}</span
  >
</div>
