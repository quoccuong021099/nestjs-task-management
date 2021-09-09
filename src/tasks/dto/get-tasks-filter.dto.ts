import { IsOptional, IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus; // ? :có hoặc k

  @IsOptional()
  @IsString()
  search?: string; // ? :có hoặc k
}
