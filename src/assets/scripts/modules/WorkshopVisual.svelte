<script>
  import ParkView from "./views/ParkView.svelte";

  export let type;

  let trees = type === "before" ? 38 : 12;
</script>

<div class="wrap">
  <h6 class="heading heading--normal">
    {type === "before" ? "Baseline" : "Target"}
  </h6>
  <ParkView {trees} />
</div>

<style>
  .wrap {
    position: relative;
  }

  .heading {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
</style>
