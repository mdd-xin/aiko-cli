import { routes } from '@router/index.js';
let takeroutes = routes.slice();
let index = takeroutes.findIndex((el) => el.path == '/');
let targetMenu = takeroutes.splice(index, 1);
targetMenu = targetMenu[0].children.map((menu) => {
  menu.path = '/' + menu.path;
  return menu;
});
const menuList = [...takeroutes, ...targetMenu];

function takemenu(menuList, parentPath) {
  let menu = [];
  menuList.forEach((el) => {
    let menuItem = {};
    if (el.meta) {
      // 根据seq判断该路由是否显示
      if (el.meta.seq) {
        menuItem.index = parentPath ? parentPath + '/' + el.path : el.path;
        menuItem.seq = el.meta.seq;
        menuItem.icon = el.meta.icon;
        menuItem.title = el.meta.title;
        ('');
        if (el.children) {
          menuItem.children = takemenu(el.children, menuItem.index);
        }
        menu.push(menuItem);
      }
    }
  });
  return menu;
}

let result = takemenu(menuList);
result = result.sort((a, b) => a.seq - b.seq);
console.log(result);
export default result;
