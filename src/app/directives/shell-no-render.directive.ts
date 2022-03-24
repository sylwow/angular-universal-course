import { isPlatformServer } from '@angular/common';
import { Directive, Inject, OnInit, PLATFORM_ID, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShellNoRender]'
})
export class ShellNoRenderDirective implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }
}
