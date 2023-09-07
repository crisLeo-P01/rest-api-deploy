// como leer un archivo en node con type: module
import e from 'express'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)
