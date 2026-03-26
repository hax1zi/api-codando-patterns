import { Pattern } from '../models/pattern.model';

interface IPatternsRepository {
  findAll(): Promise<Pattern[]>;
  findById(idOrSlug: string): Promise<Pattern | null>;
  // search(query: string): Promise<Pattern[]>;
}

export class PatternsService {
  private repo: IPatternsRepository;

  constructor(repo: IPatternsRepository) {
    this.repo = repo;
  }

  async list(page = 1, limit = 10): Promise<{ data: Pattern[]; total: number }> {
    const all = await this.repo.findAll();
    const total = all.length;
    const start = (page - 1) * limit;
    const data = all.slice(start, start + limit);
    return { data, total };
  }

  async getById(idOrSlug: string): Promise<Pattern | null> {
    return this.repo.findById(idOrSlug);
  }

  // async search(q: string): Promise<Pattern[]> {
  //   if (!q) return [];
  //   return this.repo.search(q);
  // }
}
