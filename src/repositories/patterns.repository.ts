import fs from 'fs/promises';
import path from 'path';
import { Pattern } from '../models/pattern.model';

interface IPatternsRepository {
  findAll(): Promise<Pattern[]>;
  findById(idOrSlug: string): Promise<Pattern | null>;
  // search(query: string): Promise<Pattern[]>;
}


export class PatternsRepository implements IPatternsRepository {
  private filePath: string;

  constructor(filePath?: string) {
    this.filePath = filePath || path.resolve(process.cwd(), 'data', 'design-patterns.json');
  }

  async load(): Promise<Pattern[]> {
    const raw = await fs.readFile(this.filePath, 'utf8');
    const data = JSON.parse(raw) as Pattern[];
    return data;
  }

  async findAll(): Promise<Pattern[]> {
    return this.load();
  }

  async findById(idOrSlug: string): Promise<Pattern | null> {
    const items = await this.load();
    const found = items.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
    return found || null;
  }

  // async search(query: string): Promise<Pattern[]> {
  //   const q = query.toLowerCase();
  //   const items = await this.load();
  //   return items.filter(
  //     (p) =>
  //       p.title.toLowerCase().includes(q) || "",
  //       p.description.toLowerCase().includes(q) || ""
  //       p.tags.some((t) => t.toLowerCase().includes(q)) || ""
  //   );
  // }
}
