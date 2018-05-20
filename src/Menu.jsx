import {h} from 'ink'
import SelectInput from 'ink-select-input'
import opn from 'opn'

export default () => {
  const items = [
    {
      label: 'Website',
      url: 'https://s4kr4.com/',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/s4kr4/',
    },
    {
      label: 'Qiita',
      url: 'https://qiita.com/s4kr4/',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/s4kr4m4',
    },
    {
      label: 'Hatenablog',
      url: 'https://s4kr4.hatenablog.com/',
    },
  ]

  const handleSelect = (item) => {
    opn(item.url, {wait: false})
  }

  return pug`
    SelectInput(items=items onSelect=handleSelect)
  `
}
