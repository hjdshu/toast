
const isObject = value => {
  return typeof value === 'object' && !!value
}

const isString = value => {
  return Object.prototype.toString.call(value) === '[object String]'
}

const extend = (target, ...args) => {
  for (let obj of args) {
    for (let name in obj) {
      target[name] = obj[name]
    }
  }
  return target
}

const trim = str => {
  return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

const showToastObj = {
  _is_load: false,
  showAlertMsgBox (params) {
    if (!this._is_load) {
      let styleArr = []
      styleArr.push('zIndex:9999999999')
      styleArr.push('padding:12px')
      styleArr.push('minWidth:200px')
      styleArr.push('borderRadius:5px')
      styleArr.push('lineHeight:1.2')
      styleArr.push('fontSize:14px')
      styleArr.push('color:#FFF')
      styleArr.push('boxSizing:border-box')
      styleArr.push('backgroundColor:rgba(0, 0, 0, 0.6)')
      styleArr.push('position:fixed')
      styleArr.push('left:50%')
      styleArr.push('transform:translateX(-50%)')
      styleArr.push('display: flex')
      styleArr.push('justify-content: center')
      styleArr.push('align-items: center')

      let temp = document.createDocumentFragment()
      this.oDiv = document.createElement('div')
      this.oDiv.className = 'show-toast'
      for (let i = 0, l = styleArr.length; i < l; i++) {
        let key = trim(styleArr[i].split(':')[0])
        let value = trim(styleArr[i].split(':')[1])
        this.oDiv.style[key] = value
      }
      temp.appendChild(this.oDiv)
      document.body.appendChild(temp)

      this._is_load = true
      this.doEvent(params)
    } else {
      this.doEvent(params)
    }
  },
  doEvent (params) {
    if (this.timer) {
      clearTimeout(this.timer)
    }

    this.timer = setTimeout(() => {
      this.oDiv.style.display = 'none'
      clearTimeout(this.timer)
      this.timer = null
    }, params.time)

    // setting show-toast content
    this.oDiv.style.display = 'flex'
    this.oDiv.style.borderRadius = '1px'
    this.oDiv.innerHTML = params.str
    if (params.ico) {
      this.oDiv.style.borderRadius = '25px'
      var theImg = document.createElement('img')
      theImg.style.margin = '0 8px 0 0'
      theImg.style.width = '20px'
      theImg.style.height = '20px'
      theImg.src = params.ico
      this.oDiv.insertBefore(theImg, this.oDiv.childNodes[0])
    }
    // setting show-toast position
    if (params.position === 'top') {
      this.oDiv.style.top = '10px'
      this.oDiv.style.bottom = 'auto'
      this.oDiv.style.transform = 'translate(-50%, 0)'
    } else if (params.position === 'bottom') {
      this.oDiv.style.bottom = '20px'
      this.oDiv.style.top = 'auto'
      this.oDiv.style.transform = 'translate(-50%, 0)'
    } else {
      this.oDiv.style.top = '50%'
      this.oDiv.style.bottom = 'auto'
      this.oDiv.style.transform = 'translate(-50%, -50%)'
    }
  }
}

module.exports = function (value) {
  let obj = {}
  if (!isObject(value)) {
    if (isString(value)) {
      obj = {
        str: value
      }
    } else {
      throw new TypeError('Expected an object or a String')
    }
  } else {
    obj = value
  }
  const target = {
    str: 'success',
    time: 2000,
    position: 'middle'
  }

  obj = extend(target, obj)

  showToastObj.showAlertMsgBox(obj)
}
