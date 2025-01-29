# click-outside-element-typescript

Execute the function passed as an argument when clicking outside the element.

## install

`npm i click-outside-element-typescript`

## usage

- The function named `addClickOutsideEvent` is called when the instance is mounted on the DOM element. Add an event listener that executes the function passed as the second argument when an element outside the selector element passed as the first argument is clicked.

- The function named `removeClickOutsideEvent` is called when the instance is destroyed. Remove event listener.

### When using with vanilla-ts

```ts
import { addClickOutsideEvent } from 'click-outside-element-typescript'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>ClickOutside DEMO</h1>
    <button id="open-button" type="button">開く</button>
    <div class="card" style="display: none;">
      <h2>CARD</h2>
      <p>This is card.</p>
    </div>
  </div>
`
const openCard = () => {
  const cardEl: HTMLDivElement | null = document.querySelector('.card')
  if (cardEl === null) return
  cardEl.style.display = 'block'
}
const closeCard = () => {
  const cardEl: HTMLDivElement | null = document.querySelector('.card')
  if (cardEl === null) return
  cardEl.style.display = 'none'
}
document.querySelector<HTMLButtonElement>('#open-button')?.addEventListener('click', (event) => {
  openCard()
  // ↓ Prevent further propagation of the event
  event.stopPropagation()
})

addClickOutsideEvent('.card', closeCard)
```

**_DEMO_**

![demo](https://github.com/mogataro/click-outside-element-typescript/blob/master/public/click-outside-vanilla.gif)

### When using with vue

```vue
<script setup lang="ts">
import { addClickOutsideEvent, removeClickOutsideEvent } from 'click-outside-element-typescript'
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'

const shownPop = ref(false)
const openPop = () => (shownPop.value = true)
const closePop = () => (shownPop.value = false)

onBeforeMount(() => addClickOutsideEvent('.pop', closePop))
onBeforeUnmount(() => removeClickOutsideEvent('.pop', closePop))
</script>
<template>
  <!-- ↓ click.stop: Prevent further propagation of the event -->
  <button class="button" type="button" @click.stop="openPop">OPEN</button>
  <div class="pop" v-if="shownPop">This is POP!</div>
</template>
<style scoped>
.button {
  margin-bottom: 20px;
}
.pop {
  width: 200px;
  height: 200px;
  border: 1px solid blue;
  background: skyblue;
}
</style>
```

**_DEMO_**

![demo](https://github.com/mogataro/click-outside-element-typescript/blob/master/public/click-outside.gif)
