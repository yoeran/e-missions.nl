<script>
  export let question;
  export let unit;
  export let min;
  export let max;
  export let value;
</script>

<label class="calculator-label" for="num">{question}</label>
<div class="calculator-range">
  <input id="num" type="range" bind:value {min} {max} />
  <span>{value} {value === 1 ? unit[0] : unit[1]}</span>
</div>
