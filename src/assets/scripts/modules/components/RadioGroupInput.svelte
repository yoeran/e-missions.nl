<script>
  import { translate } from "../components/utils";
  export let question;
  export let options;
  export let value;
  export let name;
</script>

<p class="calculator-label" for={name}>{question}</p>
{#each options as opt}
  <label class="radio-label">
    <input {name} type="radio" value={opt} bind:group={value} />
    &nbsp;{translate(opt)}
  </label>
{/each}
