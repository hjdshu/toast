## install
yarn add git+ssh://git@github.com:hjdshu/toast.git

## use

### import use
``` javascript
  import toast from 'toast'
  toast({
    time: 2000,
    position: 'middle', // middle top bottom
    str: 'hello world!',
    // if u want set a ico in toast, u can set img url
    // ico size: 20px * 20px
    // ico: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1675546601,1215879641&fm=26&gp=0.jpg' 
  })
```

### script use
``` html
  <script src="./dist/index.js"></script>
  <script>
    toast({
      time: 2000,
      position: 'middle', // middle top bottom
      str: 'hello world!',
      // if u want set a ico in toast, u can set img url
      // ico size: 20px * 20px
      // ico: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1675546601,1215879641&fm=26&gp=0.jpg' 
    })
  </script>
```

## Browser Support

Chrome |	Firefox	| Safari | Opera |	Edge |	IE
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 10 ✔ |