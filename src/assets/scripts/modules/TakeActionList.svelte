<script>
  // TODO: Add translations
  import { onMount } from "svelte";

  let todos = [];

  function updateFromLs() {
    todos = Object.entries(localStorage).map(([name, value]) => {
      const [key, label] = name.split("::");

      return {
        name,
        key,
        label,
        checked: value === "1",
      };
    });
  }

  function removeTodo(name) {
    localStorage.removeItem(name);
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
    <p>
      You have not saved any todos yet. Visit the topic pages to add some to
      your battleplan!
    </p>
  {/if}

  {#each todos as todo}
    <label class="ta-todo">
      <input
        class="ta-todo__input"
        type="checkbox"
        on:change={() => updateTodo(todo.name, todo.checked ? 0 : 1)}
        checked={todo.checked}
      />
      <span class="ta-todo__label">{todo.label}</span>
      <button
        class="ta-todo__remove"
        type="button"
        on:click={() => removeTodo(todo.name)}
      >
        &times;
      </button>
    </label>
  {/each}
</div>

<style>
  .ta-todo {
    display: flex;
    align-items: center;
    border: 1px solid #333;
    border-radius: 5px;
    padding: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  .ta-todo:hover {
    background: #222;
  }

  .ta-todo__input:checked + .ta-todo__label {
    text-decoration: line-through;
  }

  .ta-todo__label {
    display: inline-block;
    flex: 1;
    margin-left: 1rem;
    font-size: 1.5rem;
  }

  .ta-todo__remove {
    border: none;
    background: none;
    color: #666;
    font-size: 2rem;
    line-height: 1;
    display: block;
  }
</style>
