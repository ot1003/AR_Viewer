import type { Component } from "solid-js";
import { createSignal } from "solid-js";

export const SampleCounter: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <button
        class="mdc-button mdc-card__action mdc-card__action--button"
        onClick={() => setCount(count() + 1)}
      >
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">新サイトへ</span>
      </button>
      <p>カウンター：{count()}</p>
    </>
  );
};
