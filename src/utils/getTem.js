import download from 'download-git-repo'
import axios from 'axios'
// download(
//   'https://github.com/mdd-xin/vue-suduko.git',
//   'test/tmp',
//   function (err) {
//     console.log(err ? 'Error' : 'Success')
//   }
// )

// axios.get('https://api.github.com/users/mdd-xin/repos').then((res) => {
//   res.data.forEach((item) => {
//     console.log(item.clone_url)
//     if (item.name == 'vue-suduko') {
//       download(
//         'direct:' + item.clone_url,
//         'mddTest',
//         { clone: true },
//         function (err) {
//           console.log(err ? err : 'Success')
//         }
//       )
//     }
//   })
// })

const url = 'direct:https://github.com/mdd-xin/codeTem.git#tem-vue3'
download(url, 'mddTest', { clone: true }, function (err) {
  console.log(err ? err : 'Success')
})
