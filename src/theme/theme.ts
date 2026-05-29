export interface IThemeConfig {
  name?: string;
  type?: 'light' | 'dark';
  colors?: Record<string, string>;
  tokenColors?: ITokenColorRule[];
  semanticTokenColors?: Record<string, string | Record<string, string>>;
  semanticHighlighting?: boolean;
}

export interface ITokenColorRule {
  name?: string;
  scope: string | string[];
  settings: {
    foreground?: string;
    background?: string;
    fontStyle?: string;
  };
}

/**
 * Configuration class manages theme properties and can be applied to a Theme object.
 * Used to configure and update theme settings.
 */
export class Configuration implements IThemeConfig {
  name: string = 'Wednesday';
  type: 'light' | 'dark' = 'dark';
  colors: Record<string, string> = {};
  tokenColors: ITokenColorRule[] = [];
  semanticTokenColors: Record<string, string | Record<string, string>> = {};
  semanticHighlighting: boolean = true;

  constructor(config?: Partial<IThemeConfig>) {
    if (config) {
      Object.assign(this, config);
    }
  }

  /**
   * Get all semantic token colors
   */
  getSemanticTokenColors(): Record<string, string | Record<string, string>> {
    return this.semanticTokenColors;
  }

  /**
   * Get all token colors
   */
  getTokenColors(): ITokenColorRule[] {
    return this.tokenColors;
  }

  /**
   * Get all colors
   */
  getColors(): Record<string, string> {
    return this.colors;
  }

  /**
   * Update configuration properties
   */
  update(config: Partial<IThemeConfig>): void {
    Object.assign(this, config);
  }
}

/**
 * Theme class represents a complete VSCode theme object.
 * Can be initialized from a Configuration object and exported to VSCode JSON format.
 */
export class Theme implements IThemeConfig {
  name: string = 'Wednesday';
  type: 'light' | 'dark' = 'dark';
  colors: Record<string, string> = {};
  tokenColors: ITokenColorRule[] = [];
  semanticTokenColors: Record<string, string | Record<string, string>> = {};
  semanticHighlighting: boolean = true;

  constructor(config?: Configuration | Partial<IThemeConfig>) {
    if (config instanceof Configuration) {
      this.applyConfiguration(config);
    } else if (config) {
      Object.assign(this, config);
    }
  }

  /**
   * Apply a Configuration object to update this theme
   */
  applyConfiguration(config: Configuration): void {
    this.name = config.name;
    this.type = config.type;
    this.colors = { ...config.colors };
    this.tokenColors = [...config.tokenColors];
    this.semanticTokenColors = { ...config.semanticTokenColors };
    this.semanticHighlighting = config.semanticHighlighting;
  }

  /**
   * Convert theme to VSCode JSON format
   */
  toJSON(): IThemeConfig {
    return {
      name: this.name,
      type: this.type,
      colors: this.colors,
      tokenColors: this.tokenColors,
      semanticTokenColors: this.semanticTokenColors,
      semanticHighlighting: this.semanticHighlighting,
    };
  }

  /**
   * Create a Theme from a Configuration
   */
  static fromConfiguration(config: Configuration): Theme {
    return new Theme(config);
  }

  /**
   * Create a Theme from a plain object
   */
  static create(config?: Partial<IThemeConfig>): Theme {
    return new Theme(config);
  }
}
