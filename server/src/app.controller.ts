import { Controller, Post, Query } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Post("classifyDss")
	classifyDss(@Query("img_url") image_url: string) {
		return this.appService.ClassifyDisease(image_url);
	}
}
