<script>
  export let question;
  export let min;
  export let max;
  export let value;
  export let name;
</script>

<label class="calculator-label" for={name}>{question}</label>
<input
  class="calculator-input"
  id={name}
  type="number"
  bind:value
  {min}
  {max}
/>
