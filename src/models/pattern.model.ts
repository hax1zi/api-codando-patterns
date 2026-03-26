export type Pattern = {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  description?: string;
  whatIsIt?: string;
  whenToUse?: string;
  example?: Array<{ type: string; content: string }>;
  code?: string;
  codeUse?: string;
  extra?: Array<{ title?: string; type?: string; content: string }>;
  antiPatterns?: string;
  categorySlug?: string;
  categoryTitle?: string;
};

export type Category = {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  patterns: Array<{
    slug: string;
    title: string;
    summary?: string;
    whatIsIt?: string;
    whenToUse?: string;
    example?: Array<{ type: string; content: string }>;
    code?: string;
    codeUse?: string;
    extra?: Array<{ title?: string; type?: string; content: string }>;
    antiPatterns?: string;
  }>;
};
