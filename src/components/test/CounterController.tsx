/** @jsxImportSource solid-js **/

import "solid-js";
import { useStore } from "@nanostores/solid";
import { counter } from "../../stores/counter";

const CounterController = (prop) => {
  const counterValue = useStore(counter);
  console.log("よっ見込んだ！！");
  counter.set(prop.url);
  return (
    <div>
      <label class="mdc-text-field mdc-text-field--outlined mdc-text-field--invalid">
        <span class="mdc-notched-outline">
          <span class="mdc-notched-outline__leading"></span>
          <span class="mdc-notched-outline__notch">
            <span class="mdc-floating-label" id="my-label-id">
              URL
            </span>
          </span>
          <span class="mdc-notched-outline__trailing"></span>
        </span>
        <input
          type="text"
          class="mdc-text-field__input"
          aria-labelledby="my-label-id"
          value={counterValue()}
          onInput={(event) => counter.set(event.target.value)}
        />
      </label>
      <div class="mdc-text-field-helper-line">
        <div
          class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent"
          id="my-helper-id"
          aria-hidden="true"
        >
          URLの形式が正しくありません。
        </div>
      </div>
    </div>
  );
};

export default CounterController;
