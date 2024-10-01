export class University {
  name: string;
  country: string;
  alpha_two_code: string;
  domains: string[];
  web_pages: string[];

  constructor() {
    this.name = '';
    this.country = '';
    this.alpha_two_code = '';
    this.domains = [];
    this.web_pages = [];
  }
}
