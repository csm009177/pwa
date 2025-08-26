import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class FormService {
  private filePath = path.join(__dirname, 'save/messages.json');

  async saveToJson(data: any) {
    let arr: any[] = [];
    const dir = path.dirname(this.filePath);
    try {
      await fs.mkdir(dir, { recursive: true });
    } catch {
      // Ignore directory creation errors
    }
    try {
      const file = await fs.readFile(this.filePath, 'utf-8');
      arr = JSON.parse(file);
      if (!Array.isArray(arr)) arr = [];
    } catch {
      arr = [];
    }
    arr.push(data);
    await fs.writeFile(this.filePath, JSON.stringify(arr, null, 2), 'utf-8');
  }
}
