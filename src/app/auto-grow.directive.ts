import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
	selector: '[autoGrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}
})
export class AutoGrowDirective {
	constructor(private el:ElementRef, private renderer:Renderer){
	}
	onFocus(){
		this.renderer.setElementStyle(this.el, 'width', '300');
	}
	onBlur() {
		this.renderer.setElementStyle(this.el, 'width', '100');
	}
}