(this.webpackJsonpapplication=this.webpackJsonpapplication||[]).push([[0],[,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c);a(9),a(10),a(11);var i=function(e){var t=e.handleChange;return l.a.createElement("div",{className:"section2"},l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,"Spotings Appointment Sheduler")),l.a.createElement("div",{className:"tracker"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"time"},l.a.createElement("h2",null,"select date for appointment"),l.a.createElement("div",{className:"start"},l.a.createElement("div",{className:"flex"},l.a.createElement("span",null,"from"),l.a.createElement("input",{type:"date",name:"fromDate"})),l.a.createElement("div",{className:"flex"},l.a.createElement("span",null,"time"),l.a.createElement("input",{type:"time",name:"timeFrom",id:""}))),l.a.createElement("div",{className:"to"},l.a.createElement("div",{className:"flex"},l.a.createElement("span",null,"to"),l.a.createElement("input",{type:"date",name:"fromDate"})),l.a.createElement("div",{className:"flex"},l.a.createElement("span",null,"time"),l.a.createElement("input",{type:"time",name:"timeTo",id:""})))),l.a.createElement("div",{className:"descreption"},l.a.createElement("input",{type:"text",placeholder:"description"})),l.a.createElement("div",{className:"pageChange"},l.a.createElement("button",{onClick:function(){return t("prev")}},"previous"),l.a.createElement("button",{onClick:function(){return t("next")}},"next")))};var m=function(e){var t=e.handleChange;return l.a.createElement("div",{className:"section3"},l.a.createElement("div",{className:"header"},l.a.createElement("h2",null,"Spotings Appointment Sheduler")),l.a.createElement("div",{className:"tracker"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"confirm"},l.a.createElement("h2",null,"confirm your appointment"),l.a.createElement("p",null,"From :"),l.a.createElement("p",null,"To :"),l.a.createElement("p",null,"Description :")),l.a.createElement("div",{className:"pageChange"},l.a.createElement("button",{onClick:function(){return t("prev")}},"Cancel"),l.a.createElement("button",{onClick:function(){return t("next")}},"Confirm")))};a(12).config();var o=window.gapi,s=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],u=function(){o.load("client:auth2",(function(){console.log("loaded client"),o.client.init({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/my-sheduler",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_KEY,clientId:Object({NODE_ENV:"production",PUBLIC_URL:"/my-sheduler",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).CLIENT_ID,discoveryDocs:s,scope:"https://www.googleapis.com/auth/calendar.events"}),o.client.load("calendar","v3",(function(){return console.log("bam!")})),o.auth2.getAuthInstance().signIn().then((function(){o.client.calendar.events.insert({calendarId:"primary",resource:{summary:"Awesome Event!",location:"800 Howard St., San Francisco, CA 94103",description:"Really great refreshments",start:{dateTime:"2021-01-30T09:00:00-07:00",timeZone:"America/Los_Angeles"},end:{dateTime:"2021-01-31T17:00:00-07:00",timeZone:"America/Los_Angeles"},recurrence:["RRULE:FREQ=DAILY;COUNT=2"],attendees:[{email:"lpage@example.com"},{email:"sbrin@example.com"}],reminders:{useDefault:!1,overrides:[{method:"email",minutes:1440},{method:"popup",minutes:10}]}}}).execute((function(e){console.log(e),window.open(e.htmlLink)}))}))}))},d=function(e){};var p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("button",{onClick:u},"click"),l.a.createElement(i,{handleChange:d}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m,{handleChange:d}))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.0a1c7aad.chunk.js.map