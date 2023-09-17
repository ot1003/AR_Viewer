/** @jsxImportSource solid-js **/

import type { Component, ParentProps } from "solid-js";
import { createSignal } from "solid-js";
import {useStore} from '@nanostores/solid';
import {qrcodeURI,counter} from '../../../stores/qrcodeTS';
export const SampleCounter: Component<ParentProps<{
  url: string | any;
}>> = (props) => {
  const qrcodeURIValue = useStore(qrcodeURI);
  const counterValue = useStore(counter);
  qrcodeURI.set(props.url)
  return (
    <>
    <div>
    {`${qrcodeURIValue()}`}
    <button class="mdc-icon-button">
  <div class="mdc-icon-button__ripple"></div>
  <span class="mdc-icon-button__focus-ring"></span>
  <i class="material-icons-outlined">edit</i>
</button></div>
      <label class="mdc-text-field mdc-text-field--outlined">
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
          type="url"
          class="mdc-text-field__input"
          aria-labelledby="my-label-id"
          value={qrcodeURIValue()}
          onInput={(event) => qrcodeURI.set(event.target.value)}
        />
      </label>
      <button
               onClick={() => {
                   counter.set(counterValue() + 1);
               }}
           >
               +
           </button>
           <button
               onClick={() => {
                   counter.set(counterValue() - 1);
               }}
           >
               -
           </button>
    </>
  );
};
