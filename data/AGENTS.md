Padrao de categorias e patterns

Formato (JSON): um array de categorias com este formato

{
  "slug": "criacionais",
  "title": "Criacionais",
  "subtitle": "Como criar objetos de forma flexível",
  "description": "Aprenda formas de instanciar componentes, serviços e estados sem acoplamento desnecessário.",
  "patterns": [
    {
      "slug": "singleton",
      "title": "Singleton",
      "summary": "Garante uma única instância compartilhada para um recurso durante a execução da aplicação.",
      "whatIsIt": "Singleton é um padrão criacional que controla a criação de um objeto para existir somente uma instância por contexto (normalmente por aplicação). Em vez de várias instâncias com configurações duplicadas, você reutiliza sempre a mesma referência.",
      "whenToUse": "Use quando o recurso precisa ser compartilhado e centralizado, como cliente HTTP, logger, analytics ou cache em memória. Também é útil quando a criação é custosa e você quer um ponto único de configuração e acesso.",
      "example": [
        { "type": "text", "content": "Em vez de fazer isso:" },
        { "type": "code", "content": "const api1 = new ApiClient()\nconst api2 = new ApiClient()" },
        { "type": "text", "content": "usamos uma única instância global:" },
        { "type": "code", "content": "const api = ApiClient.getInstance()" },
        { "type": "text", "content": "Assim todo o sistema usa o mesmo objeto." }
      ],
      "code": "class ApiClient {\n  async getUsers() {\n    const res = await fetch(\"/api/users\")\n    return res.json()\n  }\n}\n\nexport const api = new ApiClient()",
      "codeUse": "import { api } from \"./api\"\n\nconst users = await api.getUsers()",
      "extra": [
        { "title": "Onde normalmente usamos o singleton e não percebemos", "type": "code", "content": "export const api = axios.create({\n    baseURL: \"/api\"\n})" }
      ],
      "antiPatterns": "Um anti-pattern comum é transformar o Singleton em estado global para tudo. Isso aumenta acoplamento, dificulta testes e torna efeitos colaterais menos previsíveis. Prefira injeção de dependências quando possível e use Singleton apenas para recursos realmente compartilhados e estáveis."
    }
  ]
}

Salve cada categoria como um objeto em um array - esse arquivo é apenas a especificação.
