(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),c=a(3),u=a(4),i=a(7),d=a(6),s=function(e){var t=e.title,a=e.children;return r.a.createElement("section",null,r.a.createElement("h2",null,t),a)},b=function(e){var t=e.handleChange;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",name:"good",id:"good",onClick:t},"Good"),r.a.createElement("button",{type:"button",name:"neutral",id:"neutral",onClick:t},"Neutral"),r.a.createElement("button",{type:"button",name:"bad",id:"bad",onClick:t},"Bad"))},m=function(e){var t=e.message;return r.a.createElement("p",null,t)},g=function(e){var t=e.good,a=e.neutral,n=e.bad,l=e.total,o=e.positive;return r.a.createElement(r.a.Fragment,null,l<1?r.a.createElement(m,{message:"No feedback given"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Statistics"),r.a.createElement("div",null,r.a.createElement("p",null,"Good: ",t," "),r.a.createElement("p",null,"Neutral: ",a),r.a.createElement("p",null,"Bad: ",n),r.a.createElement("p",null,"Total: ",l),r.a.createElement("p",null,"Positive feedback: ",o,"%")))," ")},f=a(5),h=a.n(f),E=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleChange=function(t){var a=t.target.name;"good"!==a?"neutral"!==a?"bad"!==a||e.setState((function(e){return{bad:e.bad+1}})):e.setState((function(e){return{neutral:e.neutral+1}})):e.setState((function(e){return{good:e.good+1}}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return e.state.good/e.countTotalFeedback()*100},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,l=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return r.a.createElement(r.a.Fragment,null," ",r.a.createElement(s,{title:"Please leave feedback",className:h.a.section_feedback},r.a.createElement(b,{handleChange:this.handleChange}),r.a.createElement(g,{good:t,neutral:a,bad:n,total:l,positive:o})))}}]),a}(n.Component);o.a.render(r.a.createElement(E,null),document.querySelector("#root"))},5:function(e,t,a){e.exports={section_feedback:"styles_section_feedback__1U8oT"}},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.02add295.chunk.js.map