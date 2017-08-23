import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bs-badge',
  styleUrl: 'bs-badge.scss'
})
export class BsBadge {

  @Prop() color?: string;

  @Prop() href?: string;

  @Prop() pill?: boolean;

  render() {
    let styles = {};
    if (this.color) {
      styles = {
        'background-color': this.color
      }
    }
    if (this.href) {
      return (
        <span class="badge" style={styles}></span>
      )
    } else {
      return (
        <span class="badge" style={styles}>
          <a href={this.href}>

          </a>
        </span>
      )
    }
  }
}