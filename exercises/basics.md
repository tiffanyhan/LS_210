# 1.

backslash is used to escape the newline character at the end of each line
but on the second to last line, several spaces occur between the backslash
and the newline character.  so the newline character is not escaped which
leads to an error.

source: https://google.github.io/styleguide/javascriptguide.xml?showone=Multiline_string_literals#Multiline_string_literals

# 2.

line 7: logs 'Hello'
line 11: nothing
line 15: logs 'World'
line 19: logs '!'

# 3.

path 1: condition1
path 2: condition1 + condition2
path 3: not-condition1
path 4: not-condition1 + condition4
path 5: not-condition1 + condition4 + condition5

# 4.

logs 'Alice Bob'
logs 'Bob Bob'