import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  status?: TaskStatus; // ? :có hoặc k
  search?: string; // ? :có hoặc k
}
