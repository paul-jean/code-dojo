var ListNode = require('./listnode.js');

var listUtils = {
    /**
     * Append data to the end of the list.
     * @param head {object} - list head
     * @param data {number} - data to add
     * @return {object} - new list
     */
    append: function(head, data) {
        if (!data) return head;
        if (!head) {
            head = new ListNode(data);
            return head;
        }
        var current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = new ListNode(data);
        return head;
    },

    /**
     * Append an array of values to the end of the list.
     * @param {object} head - list head
     * @param {array} dataArray - array of values to add
     * @return {object} - new list head
     */
    appendArray: function(head, dataArray) {
        if (!dataArray) return head;
        var current = head;
        while (current.next) {
            current = current.next;
        }
        for (d of dataArray) {
            var node = new ListNode(d);
            current.next = node;
            current = current.next;
        }
        return head;
    },

    /**
     * Return an array containing the data on the list nodes.
     * @param {object} head - list head
     * @return {array} - array of values from list node data
     */
    toArray: function(head) {
        var listArray = [];
        var current = head;
        if (current) listArray.push(current.data);
        while (current.next) {
            listArray.push(current.next.data);
            current = current.next;
        }
        return listArray;
    },

    /**
     * Returns true if the list contains the given data.
     * @param {object} head - list head
     * @param {number} data - data to find
     * @return {boolean} - true if the list contains the given data
     */
    hasNode: function(head, data) {
        var current = head;
        // {c} -> ...
        if (current.data === data) return true;
        // ... -> {c} -> {c.n} -> ...
        while (current.next) {
            if (current.next.data === data) return true;
            current = current.next;
        }
        // ... -> {c} -> ||
        return false;
    },

    /**
     * Return a string representing the list.
     * @param {object} head - list head
     * @return {string} - string representing the list
     */
    toString: function(head) {
        var nodeData = [];
        var current = head;
        if (!current) return '';
        // {c} -> ...
        nodeData.push(current.data);
        // ... -> {c} -> {c.n} -> ...
        while (current.next) {
            if (current.next.data)
                nodeData.push(current.next.data);
            else nodeData.push('null');
            current = current.next;
        }
        return nodeData.join(' -> ');
    },

    /**
     * Delete the node with the given data.
     * @param {object} head - list head
     * @param {number} data - data for the node to be deleted
     * @return {object} - new list head
     *
     */
    deleteNode: function(head, data) {
        if (!data) return head;
        // {}
        if (!head) return;
        // remove the head node
        // {c} -> {c.n} -> ...
        //  x
        //        {c.n} -> ...
        if (head.data === data) {
            // return rest of list
            return head.next;
        }
        var current = head;
        // ... -> {c} -> {c.n} -> {c.n.n} -> ...
        //                 x
        // ... -> {c} ----------> {c.n.n} -> ...
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return head;
            }
            current = current.next;
        }
        // .. -> {c} -> ||
        return head;
    }

 }

module.exports = listUtils;
