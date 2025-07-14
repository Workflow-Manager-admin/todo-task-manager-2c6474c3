#!/bin/bash
cd /home/kavia/workspace/code-generation/todo-task-manager-2c6474c3/todo_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

