class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(item) {
        this.items.push(item);
    }

    // Pop an element from the stack
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        } else {
            throw new Error("Stack is empty");
        }
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        } else {
            throw new Error("Stack is empty");
        }
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: 30
console.log("Stack size:", stack.size()); // Output: 3

console.log("Popped element:", stack.pop()); // Output: 30
console.log("Stack size after pop:", stack.size()); // Output: 2
