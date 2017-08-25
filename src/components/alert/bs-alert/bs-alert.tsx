import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'bs-alert'
})
export class BsAlert {

  @State() hidden: boolean = false;

  @Prop() color: string;

  @Prop() dismissable: boolean = false;


  render() {
    let classes = {
      alert: true
    };
    if (this.color) {
      classes['alert-' + this.color] = true;
    }
    if (this.dismissable) {
      classes['alert-dismissible'] = classes['show'] = classes['fade'] = true;
    }
    console.log(classes);

    return (
      !this.hidden && <div class={classes} role="alert">
        {this.dismissable && <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>}
        <slot />
      </div>
    )
  }
}