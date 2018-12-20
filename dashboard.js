n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
var todayDate = m + "/" + d + "/" + y;
document.getElementById("date").innerHTML = todayDate;
var numtasks = 0;
var task = [];
var todayTask = [];

document.getElementById("tasks").innerHTML = task;
document.getElementById("numtasks").innerHTML = numtasks + " Tasks";

     if (!window.localStorage) {
        Object.defineProperty(window, "localStorage", new (function() {
            var aKeys = [], oStorage = {};
            Object.defineProperty(oStorage, "getItem", {
                value: function(sKey) { return sKey ? this[sKey] : null; },
                writable: false,
                configurable: false,
                enumerable: false
            });
            Object.defineProperty(oStorage, "key", {
                value: function(nKeyId) { return aKeys[nKeyId]; },
                writable: false,
                configurable: false,
                enumerable: false
            });
            Object.defineProperty(oStorage, "setItem", {
                value: function(sKey, sValue) {
                    if (!sKey) { return; }
                    document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
                },
                writable: false,
                configurable: false,
                enumerable: false
            });
            Object.defineProperty(oStorage, "length", {
                get: function() { return aKeys.length; },
                configurable: false,
                enumerable: false
            });
            Object.defineProperty(oStorage, "removeItem", {
                value: function(sKey) {
                    if (!sKey) { return; }
                    document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
                },
                writable: false,
                configurable: false,
                enumerable: false
            });
            this.get = function() {
                var iThisIndx;
                for (var sKey in oStorage) {
                    iThisIndx = aKeys.indexOf(sKey);
                    if (iThisIndx === -1) { oStorage.setItem(sKey, oStorage[sKey]); }
                    else { aKeys.splice(iThisIndx, 1); }
                    delete oStorage[sKey];
                }
                for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) { oStorage.removeItem(aKeys[0]); }
                for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
                    aCouple = aCouples[nIdx].split(/\s*=\s*/);
                    if (aCouple.length > 1) {
                        oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
                        aKeys.push(iKey);
                    }
                }
                return oStorage;
            };
            this.configurable = false;
            this.enumerable = true;
        })());
    }

function addTasks() {
  var title = document.getElementById("addTaskForm").elements[0].value;
  var due = document.getElementById("addTaskForm").elements[1].value;
  var importance = document.getElementById("addTaskForm").elements[2].value;
  var taskInput = "Title: " + title + " Due: " + due + " Importance: " + importance;
  task.push(taskInput);
  numtasks += 1;
  if (due === todayDate) {
    todayTask.push(taskInput);
  }
  document.getElementById("todayTasks").innerHTML = todayTask;
  document.getElementById("tasks").innerHTML = task;
  document.getElementById("numtasks").innerHTML = numtasks + " Tasks";
}

function openForm() {
  document.getElementById("addTask").style.display = "block";
}

function closeForm() {
  document.getElementById("addTask").style.display = "none";
}

if (element.addEventListener) {
    element.addEventListener("submit", function(evt) {
        evt.preventDefault();
        window.history.back();
    }, true);
}
else {
    element.attachEvent('onsubmit', function(evt){
        evt.preventDefault();
        window.history.back();
    });
}
