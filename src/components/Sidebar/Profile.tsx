import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/gabrielgyns.png"
        alt="Gabriel's Profile Photo"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Gabriel Soares
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          gabrielgyns@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
