import download from 'download-git-repo'
import axios from 'axios'
// download(
//   'https://github.com/mdd-xin/vue-suduko.git',
//   'test/tmp',
//   function (err) {
//     console.log(err ? 'Error' : 'Success')
//   }
// )

axios.get('https://api.github.com/users/mdd-xin/repos').then((res) => {
  res.data.forEach((item) => {
    // console.log(item.name)
    if (item.name == 'vue-suduko') {
      download(
        'direct:' + 'https://github.com/mdd-xin/codeTem/vue_2.0',
        'mddTest',
        { clone: true },
        function (err) {
          console.log(err ? 'Error' : 'Success')
          //
        }
      )
    }
  })
})
