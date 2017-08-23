import { Component, Prop, PropDidChange, State } from '@stencil/core';

import { isColor } from '../../util/util';

@Component({
  tag: 'bs-button'
})
export class BsButton {

  @State() themeColor: boolean = false;

  @Prop() color: string;

  @Prop() href: string;

  @Prop() size: string = 'md';

  @Prop() type?: string;
  @Prop() value?: string;

  @Prop() outline: boolean = false;

  @Prop() block: boolean = false;
  @Prop() active: boolean = false;
  @Prop() disabled: boolean = false;

  render() {
    let classes = {};
    if (this.color && this.outline) {
      classes['btn-outline-' + this.color] = true;
    } else {
      if (this.color) {
        classes['btn-' + this.color] = true;
      }
    }
    if (this.size) {
      classes['btn-' + this.size] = true;
    }
    classes['btn-block'] = this.block;
    classes['active'] = this.active;
    classes['disabled'] = this.disabled;
    if (!this.href && !this.type) {
      return (
        <button class={{ "btn": true, ...classes }} disabled={this.disabled}>
          <slot />
        </button>
      )
    } else if (this.type) {
      return (
        <input class={{ "btn": true, ...classes }} type={this.type} value={this.value} disabled={this.disabled} />
      )
    } else {
      return (
        <a class={{ "btn": true, ...classes }} href={this.href}>
          <slot />
        </a>
      )
    }
  }
}