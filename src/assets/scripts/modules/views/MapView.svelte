<script>
  export let trees;
  export let multiplier;

  const amsterdamKm2 = 240;

  $: amsterdams =
    Math.round(((trees * multiplier) / 100000 / amsterdamKm2) * 100) / 100;
</script>

<p class="todo">MapView (how many Amsterdams)</p>
<div class="calculator-visual">
  <div class="mapview">
    {amsterdams}x Amsterdam
  </div>
</div>
