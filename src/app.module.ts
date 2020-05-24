import { Module } from '@nestjs/common';
import { NestNextModule } from 'nest-next-module';
// import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PollsModule } from './polls/polls.module';
import { DbModule } from '@libs/db';
import { EventsModule } from './events/events.module';
import { CommonModule } from '@libs/common';
import { AuthModule } from './auth/auth.module';
// import { GraphqlOptions } from './glaphql/glaphql.options';

@Module({
  imports: [
    DbModule,
    CommonModule,
    PollsModule,
    EventsModule,
    AuthModule,
    NestNextModule.forRoot({ dev: true,  dir: './ui'}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
