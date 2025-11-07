import { join } from 'path'
import { promises as fs } from 'fs'

export function generate(path: string, data: unknown): Promise<void> {
  const theme = {
    async default() {
      // require at runtime so TypeScript doesn't include files under ../src in the compilation root
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Theme = require('../src/theme/theme') as any
      return await Theme.init(null)
    },

  }
  return fs.writeFile(path, JSON.stringify(theme, null, 2))
}
