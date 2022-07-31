import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BlazeCrashService } from './blaze-crash.service';

@Module({
  imports: [HttpModule],
  providers: [BlazeCrashService],
  exports: [BlazeCrashService],
})
export class BlazeCrashModule {}
