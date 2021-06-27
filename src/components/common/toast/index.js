// // import Toast from './Toast.vue'
// // const obj = {};

// // obj.install = function(Vue) {
// //     // 1.创建组件构造器
// //     const toastContrustor = Vue.extend(+Toast)
// //     // 2.new的方式，根据组件构造器，可以创建出来一个组件对象
// //     const toast = new toastContrustor()
// //     // 3.将组件对象，手动挂载到某一元素上(这里是div)
// //     toast.$mount(document.createElement('div'))
// //     // 4.tosat.$el对应的就是div
// //     document.body.appendChild(toast.$el)

// //     Vue.prototype.$tosat = toast;
// // }

// // export default obj;

// import { createApp, h, nextTick,reactive } from 'vue'
// const toastVM = createApp({
//     setup() {
//       return () =>
//         h(
//           'div',
//           {
//             class: [
//               'lx-toast',
//             ],
//             style: {
//               display: state.show ? 'block' : 'none',
//               background: "#000",
//               color: "#fff",
//               width: '100px',
//               position: "fixed",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               padding: "8px 10px",
//             }
//           },
//           state.text
//         );
//     }
//   });

//   const state = reactive({
//     show: false, // toast元素是否显示
//     text: ''
//   });

//   const toastWrapper = document.createElement('div');
//   toastWrapper.id = 'lx-toast';
//   document.body.appendChild(toastWrapper);
//   toastVM.mount('#lx-toast');

//   export  function useToast() {
//     return function Toast(msg) {
//       console.log(msg)
//       // 拿到传来的数据
//       state.show = true
//       state.text = msg
//       setTimeout(() => {
//         state.show = false
//       }, 1000);
//     }
//   }