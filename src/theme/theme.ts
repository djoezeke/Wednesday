import { join } from 'path'


export class Configuration {
  semanticTokenColors: object
  tokenColors: object
  colors: object

  constructor(configuration: string) {
  }

  async GetSemanticTokenColors() {
    return this.semanticTokenColors;
  }

  async GetTokenColors() {
    return this.tokenColors;
  }

  async GetColors() {
    const result = {
    }
    return result
  }

}

export class Theme {
  name: string = 'Wednesday'
  type: string = 'dark'
  semanticHighlighting = true
  semanticTokenColors
  tokenColors
  colors

  constructor(configuration: Configuration) {
    this.semanticTokenColors = configuration.GetSemanticTokenColors();
    this.tokenColors = configuration.GetTokenColors();
    this.colors = configuration.GetColors();
  }

  static async init(config) {
    const result = {
      ...new Theme(config),
    }
    return result
  }
}
