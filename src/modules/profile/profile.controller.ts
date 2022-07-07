import { Body, Controller, Get, Post } from '@nestjs/common';
import { detailsDto } from './dto/details.dto';
import { getProfileDto } from './dto/getdetails.dto';
import { ProfileService } from './profile.service';

@Controller('register')
export class ProfileController {
  constructor(private profileservice: ProfileService){}

    @Post()
    async profileRegister(@Body() requestDto: detailsDto):Promise<any>{
        return await this.profileservice.profileRegister(requestDto);
    }

    @Get()
    async getDetails(@Body() profileId:getProfileDto):Promise<any>{
        return await this.profileservice.getDetails(profileId);
    }
} 