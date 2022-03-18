import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfter]'
})
export class HideAfterDirective implements OnInit {
  // we can also pass data from component to directive by using input property

  // @Input() appHideAfter = 0
  @Input('appHideAfter') delay = 0
  @Input('appHideAfterLater') elseBlock: TemplateRef<any> | null = null;

  // we have used then in component's HTML but we can also use any word but remember you have to take it Input property like with That name
  // appHideAfter + name(should be in camelCase) which you have given in html
  //viewContainerRef ref to container where we are going to render the temple and also the reference to the template
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) { }


  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.elseBlock) {
        this.viewContainerRef.createEmbeddedView(this.elseBlock);
      }
    }, this.delay)
  }
}

