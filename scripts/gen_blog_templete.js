import { writeFile } from 'node:fs'
import { intro, outro, spinner, text } from '@clack/prompts'

intro('generate post markdown templete.')

const title = await text({
  message: 'What is the Title?',
  placeholder: 'I Got This',
  initialValue: '',
  validate(value) {
    if (value.length === 0) return `Title is required!`
  },
})

const snippet = await text({
  message: 'What is the snippet?',
  placeholder: 'description',
  initialValue: '',
  validate(value) {
    if (value.length === 0) return `snippet is required!`
  },
})

const published_at = () => {
  const date = new Date()
  const options = { timeZone: 'Asia/Tokyo', hour12: false }

  const localISOTime = new Date(date.toLocaleString(options)).toISOString()
  return localISOTime
}

const template = `---
title: ${title}
published_at: ${published_at()}
snippet: ${snippet}
---
`

const filename = ((title) => {
  const words = title.split(' ')
  if (words.length === 1 && Array.isArray(words)) return words[0]
  return words.join('-')
})(title)
console.log(filename)
const filePath = `./posts/${filename.replace(/[^\w |?!]/g, '')}.md`

const s = spinner()
s.start('processing...')
await writeFile(filePath, template, (err) => {
  if (err) {
    console.error(err)
  }
})
s.stop('processing...')

outro(`posts/${filename}.md generated!✅`)
