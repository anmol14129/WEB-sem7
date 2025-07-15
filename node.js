node js------>>>> javascript runtime environment,open source ,single threades asynchronous driven architecture based
node js works in a single process without creating a new thread for new process
javascript jo chlri h singke threaded chlri h and handling asynchronous task aur block bhi nhi hone de rhi h 
example--humne 4 settimeout bnaye aur ye apne apne timeout pe chl rhe h to single thread ka kya mtlb h 
ek call stack hota h aur ek callback queue hoti h jismein do chizzein hote h macro,micro(setsettlement,setTimeout) tasking,
ek memory heap hoti h aur ek event loop hota h ,micro ye priority jada hoti h (promise,async,fetch)
