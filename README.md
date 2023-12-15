[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12187826&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

# My Analysis
Unfortunately I was never able to make my implementation in-place so I'll just do my analysis 
for the iterative version I have. Since the first thing my implementation does is map all elements
of the array the runtime is already at $n$. I also have a while loop that runs while the array length
is greater than 1, and since the array length is halved at the end of each iteration the while loop should
run $n/2$ times. But for every iteration of the while loop the merge function is called and this function
also runs $n/2$ times, thus the theoretical runtime of my implementation is $n + (n/2)*(n/2)$ or $n + n^2/4$
which gives us $\Theta(n^2)$
