// simpleOwnProject.js

class SimpleOwnProject {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = [];
    }

    // Method to get the current state
    getState() {
        return this.state;
    }

    // Method to update the state and notify listeners
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.listeners.forEach((listener) => listener(this.state));
    }

    // Method to listen for state changes
    subscribe(listener) {
        this.listeners.push(listener);
        // Provide a way to unsubscribe
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }
}

// Export the class so it can be used by other modules
export default SimpleOwnProject;
