import { Component, Prop, PropDidChange, State } from '@stencil/core';

import { isColor } from '../../../util/util';

@Component({
  tag: 'bs-badge'
})
export class BsBadge {

  @Prop() color: string;

  @Prop() href: string;

  @Prop() pill: boolean;

  render() {
    let styles = {};
    let classes = {};
    if (this.color) {
      classes['badge-' + this.color] = true;
    }
    if (!this.href) {
      return (
        <span class={{ "badge": true, 'pill': this.pill, ...classes }} style={styles}>
          <slot />
        </span>
      )
    } else {
      return (
        <a href={this.href} class={{ "badge": true, 'pill': this.pill, ...classes }} style={styles}>
          <slot />
        </a>
      )
    }
  }
}