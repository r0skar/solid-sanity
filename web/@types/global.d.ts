declare module '!!raw-loader*' {
  const payload: string
  export default payload
}

declare module '*.module.css' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.module.scss' {
  const classes: Record<string, string>
  export default classes
}

declare module '*.module.less' {
  const classes: Record<string, string>
  export default classes
}
