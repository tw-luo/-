/*
* @Author: admin
* @Date:   2017-08-04 10:26:18
* @Last Modified by:   lenovo
* @Last Modified time: 2017-08-05 14:13:17
*/

'use strict';

const person = {
  state: {
    personInfo:{
      username:"admin",
      trueName:"蔡徐坤",
      sex:"man",
      job:"店长",
      email:"sample@qq.com",
      introduction:'我叫蔡徐坤,我的爱好是唱、跳、rap、篮球。'
    }
  },

  mutations: {
      //提交用户信息方法，state是当前vuex实例下user的state，
      //newUserInfo是触发SET_USERINFO方法时的入参
      SET_PERSONINFO: (state, newPersonInfo) => {
        state.personInfo = newPersonInfo;
        console.log('个人新信息为:',state.personInfo)
      },
    },
    //Action 通过 store.dispatch 方法触发
    actions: {
      //newUserInfo为自己的传参
      setPersonInfo({ dispatch,commit, state},newPersonInfo){
        console.log('个人信息入参：',newPersonInfo)
        commit('SET_PERSONINFO',newPersonInfo)
      }
    } 
};

export default person;