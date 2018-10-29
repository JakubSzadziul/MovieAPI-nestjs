import { Get, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
const fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, 'temp/jakub1.txt');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
  @Get('yolo')
  yolo(): string {
    return this.appService.yolo();
  }
  @Get('filetest')
  getFileContents() {
    return 'Zawartosc pliku: ' + fs.readFileSync(filePath, {encoding: 'utf-8'});
  }
  @Get('files')
    getFiles() {
      // const dirPath = path.join(__dirname, '/temp');
      // console.log(process.cwd());
      return 'Zawartosc folderu to: ' + fs.readdirSync('src/temp');
  }
}
