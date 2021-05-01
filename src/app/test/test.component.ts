import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

	random: number = Number.parseInt((Math.random() * 1000000).toFixed(0));
	show: boolean = true;
	inputOne: string = '';
	constructor() { }

	ngOnInit(): void {
	}

	generate(): void {
		this.random = Number.parseInt((Math.random() * 1000000).toFixed(0));
		this.show = !this.show;
	}

	addInput(event: any) {
		console.log(event)
		this.inputOne = event.target.value;
	}
}
