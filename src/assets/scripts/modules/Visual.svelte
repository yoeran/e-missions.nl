<script>
  import ParkView from "./views/ParkView.svelte";

  let trees = 1;
  let incrementing = true;

  function tick() {
    if (trees <= 1) {
      incrementing = true;
    } else if (trees >= 20) {
      incrementing = false;
    }

    if (incrementing) {
      trees += 1;
    } else {
      trees -= 1;
    }

    setTimeout(() => {
      tick();
    }, 1000 + Math.round(Math.random() * 1400));
  }

  tick();
</script>

<ParkView {trees} />
