# vue-tag-input
タグなどを入力するための input 要素。

## Installation
node で 追加してください。

### NPM

#### npm
`npm install https://github.com/shimoning/vue-tag-input`

#### yarn
`yarn add https://github.com/shimoning/vue-tag-input`

### Load
Vue の設定等をしているファイルなどで以下のように記述すると使えるようになります。

```js
import VueTagInput from '@shimoning/vue-tag-input'
Vue.use(VueTagInput)
```

## Usage
### Tag
`<tag-input></tag-input>`

### Arguments
- name: フィールド名 (デフォルトは tags)
- value: 初期値
- separator: value を tag に分解するセパレータ (デフォルトは半角スペース)

### For example
* タグの初期値
  1. aaa
  2. あああ
  3. AAA
* セパレータが `,`
`<tag-input value="aaa,あああ,AAA" separator=","></tag-input>`
