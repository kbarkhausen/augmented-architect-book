// Notify when Claude finishes
console.log(JSON.stringify({
  command: `osascript -e 'display notification "Claude finished" with title "Task Complete"'`
}));