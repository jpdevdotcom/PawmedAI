import { Controller, Get, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get("/")
	helloWorld() {
		return this.appService.helloWorld();
	}

	@Post("classifyDss")
	classifyDss(@Query("img_url") image_url: string) {
		return this.appService.ClassifyDisease(image_url);
	}
}
