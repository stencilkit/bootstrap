import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bs-alert-link'
})
export class BsAlertLink {

  @Prop() href: string;

  render() {
    return (
      <a href={this.href} class="alert-link">
        <slot />
      </a>
    )
  }
}