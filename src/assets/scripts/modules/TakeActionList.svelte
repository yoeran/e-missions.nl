<script>
  import { onMount } from "svelte";
  import { translate } from "./components/utils";

  let todos = [];

  function updateFromLs() {
    todos = Object.entries(localStorage)
      .map(([name, value]) => {
        if (!name.includes("::")) {
          return;
        }

        const [key, label] = name.split("::");

        return {
          name,
          key,
          label,
          checked: value === "1",
        };
      })
      .filter((n) => n);
  }

  function clearAll() {
    todos.forEach((t) => {
      localStorage.removeItem(t.name);
    });
    updateFromLs();
  }

  function updateTodo(name, value) {
    localStorage.setItem(name, value);
    updateFromLs();
  }

  onMount(() => {
    updateFromLs();
  });
</script>

<div class="wrap">
  {#if todos.length === 0}
    <p class="empty">
      {translate("noTodosYet")}
    </p>
  {:else}
    <button class="reset-button" type="button" on:click={() => clearAll()}>
      {translate("startOver")}
    </button>
  {/if}

  {#each todos as todo}
    <label
      class={`ta-todo ta-todo--standalone ${
        todo.checked && "ta-todo--completed"
      }`}
    >
      <svg class="icon-bg" role="img" aria-hidden="true" width="24" height="24">
        <use xlink:href={`#svg-${todo.key}`} />
      </svg>

      <input
        class="ta-todo__input"
        type="checkbox"
        on:change={() => updateTodo(todo.name, todo.checked ? 0 : 1)}
        checked={todo.checked}
      />
      <span class="ta-todo__indicator">&times;</span>

      <span class="ta-todo__label">{todo.label}</span>

      <a href={`${translate("topicsPath")}${todo.key}`}>
        <svg class="icon" role="img" aria-hidden="true" width="24" height="24">
          <use xlink:href={`#svg-${todo.key}`} />
        </svg>
      </a>
    </label>
  {/each}
</div>

<style>
  .wrap {
    position: relative;
  }

  .empty {
    border: 1px solid #333;
    padding: 2rem;
    border-radius: 5px;
    text-align: center;
    font-size: 1.25rem;
  }

  .icon-bg {
    position: absolute;
    top: 50%;
    left: -5%;
    height: 12rem;
    width: 12rem;
    transform: translateY(-50%);
    opacity: 0.1;
    pointer-events: none;
  }

  .icon {
    color: #93dfec;
    width: 4rem;
    height: 4rem;
    margin: -1rem;
  }

  .reset-button {
    position: absolute;
    right: 0;
    top: -1rem;
    transform: translateY(-100%);
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    padding: 0.5rem 2rem;
    background: #222;
    border-radius: 1px;
    border: none;
  }

  .reset-button:hover {
    background: #444;
  }
</style>
