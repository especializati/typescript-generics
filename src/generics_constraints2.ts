
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key]
}

let typescriptInfo = {
  name: 'TypeScript',
  skills: ['JS', 'TS'],
  level: 'hard'
}

let typescriptInfo2 = {
  fullName: 'TypeScript',
  skills: ['JS', 'TS'],
  level: 'hard'
}

getProperty(typescriptInfo2, 'fullName')
