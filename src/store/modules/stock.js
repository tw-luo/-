'use strict';
const stock = {
	state: {
		"stockData": [
			{ "stockNum":"01", "stockType":"食材" , "stockName":"鸡" , "Poh":"10" , "unit":"只" , "operatingTime":"2017-08-02" , "operator":"经理"},
			{ "stockNum":"02", "stockType":"食材" , "stockName":"鸭" , "Poh":"20" , "unit":"只" , "operatingTime":"2017-08-03" , "operator":"经理"},
			{ "stockNum":"03","stockType":"食材" ,"stockName":"鱼" , "Poh":"5" , "unit":"条" , "operatingTime":"2017-06-02" , "operator":"经理"},
			{ "stockNum":"04", "stockType":"用具" , "stockName":"桌子" , "Poh":"30" , "unit":"张" , "operatingTime":"2015-08-02" , "operator":"经理"},
			{ "stockNum":"05", "stockType":"用具" , "stockName":"椅子" , "Poh":"180" , "unit":"把" , "operatingTime":"2015-08-02" , "operator":"经理"},
			{ "stockNum":"06" ,"stockType":"食材" , "stockName":"洋葱" , "Poh":"10" , "unit":"斤" , "operatingTime":"2017-07-02" , "operator":"经理"},
			{ "stockNum":"07", "stockType":"食材" , "stockName":"萝卜" , "Poh":"20" , "unit":"斤" , "operatingTime":"2017-07-02" , "operator":"经理"},
			{ "stockNum":"08", "stockType":"生活用品" , "stockName":"洗洁精" , "Poh":"5" , "unit":"瓶" , "operatingTime":"2017-06-02" , "operator":"经理"},
			{ "stockNum":"09", "stockType":"餐具" , "stockName":"碗" , "Poh":"200" , "unit":"个" , "operatingTime":"2015-08-02" , "operator":"经理"},
			{ "stockNum":"10" , "stockType":"餐具" , "stockName":"筷子" , "Poh":"400" , "unit":"根" , "operatingTime":"2015-08-02" , "operator":"经理"}
		]
	},
	mutations: {
      SET_STOCKDATE: (state, newStockData) => {
        state.stockData = newStockData;
        console.log('stock信息为:',state.stockData)
      },
    },
    actions: {
      setStockDate({ dispatch,commit, state},newStockData){
        console.log(newStockData);
        commit('SET_STOCKDATE',newStockData)
      }
    } 
};

export default stock;