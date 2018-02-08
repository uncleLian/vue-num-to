# vue-num-to

> A Vue.js components to dynamic increase or decrease for number

## Install
```
$ npm install vue-num-to
```

## Usage
```javascript
import Vue from 'vue'
import vueNumTo from 'vue-num-to'

Vue.use(vueNumTo)
```

or

```html
<script src="vue.min.js"></script>
<!-- must place this line after vue.js -->
<script src="vue-num-to.min.js"></script>
```

## Screenshot
<img src="https://github.com/uncleLian/vue-num-to/raw/master/screenshots/vue-numTo.jpg" width="900px" style="max-width: 100%;"/>

## Options

Property | Description | Type | Default
|:---:|---|:---:|:---:|
| value | binging value | Number | 0
| startVal | the value you want to begin at | Number | 0
| endVal | the value you want to arrive at | Number | current year
| duration | duration in millisecond | Number | 3000 |
| autoplay | when mounted autoplay | Boolean | true |
| prefix | the prefix | String | '' |
| suffix | the suffix | String | '' |
| separator | the separator | String | , |
| decimals | the number of decimal places to show | Number | 0 |
| decimal | the split decimal | String | . |
| ease | is use easing function | Boolean | true |
| easeMethod | the easing function | Function | — |

### Functions
| Name | Description |
|:---:|:---|
| start | start the vue-num-to |
| pause | pause the vue-num-to |
| resume | resume the vue-num-to |
| reset | reset the vue-num-to |
| pauseResume | resume / resume the vue-num-to |

### Callback
| Name | Description |
|:---:|---|
| complete | when completed will emit 
