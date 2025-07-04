class Employee {
    constructor(name, id, salary) {
      this.name = name;
      this.id = id;
      this.salary = salary;
    }
    calculate_bonus() {
      return this.salary * 0.10;
    }
  }
  class Manager extends Employee {
    calculate_bonus() {
      return this.salary * 0.20;
    }
  }
  class Developer extends Employee {
    calculate_bonus() {
      return this.salary * 0.15;
    }
  }
  const emp1 = new Employee("Alice", 101, 50000);
  const emp2 = new Manager("Bob", 102, 70000);
  const emp3 = new Developer("Charlie", 103, 60000);
  const employees = [emp1, emp2, emp3];
  employees.forEach(emp => {
    console.log(`${emp.name} (ID: ${emp.id}) Bonus: $${emp.calculate_bonus()}`);
  });
  