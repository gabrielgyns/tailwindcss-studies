'use client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'
import Image from 'next/image'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0]) // GSS: Generate an URL from the selected file
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    )
  }

  return (
    <Image
      src={previewURL}
      width={64}
      height={64}
      alt="Preview of the selected image"
      className="h-16 w-16 rounded-full object-cover"
    />
  )
}
