import { Component } from '@stencil/core';

@Component({
  tag: 'bs-alert-heading'
})
export class BsAlertHeading {
  render() {
    return (
      <h4 class="alert-heading">
        <slot />
      </h4>
    )
  }
}