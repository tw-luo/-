/*
* @Author: Administrator
* @Date:   2017-08-06 11:18:34
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-06 11:22:10
*/

'use strict';


const vip = {
  state: {
	"vipData": [
		{
			"vipID": "1",
			"vipName": "qtSMz",
			"vipPhone": "17436898972",
			"vipJoinDate": "2011510",
			"vipScore": "789",
			"vipGrade": "Gold",
			"vipDiscount": "60%"
		},
		{
			"vipID": "2",
			"vipName": "AXNfL",
			"vipPhone": "09584732925",
			"vipJoinDate": "2013818",
			"vipScore": "796",
			"vipGrade": "Gold",
			"vipDiscount": "60%"
		},
		{
			"vipID": "3",
			"vipName": "Vsrrt",
			"vipPhone": "16764063191",
			"vipJoinDate": "2010118",
			"vipScore": "103",
			"vipGrade": "Brozon",
			"vipDiscount": "80%"
		},
		{
			"vipID": "4",
			"vipName": "PWdry",
			"vipPhone": "46016567107",
			"vipJoinDate": "2016107",
			"vipScore": "693",
			"vipGrade": "Gold",
			"vipDiscount": "60%"
		},
		{
			"vipID": "5",
			"vipName": "JDqsO",
			"vipPhone": "05731534471",
			"vipJoinDate": "2010918",
			"vipScore": "352",
			"vipGrade": "Sliver",
			"vipDiscount": "70%"
		},
		{
			"vipID": "6",
			"vipName": "NMTBl",
			"vipPhone": "33563775203",
			"vipJoinDate": "2017212",
			"vipScore": "724",
			"vipGrade": "Brozon",
			"vipDiscount": "80%"
		},
		{
			"vipID": "7",
			"vipName": "nWjex",
			"vipPhone": "34266953175",
			"vipJoinDate": "2011719",
			"vipScore": "62",
			"vipGrade": "Brozon",
			"vipDiscount": "80%"
		},
		{
			"vipID": "8",
			"vipName": "mhEmr",
			"vipPhone": "13844283378",
			"vipJoinDate": "20181017",
			"vipScore": "661",
			"vipGrade": "Gold",
			"vipDiscount": "60%"
		},
		{
			"vipID": "9",
			"vipName": "GXSfl",
			"vipPhone": "85833681894",
			"vipJoinDate": "2010523",
			"vipScore": "206",
			"vipGrade": "Brozon",
			"vipDiscount": "80%"
		},
		{
			"vipID": "10",
			"vipName": "YiEQx",
			"vipPhone": "87886157557",
			"vipJoinDate": "2011920",
			"vipScore": "111",
			"vipGrade": "Gold",
			"vipDiscount": "60%"
		}
	]
  },
  mutations: {
      SET_VIPDATE: (state, newvipData) => {
        state.vipData = newvipData;
        console.log('vip信息为:',state.vipData)
      },
    },
    actions: {
      setVipDate({ dispatch,commit, state},newvipData){
        console.log('vip数据入参：',newvipData)
        commit('SET_VIPDATE',newvipData)
      }
    } 
};

export default vip;
