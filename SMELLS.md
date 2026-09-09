## 1. God Object, src/todo.js

**Where:** src/todo.js, lines 2-121 (TodoManager)
**Smell:** TodoManager does too many things.
**Cost:** changes can affect other parts.
**Not yet fixing:** Week 3.

## 2. Duplicated Code, src/todo.js

**Where:** src/todo.js, lines 62-78 (renderPendingRows and renderCompletedRows)
**Smell:** two methods use almost the same code.
**Cost:** we may need to change both later.
**Not yet fixing:** Week 3.

## 3. Long Parameter List, src/todo.js

**Where:** src/todo.js, line 124 (buildTaskRow)
**Smell:** buildTaskRow has six parameters.
**Cost:** changes to task data may require changing this function.
**Not yet fixing:** Week 3.