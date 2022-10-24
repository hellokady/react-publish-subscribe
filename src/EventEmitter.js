export class EventEmitter {
    constructor() {
      this.eventMap = {};
    }

    // 订阅、注册
    on(type, handler) {

      if (!(handler instanceof Function)) {
        throw new Error('handler must be a function');
      }

      if (!this.eventMap[type]) {
       this.eventMap[type] = [];
      }
      
      this.eventMap[type].push(handler);
    }

    // 发布、触发
    emit(type, params) {
      if(this.eventMap[type]) {
        this.eventMap[type].forEach((handler) => handler(params));
      }
    }

    // 卸载、取消订阅
    off(type, handler) {
      if (this.eventMap[type]) {
        this.eventMap[type].splice(this.eventMap[type].indexOf(cb => cb === handler), 1);
      }
    }
}
