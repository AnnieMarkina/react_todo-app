(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{11:function(e,t,l){e.exports=l(18)},16:function(e,t,l){},17:function(e,t,l){},18:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n),o=l(10),c=l.n(o),i=(l(16),l(17),l(7)),r=l(8),d=l(2),s=l(3),m=l(5),u=l(4),p=l(6),h=l(1),f=l.n(h),C=function(e){var t=e.todo,l=e.deleteTodo,n=e.isCompleted,o=f()("",{completed:t.completed});return a.a.createElement("li",{className:o},a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",id:t.id,onClick:function(){return n(t.id)},checked:t.completed,onChange:function(e){}}),a.a.createElement("label",{htmlFor:t.id},t.text),a.a.createElement("button",{onClick:function(){return l(t.id)},type:"button",className:"destroy"})),a.a.createElement("input",{type:"text",className:"edit"}))},g=function(e){var t=e.todos,l=e.deleteTodo,n=e.isCompleted;return a.a.createElement("ul",{className:"todo-list"},t.map((function(e){return a.a.createElement(C,{key:e.id,todo:e,isCompleted:function(){return n(e.id)},deleteTodo:function(){return l(e.id)}})})))},v=function(e){var t=e.todos,l=e.toggleAllCompleted,n=t.every((function(e){return!0===e.completed}));return a.a.createElement("div",null,a.a.createElement("input",{onClick:l,type:"checkbox",id:"toggle-all",className:"toggle-all",checked:n&&t.length>0,onChange:function(e){}}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"))},A=function(e){var t=e.todos,l=e.toggleAllCompleted,n=e.isCompleted,o=e.deleteTodo;return a.a.createElement("section",{className:"main"},t.length>0&&a.a.createElement(v,{todos:t,toggleAllCompleted:l}),a.a.createElement(g,{todos:t,isCompleted:n,deleteTodo:o}))},E=function(e){var t=e.todos,l=e.deleteAllCompleted,n=e.showActive,o=e.isAll,c=e.isActive,i=e.isCompleted,r=e.showCompleted,d=e.showAll,s=t.some((function(e){return!0===e.completed})),m=t.filter((function(e){return!e.completed})).length,u=f()("",{selected:o}),p=f()("",{selected:c}),h=f()("",{selected:i});return a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},m," ","items left"),a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{onClick:d,href:"#/",className:u},"All")),a.a.createElement("li",null,a.a.createElement("a",{onClick:n,href:"#/active",className:p},"Active")),a.a.createElement("li",null,a.a.createElement("a",{onClick:r,href:"#/completed",className:h},"Completed"))),s&&a.a.createElement("button",{onClick:l,type:"button",className:"clear-completed"},"Clear completed"))},b=function(e){function t(){var e,l;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(l=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={input:""},l.handleAddInputValue=function(e){var t=l.state.input;"Enter"===e.key&&t&&(e.preventDefault(),l.props.addTodo(t),l.setState({input:""}))},l.handleInputChange=function(e){var t=e.target.value;l.setState({input:t.trim()})},l}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.input;return a.a.createElement(a.a.Fragment,null,a.a.createElement("form",null,a.a.createElement("input",{onKeyPress:this.handleAddInputValue,onChange:this.handleInputChange,value:e,type:"text",className:"new-todo",placeholder:"What needs to be done?"})))}}]),t}(a.a.Component),N=function(e){function t(){var e,l;Object(d.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(l=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],allCompleted:!1,isAll:!0,isActive:!1,isCompleted:!1},l.handleAddTodo=function(e){l.setState((function(t){var n=l.state.todos;return n.push({id:0===n.length?"todo-".concat(0):"todo-".concat(n.length),text:e,completed:!1}),n}))},l.handleToggleCompletion=function(e){var t=l.state.todos,n=t.map((function(e){return e.id})).indexOf(e);l.setState((function(e){return t[n].completed=!t[n].completed,t}))},l.handleDeleteBtn=function(e){var t=l.state.todos;l.setState({todos:t.filter((function(t){return t.id!==e}))})},l.handleAllCompleted=function(){var e=l.state,t=e.todos;e.allCompleted?function(){var e=t.map((function(e){return!0===e.completed?Object(r.a)({},e,{completed:!1}):e}));l.setState({todos:Object(i.a)(e),allCompleted:!1})}():function(){var e=t.map((function(e){return!1===e.completed?Object(r.a)({},e,{completed:!0}):e}));l.setState({todos:Object(i.a)(e),allCompleted:!0})}()},l.handleDeleteAllCompleted=function(){var e=l.state.todos;l.setState({todos:e.filter((function(e){return!1===e.completed}))})},l.handleActiveFiltering=function(){l.setState({isAll:!1,isActive:!0,isCompleted:!1})},l.handleCompletedFiltering=function(){l.setState({isAll:!1,isActive:!1,isCompleted:!0})},l.handleAllFiltering=function(){l.setState({isAll:!0,isActive:!1,isCompleted:!1})},l}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,l=t.todos,n=t.isAll,o=t.isActive,c=t.isCompleted,r=Object(i.a)(l);return n||!o||c||(r=l.filter((function(e){return!1===e.completed}))),n||o||!c||(r=l.filter((function(e){return!0===e.completed}))),a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"todoapp"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(b,{addTodo:this.handleAddTodo})),a.a.createElement(A,{toggleAllCompleted:function(){return e.handleAllCompleted()},todos:r,isCompleted:this.handleToggleCompletion,deleteTodo:this.handleDeleteBtn}),l.length>0&&a.a.createElement(E,{todos:l,isAll:n,isActive:o,isCompleted:c,deleteAllCompleted:this.handleDeleteAllCompleted,showAll:this.handleAllFiltering,showActive:this.handleActiveFiltering,showCompleted:this.handleCompletedFiltering})))}}]),t}(a.a.Component),k=function(){return a.a.createElement("section",{className:"todoapp"},a.a.createElement(N,null))};c.a.render(a.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.49d39d80.chunk.js.map