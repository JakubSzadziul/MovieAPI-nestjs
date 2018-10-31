import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
  yolo(): string {
    return 'sprawdzam czy docker zresetuje dane po przebudowaniu image';
  }
}
