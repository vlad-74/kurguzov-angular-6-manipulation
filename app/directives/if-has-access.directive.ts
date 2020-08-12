import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { IfHasAccessService } from '../services/if-has-access.service';

@Directive({ selector: '[ifHasAccess]' })
export class IfHasAccessDirective {
  logicalQu = 'AND';
  isHidden = true;
  permissions = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private ifHasAccessService: IfHasAccessService
    ){ }

  @Input()
  set ifHasAccess(val) {
    this.permissions = val;
    this.updateView();
  }

  @Input()
  set ifHasAccessQu(permop) {
    this.logicalQu = permop;
    this.updateView();
  }

  private updateView() {
    if (this.checkPermission()) {
      if (this.isHidden) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.isHidden = true;
      this.viewContainer.clear();
    }
  }

  private checkPermission() {
    let hasPermission = false;
      if (this.logicalQu === 'OR') {
        hasPermission = this.ifHasAccessService.hasAccessAny(this.permissions);
      } else {
        hasPermission = this.ifHasAccessService.hasAccess(this.permissions);
      }

    return hasPermission;
  }
}