import { observable, action } from 'mobx'

class Store {
  @observable num = 1
  @action.bound
  add() {
    this.num++
  }
  @action.bound
  reset() {
    this.num = 1
  }
}

export default new Store()