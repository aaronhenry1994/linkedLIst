class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first node
    insertFirst(num) {
        this.head = new Node(num, this.head);
        this.size++;
    };

    // insert last node
    insertLast(num) {
        let current = this.head;
        
        while (current.next != null) {
            current = current.next;
        };
        current.next = new Node(num, null);
        this.size++;
    };

    //Gives first value in list.
    getFirst() {
        console.log(this.head);
        return this.head;
    };

    // Iterating through the list to get to the last entry and returning it

    //Works! Gives the last value in the list.
    getLast() {
        let current = this.head;
        
        while (current.next != null) {
            current = current.next;
        };
        return current;
    }


    //Doesn't work. Needs work.
    getSize() {
        console.log(list.size);
    };

    // insert at index
    insertAt(num, index) {
        
        if (index < 0 || index > this.size - 1) {
            return console.log('Enter a valid index')
        }
        else {
            let node = new Node(num);
            let current, previous;

            current = this.head;

            if (index == 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                current = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    previous = current;
                    current = current.next;
                }

                node.next = current;
                previous.next = node;
            };
        }
        this.size++;
    };

    removeFirst() {
        this.head = this.head.next;
        this.size--;
    };

    removeLast(num) {
        
        let previous, current;

        let max = this.size - 2;

        current = list.getLast();

        previous = list.getAt(max);
        console.log(previous);
        current = previous;
        this.size--;

        current.next = null;

        return current;

    };

    getAt(index) {
        let current = this.head;
        let max = this.size - 1;

        if (index == 0) {
            return list.getFirst();
        };

        if (index > max) {

            return console.log('Enter a smaller value');
        };

        if (index == this.size - 1) {
            return list.getLast();
        } else {
            for(let i = 0; i <= index - 1; i++) {
                console.log('I made it here.')
                current = current.next;
            }
            return current;
        }
    }

    // Remove at index

    removeAt(index) {
        let current = this.head;
        let previous;
        
        if (!this.head) {
            return;
        }
        
        if (index === 0) {
            list.removeFirst();
            return;
        };

        if (index === this.size - 1) {
            list.removeLast();
            return;
        } else {
            current = list.getAt(index);
            console.log(current);
            previous = list.getAt(index - 1);
            console.log(previous);

            previous.next = current.next;

            this.size--;
            return current;
        }
    };

    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    };

    // print list data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.val);
            current = current.next;
        }
    }
};

const list = new LinkedList();

list.insertFirst(2000);
list.insertFirst(4000);
list.insertLast(500);
list.insertAt(45, 2);

console.log(list.removeLast());
console.log(list.getLast());
console.log(list.removeAt(1));

console.log(list);

list.printListData();