# Remove linked list duplicates
(CTCI4 2.1)
Write code to remove duplicates from an unsorted linked list.

# Algorithm

- requires a data structure to hold record of items already seen in list
- use a hash table: {1: true, 5: true, ...}
- traverse the list
- inspect each node data current.data
- if the hash contains the node data, remove the node
- otherwise add current.data to the hash, with value true
- assume there is already a method for removing a node from the list
