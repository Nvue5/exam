import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  single: [{
      "title": "关于容器下面说法正确的是？ ( )",
      "ans": [{
          "A": "列表(List)和集合(Set)存放的元素都是可重复的。"
        },
        {
          "B": "列表(List)和集合(Set)存放的元素都是不可重复的。"
        },
        {
          "C": "映射(Map)<key,value>中key是可以重复的。"
        },
        {
          "D": "映射(Map)<key,value>中value是可以重复的。"
        }
      ],
      "right": "D"
    },
    {
      "title": "对于Java中异常的描述正确的是（ ）",
      "ans": [{
          "A": "用throws定义了方法可能抛出的异常，那么调用此方法时一定会抛出此异常。"
        },
        {
          "B": "如果try块中没有抛出异常，finally块中的语句将不会被执行。"
        },
        {
          "C": "抛出异常意味着程序发生运行时错误，需要调试修改。"
        },
        {
          "D": "Java中的可不检测（unchecked）异常可能来自RuntimeException类或其子类。"
        }
      ],
      "right": "D"
    },
    {
      "title": "在Java中，以下关于方法重载和方法重写描述正确的是？",
      "ans": [{
          "A": "方法重载和方法的重写实现的功能相同。"
        },
        {
          "B": "方法重载出现在父子关系中，方法重写是在同一类中。"
        },
        {
          "C": "方法重载的返回值类型必须一致，参数项必须不同。"
        },
        {
          "D": "方法重写的返回值类型必须相同或相容。（或是其子类）"
        }
      ],
      "right": "D"
    },
    {
      "title": "socket编程中，以下哪个socket的操作是不属于服务端操作的（）？",
      "ans": [{
          "A": "accept"
        },
        {
          "B": "listen"
        },
        {
          "C": "connect"
        },
        {
          "D": "close"
        }
      ],
      "right": "C"
    },
    {
      "title": "在Java中，下列对继承的说法，正确的是（ ）",
      "ans": [{
          "A": "子类能继承父类的所有成员。"
        },
        {
          "B": "子类继承父类的非私有方法和状态。"
        },
        {
          "C": "子类只能继承父类的public方法和状态。"
        },
        {
          "D": "子类只能继承父类的方法。"
        }
      ],
      "right": "A"
    }
  ],
  multipart: [{
      "title": "下面正确声明一个一维数组的是（ ）。",
      "ans": [{
          "A": "String [] a"
        },
        {
          "B": "String a[]"
        },
        {
          "C": "char a[][]"
        },
        {
          "D": "String a[10]"
        }
      ],
      "right": ["A", "B"]
    },
    {
      "title": "下面关于Java语言中实例方法和类方法的说法，哪几项是对的？（  ）",
      "ans": [{
          "A": "实例方法可以直接通过类名调用。"
        },
        {
          "B": "类方法可以直接通过类名调用。"
        },
        {
          "C": "实例方法可以操作实例变量也可以操作类变量。"
        },
        {
          "D": "类方法可以操作实例变量也可以操作类变量。"
        }
      ],
      "right": ["B", "C"]
    },
    {
      "title": "在Java中，关于final关键字的说法正确的是（  ）",
      "ans": [{
          "A": "如果修饰变量，则一旦赋了值，就等同一个常量。"
        },
        {
          "B": "如果修饰类，则该类只能被一个子类继承。"
        },
        {
          "C": "如果修饰方法，则该方法不能在子类中被覆盖。"
        },
        {
          "D": "如果修饰方法，则该方法所在的类不能被继承。"
        }
      ],
      "right": ["A", "C"]
    }
  ],
  alltotal: [],
}

const mutations = {
  PUSHALL(state, cl) {
    state.alltotal.push(cl);
  }
}

const actions = {
  addCl({
    commit
  }, i) {
    commit('PUSHALL', i);
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {}
})