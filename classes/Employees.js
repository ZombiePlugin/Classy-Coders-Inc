class Employees {
  #salary;
  #isHired = true;
  #allEmployees = [];
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    this.#allEmployees.push(this);
  }
  getSalary() {
    return this.#salary;
  }
  setSalary(amount) {
    this.#salary = amount;
  }
  getStatus() {
    return this.#isHired;
  }
  setStatus(command) {
    if (command === "fire") {
      this.#isHired = false;
    } else {
      this.#isHired = true;
    }
  }
  static getEmployees() {
    return this.allEmployees;
  }
  static getTotalPayroll() {
    let sum = 0;
    for (let i = 0; i < this.allEmployees.length; i++) {
      sum += this.allEmployees[i].salary;
    }
    return sum;
  }
}

module.exports = {
  Employees,
};
