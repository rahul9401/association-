import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
export class getProfileDto{
    @ApiProperty()
    @IsNotEmpty()
    public readonly id: string;
}