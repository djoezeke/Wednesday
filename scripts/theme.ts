import { Theme, Configuration } from '../src/theme/theme';

/**
 * Generate theme objects from configurations
 * @returns Object containing base and pro theme objects
 */
export async function generate(): Promise<{
  base: ReturnType<Theme['toJSON']>;
  pro: ReturnType<Theme['toJSON']>;
}> {
  // Dynamic require for configurations to support hot reload
  delete require.cache[require.resolve('../src/theme/base')];
  delete require.cache[require.resolve('../src/theme/pro')];

  const baseConfig = require('../src/theme/base') as Configuration;
  const proConfig = require('../src/theme/pro') as Configuration;

  // Create themes from configurations
  const baseTheme = Theme.fromConfiguration(baseConfig);
  const proTheme = Theme.fromConfiguration(proConfig);

  // Return JSON representations
  return {
    base: baseTheme.toJSON(),
    pro: proTheme.toJSON(),
  };
}
