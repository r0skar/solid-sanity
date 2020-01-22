import { createSignal, createEffect } from 'solid-js'

// eslint-disable-next-line @typescript-eslint/no-use-before-define
export type Module = ReturnType<typeof createModule>

export enum Status {
  IDLE = 'IDLE',
  BUSY = 'BUSY'
}

export const createModule = () => {
  const [status, setStatus] = createSignal(Status.IDLE)

  createEffect(() => {
    if (status() === Status.BUSY) {
      console.log('show progress')
    } else {
      console.log('hide progress')
    }
  })

  return {
    status,
    setStatus
  }
}
